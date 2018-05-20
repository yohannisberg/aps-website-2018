 (function ($) {
	$.menu = function (element, options) {
		// **************************************************************
		// Public Properties
		// **************************************************************

		var $c = $(element), // Context 

			modal = (function ($c, o) {
				var defaults = {
					'activeClass': 'active',

					'speed': 500,
					'easing': 'swing'
				}; 

				var _o = {},
					$modal = null
				;

				var _InitObjects = function () {
					_o = $.extend({}, defaults, o);
				},

				_BindEvents = function () {
					_IsOpen();
					_Close();
				},

				_IsOpen = function(navOpen) {
					$( ".burger" ).click(function() {
						if (navOpen === 'Open') {
							navOpen = 'Closed';
							_CloseMenu();
							console.log(navOpen);
						}else{
							navOpen = 'Open';
							_OpenMenu();
							console.log(navOpen);
						}
					});
				},

				_Close = function() {
					$('.container-m').live('click',function() {
						_CloseMenu();
					});
				},

				_OpenMenu = function(e){
					event.preventDefault();
					$('.menu-item').slideDown(300);
					$('.content').addClass('content-m');
					navOpen = 'Open';
				},

				_CloseMenu = function(e, navOpen){
					event.preventDefault();
					$('.menu-item').slideUp(300);
					$('.content').removeClass('content-m');
				},

				init = (function() {
					_InitObjects();
					_BindEvents();
				})();
			}) ($c, options);
	};

	$.fn.menu = function (options) {
		return this.each(function () {
			if (undefined === $(this).data('menu')) {
				var plugin = new $.menu(this, options);
				$(this).data('menu', plugin);
			}
		});
	};
})(jQuery);



