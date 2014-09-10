require.config({
    baseUrl: '',
    paths: {
        'react': 'bower_components/react/react',
        'domReady': 'bower_components/requirejs-domready/domReady',
        'lodash': 'bower_components/lodash/dist/lodash.min',
        'when': 'bower_components/when',

        'components': 'js/components',
        'stores': 'js/stores',
        'actions': 'js/actions',
        'constants': 'js/constants',
        'util': 'js/util'
    },
    packages: [
        {name: 'when', path: 'bower_components/when', main: 'when'}
    ]
});

require([
    'react',
    'components/CompanyApp.react',
    'components/CompanyList.react',
    'components/CompanyForm.react',
    'domReady!'
], function (React, CompanyApp, CompanyList, CompanyForm) {
    "use strict";

    var company_data = [
        {name: 'google', visa: true},
        {name: 'qunar', visa: true},
        {name: 'tencent', visa: true}
    ];

    React.renderComponent(
        // CompanyList({all_companies: company_data}),
        // CompanyForm(),
        CompanyApp({key: 'CompanyApp'}),
        document.getElementById('sandapp')
    );
});
