function city_lane_numberOption(data) {
//   const xLabel = data.map(item => item.xLabel);
//   let xLabel = ['鹿城临江', '机场检查站', '苍南桥墩(出浙)', '苍南木材(入浙)', '文成玉壶', '泰顺龙井', '泰顺彭月', '瑞安高桐公路', '乐清湖雾', '永嘉桥头'];
//   let dataValue = [20, 30, 40, 35, 34, 15, 56, 15, 12, 25, 34, 42];
  const dataStyle = {
    normal: {
       label: {
          show: false
       },
       labelLine: {
          show: false
       },
       shadowBlur: 0,
       shadowColor: '#203665'
    }
    }
   const sum = 100;
   // 数据
    const arr = data;
    const seriesData = [];
    for (let i = 0; i < arr.length; i++) {
        seriesData.push({
            name: arr[i].name,
            type: 'pie',
            clockWise: false,
            radius: [45, 38],
            itemStyle: dataStyle,
            hoverAnimation: false,
            center: [i < 1 ? i * 48 + 40 +'%' : ( i - 1 ) * 48 + 15+'%' , i < 1 ?  30 +'%' : 75+'%'],
            data: [{
               value: arr[i].onlineNum,
               label: {
                  normal: {
                     rich: {
                        a: {
                           color: '#4B8AF9',
                           align: 'center',
                           fontSize: 24,
                           fontWeight: 'bold',
                           fontFamily: 'D-DIN'
                        },
                        b: {
                           color: '#fff',
                           align: 'center',
                           fontSize: 14
                        },
                        c: {
                           color: '#fff',
                           align: 'center',
                           fontSize: 14
                        }
                     },
                     formatter: function (params) {
                        // console.log(params, 'params')
                        return '{b|' + params.seriesName + '}\n\n' + '{a|' + params.value + '/}' + '{c|' + sum + '}'
                     },
                     position: 'center',
                     padding: [3, 4, 5, 170],
                     show: true,
                     textStyle: {
                        fontSize: '18',
                        fontWeight: 'normal',
                        color: '#fff'
                     }
                  }
               },
               itemStyle: {
                  normal: {
                     color: '#4B8AF9',
                     shadowColor: '#4B8AF9',
                     shadowBlur: 0
                  }
               }
            }, {
               value: sum - arr[i].onlineNum,
               name: 'invisible',
               itemStyle: {
                  normal: {
                     color: 'rgba(123,148,192,0.2)'
                  },
                  emphasis: {
                     color: 'rgba(123,148,192,0.2)'
                  }
               }
            }]
         })
    }
  return {
      series: seriesData
  }
}