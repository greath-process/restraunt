<?
require_once($_SERVER['DOCUMENT_ROOT'].'/bitrix/modules/main/include/prolog_before.php');

use Bitrix\Main\Application,
	Bitrix\Main\Type\DateTime,
	Bitrix\Main\Loader,
	Bitrix\Main\Context,
    Bitrix\Currency\CurrencyManager,
    Bitrix\Sale\Order,
    Bitrix\Sale\Basket,
    Bitrix\Sale\BasketItem,
    Bitrix\Sale\PaySystem;

Bitrix\Main\Loader::includeModule("sale");
Bitrix\Main\Loader::includeModule("iblock");
Bitrix\Main\Loader::includeModule("catalog");

global $USER;
$request = Application::getInstance()->getContext()->getRequest();
// принимаем значения заказа и новое значение
$orderId = $request->getPost('orderId');
$basketItemId = $request->getPost('basketItemId');
$state = $request->getPost('state');
// формируем ответы
$arResponse = [];
$arResponse['STATUS'] = 'error';
$arResponse['ready'] = false;
$arResponse['ORDER'] = []; // массив где возвращаются данные для карточки заказа на фронт
$now = date('H:i:s');
// если всё есть - разбираем заказ
if(!empty($orderId) && !empty($basketItemId) && !empty($state))
{
	$order = Order::load($orderId);
	$USER_ID = $order->getUserId();
	$rUser = CUser::GetByID($USER_ID);
	$aUser = $rUser->Fetch();
	$arResponse['ORDER']['waiter'] = $aUser['NAME'].' '.$aUser['LAST_NAME'][0].'.';
	$arResponse['ORDER']['orderId'] = $orderId;
	$arResponse['ORDER']['basketItemId'] = $basketItemId;
	$arResponse['ORDER']['chef'] = true; // роль пользователя (шеф-повар, обычный повар)
	$current = 0; // время в секундах для прогрессбара
	// разбираем корзину заказа
	$basket = Order::load($orderId)->getBasket();
	$basketItems = $basket->getBasketItems();
	foreach ($basket as $basketItem) 
	{
		// прописываем элементы в ответ
		$arResponse['order']['code'] = $basketItem->getField('NAME');
		$item_id = $basketItem->getField('ID');
		if($item_id == $basketItemId)
		{
			// и если это наше блюдо
			$arResponse['ORDER']['orderTitle'] = $basketItem->getField('NAME');
			$basketPropertyCollection = $basketItem->getPropertyCollection();
			// пересохраняем значения свойств
			foreach ($basketPropertyCollection as $propertyItem) 
			{
				$NAME = $propertyItem->getField('NAME');
				$CODE = $propertyItem->getField('CODE');
				$VALUE = $propertyItem->getField('VALUE');
				$SORT = $propertyItem->getField('SORT');
				// записываем наше новое свойство у блюда
				if ($CODE == 'state')
				{
					$VALUE = $state;
					$arResponse['STATUS'] = 'success';
					$arResponse['state'] = $VALUE;
				} 
				// и также добавляем время завершения, если это последний статус
				if ($CODE == 'time_end' && $state == 'ready')
					$VALUE = $now;

				$properties[$CODE] = array(
					'NAME' => $NAME,
					'CODE' => $CODE,
					'VALUE' => $VALUE,
					'SORT' => $SORT
				);
				// также записываем для ответа данные
				switch ($CODE)
				{
					case "tags":
						// парсим теги
						$tagsParsed = attributeToArray($VALUE);
						$arTags = [];
						foreach ($tagsParsed as $tag) {
							if (intVal($tag['active']) === 1) {
								$arTags[] = $tag['title'];
							}
						}
						$arResponse['ORDER']['tags'] = $arTags;
						break;
					case "code":		$arResponse['ORDER']['orderCode'] = $VALUE;	break; 
					case "tableId":		$arResponse['ORDER']['tableCode'] = $VALUE;	break;
					case "time_start":  $arResponse['ORDER']['timeStarting'] = $VALUE; break;
					case "time": 		$arResponse['ORDER']['timeLimit'] = preg_replace('/[^0-9.]/', '', $VALUE) * 60; break;
					case "time_end":	$arResponse['ORDER']['timeEnding'] = $VALUE; break;
				}
			}
			// и если это последний статус - переписываем время для js счётчика
			if ($arResponse['state'] === 'ready') {
				$arResponse['ORDER']['stopTimer'] = 'true';
				$current = strtotime($arResponse['ORDER']['timeEnding']) - strtotime($arResponse['ORDER']['timeStarting']);
				$arResponse['ORDER']['timeCurrent'] = $current;
			} else {
				$arResponse['ORDER']['stopTimer'] = 'false';
				$current = strtotime($now) - strtotime($arResponse['ORDER']['timeStarting']);
				$arResponse['ORDER']['timeCurrent'] = $current;
			}
			// сохраняем значения
			$basketPropertyCollection->setProperty($properties);
			$basketPropertyCollection->save();
		}
	}
	// и корзину
	$basket->save();
}

echo json_encode($arResponse);