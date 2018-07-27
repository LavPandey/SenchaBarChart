Ext.define('chart.view.main.BarChart', {
    extend: 'Ext.chart.CartesianChart',
    requires: ['Ext.chart.CartesianChart', 'Ext.chart.axis.Numeric', 'Ext.chart.axis.Category', 'Ext.chart.series.Bar', 'Ext.chart.interactions.ItemHighlight'],
    xtype: 'bar-chart',
    width: '100%',
    height: 460,

    legend: {
        type: 'sprite',
        docked: 'bottom'
    },
    store: {
        fields: [
            { name: 'TIMESTAMP', type: 'string' },
            'USER_CPU', 'SYS_CPU', 'WAIT_IO_CPU'
        ],
        proxy: {
            type: 'ajax',
            url: './resources/data/BarChart.json',
            reader: {
                type: 'json',
                rootProperty: 'OS_CPU_STATISTICS'
            }
        },
        autoLoad: true
    },
    axes: [{
        type: 'numeric',
        position: 'left',
        fields: ['USER_CPU', 'SYS_CPU', 'WAIT_IO_CPU', 'OTHER_CPU'],
        minimum: 0
    }, {
        type: 'category',
        position: 'bottom',
        fields: ['TIMESTAMP'],
        label: {
            rotate: {
                degrees: -45
            },
        },
        renderer: function (axis, label, layoutContext) {

            return Ext.Date.format(new Date(label), 'F-d h:i A')
        }
    }],
    series: [{
        type: 'bar',
        title: ['user-cpu', 'sys-cpu', 'wait-to-cpu', 'other-cpu'],
        xField: 'TIMESTAMP',
        yField: ['USER_CPU', 'SYS_CPU', 'WAIT_IO_CPU', 'OTHER_CPU'],
        highlight: true,
        bind: {
            stacked: '{stackedCheckBox.checked}'
        },
        tooltip: {
            trackMouse: true,
            renderer: function (tooltip, record, item) {
                var fieldIndex = Ext.Array.indexOf(item.series.getYField(), item.field),
                    cpu = item.series.getTitle()[fieldIndex];

                tooltip.setHtml(cpu + ' on ' + record.get('TIMESTAMP') + ' is : ' +
                    record.get(item.field));
            },
        }
    }]

});
