/*global define: false */
/*jslint nomen: true*/
// in-memory storage

define([
    'lodash',
    'util/merge',
    'js/dispatcher/AppDispatcher',
    'js/constants/Constants',
    'util/event'
], function (
    _,
    merge,
    AppDispatcher,
    Constants,
    event
) {
    "use strict";

    var MemStore = Object.create({'MemStore': null}),
        _companies = {},
        _positions = {},
        _curr_company,


        /**
         * store information relevant to a company that you're applying to
         */
        create_company = function (info) {
            // Using the current timestamp in place of a real id.
            var id = Date.now();
            _companies[id] = info;
            _companies[id].id = id;
        },

        /**
         * store information relevant to a particular job position at a company
         * since some companies might have multiple open jobs
         */
        create_position = function (info, company_id) {
            var id = Date.now();
            _positions[id] = info;
            _positions[id].id = id;
            _positions[id].company_id = company_id;
        },

        /// XXX
        company_data = [
            {name: 'qunar', visa: true}
        ],

        _change_callbacks = [];


    // MemStore.prototype = merge.merge(MemStore.prototype, {

    //     get_companies: function() {
    //         return _companies;
    //     }

    // });


/* 
    MemStore.prototype.get_companies = function() {
        return _companies;
    };

    MemStore.prototype.get_curr_company = function () {
        return _curr_company;
    };

    var _change_callbacks = [];

    MemStore.prototype.addChangeListener = function (callback) {
        _change_callbacks.push(callback);
    };

    MemStore.prototype.removeChangeListener = function (callback) {

        console.log("***unimplemented***");
        throw new Error("unimplemented");
    };

    MemStore.prototype.emit_change = function () {
        for (var idx in _change_callbacks) {
            _change_callbacks[idx]();
        }
    };
*/

    // var mem_store = new MemStore();


    MemStore.get_companies = function () {
        return _companies;
    };

    MemStore.get_curr_company = function () {
        return _curr_company;
    };

    MemStore.addChangeListener = function (callback) {
        _change_callbacks.push(callback);
    };

    /*jslint todo: true */
    MemStore.removeChangeListener = function (callback) {
        // TODO XXX
        console.log("***unimplemented***");
        throw new Error("unimplemented");
    };
    /*jslint todo: false */

    MemStore.emit_change = function () {
        var idx;
        for (idx in _change_callbacks) {
            _change_callbacks[idx]();
        }
    };


    AppDispatcher.register(function (payload) {
        var action = payload.action;

        switch (action.actionType) {
        case Constants.COMPANY_CREATE:
            create_company(action.info);
            break;
        case Constants.COMPANY_SELECT:
            _curr_company = _companies[action.info.id];
            break;
        default:
            return true;
            // throw new Error("unknown action type '" + action.actionType + "'");
        }

        MemStore.emit_change();

        return true;
    });

    /// XXX
    _.map(company_data, create_company);


    // return MemStore;

    return MemStore;

});
