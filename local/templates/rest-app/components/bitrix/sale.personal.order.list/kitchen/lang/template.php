<?
if(!defined("B_PROLOG_INCLUDED") || B_PROLOG_INCLUDED!==true)die();

use Bitrix\Main;
use Bitrix\Main\Localization\Loc;
use Bitrix\Main\Page\Asset;
use Bitrix\Main\Application;

CJSCore::Init(array('clipboard', 'fx'));

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
		if($item['STATE'] == 'income')
		{
			$income_1[$i] = $item;
			$income_1[$i]['ORDER'] = $arOrder;
		}
		if($item['STATE'] == 'progress')
		{
			$progress_1[$i] = $item;
			$progress_1[$i]['ORDER'] = $arOrder;
		} 
		if($item['STATE'] == 'ready')
		{
			$ready_1[$i] = $item;
			$ready_1[$i]['ORDER'] = $arOrder;
		} 
		$i++;
	}
}
?>
	<div class="c-panel ">
		<div class="c-panel__head">
			<div class="c-panel__head-top u-row">
				<div class="u-col">
					<h2 class="c-title c-title_xl"> <?if($arParams['CHEF']):?>Income<?else:?>Queue<?endif?> <sup class="c-sup c-body c-body_xs"><?=count($income_1)?></sup>
					</h2>
				</div>
				<div class="u-col">
					<div class="controls-list u-row">
						<div class="controls-list__item u-col">
							<button class="c-btn panel-btn" type="button">
							</button>
						</div>
						<div class="controls-list__item u-col">
							<button class="c-btn panel-btn" type="button">
							</button>
						</div>
					</div>
				</div>
			</div>
			<ul class="tab-menu u-row c-panel__tablist">
				<li class="tab-menu__item u-col">
					<a class="tab-menu__link c-title c-title_lg u-color-text" href="#"> All <sup class="c-sup c-body c-body_xs"><?=count($income_1)?></sup>
					</a>
				</li>
			</ul>
		</div>
		<div class="c-panel__body " data-state="income">
            <?
            if ($isAjax && $state === 'income') {
                $APPLICATION->RestartBuffer();
            }
            ?>
			<div class="orders-list " data-role="chef">
				<div class="orders-list__list">
				<?foreach($income_1 as $item):?>
					<div class="orders-list__item">
						<div class="order-item order-item_kitchen-income  " data-order-id="<?=$item['ORDER']['ORDER']['ID']?>" data-basket-line-id="<?=$item['ID']?>" draggable="true">
							<div class="order-item__top u-row u-align-center">
								<div class="order-item__time u-col"><?=FormatDate("H:i:s", MakeTimeStamp($item["DATE_INSERT"]))?></div> 
								<div class="order-item__timer u-col">
									<div class="progressbar progressbar_md progressbar_bare progressbar_success" data-progressbar data-current="<?=(strtotime($today)-strtotime($item["DATE_INSERT"]))?>" data-limit="<?=$item['TIME_PREPARING']*60?>">
										<span class="progressbar__timer" data-timer>00:00:00</span>
									</div>
								</div>
								<div class="order-item__waiter u-col">
									<div class="c-waiter">
										<svg xmlns="http://www.w3.org/2000/svg" class="c-waiter__icon svg-ico_no-fill svg-ico">
											<use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="<?=SITE_TEMPLATE_PATH?>/images/svg.svg#waiter"></use>
										</svg>
										<span class="c-waiter__text"><?=$item['ORDER']['ORDER']['USER_NAME']?></span>
									</div>
								</div>
							</div>
							<div class="order-item__title c-title c-title_md"> <?if($arParams['CHEF']):?><?=$item['ORDERCODE']?>• <?endif?><?=$item['NAME']?> </div>
							<div class="order-item__clients c-body c-body_xxs u-color-active-gray"> <?if($arParams['CHEF']):?>Table <?=$item['TABLE']?><?else:?><?=$item['ORDERCODE']?><?endif?> </div>
							<div class="order-item__tags">
							<ul class="badges-list u-row order-item__taglist order-item__taglist_order">
									<?foreach($item['TAGS'] as $tag):?>
									<li class="badges-list__item u-col">
										<div class="c-badge c-badge_secondary c-badge_sm"><?=$tag?></div>
									</li>
									<?endforeach?>
								</ul>
							</div>
						</div>
					</div>
				<?endforeach?>
				</div>
			</div>
            <?
            if ($isAjax && $state === 'income') {
                die();
            }
            ?>
		</div>
	</div>
