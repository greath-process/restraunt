<?
use Bitrix\Sale\Order;
\Bitrix\Main\Loader::IncludeModule("highloadblock");
\Bitrix\Main\Loader::includeModule('iblock');
$hlblock = \Bitrix\Highloadblock\HighloadBlockTable::getById(4)->fetch();
$entity = \Bitrix\Highloadblock\HighloadBlockTable::compileEntity($hlblock);
$entityDataClass = $entity->getDataClass();
unset($arResult['ORDERS']);

global $USER;
$res_us = \Bitrix\Main\UserTable::getList(array(
    'select'  => array("UF_*"),
    'filter'  => array('ID'=>$USER->GetID()),
));
if ($arUser = $res_us->Fetch())
{
    $restraunt = $arUser['UF_RESTAURANT'];
    $departament_id = $arUser['UF_DEPARTMENT'];
    if($departament_id == 5) $arParams['CHEF'] = 'Y';
}
$result_hi = $entityDataClass::getList(array(
    "select" => array("*"),
    "order" => array("ID"=>"DESC"),
    "filter" => Array("ID"=>$departament_id),
));
while ($arRow = $result_hi->Fetch())
    $departament = $arRow['UF_XML_ID'];

$result = \Bitrix\Sale\Order::getList(array(
    'order'   => ["ID" => "DESC"],
    'limit'   => 200,
    'filter' => [">DATE_INSERT" => date($DB->DateFormatToPHP(CSite::GetDateFormat("SHORT")), mktime(0, 0, 0, date("m"), date("d"), date("Y")))] // ограничение по заказам на сегодняшний день (для тестов минусуем дни -1)
));
while ($arOrder = $result->Fetch())
{
    $i = $arOrder['ID'];
    $basket = Order::load($i)->getBasket();
    $basketItems = $basket->getBasketItems();
    $arResult['ORDERS'][$i]['ORDER'] = $arOrder;

    $hlblock_e = \Bitrix\Highloadblock\HighloadBlockTable::getById(6)->fetch();
    $entity_e = \Bitrix\Highloadblock\HighloadBlockTable::compileEntity($hlblock_e);
    $entityDataClass_e = $entity_e->getDataClass();

    $rUser = CUser::GetByID($arOrder['USER_ID']);
    $aUser = $rUser->Fetch();
    $arResult['ORDERS'][$i]['ORDER']['USER_NAME'] = $aUser['NAME'].' '.$aUser['LAST_NAME'][0].'.';

    $obBasket = \Bitrix\Sale\Basket::getList(array('filter' => array('ORDER_ID' => $arOrder['ID'])));
    while($bItem = $obBasket->Fetch())
    {
        $ii = $bItem['ID'];

        foreach ($basketItems as $basketItem) 
        {
            $item_id = $basketItem->getField('ID');
            if($item_id == $ii)
            {
                $basketPropertyCollection = $basketItem->getPropertyCollection();
                foreach ($basketPropertyCollection as $propertyItem) 
                {
                    $CODE = $propertyItem->getField('CODE');
                    if ($CODE == 'state')
                        $bItem['STATE'] = $propertyItem->getField('VALUE');

                    if ($CODE == 'tableId')
                        $bItem['TABLE'] = $propertyItem->getField('VALUE');

                    if ($CODE == 'code')
                        $bItem['ORDERCODE'] = $propertyItem->getField('VALUE');

                    if ($CODE == 'time_start')
                    {
                        $bItem['TIMESTART'] = $propertyItem->getField('VALUE');
                    }
                    if ($CODE == 'time_end')
                        $bItem['TIMEEND'] = $propertyItem->getField('VALUE');

                    if ($CODE == 'tags')
                    {
                        $vals_tag = $propertyItem->getField('VALUE');
                        $raw_str = explode("},", $vals_tag);
                        foreach ($raw_str as $valuet) 
                        {
                            $val_fin = explode(":", $valuet);
                            if($val_fin[2] == 'true')
                            {
                                $name_val = explode("'", $val_fin[1]);
                                $vals[] = $name_val[1];
                            }
                        }
                    }
                }
            }
        }

        $bItem['TAGS'] = $vals;
        unset($vals);

        $arFilter = Array("IBLOCK_ID"=>3, "ID"=>$bItem['PRODUCT_ID'], "ACTIVE"=>"Y");
        $res = CIBlockElement::GetList(Array("ID" => "ASC"), $arFilter, false, Array());

        while ($ob = $res->GetNextElement()) 
        {
            $props = $ob->GetProperties();
            $element_restraunt = $props['BELONGING_RESTAURANT']['VALUE'][0];
            $element_departament = $props['SUBDIVISION']['VALUE'][0];
            $bItem['TIME_PREPARING'] = $props['TIME_PREPARING']['VALUE'];
            unset($TAGS);
        }
        //сортировка видимых блюд по группам и ресторану, т.к. сами заказы должы быть видны всем
        if($element_restraunt == $restraunt && ($departament_id == 5 || $element_departament == $departament) && !empty($bItem['TIMESTART']))
            $arResult['ORDERS'][$i]['BASKET_ITEMS'][$ii] = $bItem;
    }
}
//if($USER->isAdmin()){	echo"<pre>";print_r($basketItems);echo"</pre>";	}	?>