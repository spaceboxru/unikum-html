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

	/**
	* Fixed menu and scroll page
	*/
	(function() {
		var $headerMenu = $('.js-header__fixed'),
			$header = $headerMenu.parent('.js-header'),
			$menuHrefs = $headerMenu.find('a[href^="#"]'),
			$pages = $('div[class^="js-page--"],div[class*=" js-page--"]'),
			pagesTop = [],
			pagesTop1 = [],
			len = $pages.size(),
			headerH = $header.height(),
			menuH = $headerMenu.height(),
			delay = 800;

		$pages.each(function(index) {
			var thisH = $(this).height(),
				delta = (thisH > winH)? thisH / 2 - winH * 2 / 3 : (thisH - winH) / 2 ;
			pagesTop[index] = $(this).offset().top + $(this).height() / 2 - winH * 2 / 3;
		});

		function setPageActive(top){
			for( var i = len - 1 ; i >= 0 ; i--  ) {
				if(top >= pagesTop[i]) {
					return i;
				}
			}
			return -1;
		}

		if(menuH) {
			win.on('scroll', function() {
				var top = $(this).scrollTop(),
					index = setPageActive(top);
				if(!$pages.eq(index).hasClass('active') && index >= 0) {
					$pages.removeClass('active').eq(index).addClass('active');
				}
				if(top > menuH) {
					if(top > headerH - 100) {
						$headerMenu.removeClass('unactive').addClass('active');
					} else {
						$headerMenu.addClass('unactive').removeClass('active');
					}
				} else {
					$headerMenu.removeClass('unactive').removeClass('active');
				}
			});
		}

		$menuHrefs.on('click', function(e) {
			e.preventDefault();
			var $this = $(this),
				href = $(this).attr('href').substring(1),
				$target = $('a[name="' + href + '"]');

			if($target.size()) {
				htmlBody
					.stop()
					.animate({
						scrollTop: $target.offset().top - menuH - 50
					}, delay * Math.abs( $target.offset().top - doc.scrollTop() ) / winH );
			}
		});

	}());

	/**
	* Custom select
	*/
	(function(){

		$('select[class^="authorize__"]').selectize({});
		
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
	
});