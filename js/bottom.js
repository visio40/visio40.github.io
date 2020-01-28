jQuery.fn.isOnScreen = function() {
	var win = jQuery(window);
	var viewport = {
		top : win.scrollTop(),
		left : win.scrollLeft()
	};
	viewport.right = viewport.left + win.width();
	viewport.bottom = viewport.top + win.height();
	var bounds = this.offset();
	bounds.right = bounds.left + this.outerWidth();
	bounds.bottom = bounds.top + this.outerHeight();
	return (!(viewport.right < bounds.left || viewport.left > bounds.right || viewport.bottom < bounds.top || viewport.top > bounds.bottom));
};


function is_touch_device() {
	return (('ontouchstart' in window) || (navigator.MaxTouchPoints > 0) || (navigator.msMaxTouchPoints > 0));
}





$('#pagenavi .burgertrigger').click(function(event) {
	
	if( $( 'body' ).hasClass('navigate')) {
		$( 'body' ).removeClass('navigate');
	}
	else {
		$( 'body' ).addClass('navigate');
	}
});

$('#pagelegal, #pagecontent').click(function(event) {
	
	$( 'body' ).removeClass('navigate');
	
});

if(!is_touch_device()) {
	$('.route').on( 'mouseup', function( event ) {
	
		$('html, body').animate({
			scrollTop: $('.map').offset().top
		}, 200);
	});
}






$(document).ready(function() {
	
	
});
$(window).resize(function() {
	
});
/**/