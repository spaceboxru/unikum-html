jQuery(function($){
	var win = $(window),
		winH = win.height(),
		doc = $(document),
		docH = doc.height(),
		htmlBody = $('html, body');
	/**
	* Form Validate
	*/
	(function() {
		
		$('form.form-horizontal,form.footer__form').each(function() {
			$(this).validate({
				errorPlacement: function(error, element) {
					return true;
				}
			});
		});
		
	}());
	
	/**
	* Inputmask
	*/
	(function() {
		
		$(":input").inputmask();
	
	}());

	/**
	* Placeholder
	*/
	(function() {
		
		$('input, textarea').placeholder();
	
	}());

	// Activate Slider
	$('.fscreen').fsizeGallery({
		onPrevImage: function(index) {
			// alert("prev image show");
		},
		onNextImage: function(index) {
			// alert("next image show");
		}
	});
	
	/**
	* Custom select
	*/
	(function(){
		
		$('.fancybox').fancybox({
			'width': 600,
			'minWidth': 600,
			'maxWidth': 600
		});
		
	}());
	
});