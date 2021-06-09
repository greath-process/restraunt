<?define("NEED_AUTH", true);
require($_SERVER["DOCUMENT_ROOT"]."/bitrix/header.php");
$APPLICATION->SetTitle("Orders");
?>
<?
$GLOBALS['arrTablesOpenedFilter'] = [
    'ACTIVE' => 'Y',
    '!PROPERTY_TABLE_STATUS' => array(BOOKED_TABLE, FREE_TABLE, CHECKOUT_TABLE, CLEAR_TABLE),
    '=PROPERTY_TABLE_WAITERS' => $USER->GetID()
];

$GLOBALS['arrTablesCheckoutFilter'] = [
    'ACTIVE' => 'Y',
    'PROPERTY_TABLE_STATUS' => array(CHECKOUT_TABLE),
    '=PROPERTY_TABLE_WAITERS' => $USER->GetID()
];
?>
<div class="content__col content__aside content__aside-kitchen">
	<div class="c-panel_side c-panel_side-alt">
		<?
$GLOBALS['arrTableFilter'] = array('ACTIVE' => 'Y');
$selectUserId[] = intval($GLOBALS["USER"]->GetID());
// выбор официантов
$arrTableFilter['=PROPERTY_TABLE_WAITERS'] = $selectUserId;
	$APPLICATION->IncludeComponent("bitrix:news.list", 
								   "tableLeftMenu",
								   array(
		"ACTIVE_DATE_FORMAT" => "d.m.Y",
		"ADD_SECTIONS_CHAIN" => "N",
		"AJAX_MODE" => "Y",
		"AJAX_OPTION_ADDITIONAL" => "",
		"AJAX_OPTION_HISTORY" => "N",
		"AJAX_OPTION_JUMP" => "N",
		"AJAX_OPTION_STYLE" => "Y",
		"CACHE_FILTER" => "N",
		"CACHE_GROUPS" => "Y",
		"CACHE_TIME" => "36000000",
		"CACHE_TYPE" => "A",
		"CHECK_DATES" => "Y",
		"DETAIL_URL" => "",
		"DISPLAY_BOTTOM_PAGER" => "N",
		"DISPLAY_DATE" => "N",
		"DISPLAY_NAME" => "N",
		"DISPLAY_PICTURE" => "N",
		"DISPLAY_PREVIEW_TEXT" => "N",
		"DISPLAY_TOP_PAGER" => "N",
		"FIELD_CODE" => array(
			0 => "",
			1 => "",
		),
		"FILTER_NAME" => "arrTableFilter",
		"HIDE_LINK_WHEN_NO_DETAIL" => "N",
		"IBLOCK_ID" => "4",
		"IBLOCK_TYPE" => "service",
		"INCLUDE_IBLOCK_INTO_CHAIN" => "N",
		"INCLUDE_SUBSECTIONS" => "N",
		"MESSAGE_404" => "",
		"NEWS_COUNT" => "0",
		"PAGER_BASE_LINK_ENABLE" => "N",
		"PAGER_DESC_NUMBERING" => "N",
		"PAGER_DESC_NUMBERING_CACHE_TIME" => "36000",
		"PAGER_SHOW_ALL" => "N",
		"PAGER_SHOW_ALWAYS" => "N",
		"PAGER_TEMPLATE" => ".default",
		"PAGER_TITLE" => "Новости",
		"PARENT_SECTION" => "",
		"PARENT_SECTION_CODE" => "",
		"PREVIEW_TRUNCATE_LEN" => "",
		"PROPERTY_CODE" => array(
			0 => "TABLE_CAPACITY",
			1 => "TABLE_OCCUPANCY",
			2 => "CODE_TABLE_BASKET",
			3 => "TABLE_NUMBER",
			4 => "TABLE_WAITERS",
			5 => "TABLE_STATUS",
			6 => "TAGS",
			7 => "",
		),
		"SET_BROWSER_TITLE" => "N",
		"SET_LAST_MODIFIED" => "N",
		"SET_META_DESCRIPTION" => "N",
		"SET_META_KEYWORDS" => "N",
		"SET_STATUS_404" => "N",
		"SET_TITLE" => "N",
		"SHOW_404" => "N",
		"SORT_BY1" => "SORT",
		"SORT_BY2" => "ID",
		"SORT_ORDER1" => "ASC",
		"SORT_ORDER2" => "ASC",
		"STRICT_SECTION_CHECK" => "N",
		"COMPONENT_TEMPLATE" => "tableLeftMenu"
	),
	false
);?>
	</div>


    <?$APPLICATION->IncludeComponent("bitrix:sale.personal.order.list", "kitchen", Array(
	"ACTIVE_DATE_FORMAT" => "d.m.Y H:i",	// Формат показа даты
		"ALLOW_INNER" => "N",	// Разрешить оплату с внутреннего счета
		"CACHE_GROUPS" => "Y",	// Учитывать права доступа
		"CACHE_TIME" => "3600",	// Время кеширования (сек.)
		"CACHE_TYPE" => "N",	// Тип кеширования
		"DEFAULT_SORT" => "DATE_INSERT",	// Сортировка заказов
		"DISALLOW_CANCEL" => "N",	// Запретить отмену заказа
		"HISTORIC_STATUSES" => array(	// Перенести в историю заказы в статусах
			0 => "F",
		),
		"NAV_TEMPLATE" => "",	// Имя шаблона для постраничной навигации
		"ONLY_INNER_FULL" => "N",	// Разрешить оплату с внутреннего счета только в полном объеме
		"ORDERS_PER_PAGE" => "20",	// Количество заказов, выводимых на страницу
		"PATH_TO_BASKET" => "",	// Страница корзины
		"PATH_TO_CANCEL" => "",	// Страница отмены заказа
		"PATH_TO_CATALOG" => "/catalog/",	// Путь к каталогу
		"PATH_TO_COPY" => "",	// Страница повторения заказа
		"PATH_TO_DETAIL" => "",	// Страница c подробной информацией о заказе
		"PATH_TO_PAYMENT" => "payment.php",	// Страница подключения платежной системы
		"REFRESH_PRICES" => "N",	// Пересчитывать заказ после смены платежной системы
		"RESTRICT_CHANGE_PAYSYSTEM" => array(	// Запретить смену платежной системы у заказов в статусах
			0 => "0",
		),
		"SAVE_IN_SESSION" => "Y",	// Сохранять установки фильтра в сессии пользователя
		"SET_TITLE" => "N",	// Устанавливать заголовок страницы
		"STATUS_COLOR_F" => "gray",	// Цвет статуса "Выполнен"
		"STATUS_COLOR_N" => "green",	// Цвет статуса "Принят, ожидается оплата"
		"STATUS_COLOR_PSEUDO_CANCELLED" => "red",	// Цвет отменённых заказов
	),
	false
);?>

