(function ($) {
	$.bgResponsiveImage = function (element, options) {
		// **************************************************************
		// Public Properties
		// **************************************************************

		var $c = $(element), // Context 

			BgResponsiveImage = (function ($c, o) {
				var defaults = {
					'parent': 'figure',

					'activeClass': 'active',
					'breakPoint': 768,

					'speed': 500,
					'easing': 'swing'
				}; 

				var _o = {},

					$p = null, // Parent
					src = {},

					debounce = 0,
					isMobile = false
				;

				var _InitObjects = function () {
					_o = $.extend({}, defaults, o);

					$p = $c.parent(_o.parent);
					src = $c.data('src');

					_GetSizes();
				}, 

					_GetSizes = function() {
						isMobile = $(window).width() < _o.breakPoint;
					},

					_CheckImageChange = function() {
						_GetSizes();

						var nSrc = (isMobile) ? src.m : src.d,
							cSrc = $c.prop('src');
						if (cSrc.indexOf(nSrc) < 0) {
							_LoadImage(nSrc);
						}
					},

					_LoadImage = function(src) {
						var $img = $('<img />');
						$img
							.load(function(e) {
								$p.fadeOut(_o.speed, function(e) {
									$p.attr('style', 'background-image: url(\''+src+'\');')
										.fadeIn(_o.speed);
								});
							})
							.prop('src', src);
					},

					_OnResize = function(e) {
						clearTimeout(debounce);
						debounce = setTimeout(function() {
							clearTimeout(debounce);
							_CheckImageChange();
						}, 250);
					},

				_BindEvents = function () {
					$(window).resize(_OnResize);
				},

				init = (function() {
					_InitObjects();
					_BindEvents();
					_CheckImageChange();
				})();
			}) ($c, options);
	};

	$.fn.bgResponsiveImage = function (options) {
		return this.each(function () {
			if (undefined === $(this).data('bgResponsiveImage')) {
				var plugin = new $.bgResponsiveImage(this, options);
				$(this).data('bgResponsiveImage', plugin);
			}
		});
	};
})(jQuery);
