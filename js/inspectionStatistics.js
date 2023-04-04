function inspectionStatisticsOption(data) {
  const obj = {
    people: {
      name: '核查人数量',
      data:[{
        date: '2023-03-01',
        value:'30'
        },
        {
        date: '2023-03-02',
        value:'70'
        },
        {
          date: '2023-03-03',
          value:'130'
        },
        {
          date: '2023-03-04',
          value:'200'
        },
        {
          date: '2023-03-05',
          value:'90'
        },
      ]
    },
    car: {
      name: '核查车数量',
      data:[{
        date: '2023-03-01',
        value:'95'
        },
        {
        date: '2023-03-02',
        value:'30'
        },
        {
          date: '2023-03-03',
          value:'170'
        },
        {
          date: '2023-03-04',
          value:'60'
        },
        {
          date: '2023-03-05',
          value:'210'
        },
      ]
    }
  }

  // for (let i = 0;i<obj.people)
  return {
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        lineStyle: {
          color: 'rgb(126,199,255)',
        },
      },
    },
    legend: {
      show: true,
      itemWidth: 30,
      itemHeight: 10,
      data:['核查人数量', '核查车数量'], 
      textStyle: {
        color: 'rgba(255, 255, 255, 1)',
        fontSize: 14,
        padding: [0, 8, 0, 8]
      }
    },
    grid: {
      top: 25,
      right: 0,
      left:35,
      bottom: 20
    },
    xAxis: [
      {
        type: 'category',
        axisLabel: {
           color: '#fff',
           interval: 0
        },
        axisLine: {
           show: true,
           lineStyle: {
              color: '#0a3e98'
           }
        },
        axisTick: {
           show: false,
        },
        data: ['1月', '2月', '3月', '4月', '5月',]
      },
    ],
    yAxis: [
      {
         type: 'value',
         splitLine: {
            show: true,
            lineStyle: {
               color: '#0a3e98',
               type: "dashed",
            }
         },
         axisLabel: {
            formatter: '{value}',
            textStyle: {
               color: "#fff",
            }
         },
      }
    ],
    series: [
      {
        name: '核查人数量',
        type: 'line',
        symbol: 'circle',
        smooth: true,
        lineStyle: {
          normal: {
            width: 1,
            color: '#00ffa2', // 线条颜色
          },
        },
        showSymbol: false,
        itemStyle: {
          normal: {
            color: '#00f0ff',//拐点颜色
            label: {
              show: true, //开启显示
              color: '#fff',
              position: 'top', //在上方显示
              formatter: function (res) {
                if (res.value) {
                  return res.value
                } else {
                  return 0
                }
              },
            },
          },
        },
        areaStyle: {
          color: {
            type: 'linear',
            x: 0,
            y: 0,
            x2: 0,
            y2: 1,
            colorStops: [  // 渐变颜色
              {
                offset: 0,
                color: 'rgba(36, 214, 214, 0.6)',
              },
              {
                offset: 1,
                color: 'rgba(36, 214, 214, 0)',
              },
            ],
            global: false,
          },
        },
        data: ['30', '70', '130', '200', '90',],
      },
      {
        name: '核查车数量',
        type: 'line',
        showSymbol: false,
        symbol: 'circle', // 默认是空心圆（中间是白色的），改成实心圆
        smooth: true,
        lineStyle: {
          normal: {
            width: 1,
            color: '#3D84F7', // 线条颜色
          },
        },
        itemStyle: {
          normal: {
            color: '#3D84F7',//拐点颜色
          },
        },
        areaStyle: {
          color: {
            type: 'linear',
            x: 0,
            y: 0,
            x2: 0,
            y2: 1,
            colorStops: [  // 渐变颜色
              {
                offset: 0,
                color: 'rgba(61, 132, 247, 0.6)',
              },
              {
                offset: 1,
                color: 'rgba(61, 132, 247, 0)',
              },
            ],
            global: false,
          },
        },
        data: ['95', '30', '170', '60', '210',],
      }
    ]
  }
}