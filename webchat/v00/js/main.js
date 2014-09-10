
/*jslint nomen: true */


require.config({
    baseUrl: '',
    paths: {
        'domReady': 'bower_components/requirejs-domready/domReady',

        'config': 'js/config'
    }
});

/*global document: true */
/*global alert: true */
/*global navigator: true */
/*global window: true */

require([
    'config/server',
    'js/constants',
    'domReady!'
], function (serv_config, constants) {
    "use strict";

    console.log("init with config module");
    console.log(serv_config);
    console.log("init with constants module");
    console.log(constants);

    /* #begin copy 'n paste code from mozdemo */
    var streaming = false,
        video        = document.querySelector('#video'),
        canvas       = document.querySelector('#canvas'),

        // photo        = document.querySelector('#photo'),

        startbutton  = document.querySelector('#startbutton'),

        $_server_content = document.querySelector('#server-content'),

        width = 320,
        height = 0,

        _SERVER_URL = 'http://' +
            [serv_config.server_domain, serv_config.server_port].join(':'),


        // _SERVER_URL = 'http://' +
        //     [serv_config.server_domain,
        //      serv_config.server_port.toString()].join(':');


        _set_photo = function () {
            var src_url = [_SERVER_URL,
                           'assets/img/linkedin_profile.jpg'].join('/');
            $_server_content.innerHTML = [
                '<img src="',
                src_url,
                '">'].join('');
        },

        takepicture = function () {
            canvas.width = width;
            canvas.height = height;
            canvas.getContext('2d').drawImage(video, 0, 0, width, height);
            // var data = canvas.toDataURL('image/png');
            // photo.setAttribute('src', data);
            alert("setting new photo source is unimplemented");
        };

    console.log("init with server url");
    console.log(_SERVER_URL);


    navigator.getMedia = (navigator.getUserMedia ||
                          navigator.webkitGetUserMedia ||
                          navigator.mozGetUserMedia ||
                          navigator.msGetUserMedia);

    navigator.getMedia(
        {
            video: true,
            audio: false
        },
        function (stream) {
            if (navigator.mozGetUserMedia) {
                video.mozSrcObject = stream;
            } else {
                var vendorURL = window.URL || window.webkitURL;
                video.src = vendorURL.createObjectURL(stream);
            }
            video.play();
        },
        function (err) {
            console.log("An error occured! " + err);
        }
    );

    // video.addEventListener('canplay', function (ev) {
    video.addEventListener('canplay', function () {
        if (!streaming) {
            height = video.videoHeight / (video.videoWidth / width);
            video.setAttribute('width', width);
            video.setAttribute('height', height);
            canvas.setAttribute('width', width);
            canvas.setAttribute('height', height);
            streaming = true;
        }
    }, false);

    startbutton.addEventListener('click', function (ev) {
        _set_photo();
        takepicture();
        ev.preventDefault();
    }, false);

    /* #end copy 'n paste code from mozdemo */

});