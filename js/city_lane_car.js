
function city_lane_carOption(data) {
  // const xLabel = data.map(item => item.xLabel);
  let xLabel = ['鹿城临江', '机场检查站', '苍南桥墩(出浙)', '苍南木材(入浙)', '文成玉壶', '泰顺龙井', '泰顺彭月', '瑞安高桐公路', '乐清湖雾', '永嘉桥头'];
  let obj = {
      dataValue1: {
        data: [20, 30, 40, 35, 34, 15, 56, 15, 12, 25, 34, 42],
        title: '平均预警时长',
        colorLine: 'rgba(25,163,223,1)',
        colorLine2:'rgba(25,163,223,.3)',
        },
      dataValue2: {
        data: [30, 10, 50, 25, 14, 55, 26, 15, 22, 45, 54, 22],
        title: '平均等待时长',
        colorLine:'rgba(0,255,162,1)',
        colorLine2:'rgba(0,255,162,.3)',
        },
      dataValue3: {
        data: [45, 37, 43, 38, 31, 19, 52, 11, 21, 55, 14, 32],
        title: '平均核查时长',
        colorLine: 'rgba(255,235,59,1)',
        colorLine2:'rgba(255,235,59,.3)',
        }
   }
    

    //遍历对象
    const seriesData = [];
    for (let key in obj) {
        seriesData.push({
            name: obj[key].title,
            type: 'line',
            symbol: 'circle', // 默认是空心圆（中间是白色的），改成实心圆
            showAllSymbol: true,
            symbolSize: 8,
            smooth: true,
            label: {
              show: false, //显示小圆点上的label文字
            },
            lineStyle: {
                normal: {
                    width: 2,
                    color: obj[key].colorLine, // 线条颜色
                },
                borderColor: 'rgba(0,0,0,.4)',
            },
            itemStyle: {
                color:obj[key].colorLine,
                borderColor: obj[key].colorLine2,
                borderWidth: 3,
                shadowColor:obj[key].colorLine,
                shadowBlur: 14,
            },
            // areaStyle: { //区域填充样式
            //     normal: {
            //         //线性渐变，前4个参数分别是x0,y0,x2,y2(范围0~1);相当于图形包围盒中的百分比。如果最后一个参数是‘true’，则该四个值是绝对像素位置。
            //         color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
            //                 offset: 0,
            //                 color: "rgba(25,163,223,.3)"
      
      
            //             },
            //             {
            //                 offset: 1,
            //                 color: "rgba(25,163,223, 0)"
            //             }
            //         ], false),
            //         shadowColor: 'rgba(25,163,223, 0.5)', //阴影颜色
            //         shadowBlur: 20 //shadowBlur设图形阴影的模糊大小。配合shadowColor,shadowOffsetX/Y, 设置图形的阴影效果。
            //     }
            // },
            data: obj[key].data
            },)
    }
  return {
    grid: {
      top: 20,
      left: 50,
      right: 15,
      bottom: 55,
      },
      tooltip: {
          trigger: 'axis',
          axisPointer: {
              type: 'cross',
              label: {
                  backgroundColor: '#6a7985'
              }
          },
      },
      legend: {
        show: true,
        data: ['平均预警时长','平均等待时长','平均核查时长'],
        textStyle: {
            color: '#fff',      
        },
        top: 0,
        left: 'center',
    },
  xAxis: [
    {
        type: 'category',
        boundaryGap: false,
        axisLine: {
            //坐标轴轴线相关设置。数学上的x轴
            show: true,
            lineStyle: {
                color: 'rgb(41,188,245)',
            },
        },
        axisLabel: {
            //坐标轴刻度标签的相关设置
            textStyle: {
                color: '#00dbff',
                fontSize: 12,
          },
          rotate:30
        },
        splitLine: {
            show: false,
            lineStyle: {
                color: '#233653',
            },
        },
        axisTick: {
            show: false,
        },
        data: xLabel,
    },
      ],
    //  滑动
    dataZoom: [
        {
            type: 'inside',
            show: true,
            start:1,//数据窗口范围的起始百分比,表示1%
            end:70,//数据窗口范围的结束百分比,表示35%坐标
        },
    ],
yAxis: [
    {
        name: "",
        nameTextStyle: {
            color: "#fff",
            fontSize: 12,
            padding: [0, 60, 0, 0]
        },
        // minInterval: 1,
        type: 'value',
        splitLine: {
            show: false,
        },
        axisLine: {
            show: true,
            lineStyle: {
                color: '#008de7',
            },
        },
        axisLabel: {
            show: true,
            textStyle: {
                color: '#00dbff',
                fontSize: 14
            }
        },
        axisTick: {
            show: false,
        },
    },
],
  series: seriesData
  }
}