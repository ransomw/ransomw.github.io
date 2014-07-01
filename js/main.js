require.config({
    baseUrl: '',
    paths: {
        'jquery': 'bower_components/jquery/dist/jquery.min',
        'text': 'bower_components/requirejs-text/text',
        'domReady': 'bower_components/requirejs-domready/domReady'
    }
});

require([
    'jquery',
    'text!views/index-en.html.part',
    'text!views/index-zh.html.part',
    'domReady!'
], function (
    $,
    index_en,
    index_zh) {
    "use strict";

    if (navigator.language === 'zh-CN') {
        $('#main-content').html(index_zh);
				document.getElementById('language').value = 'zn-CH';
    } else {
        $('#main-content').html(index_en);
				document.getElementById('language').value = 'en';
    }

		$('#language').change(function () {
				var lang = this.options[this.selectedIndex].value;
				switch (lang) {
				case 'en':
						$('#main-content').html(index_en);
						break;
				case 'zn-CH':
						$('#main-content').html(index_zh);
						break;
				default:
						throw new Error("unexpected language value '" + lang + "'");
						break;
				}
		});

});