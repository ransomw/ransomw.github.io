/*global define: false */
/*jslint nomen: true*/ // tolerate dangling _

define([
    // 'lodash',
    'util/merge',
    'js/dispatcher/Dispatcher'
], function (
    // _,
    merge,
    Dispatcher
) {
    "use strict";

    var AppDispatcher;
    AppDispatcher = merge.merge(Dispatcher.prototype, {

        handleViewAction: function (action) {
            this.dispatch({
                source: 'VIEW_ACTION',
                action: action
            });
        }

    });

    return AppDispatcher;
});
