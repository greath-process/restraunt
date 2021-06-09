<?require_once($_SERVER['DOCUMENT_ROOT'].'/bitrix/modules/main/include/prolog_before.php');

global $USER, $APPLICATION;

use Bitrix\Main\Application,
	Bitrix\Main\Type\DateTime,
	Bitrix\Main\Loader,
	Bitrix\Main\Context,
    Bitrix\Currency\CurrencyManager,
    Bitrix\Sale\Order,
    Bitrix\Sale\Basket,
	Bitrix\Sale\BasketItem,
	Bitrix\Sale\Internals,
    Bitrix\Sale\PaySystem,
	Bitrix\Sale\DiscountCouponsManager;

Bitrix\Main\Loader::includeModule("sale");
Bitrix\Main\Loader::includeModule("iblock");
Bitrix\Main\Loader::includeModule("catalog");

$request = Application::getInstance()->getContext()->getRequest();

$orderId = $request->getPost('orderId'); // цифры
$basketItemId = $request->getPost('basketItemId'); // ид товаров в заказе, если скидка применяется не ко всем в заказе, через запятую 100,101,102
$type = $request->getPost('type'); // discount / tips / service
$percent = $request->getPost('percent'); // цифры
$summ = $request->getPost('summ'); // цифры
$coupon = $request->getPost('coupon'); // код купона - если отменяется скидка (если будет такой функционал)

if(!empty($coupon)) // если прилетает номер купона - отменяем его (если будет такой функционал)
{
	$order = Order::load($orderId);
	DiscountCouponsManager::init( // инициализация менеджера купонов для заказа
		DiscountCouponsManager::MODE_ORDER, [
			"userId" => $order->getUserId(),
			"orderId" => $order->getId()
		]
	);
	DiscountCouponsManager::clearApplyCoupon($coupon); // отмена применения скидки
	DiscountCouponsManager::delete($coupon); // удаление купона
	$discounts = $order->getDiscount(); // получение объекта скидок заказа
	$discounts->setOrderRefresh(true); // обновление заказа
	$discounts->setApplyResult(array()); // применение изменений
	$basket = $order->getBasket();
	$basket->refreshData(array('PRICE', 'COUPONS')); // обновляем список купонов
	$discounts->setUseMode(1);
	$discounts->calculate(); // перерасчёт стоимости заказа
	$order->save(); // сохранение изменений заказа
	$arResponse['coupon']['canceled'] = $coupon;
}
else // создаём "правило работы с корзиной" и генерируем купон для "прилетевших" условий (скидка/наценка)
{
	if(!empty($basketItemId)) $basketItemIds = explode(",",$basketItemId); // делаем из строки '100,101,102' массив с ИД
	if(empty($basketItemId) && !empty($orderId)) // если не указаны отдельные товары - то скидка на все товары в заказе
	{
		$basketItemIds = [];
		$order = Order::load($orderId);
		$basket = Order::load($orderId)->getBasket();
		$basketItems = $basket->getBasketItems();
		foreach ($basket as $basketItem) 
		{
			$basketItemIds[] = $basketItem->getField('PRODUCT_ID');
		}
	}

	if((!empty($orderId) || !empty($basketItemId)) && !empty($type) && (!empty($percent) || !empty($summ)))
	{
		$txt = (empty($percent)) ? '$' : '%';
		$Type = (mb_strtolower($type) == 'discount') ? 'Discount' : 'Extra'; // Discount - скидка; Extra - наценка;
		$Unit = (empty($percent)) ? 'CurEach' : 'Perc'; //Perc - процент; CurEach - для каждого товара; CurAll - для всех в корзине
		$discountValue = (empty($percent)) ? $summ : $percent; // число процента/суммы скидки/наценки

		$arDiscountFields = [
		   "LID" => SITE_ID,
		   "SITE_ID" => SITE_ID,
		   "NAME"=> $discountValue.$txt.' '.$type.' '.date("d.m.y"), // название скидки
		   "DISCOUNT_VALUE" => $discountValue,
		   "DISCOUNT_TYPE" => "P",
		   "LAST_LEVEL_DISCOUNT" => "Y",
		   "LAST_DISCOUNT" => "Y",
		   "ACTIVE" => "Y",
		   "CURRENCY" => "EUR",
		   "USER_GROUPS" => [2],
		   'ACTIONS' => [
			  "CLASS_ID" => "CondGroup",
			  "DATA" => [
				 "All" => "AND"
			  ],
			  "CHILDREN" => [
				 [
					"CLASS_ID" => "ActSaleBsktGrp",
					"DATA" => [
					   "Type" => $Type,
					   "Value" => $discountValue,
					   "Unit" => $Unit,
					   "Max" => 0,
					   "All" => "OR",
					   "True" => "True",
					],
					"CHILDREN" => [
					   [
						  "CLASS_ID" => "ActSaleSubGrp",
						  "DATA" => [
							 "All" => "AND",
							 "True" => "True",
						  ],
						  "CHILDREN" => [
							 [
								"CLASS_ID" => "CondIBElement",
								"DATA" => [
								   "logic" => "Equal",
								   "value" => $basketItemIds,
								]
							 ]
						  ]
					   ]
					]
				 ]
			  ]
		   ],
		   "CONDITIONS" =>  [
			  'CLASS_ID' => 'CondGroup',
			  'DATA' => [
				 'All' => 'AND',
				 'True' => 'True',
			  ],
			  'CHILDREN' => [
				 [
					"CLASS_ID" => "CondBsktProductGroup",
					"DATA" => [
					   "Found" => "Found",
					   "All" => "OR",
					],
					"CHILDREN" => [
					   [
						  "CLASS_ID" => "CondIBElement",
						  "DATA" => [
							 "logic" => "Equal",
							 "value" => $basketItemIds,
						  ]
					   ]
					]
				 ],
			  ],  
		   ]
		];
		$discountID = \CSaleDiscount::Add($arDiscountFields);
		if(IntVal($discountID) > 0)  // добавление нового правило скидок
		{
			$codeCoupon = CatalogGenerateCoupon(); // генерируем новый код купона
		
			$couponFields = array(
							"DISCOUNT_ID" => $discountID, // ID правила скидок
							"COUPON" => $codeCoupon,
							"ACTIVE" => "Y",
							"TYPE" => 2,
							"MAX_USE" => 0
						);
		
			$addCouponRes = Internals\DiscountCouponTable::add($couponFields); // добавляем новый купон
			if (!$addCouponRes->isSuccess())
				$arResponse['error']['coupon'] = $addCouponRes->getErrorMessages();
			else
			{
				DiscountCouponsManager::init( // инициализация менеджера купонов для заказа
					DiscountCouponsManager::MODE_ORDER, [
						"userId" => $order->getUserId(),
						"orderId" => $order->getId()
					]
				);
				
				DiscountCouponsManager::add($codeCoupon); // применение скидки
				$discounts = $order->getDiscount(); // получение объекта скидок заказа
				$discounts->calculate(); // перерасчёт стоимости заказа
				$discountResult = $discounts->getApplyResult(); // применение к заказу
				$order->doFinalAction(true); // обновление самого заказа
				$order->save(); // сохранение изменений заказа

				$arResponse['success'] = 'Y';
				$arResponse['data']['coupon'] = $codeCoupon; // отправляем купон, т.к. его номер понадобится чтобы если нужно - отменить его (строки 30-45)
			}
		}
		else
		{
			$ex = $APPLICATION->GetException();  
			$arResponse['error']['discount'] = $ex->GetString();
		}
	}
}

echo json_encode($arResponse);