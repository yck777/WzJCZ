function county_bayonet_carOption(data) {
    const trafficWay = [
        {
           name: "放行",
           value: 2000,
        },
        {
           name: "劝返",
           value: 1234,
        },
        {
           name: "形式拘留",
           value: 1541,
        },
        {
           name: "治安拘留",
           value: 564,
        },
        {
            name: "强制戒毒",
            value: 136,
        },
        {
            name: "行政处罚",
            value: 863,
         },
         {
             name: "教育释放",
             value: 554,
        },
        {
            name: "移交外单位",
            value: 264,
       },
   ];
   var dataArr = [];
for (var i = 0; i < 4; i++) {
  if (i % 2 === 0) {
    dataArr.push({
      name: (i + 1).toString(),
      value: 25,
      itemStyle: {
        normal: {
          color: "#F1B35E",
          borderWidth: 0,
          borderColor: "rgba(0,0,0,0)"
        }
      }
    }, {
      value: 4,
      name: '',
      itemStyle: {
        normal: {
          label: {
            show: false,
          },
          labelLine: {
            show: false,
          },
          color: 'rgba(0, 0, 0, 0)',
          borderColor: 'rgba(0, 0, 0, 0)',
          borderWidth: 0,
        },
      },
    })
  } else {
    dataArr.push({
      name: (i + 1).toString(),
      value: 20,
      itemStyle: {
        normal: {
          color: "#F1B35E",
          borderWidth: 0,
          borderColor: "rgba(0,0,0,0)"
        }
      }
    }, {
      value: 4,
      name: '',
      itemStyle: {
        normal: {
          label: {
            show: false,
          },
          labelLine: {
            show: false,
          },
          color: 'rgba(0, 0, 0, 0)',
          borderColor: 'rgba(0, 0, 0, 0)',
          borderWidth: 0,
        },
      },
    })
  }

}

var data = [];
var color = ['#56FFD7', '#6DA7FF', '#2B64FF', '#68FF83', '#8792FF', '#F6FD6A'];
for (var i = 0; i < trafficWay.length; i++) {
  data.push(
    {
      value: trafficWay[i].value,
      name: trafficWay[i].name,
      itemStyle: {
        normal: {
          borderWidth: 5,
          shadowBlur: 2,
          borderColor: color[i],
          shadowColor: color[i],
         },
      },
    },
    {
      value: 2,
      name: '',
      itemStyle: {
        normal: {
          label: {
            show: false,
          },
          labelLine: {
            show: false,
          },
          color: 'rgba(0, 0, 0, 0)',
          borderColor: 'rgba(0, 0, 0, 0)',
          borderWidth: 0,
        },
      },
    }
  );
}
var seriesOption = [
  {
    name: '',
    type: 'pie',
    clockWise: false,
    radius: ['65%', '70%'],
   center: ['48%', '50%'],
    hoverAnimation: false,
    labelLine: {
      normal: {
        length: 10,
        length2: 14,
      }
      },
    label: {
      show: true,
      position: 'outer',
      alignTo: 'labelLine',
      // ·圆点
      backgroundColor: 'auto',
      height: 0,
      width: 0,
      lineHeight: 0,
      distanceToLabelLine: 0,
      borderRadius: 2.5,
      padding: [2.5, -2.5, 2.5, -2.5],
      formatter: function (params) {
        if (params.name !== '') {
          return `{a|${params.name}：}{b|${params.value}个}`;
        } else {
          return '';
        }
      },
      rich: {
        a: {
          padding: [0, 0, 0, 10],
          color: '#fff'
        },
        b: {
          padding: [0, 10, 0, 0],
          color: '#fff'
        },
      }
    },
    data: data,
  },
  {
    type: 'pie',
    zlevel: 3,
    silent: true,
    center: ['48%', '50%'],
    radius: ['50%', '55%'],
    label: {
      normal: {
        show: false
      },
    },
    labelLine: {
      normal: {
        show: false
      }
    },
    data: dataArr
  },
];
   return {
      color: color,
      title: [{
        text: '处置分类',
        top: '48%',
        textAlign: 'center',
        left: '47%',
        textStyle: {
          color: '#fff',
          fontSize: 16,
          fontWeight: '400',
        }
      }],
      tooltip: {
        show: false,
      },
    
      toolbox: {
        show: false,
      },
      series: seriesOption,
    }
}