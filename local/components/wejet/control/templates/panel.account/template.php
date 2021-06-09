<?if(!defined("B_PROLOG_INCLUDED") || B_PROLOG_INCLUDED!==true) die();

use Bitrix\Main\Type\DateTime;

global $USER;

$userID = $USER->GetID();
$dbUser = \Bitrix\Main\UserTable::getList(array('select' => array('ID', 'NAME', 'LAST_NAME', 'PERSONAL_PHOTO', 'LOGIN'),
                                                'filter' => array('=ID' => $userID)
                                               )
                                         );
if ($arUser = $dbUser->fetch())
{
    if($arUser['PERSONAL_PHOTO'])
    {
        $dbFile = \Bitrix\Main\FileTable::getList(array('select' => array('*'),
                                                        'filter' => array('=ID' => $arUser['PERSONAL_PHOTO'])
                                                       )
                                                 )->fetch();
        $arUser['PERSONAL_PHOTO'] = '/upload/'.$dbFile['SUBDIR'].'/'.$dbFile['FILE_NAME'];
    }
    else
    {
        $arUser['PERSONAL_PHOTO'] = '';
    }
    $arUser['FULL_NAME'] = $arUser['NAME'].($arUser['LAST_NAME'] ? ' '.$arUser['LAST_NAME'] : '');
    $arUser['FULL_NAME'] = $arUser['FULL_NAME'] ? $arUser['FULL_NAME'] : 'no name';
}

// state
$state = 'created';
$dateTime = new DateTime();
$elName = $dateTime->format('d.m.Y') . '_' . $userID;

$dbItem = \Bitrix\Iblock\ElementTable::getList([
    'order' => ['SORT' => 'ASC'],
    'select' => ['ID', 'NAME'],
    'filter' => ['IBLOCK_ID' => $arParams['IBLOCK_ID'], 'NAME' => $elName],
])->fetch();

if ($dbItem) {
    $dbProperty = \CIBlockElement::getProperty($arParams['IBLOCK_ID'], $dbItem['ID'], array("sort", "asc"), array('CODE' => 'DAY_STATUS'));

    while ($arProperty = $dbProperty->GetNext()) {
        $state = $arProperty['VALUE_XML_ID'];
    }
    unset($arProperty);

    $dbProperty = CIBlockElement::getProperty($arParams['IBLOCK_ID'], $dbItem['ID'], ["sort", "asc"], ['CODE' => 'DAY_BREAKS']);

    while ($arProperty = $dbProperty->Fetch()) {
    	$propertyValue[] = [
    		'VALUE' => $arProperty['VALUE'],
    		'DESCRIPTION' => $arProperty['DESCRIPTION']
    	]; 
    	$lastBreak = end($propertyValue);
    	
        if (!empty($lastBreak['VALUE']) && !empty($lastBreak['DESCRIPTION'])) {
            $breakStart = $lastBreak['VALUE'];
            $breakStart = new DateTime($breakStart);
            // $breakTime = $breakStart->format('H:i:s');
            $breakTime = $breakStart->getTimestamp();
            $arBreak = unserialize($lastBreak['DESCRIPTION']);
            $currentTime = new DateTime();
            // $currentTime = $currentTime->format('H:i:s');
            $currentTime = $currentTime->getTimestamp();

            if ($arBreak) {
                $breakDuration = $arBreak['BREAK_DURATION'];
            }
        }
    }
}
?>

