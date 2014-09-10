/*global define: false */
define([
    'js/dispatcher/AppDispatcher',
    'js/constants/Constants'
], function (AppDispatcher, Constants) {
    "use strict";

    var create_company = function (info) {
        AppDispatcher.handleViewAction({
            actionType: Constants.COMPANY_CREATE,
            info: info
        });
    },

        company_select = function (info) { // CompanyList.ListItem.props.company
            AppDispatcher.handleViewAction({
                actionType: Constants.COMPANY_SELECT,
                info: info
            });
        };

    return {
        create_company: create_company,
        company_select: company_select
    };

});
