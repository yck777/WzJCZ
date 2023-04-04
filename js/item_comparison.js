
function item_comparisonOption(data) {
const res = data;

const dataList = [];

for (let i = 0; i < res.length; i++){
  dataList.push({
    value: res[i].value,
    show: true,
    name: res[i].name,
    itemStyle: {
      normal: {
        color: new echarts.graphic.LinearGradient(1, 1, 0, 0, [
          {
            offset: 0,
            color: res[i].color1
          },
          {
            offset: 1,
            color: res[i].color2
          }
        ])
      }
    }
  },{
    value: 10,
    show: false,
    name: '',
    itemStyle: {
      normal: {
        color: 'transparent'
      }
    }
  },)
}

function Pie() {
    let dataArr = [];
    for (let i = 0; i < 150; i++) {
        if (i % 2 === 0) {
            dataArr.push({
                name: (i + 1).toString(),
                value: 5,
                itemStyle: {
                    normal: {
                        color: "#027383",
                        borderWidth: 0,
                        borderColor: "rgba(0,0,0,0)"
                    }
                }
            })
        } else {
            dataArr.push({
                name: (i + 1).toString(),
                value: 5,
                itemStyle: {
                    normal: {
                        color: "rgba(0,0,0,0)",
                        borderWidth: 0,
                        borderColor: "rgba(0,0,0,0)"
                    }
                }
            })
        }
    }
    return dataArr
}

  return {
    title: {
      text: '区域车牌',
      x: '24%',
      y: 'center',
      textAlign: 'center',
      textStyle: {
          fontSize: '14',
          fontWeight: '500',
          color: '#fff',
          textAlign: 'center',
          textShadowColor: '#000',
              textShadowBlur: '1',
              textShadowOffsetX: 2,
              textShadowOffsetY: 2,
      },
  },
    legend: {
      selectedMode: false, // 取消图例上的点击事件
      icon: "circle",
      type: 'plain',
      orient: 'vertical',
      left: '48%',
      top: 'center',
      align: 'left',
      itemGap: 3,
      // itemWidth: 12, // 设置宽度
      // itemHeight: 7, // 设置高度
      symbolKeepAspect: false,
      textStyle: {
        color: '#000',
        rich: {
          name: {
            verticalAlign: 'right',
            align: 'left',
            fontSize: 14,
            color: '#FFFFFF',
          },
          value: {
            align: 'left',
            fontSize: 14,
            color: '#B0E3FF',
          }
        }
      },
      data: dataList.map(item => {
        if(item.show){
          return item.name
        }
      }),
      formatter: function(name) {
        if (dataList && dataList.length) {
          for (var i = 0; i < dataList.length; i++) {
            if (name === dataList[i].name) {
              return (
                '{name| ' + name + '}  ' + '{value|' + dataList[i].value+'}'
              )
            }
          }
        }
      }
    },
    series: [
      {
        name: '学历',
        type: 'pie',
        radius: ['60%', '75%'],
        center: ['25%', '50%'],
        hoverAnimation: false,
        avoidLabelOverlap: false,
        label: {
          show: false,
          position: 'center'
        },
        emphasis: {
          label: {
            show: true
          }
        },
        labelLine: {
          show: false
        },
        data: dataList
      },
          {
              type: 'pie',
              radius: ['40%', '55%'],
              center: ['25%', '50%'],
              label: {
                  show: false
              },
              data: Pie()
          },
    ]
  }
}