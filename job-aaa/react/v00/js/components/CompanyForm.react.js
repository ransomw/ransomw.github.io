/*global define: false */

define([
    'react',
    'actions/ViewActions',
], function (React, actions) {
    "use strict";

    var CompanyForm = React.createClass({

        // function (event)
        on_save_click: function () {
            var company_name = this.refs.name.getDOMNode().value.trim();
            actions.create_company({name: company_name});
        },


        render: function () {
            return React.DOM.div(null, [
                React.DOM.input({type: 'text',
                                 placeholder: "company name",
                                 ref: 'name',
                                 key: 'name'}, {}),
                React.DOM.input({type: 'submit',
                                 value: 'Save',
                                 onClick: this.on_save_click,
                                 key: 'submit'}, {})
            ]);
        }
    });

    return CompanyForm;
});