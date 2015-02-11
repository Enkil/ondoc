$(document).ready(function() {
    var chart1 = new Highcharts.Chart({
        chart: {
            renderTo: 'chart',
            type: 'Line'
        },
        title: {
            text: ''
        },
        xAxis: {
            categories: ['1/05', '2/05', '3/05', '4/05', '5/05', '6/05', '7/05', '8/05', '9/05', '10/05', '11/05', '12/05', '13/05', '14/05', '15/05', '16/05', '17/05', '18/05']
        },
        yAxis: {
            title: {
                text: ''
            }
        },
        series: [{
            showInLegend: false,
            type: 'line',
            name: '0',
            data: [60, 80, 120, 87, 125,54,78, 80, 130]
        }, ]
    });
});