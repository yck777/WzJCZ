
function city_bayonet_carOption(data) {
    const colorList = ['#CA8CCA', '#BFA4E4', '#A8AAE5', '#A4D37D','rgb(9, 192, 211)', 'rgb(255, 166, 0)', 'rgb(0, 255, 217)','rgb(0, 136, 255)'];
    const chartData = [
        {
            value: 520,
            name: '指挥通讯设备',
        },
        {
            value: 280,
            name: '武器器械及防护装备',
        },
        {
            value: 100,
            name: '执法执勤装备',
        },
        {
            value: 100,
            name: '安检防爆装备',
        },
        {
            value: 70,
            name: '防爆装备',
        },
        {
            value: 120,
            name: '业务通讯装备',
        },
        {
            value: 90,
            name: '防疫装备',
        },
        {
            value: 40,
            name: '其他',
        },
    ];

    const pieData1 = [];
    const pieData2 = [];
    const gapData = {
        name: '',
        itemStyle: {
            color: 'transparent',
        },
    };
    for (let i = 0; i < chartData.length; i++) {
        pieData1.push({
            ...chartData[i],
            itemStyle: {
                borderRadius: 100,
                shadowColor: '#2a2a34',
                shadowBlur: 5,
                shadowOffsetY: 0,
                shadowOffsetX: 0,
                borderColor: '#2a2a34',
                borderWidth: 2,
            },
        });
        pieData1.push(gapData);
    
        pieData2.push({
            ...chartData[i],
            itemStyle: {
                borderRadius: 10,
                color: colorList[i],
                opacity:1,
                shadowColor: '#fff',
                shadowBlur: 1,
                shadowOffsetY: 5,
                shadowOffsetX: 0,
            },
        });
        pieData2.push(gapData);
    }
      return {
        title: [{
            text: '75',
            x: '70%',
            y: '33%',
            textAlign: 'center',
            textStyle: {
                fontSize: '30',
                fontWeight: '500',
                color: '#fff',
                textAlign: 'center',
                textShadowColor: '#000',
                    textShadowBlur: '1',
                    textShadowOffsetX: 2,
                    textShadowOffsetY: 2,
            },
        }, {
            text: '警备总数(件)',
            left: '70%',
            top: '60%',
            textAlign: 'center',
            textStyle: {
                fontSize: '16',
                fontWeight: '400',
                color: '#fff',
                textAlign: 'center',
                textShadowColor: '#000',
                    textShadowBlur: '1',
                    textShadowOffsetX: 1,
                    textShadowOffsetY: 1,
            },
        }, ],
        legend: {
            left: '5%',
            top: 'center',
            align: 'left',
            // itemGap: 5,
            itemWidth: 20,
            itemHeight: 10,
            shadowBlur: 10,
            shadowOffsetY: 0,
            shadowOffsetX: 0,
            
            textStyle: {
                color: '#D8DDE3',
                rich: {
                    name: {
                        verticalAlign: 'right',
                        align: 'left',
                        fontSize: 15,
                        color: '#D8DDE3',
                    },
                    percent: {
                        padding: [0, 0, 0, 10],
                        color: '#D8DDE3',
                        fontSize: 15,
                    },
                },
            },
            formatter: (name) => {
                const item = chartData.find((i) => {
                    return i.name === name;
                });
                return '{name|' + name + '}' + '{percent|' + item.value + '}';
            },
        },
    
        color: colorList,
    
        series: [
            {
                type: 'pie',
                z: 3,
                roundCap: true,
                radius: ['74%', '81%'],
                center: ['70%', '50%'],
                label: {
                    show: false,
                },
                labelLine: {
                    show: false,
                },
                data: pieData1,
            },
            // {
            //     type: 'pie',
            //     z: 2,
            //     radius: ['40%', '55%'],
            //     center: ['50%', '50%'],
            //     label: {
            //         show: false,
            //     },
            //     labelLine: {
            //         show: false,
            //     },
            //     silent: true,
            //     data: pieData2,
            // },
        ]
      }
    
}