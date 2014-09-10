/*global define: false */
define([
], function () {
    "use strict";

    /*jslint nomen: true */
    var _listeners = {};

    return {
        emit: function (ev_name) {
            var callback;
            for (callback in _listeners[ev_name]) {
                if ({}.toString.call(callback) === '[object Function]') {
                    callback();
                }
            }
        },

        register: function (ev_name, callback) {
            if (_listeners[ev_name] === undefined) {
                _listeners[ev_name] = [];
            }
            _listeners[ev_name].append(callback);
        }
    };

});
