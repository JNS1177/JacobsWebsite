Highcharts.chart('columncontainer', {
    chart: {
        type: 'column'
    },
    title: {
        text: 'Column chart with negative values'
    },
    xAxis: {
        categories: ['kiwis', 'mangos', 'Pears', 'strawberries', 'Bananas']
    },
    credits: {
        enabled: false
    },
    series: [{
        name: 'Jacob',
        data: [3, 7, 4, 7, 5]
    }, {
        name: 'Jane',
        data: [2, -2, -3, 2, 1]
    }, {
        name: 'Joe',
        data: [3, 4, 4, -2, 5]
    }]
});