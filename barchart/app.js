/*
 * This file launches the application by asking Ext JS to create
 * and launch() the Application class.
 */
Ext.application({
    extend: 'chart.Application',

    name: 'chart',

    requires: [
        // This will automatically load all classes in the chart namespace
        // so that application classes do not need to require each other.
        'chart.*'
    ],

    // The name of the initial view to create.
    mainView: 'chart.view.main.Main'
});
