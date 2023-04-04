function prevention_respondOption(datas,text) {
  let data = datas;
  const color = ['#00EEEE', 'blue', 'yellow','orange','#FF0000'];
  return {
    color,
    legend: {
        top:'center',
        left:'20%',
        icon: "circle", 
        orient: 'vertical',
        itemGap: 8,
        formatter: (name) => {
          const item = data.filter((item) => item.name === name)[0];        
          return '{title|' + name + '}\n{value|' + item.value + '}';
        },
        textStyle: {
            rich: {
                title: {
                    color: '#fff',
                    fontSize: 12,
                    padding:[2,0]
                },
                value: {
                    fontSize: 14,
                    // lineHeight: 16,
                    color: '#1fe5ea',
                },
            },
        },
        data: data,
    },
    title: [
        {
            text: 290,
            subtext:text,
            top: '30%',
            left: '69%',
            textAlign: 'center',
            itemGap: 20,
            subtextStyle: {
                color: '#fff',
                fontSize: 14,
                align: 'center',
            },
            textStyle: {
                color: '#f4e051',
                fontSize: 16,
            },
        },
    ],
    series: [
        //环形
        {
            name: '基础饼图',
            type: 'pie',
            radius: ['85%', '92%'],
            center: ['70%', '48%'],
            hoverAnimation: false,
            label: {
                normal: {
                    show: false,
                },
                emphasis: {
                    show: false,
                },
            },
            zlevel: 1,
            labelLine: {
                normal: {
                    show: false,
                },
            },
            data: data,
        },
        //环形分割线
        {
            name: '分割线',
            type: 'gauge',
            radius: '95%',
            clockwise: true,
            startAngle: '90',
            center: ['70%', '48%'],
            endAngle: '-269.9999',
            splitNumber: 50, //刻度数量
            zlevel: 2,
            detail: {
                offsetCenter: [10, 20],
                formatter: ' ',
            },
            axisLine: {
                lineStyle: {
                    width: 0,
                    opacity: 0,
                },
            },
            axisTick: {
                show: false,
            },
            markArea: {
                itemStyle: {
                    color: '#0f0',
                },
            },
            splitLine: {
                show: true,
                length: 18,
                padding: [0, 0, 0],
                lineStyle: {
                    color: '#022457',
                    width: 3,
                },
            },
            axisLabel: {
                show: false,
            },
        },
        {
            type: 'pie',
            name: '内层细圆环',
            radius: ['80%', '81%'],
            center: ['70%', '48%'],
            hoverAnimation: false,
            clockWise: false,
            itemStyle: {
                normal: {
                    color: '#fff',
                },
            },
            label: {
                show: false,
            },
            data: [100],
        },
    ]
  }
}