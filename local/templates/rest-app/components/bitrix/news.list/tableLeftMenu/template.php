<?if(!defined("B_PROLOG_INCLUDED") || B_PROLOG_INCLUDED!==true)die();
/** @var array $arParams */
/** @var array $arResult */
/** @global CMain $APPLICATION */
/** @global CUser $USER */
/** @global CDatabase $DB */
/** @var CBitrixComponentTemplate $this */
/** @var string $templateName */
/** @var string $templateFile */
/** @var string $templateFolder */
/** @var string $componentPath */
/** @var CBitrixComponent $component */
?>
    <div class="c-panel__body ">
        <div class="tables-list" <?=$arParams['DISABLED'] === 'Y' ? '' : 'data-interactive';?>><?
			foreach($arResult['ITEMS'] as &$resTable)
			{
				$resHL = &$resTable['PROPERTIES']['TABLE_STATUS'];
				$resHL['UF_NAME'] = hlProps($resHL['USER_TYPE_SETTINGS']['TABLE_NAME'], false, $resHL['VALUE'])['UF_NAME'];
				$resHL['UF_DESCRIPTION'] = hlProps($resHL['USER_TYPE_SETTINGS']['TABLE_NAME'], false, $resHL['VALUE'])['UF_DESCRIPTION'];
			?>
                <div class="tables-list__item"
					 title="<?=$resHL['UF_NAME']?>"
					 data-occupancy='<?=(int)$resTable['DISPLAY_PROPERTIES']['TABLE_OCCUPANCY']['VALUE']?>'
					>
                    <a class="table-item table-item_<?=$resHL['UF_DESCRIPTION']?>" href="javascript:;" data-id-table='<?=(int)$resTable['ID']?>'>
                        <div class="table-item__number"><?=(int)$resTable['DISPLAY_PROPERTIES']['TABLE_NUMBER']['VALUE']?></div>
                        <div class="table-item__capacity"><?=(int)$resTable['DISPLAY_PROPERTIES']['TABLE_CAPACITY']['VALUE']?></div>
                    </a>
                </div><?
			}
			?>
        </div>
    </div>