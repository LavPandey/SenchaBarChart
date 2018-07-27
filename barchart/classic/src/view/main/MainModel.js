Ext.define('chart.view.main.MainModel', {

    extend: 'Ext.app.ViewModel',
    alias: 'model.mainmodel',

    stores: {
        BarChartStore: {
            fields: [
                { name: 'TIMESTAMP', type: 'string' },
                'USER_CPU', 'SYS_CPU', 'WAIT_IO_CPU'
            ],
            proxy: {
                type: 'ajax',
                url: './resources/data/BarChart.json',
                reader: {
                    type: 'json',
                    rootProperty: 'OS_CPU_STATISTICS',
                    transform: {
                        fn: function(data) {
                            debugger;
                            // do some manipulation of the raw data object
                            return data;
                        },
                        scope: this
                    }
                }
            },
            autoLoad: true
        }
    }
});