<div class="c-panel c-panel_slide-in" id="accountbar" data-direction="rtl" data-state="<?=$state?>" data-break-start="<?=$breakTime?>" data-break-duration="<?=$breakDuration?>" data-current-time="<?=$currentTime?>">
    <div class="c-panel__head u-row u-justify-space-between">
        <div class="u-col">
            <div class="account-card">
                <div class="account-card__thumb">
                	<?if (empty($arUser['PERSONAL_PHOTO'])):?>
	                	<span class="account-card__shortname c-title c-title_xxl">
	                		<?=getShortName($arUser['FULL_NAME'])?>
	                	</span>
	                <?endif;?>
                    <span class="account-card__img" style="background-image: url('<?=$arUser['PERSONAL_PHOTO']?>');"></span>
                </div>
                <div class="account-card__title c-title c-title_sm"><?=$arUser['FULL_NAME']?></div>
                <div class="account-card__login c-body c-body_xxs u-color-active-gray"><?=$arUser['LOGIN']?></div>
            </div>
        </div>
        <?/*
        <div class="u-col">
            <div class="controls-list u-row">
                <div class="controls-list__item u-col">
                    <button class="c-btn panel-btn" type="button">
                        <svg xmlns="http://www.w3.org/2000/svg" class="panel-btn__icon u-centered svg-ico_no-stroke svg-ico" width="24" height="24">
                            <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="<?=SITE_TEMPLATE_PATH?>/images/svg.svg#gears"></use>
                        </svg>
                    </button>
                </div>
                <div class="controls-list__item u-col">
                    <button class="c-btn panel-btn" type="button">
                        <svg xmlns="http://www.w3.org/2000/svg" class="panel-btn__icon u-centered svg-ico_no-stroke svg-ico" width="24" height="24">
                            <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="<?=SITE_TEMPLATE_PATH?>/images/svg.svg#qr-code"></use>
                        </svg>
                    </button>
                </div>
            </div>
        </div>
        */?>
    </div>

    <div class="c-panel__body">
        <div class="shift-details">
            <div class="shift-details__list u-row">
                <div class="shift-details__item  u-col u-col-4-12" data-field="time_passed">
                    <div class="shift-details__value c-number c-number_md" data-value>6h</div>
                    <div class="shift-details__title c-body c-body_xxs">On Work</div>
                </div>
                <div class="shift-details__item u-color-active-gray u-col u-col-4-12" data-field="time_remains">
                    <div class="shift-details__value c-number c-number_md" data-value>2h</div>
                    <div class="shift-details__title c-body c-body_xxs">Remains</div>
                </div>
                <div class="shift-details__item u-color-active-gray u-col u-col-4-12" data-field="time_total">
                    <div class="shift-details__value c-number c-number_md" data-value>28h</div>
                    <div class="shift-details__title c-body c-body_xxs">This Week</div>
                </div>
                <div class="shift-details__item  u-col u-col-4-12" data-field="tables_opened">
                    <div class="shift-details__value c-number c-number_md" data-value>3</div>
                    <div class="shift-details__title c-body c-body_xxs">Openned</div>
                </div>
                <div class="shift-details__item  u-col u-col-4-12" data-field="orders_total">
                    <div class="shift-details__value c-number c-number_md" data-value>15</div>
                    <div class="shift-details__title c-body c-body_xxs">Orders today</div>
                </div>
            </div>
        </div>
        
        <ul class="account-menu">
            <li class="account-menu__item">
                <a class="account-menu__link c-action c-action_md" href="https://docs.google.com/spreadsheets/d/1er8kN2qrjvA0eL-YBvApT7g0jhG3-HjMze_g_N5rBBE/edit?usp=sharing" target="_blank" rel="nofollow">
                    <span>Work schedule</span>
                    <svg xmlns="http://www.w3.org/2000/svg" class="account-menu__icon svg-ico">
                        <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#chevron-right"></use>
                    </svg>
                </a>
            </li>
        </ul>       
    </div>

    <div class="c-panel__footer">
        <ul class="buttons-menu">
            <li class="buttons-menu__item" data-display-state="created">
                <button class="buttons-menu__link c-btn c-btn_default c-btn_primary c-btn_full" type="button" data-action="open">
                    Open Day
                </button>
            </li>
            <li class="buttons-menu__item" data-display-state="opened">
                <button class="buttons-menu__link c-btn c-btn_default c-btn_primary c-btn_full" type="button" data-action="break-start">
                    <svg xmlns="http://www.w3.org/2000/svg" class="c-btn__icon svg-ico_no-stroke svg-ico">
                        <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="<?=SITE_TEMPLATE_PATH?>/images/svg.svg#timer-progress-round"></use>
                    </svg>
                    Take a Break
                </button>
            </li>
            <li class="buttons-menu__item" data-display-state="break">
                <button class="buttons-menu__link c-btn c-btn_default c-btn_primary c-btn_full" type="button" data-action="break">
                    Resume Work
                </button>
            </li>
            <li class="buttons-menu__item" data-display-state="opened">
                <button class="buttons-menu__link c-btn c-btn_default c-btn_error c-btn_full" type="button" data-action="close-start">
                    <svg xmlns="http://www.w3.org/2000/svg" class="c-btn__icon svg-ico_no-stroke svg-ico">
                        <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="<?=SITE_TEMPLATE_PATH?>/images/svg.svg#times-round"></use>
                    </svg>
                    Close Day
                </button>
            </li>
            <li class="buttons-menu__item" data-display-state="closed">
                <button class="buttons-menu__link c-btn c-btn_default c-btn_primary c-btn_full c-btn_disabled" type="button" disabled>
                    Day is Closed
                </button>
            </li>
        </ul>
    </div>
</div>