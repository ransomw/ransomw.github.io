/*global define: true */
/*jslint nomen: true */

define([
    'react',
    'actions/ViewActions'
], function (React, actions) {
    "use strict";

    var ListItem = React.createClass({

        // function (ev)
        on_sel_click: function () {
            actions.company_select(this.props.company);
        },

        render: function () {
            return React.DOM.tr(null, [
                React.DOM.td({key: 'name'}, [
                    React.DOM.a({
                        onClick: this.on_sel_click
                    }, this.props.company.name)
                ])
            ]);
        }
    }),

        CompanyList = React.createClass({
            render: function () {
                var all_companies = this.props.all_companies,
                    companies = [],
                    idx;

                for (idx in all_companies) {
                    companies.push(ListItem({key: idx, company: all_companies[idx]}));
                }

                return React.DOM.table(null, companies);
            }
        });

    return CompanyList;
});
