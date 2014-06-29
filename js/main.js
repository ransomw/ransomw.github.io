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
    } else {
        $('#main-content').html(index_en);
    }

});