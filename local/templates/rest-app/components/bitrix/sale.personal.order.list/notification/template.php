<?
if(!defined("B_PROLOG_INCLUDED") || B_PROLOG_INCLUDED!==true)die();

use Bitrix\Main;
use Bitrix\Main\Localization\Loc;
use Bitrix\Main\Page\Asset;
use Bitrix\Main\Application;

CJSCore::Init(array('clipboard', 'fx'));
CModule::IncludeModule("pull");
CPullWatch::Add($USER->GetId(), 'ORDERS');

$today = date('H:i:s');
$request = Application::getInstance()->getContext()->getRequest();
$isAjax = $request->getPost('is_ajax') === 'Y';
$state = $request->getPost('state');
?>
<?$i = 0;
foreach($arResult['ORDERS'] as $arOrder)
{
	foreach($arOrder['BASKET_ITEMS'] as $item)
	{
		$i++;
	}
}
?>
<div class="c-panel c-panel_notifications">
	<?
	if ($isAjax) {
		$APPLICATION->RestartBuffer();
	}
	?>
	<div class="c-panel__head">
		<div class="c-panel__head-top u-row">
			<div class="u-col">
				<h2 class="c-title c-title_xl"> Notifications <sup class="c-sup c-body c-body_xs"><?=$i?></sup>
				</h2>
			</div>
		</div>
		<ul class="tab-menu u-row c-panel__tablist">
			<li class="tab-menu__item u-col">
				<a class="tab-menu__link c-title c-title_lg u-color-text" href="#"> All <sup class="c-sup c-body c-body_xs"><?=$i?></sup>
				</a>
			</li>
		</ul>
	</div>
	<div class="c-panel__body ">
		<div class="notifications-list ">
			<?foreach($arResult['ORDERS'] as $arOrder):?>
				<?foreach($arOrder['BASKET_ITEMS'] as $item):?>
					<div class="notifications-list__item">
						<div class="notification-item notification-item_type2 notification-item_<?switch ($item['STATE'])
																								  {
																									case "income": echo 'error'; break;
																									case "progress": echo 'warning'; break; 
																									case "ready": echo 'success'; break; 
																								  }?>">
							<div class="notification-item__head">
								<div class="notification-item__action"><span><?=(!empty($item['TIMEEND'])) ? $item['TIMEEND'] : $item['TIMESTART']?></span> • <?=$item['TABLE']?></div>
							</div>
							<div class="notification-item__title"><?=$item['ORDERCODE']?>• <?=$item['NAME']?></div>
							<div class="notification-item__table">Table&nbsp;<?=$item['TABLE']?></div>
							<div class="notification-item__tags">
								<ul class="badges-list u-row notification-item__taglist notification-item__taglist_order">
									<?foreach($item['TAGS'] as $tag):?>
									<li class="badges-list__item u-col">
										<div class="c-badge c-badge_secondary c-badge_sm"><?=$tag?></div>
									</li>
									<?endforeach?>
								</ul>
								<ul class="badges-list u-row notification-item__taglist notification-item__taglist_client"></ul>
							</div>
						</div>
					</div>
				<?endforeach?>
			<?endforeach?>
		</div>
	</div>
	<?
	if ($isAjax) {
		die();
	}
	?>
	<a id="refresh" style="display:none;" rel="nofollow" href="<?=$APPLICATION->GetCurPage()?>"></a>
</div>