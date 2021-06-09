BX.ready(function(){
	BX.addCustomEvent("onPullEvent", function(module_id,command,params) {
		console.log(module_id,command,params);
		if (module_id == "order" && command == 'changed')
		{
			$('#refresh').click();
        }
	});
	BX.PULL.extendWatch('ORDERS');
});