<div class="content__col content__nav">
							<div class="content__nav-inner">
								<div class="c-clock">
									<div class="c-clock__title" data-time>00:00</div>
									<div class="c-clock__desc">
										<div data-date>Date</div>
										<div data-location>City</div>
									</div>
								</div>
								<?$APPLICATION->IncludeComponent("bitrix:menu",
																 "main-menu",
																 array("ALLOW_MULTI_SELECT" => "N",
																	   "CHILD_MENU_TYPE" => "left",
																	   "DELAY" => "N",
																	   "MAX_LEVEL" => "1",
																	   "MENU_CACHE_GET_VARS" => array(0=>"",),
																	   "MENU_CACHE_TIME" => "3600",
																	   "MENU_CACHE_TYPE" => "N",
																	   "MENU_CACHE_USE_GROUPS" => "Y",
																	   "ROOT_MENU_TYPE" => "top",
																	   "USE_EXT" => "N"
																	  )
																);?>
							</div>
						</div>
						<?$APPLICATION->IncludeComponent(
							"wejet:control",
							"panel.menu",
							Array(
								"IBLOCK_ID" => "3",
							)
						);?>
						<?$APPLICATION->IncludeComponent(
							"wejet:control",
							"panel.account",
							Array(
								"IBLOCK_ID" => "5",
							)
						);?>

<?require($_SERVER["DOCUMENT_ROOT"]."/bitrix/footer.php");?>