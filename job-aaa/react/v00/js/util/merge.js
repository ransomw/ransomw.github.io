/*global define: false */

define([
], function () {
    "use strict";

    var mergeInto = function (one, two) {
        var key;
        if (two !== null) {
            for (key in two) {
                if (two.hasOwnProperty(key)) {
                    one[key] = two[key];
                }
            }
        }
    },

        merge = function (one, two) {
            var result = {};
            mergeInto(result, one);
            mergeInto(result, two);
            return result;
        };

    return {
        merge: merge
    };

});
