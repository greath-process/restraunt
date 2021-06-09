<?if(!defined("B_PROLOG_INCLUDED") || B_PROLOG_INCLUDED!==true) die();

global $APPLICATION;
?>

<div class="c-panel c-panel_menu c-panel_slide-in" id="menubar" data-direction="rtl">
	<div class="c-panel__aside">
		<?$APPLICATION->ShowViewContent('menu_tabs');?>
	</div>
	<div class="c-panel__inner">
		<div class="c-panel__head">
			<div class="c-panel__head-top u-row">
				<div class="u-col">
					<h2 class="c-title c-title_xl">
						Menu
					</h2>
				</div>				
			</div>
		</div>

		<div class="c-panel__body">
			<?$APPLICATION->IncludeComponent(
				"bitrix:catalog.section.list", 
				"menu-tabs", 
				array(
					"ADD_SECTIONS_CHAIN" => "Y",
					"CACHE_FILTER" => "N",
					"CACHE_GROUPS" => "Y",
					"CACHE_TIME" => "36000000",
					"CACHE_TYPE" => "A",
					"COUNT_ELEMENTS" => "Y",
					"COUNT_ELEMENTS_FILTER" => "CNT_ACTIVE",
					"FILTER_NAME" => "sectionsFilter",
					"IBLOCK_ID" => "3",
					"IBLOCK_TYPE" => "service",
					"SECTION_CODE" => "",
					"SECTION_FIELDS" => array(
						0 => "",
						1 => "",
					),
					"SECTION_ID" => $_REQUEST["SECTION_ID"],
					"SECTION_URL" => "",
					"SECTION_USER_FIELDS" => array(
						0 => "UF_ICON_COLOR",
						1 => "UF_NAME_SHORT",
						2 => "UF_IS_PROMO",
					),
					"SHOW_PARENT_NAME" => "Y",
					"TOP_DEPTH" => "2",
					"VIEW_MODE" => "LIST",
					"COMPONENT_TEMPLATE" => "menu-slider"
				),
				$component
			);?>
		</div>
	</div>
</div>