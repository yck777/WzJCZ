function circlesOption(datas) {
const data = datas[0];
const data2 = datas[1];
const colorArr2 = ["rgba(11, 83, 128)", "rgba(2, 143, 224)", "rgba(11, 83, 128)"];
const colorArr = ["rgb(12, 109, 122)", "rgba(1, 241, 228)", "rgb(12, 109, 122)"];
let color = {
    type: "linear",
    x: 0,
    x2: 1,
    y: 0,
    y2: 0,
    colorStops: [
        {
            offset: 0,
            color: colorArr[0],
        },
        {
            offset: 0.5,
            color: colorArr[0],
        },
        {
            offset: 0.5,
            color: colorArr[1],
        },
        {
            offset: 1,
            color: colorArr[1],
        },
    ],
};
let color2 = {
    type: "linear",
    x: 0,
    x2: 1,
    y: 0,
    y2: 0,
    colorStops: [
        {
            offset: 0,
            color: colorArr2[0],
        },
        {
            offset: 0.5,
            color: colorArr2[0],
        },
        {
            offset: 0.5,
            color: colorArr2[1],
        },
        {
            offset: 1,
            color: colorArr2[1],
        },
    ],
};
let barWidth = 30;

return {
      tooltip: {
         trigger: 'axis',
         formatter: function (params) {
             var str = params[0].name + ":";
             params.filter(function (item) {
                 if (item.componentSubType == "bar") {
                     str += "<br/>" + item.seriesName + "：" + item.value;
                 }
             });
             return str;
         },
     },
     //图表大小位置限制
     grid: {
         x: '5%',
         x2: '5%',
         y: '8%',
         y2: '8%',
     },
     xAxis: {
         data: ['环省', '环城', '环赛', '水域'],
         //坐标轴
         axisLine: {
             show: true,
             lineStyle: {
                 width: 1,
                 color: '#214776'
             },
             textStyle: {
                 color: '#fff',
                 fontSize: '10'
             }
         },
         type: 'category',
         axisLabel: {
             textStyle: {
                 color: '#C5DFFB',
                 fontWeight: 500,
                 fontSize: '14'
             }
         },
         axisTick: {
             textStyle: {
                 color: '#fff',
                 fontSize: '16'
             },
             show: false,
         },
         axisLine: {
             //坐标轴轴线相关设置。数学上的x轴
             show: true,
             lineStyle: {
                 type: 'dashed',//线的类型 虚线
                 color: '#DEDEDE',
             },
         },
     },
     yAxis: {
         name: '',
         nameTextStyle: {
             color: '#DEDEDE',
             fontSize: 12,
            //  padding: 10,
         },
         type: 'value',
         splitLine: {
             show: true,
             lineStyle: {
                 type: 'dashed',//线的类型 虚线0
                 opacity: 0.2//透明度
             },
         },
         axisTick: {
             show: false
         },
         axisLine: {
             show: false,
         },
         //坐标值标注
         axisLabel: {
             show: true,
             textStyle: {
                 color: '#C5DFFB',
             }
         },
     },
     series: [
         //中
         {
             z: 1,
             name: '站点总数',
             type: "bar",
             barWidth: barWidth,
             barGap: "0%",
             data: data,
             itemStyle: {
                 normal: {
                     color: color,
                     //柱形图上方标题
                     label: {
                         show: true,
                         position: 'top',
                         textStyle: {
                             color: 'rgb(1, 255, 250)',
                             fontSize: 14
                         }
                     },
                 }
             },
         },
         //下
         {
             z: 2,
             name: '站点总数',
             type: "pictorialBar",
             data: data,
             symbol: "diamond",
             symbolOffset: ["-75%", "50%"],
             symbolSize: [barWidth, 10],
             itemStyle: {
                 normal: {
                     color: color
                 },
             },
             tooltip: {
                 show: false,
             },
         },
         //上
         {
             z: 3,
             name: '站点总数',
             type: "pictorialBar",
             symbolPosition: "end",
             data: data,
             symbol: "diamond",
             symbolOffset: ["-85%", "-60%"],
             symbolSize: [barWidth - 4, (10 * (barWidth - 4)) / barWidth],
             itemStyle: {
                 normal: {
                     borderWidth: 2,
                     color: colorArr[2]
                 },
             },
             tooltip: {
                 show: false,
             },
         },
         {
             z: 1,
             name: '站点运行总数',
             type: "bar",
             barWidth: barWidth,
             barGap: "50%",
             data: data2,
             itemStyle: {
                 normal: {
                     color: color2,
                     //柱形图上方标题
                     label: {
                         show: true,
                         position: 'top',
                         textStyle: {
                             color: 'rgb(2, 157, 246)',
                             fontSize: 14
                         }
                     },
                 }
             },
         },
         {
             z: 2,
             name: '站点运行总数',
             type: "pictorialBar",
             data: data2,
             symbol: "diamond",
             symbolOffset: ["75%", "50%"],
             symbolSize: [barWidth, 10],
             itemStyle: {
                 normal: {
                     color: color2
                 },
             },
             tooltip: {
                 show: false,
             },
         },
         {
             z: 3,
             name: '站点运行总数',
             type: "pictorialBar",
             symbolPosition: "end",
             data: data2,
             symbol: "diamond",
             symbolOffset: ["75%", "-50%"],
             symbolSize: [barWidth - 4, (10 * (barWidth - 4)) / barWidth],
             itemStyle: {
                 normal: {
                     borderWidth: 2,
                     color: colorArr2[2]
                 },
             },
             tooltip: {
                 show: false,
             },
         },
     ],
   }
}