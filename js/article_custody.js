function article_custodyOption(data) {
  const xData = ['枪支', '管制刀具', '上访件', '毒品', '其他'];
  const yData = [8, 4, 25, 16, 2]

  return {
    tooltip: {
      trigger: 'axis',
      axisPointer: {
         type: 'shadow'
      }
   },
   grid: {
      top: 25,
      right: 10,
      left: 25,
      bottom: 20
   },

   xAxis: [{
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
      data: xData
   }],
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
      // 上面圆圈
      {
         type: 'pictorialBar',
         symbolSize: [15, 10],
         symbolOffset: [0, -6],
         symbolPosition: 'end',
         z: 12,
         label: {
            normal: {
               show: true,
               position: "top",
               fontSize: 12,
               color: '#34DCFF'
            }
         },
         tooltip: {
            show: false
         },
         color: "#1E65D0",
         data: yData
      },
      // 下面圆圈
      {
         type: 'pictorialBar',
         symbolSize: [15, 10],
         symbolOffset: [0, 6],
         z: 12,
         tooltip: {
            show: false
         },
         color: "#2F92CD",
         data: yData
      },
      {
         type: 'bar',
         barWidth: "15",
         barGap: '10%', // Make series be overlap
         barCateGoryGap: '10%',
         itemStyle: {
            normal: {
               color: new echarts.graphic.LinearGradient(0, 0, 0, 0.7, [{
                  offset: 0,
                  color: "#2E528E"
               },
               {
                  offset: 1,
                  color: "#22CCDB"
               }
               ]),
               opacity: .8
            },
         },
         data: yData
      },
   ]
  }
}