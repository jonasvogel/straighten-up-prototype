

/*
 * Change page when clicking on a posture voodoo.
 */
(function($) {
    "use strict";

    // watch page changes to assign the click event to the right posture voodoo
    $(document).on("pagecontainerchange", function(event, data) {

    	var $selector = data.toPage.find('.posture-voodoo');

    	// only go on if there is such an object on the current page
    	if($selector.length !== 0) {

    		// get the target address
		    var target = $selector.data().target;

		    // check if the variable is defined (this allows non-clickable posture voodoos)
		    if(typeof target !== 'undefined') {

		    	// change the page when clicking the posture voodoo
			    $selector.click(function() {
			    	$.mobile.pageContainer.pagecontainer( "change", $selector.data().target, { "transition": "none" } );
			    });

		    }
		}

		
	});

	$.mobile.page.prototype.options.theme = "b";



    

}(jQuery));