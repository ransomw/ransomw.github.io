/*global define: true */

define([
    'react'
], function (React) {
    "use strict";

    var CompanyDetail = React.createClass({
        render: function () {
            console.log(this.props);
            // TODO XXX
            var company_name = this.props.company.name.name;

            return React.DOM.h3(null, company_name);
        }
    });

    return CompanyDetail;

});
