
function control_gradeOption(data) {
  const res = [
      {value:200, name:'一级+'},
      {value:400, name:'一级'},
      {value:600, name:'二级'},
      {value:800, name:'三级'},
    ]
  const color = ['#efbb1a', '#d77169', '#c14f60', '#953f61'];
return {
  color:color,
  series : [
      {
          name:'漏斗图',
          type:'funnel',
          y: 10,
          x:20,
          y2:10,
          x2:100,
          sort : 'descending', // 'ascending', 'descending'
          gap :0,
          roseType: true,
          legendHoverLink: false,
          labelLine: { //视觉引导线样式
              length: 30,
              lineStyle: {
                  width: 2,
                  type: 'solid'
              }
          },
          label: {
              formatter: (data) => {
                  return data.name + '    ' + data.value
              },
          },
          itemStyle: {
              normal: {
                  borderWidth: 0,
                  shadowBlur: 30,
                  shadowOffsetX: 0,
                  shadowOffsetY: 10,
                  shadowColor: 'rgba(0, 0, 0, 0.5)'
              }
          },
      data: res,
      }
      
  ]
  }
}

