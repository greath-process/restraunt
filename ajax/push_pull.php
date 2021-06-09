<?require_once($_SERVER['DOCUMENT_ROOT'].'/bitrix/modules/main/include/prolog_before.php');
CModule::IncludeModule("main");

if (!CModule::IncludeModule('pull'))
   return false;

RegisterModuleDependences("pull", "OnGetDependentModule", "pull_module", "CPullModulePullSchema", "OnGetDependentModule" );

class CPullModulePullSchema
{
    public static function OnGetDependentModule()
    {
        return Array(
            'MODULE_ID' => "pull_module",
            'USE' => Array("PUBLIC_SECTION")
     );
     }
}

CMain::FinalActions();
?>