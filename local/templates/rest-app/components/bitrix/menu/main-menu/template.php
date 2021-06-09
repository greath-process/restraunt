<?if (!defined("B_PROLOG_INCLUDED") || B_PROLOG_INCLUDED!==true)die();?>

<?if (!empty($arResult)):?>
	<nav class="main-menu">
		<ul class="main-menu__menu">
			<?foreach ($arResult as $arItem):?>
				<?
				$isAnchor = $arItem['PARAMS']['anchor'] === 'Y';
				$icon = $arItem['PARAMS']['icon'];
				?>

				<li class="main-menu__item <?=$arItem['SELECTED'] ? 'main-menu__item_active' : '';?>">
					<a class="main-menu__link" href="<?=$arItem["LINK"]?>" <?=$isAnchor ? 'data-anchor' : '';?>>
						<?if (!empty($icon)):?>
	                        <svg xmlns="http://www.w3.org/2000/svg" class="main-menu__icon svg-ico">
	                            <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="<?=SITE_TEMPLATE_PATH?>/images/svg.svg#<?=$icon?>"></use>
	                        </svg>
	                    <?endif;?>
						<div class="main-menu__text"><?=$arItem["TEXT"]?></div>
					</a>
				</li>
			<?endforeach;?>
		</ul>
	</nav>
<?endif?>
