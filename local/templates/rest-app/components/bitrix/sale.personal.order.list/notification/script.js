var serverEvents = (function () {
    "use strict";

    var controls = {},
        handlers = {
			open: function (event) 
            {
            //    console.log(event);
            },

            message: function (event) 
            {
            //    console.log(event);
            },

            error: function (event) 
            {
            //    console.log(event);
            },

            getId: function (event) 
            {
                //console.log(event.data);
				let req = parseInt(event.data);
				if(req % 5 == 0)
				{
				//	console.log(event.data);
					$('#refresh').click();
				}
            }
        };

    function getControls() {
        controls.eventSource = new EventSource("/ajax/serverSentEvents.php");
    }

    function addEvent() {
        var eventSource = controls.eventSource;
        eventSource.addEventListener('open', handlers.open, false);
        eventSource.addEventListener('message', handlers.message, false);
        eventSource.addEventListener('get_id', handlers.getId, false);
        eventSource.addEventListener('error', handlers.error, false);
    }

    function init() {
        getControls();
        addEvent();
    }

    return {
        init: function () {
            init();
        }
    };
}());

//serverEvents.init();

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

BX.showWait = function () 
{
	$('body').find('.loader').remove();
};

BX.closeWait = function () 
{
    $('body').find('.loader').remove();
};