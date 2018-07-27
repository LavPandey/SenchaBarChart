/**
 * This class is the main view for the application. It is specified in app.js as the
 * "mainView" property. That setting automatically applies the "viewport"
 * plugin causing this view to become the body element (i.e., the viewport).
 *
 * TODO - Replace this content of this view to suite the needs of your application.
 */
Ext.define('chart.view.main.Main', {
    extend: 'Ext.panel.Panel',
    xtype: 'app-main',

    viewModel: {
        type: 'mainmodel'
    },

    requires: [
        'chart.view.main.BarChart'
    ],

    title: 'Performance',
    viewModel: {},
    items: [{
        xtype: 'checkbox',
        reference: 'stackedCheckBox',
        fieldLabel: 'Stacked'

    }, {
        xtype: 'bar-chart'
    }]
});