</div>
<div class="content__col content__kitchen u-flex-grow-0">
	<div class="c-panel ">
		<div class="c-panel__head">
			<div class="c-panel__head-top u-row">
				<div class="u-col">
					<h2 class="c-title c-title_xl"> In Progress <sup class="c-sup c-body c-body_xs"><?=count($progress_1)?></sup>
					</h2>
				</div>
				<div class="u-col">
					<div class="controls-list u-row">
						<div class="controls-list__item u-col">
							<button class="c-btn panel-btn" type="button">
							</button>
						</div>
						<div class="controls-list__item u-col">
							<button class="c-btn panel-btn" type="button">
							</button>
						</div>
					</div>
				</div>
			</div>
			<ul class="tab-menu u-row c-panel__tablist">
				<li class="tab-menu__item u-col">
					<a class="tab-menu__link c-title c-title_lg u-color-text" href="#"> All <sup class="c-sup c-body c-body_xs"><?=count($progress_1)?></sup>
					</a>
				</li>
			</ul>
		</div>
		<div class="c-panel__body " data-drag-target="true" data-state="progress">
			<div class="orders-list ">
				<div class="orders-list__list">
				<?foreach($progress_1 as $item):?>
					<div class="orders-list__item">
						<div class="order-item order-item_kitchen " data-order-id="<?=$item['ORDER']['ORDER']['ID']?>" data-basket-line-id="<?=$item['ID']?>" draggable="true">
							<div class="progressbar progressbar_md progressbar_success" data-progressbar data-current="<?=(strtotime($today)-strtotime($item['TIMESTART']))?>" data-limit="<?=$item['TIME_PREPARING']*60?>">
								<div class="progressbar__bar" data-bar></div>
								<span class="progressbar__timer" data-timer>00:00:00</span>
							</div>
							<div class="order-item__top u-row u-justify-space-between">
								<div class="order-item__time u-col"><?=$item['TIMESTART']?></div>
								<div class="order-item__waiter u-col">
									<div class="c-waiter">
										<svg xmlns="http://www.w3.org/2000/svg" class="c-waiter__icon svg-ico_no-fill svg-ico">
											<use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="images/svg.svg#circle"></use>
										</svg>
										<span class="c-waiter__text"><?=$item['ORDER']['ORDER']['USER_NAME']?></span>
									</div>
								</div>
							</div>
							<div class="order-item__title c-title c-title_md"> <?if($arParams['CHEF']):?><?=$item['ORDERCODE']?>• <?endif?><?=$item['NAME']?> </div>
							<div class="order-item__clients c-body c-body_xxs u-color-active-gray"> <?if($arParams['CHEF']):?>Table <?=$item['TABLE']?><?else:?><?=$item['ORDERCODE']?><?endif?> </div>
							<div class="order-item__tags">
								<ul class="badges-list u-row order-item__taglist order-item__taglist_order">
								<?foreach($item['TAGS'] as $tag):?>
									<li class="badges-list__item u-col">
										<div class="c-badge c-badge_secondary c-badge_sm"><?=$tag?></div>
									</li>
									<?endforeach?>
								</ul>
							</div>
						</div>
					</div>
				<?endforeach?>
				</div>
			</div>
		</div>
	</div>
</div>
<div class="content__col content__kitchen u-flex-grow-0">
	<div class="c-panel ">
		<div class="c-panel__head">
			<div class="c-panel__head-top u-row">
				<div class="u-col">
					<h2 class="c-title c-title_xl"> Ready <sup class="c-sup c-body c-body_xs"><?=count($ready_1)?></sup>
					</h2>
				</div>
				<div class="u-col">
					<div class="controls-list u-row">
						<div class="controls-list__item u-col">
							<button class="c-btn panel-btn" type="button">
							</button>
						</div>
						<div class="controls-list__item u-col">
							<button class="c-btn panel-btn" type="button">
							</button>
						</div>
					</div>
				</div>
			</div>
			<ul class="tab-menu u-row c-panel__tablist">
				<li class="tab-menu__item u-col">
					<a class="tab-menu__link c-title c-title_lg u-color-text" href="#"> All <sup class="c-sup c-body c-body_xs"><?=count($ready_1)?></sup>
					</a>
				</li>
			</ul>
		</div>
		<div class="c-panel__body " data-drag-target="true" data-state="ready">
			<div class="orders-list ">
				<div class="orders-list__list">
				<?foreach($ready_1 as $item):?>
					<div class="orders-list__item">
						<div class="order-item order-item_kitchen ">
							<div class="progressbar progressbar_md progressbar_success" data-progressbar data-current="<?=(strtotime($item['TIMEEND'])-strtotime($item['TIMESTART']))?>" data-stop="true" data-limit="<?=$item['TIME_PREPARING']*60?>">
								<div class="progressbar__bar" data-bar></div>
								<span class="progressbar__timer" data-timer>00:00:00</span>
							</div>
							<div class="order-item__top u-row u-justify-space-between">
								<div class="order-item__time u-col"><?=$item['TIMESTART']?></div>
								<div class="order-item__waiter u-col">
									<div class="c-waiter">
										<svg xmlns="http://www.w3.org/2000/svg" class="c-waiter__icon svg-ico_no-fill svg-ico">
											<use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="images/svg.svg#circle"></use>
										</svg>
										<span class="c-waiter__text"><?=$item['ORDER']['ORDER']['USER_NAME']?></span>
									</div>
								</div>
							</div>
							<div class="order-item__title c-title c-title_md"> <?if($arParams['CHEF']):?><?=$item['ORDERCODE']?>• <?endif?><?=$item['NAME']?> </div>
							<div class="order-item__clients c-body c-body_xxs u-color-active-gray"> <?if($arParams['CHEF']):?>Table <?=$item['TABLE']?><?else:?><?=$item['ORDERCODE']?><?endif?> </div>
							<div class="order-item__tags">
								<ul class="badges-list u-row order-item__taglist order-item__taglist_order">
								<?foreach($item['TAGS'] as $tag):?>
									<li class="badges-list__item u-col">
										<div class="c-badge c-badge_secondary c-badge_sm"><?=$tag?></div>
									</li>
									<?endforeach?>
								</ul>
							</div>
						</div>
					</div>
				<?endforeach?>
				</div>
			</div>
		</div>
	</div>
</div>