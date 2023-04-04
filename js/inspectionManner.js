function inspectionMannerOption(datas) {
  const data = [
    {
      name: '卡口过车总数',
      value: 11,
      color1:'#99da69',
      color2:'#01babc',
    },
    {
      name: '检查车道车牌总数',
      value: 22,
      color1:'#d2d86d',
      color2:'#99da69',
    },
    {
      name: '检查车道人脸总数',
      value: 33,
      color1:'#d8a86c',
      color2:'#d2d86d',
    },
    {
      name: '人证核录',
      value: 44,
      color1:'#d7836c',
      color2:'#d8a86c',
    },
    {
      name: '异常反馈',
      value: 55,
      color1:'#20c1ab',
      color2:'#6ccbd7',
    } 
  ]
  const title = [];
  const series = [];

  data.forEach((item, index) => {
    title.push({
      text: item.value,
      subtext: item.name,
      top: index < 3 ?  18 + '%' :  62 + '%',
      left:index < 3 ? index * 30 + 19 + '%' : (index - 3) * 30 + 34 + '%',
      textAlign: 'center',
      itemGap: 10,
      subtextStyle: {
        color: '#fff',
        fontSize: 11,
        align: 'center',
      },
      textStyle: {
        color: '#f4e051',
        fontSize: 14,
      },
    });
    series.push({
      name: '基础饼图',
      type: 'pie',
      radius: ['45%', '52%'],
      center: [index < 3 ? index * 30 + 20 + '%' : (index - 3) * 30 + 35 + '%',
      index < 3 ?  28 + '%' :  72 + '%'],
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
      data: [
          {
              value: item.value,
              name: '未执行',
              itemStyle: {
                  normal: {
                      color: {
                          x: 0,
                          y: 0,
                          x2: 0,
                          y2: 1,
                          colorStops: [
                              {
                                  offset: 0,
                                  color: item.color1, // 0% 处的颜色
                              },
                              {
                                  offset: 1,
                                  color: item.color2, // 100% 处的颜色
                              },
                          ],
                          globalCoord: false, // 缺省为 false
                      },
                  },
              },
          },
          {
              value: 20,
              name: '未执行',
              itemStyle: {
                  normal: {
                      color: 'rgba(0,0,0)',
                  },
              },
          },
      ],
  },
  //环形分割线
  {
      name: '分割线',
      type: 'gauge',
      radius: '55%',
      clockwise: true,
      startAngle: '90', // 开始角度
      center: [index < 3 ? index * 30 + 20 + '%' : (index - 3) * 30 + 35 + '%',
      index < 3 ?  28 + '%' : 72 + '%'],
      endAngle: '-269.9999',
      splitNumber: 22, // 分割段数，默认为5
      zlevel: 2, // 用于分层，z-index的效果
      detail: {
          offsetCenter: [10, 20], // x, y，单位px
          formatter: ' ', // 格式化函数或字符串
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
          length: 12, // 属性length控制线长
          padding: [0, 0, 0],
          lineStyle: {
              color: '#022457',
              width: 3,
          },
      },
      axisLabel: {
          show: false,
      },
  });
  })
    return {
      title,
      series,
    }
}