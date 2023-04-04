function ranking_Top3Option(data) {
  // mock 数据
const dataArr = {
	xdata: ['鹿城临江', '机场检查站', '苍南桥墩(出浙)', '苍南木材(入浙)', '文成玉壶', '泰顺龙井', '泰顺彭月', '瑞安高桐公路', '乐清湖雾', '永嘉桥头'],
	result: [
		{ name: 'Top1', data: [320, 435, 490, 340, 320, 270, 360, 320, 435, 490] },
		{ name: 'Top2', data: [150, 220, 210, 310, 140, 180, 340, 320, 270, 360] },
		{ name: 'Top3', data: [250, 120, 288,320, 435, 490, 340, 320, 270, 360] },
	]
}
const diamondData = dataArr.result.reduce((pre, cur, index) => {
	pre[index] = cur.data.map((el, id) => el + ( pre[index - 1] ? pre[index - 1][id] : 0))
	return pre
}, [])

const color = [
	[{ offset: 0, color: "#dc0707", }, { offset: 0.5, color: "#dc0707", }, { offset: 0.5, color: "#af0808", }, { offset: 1, color: "#af0808", }],
	[{ offset: 0, color: "#f67c20", }, { offset: 0.5, color: "#f67c20", }, { offset: 0.5, color: "#cc681e", }, { offset: 1, color: "#cc681e", }],
	[{ offset: 0, color: "#efff37", }, { offset: 0.5, color: "#efff37", }, { offset: 0.5, color: "#d5e700", }, { offset: 1, color: "#d5e700", }],
	[{ offset: 0, color: "#32ffee", }, { offset: 0.5, color: "#32ffee", }, { offset: 0.5, color: "#00e8d5", }, { offset: 1, color: "#00e8d5", }],
	[{ offset: 0, color: "#46c9ff", }, { offset: 0.5, color: "#46c9ff", }, { offset: 0.5, color: "#00b4ff", }, { offset: 1, color: "#00b4ff", }],
	[{ offset: 0, color: "#54a0ff", }, { offset: 0.5, color: "#54a0ff", }, { offset: 0.5, color: "#1f83ff", }, { offset: 1, color: "#1f83ff", }],
]

let series = dataArr.result.reduce((p, c, i, array) => {
	p.push({
		z: i + 1,
		stack: '总量',
		type: 'bar',
		name: c.name,
		barWidth: 30,
		data: c.data,
		itemStyle:{ color: { type: 'linear', x: 0, x2: 1, y: 0, y2: 0, colorStops: color[i] } },
	},{
		z: i + 10,
		type: 'pictorialBar',
		symbolPosition: 'end',
		symbol: 'diamond',
		symbolOffset: [0, '-50%'],
		symbolSize: [30, 10],
		data: diamondData[i],
		itemStyle: { color: { type: 'linear', x: 0, x2: 1, y: 0, y2: 0, colorStops: color[i] } },
		tooltip: { show: false },
	})

	// 是否最后一个了？
	if (p.length  === (array.length) * 2) {
		p.push({
			z: array.length * 2,
			type: "pictorialBar",
			symbolPosition: "start",
			data: dataArr.result[0].data,
			symbol: "diamond",
			symbolOffset: ["0%", "50%"],
			symbolSize: [30, 10],
			itemStyle: { color: { type: 'linear', x: 0, x2: 1, y: 0, y2: 0, colorStops: color[0]} },
			tooltip: { show: false },
		})
		return p
	}

	return p
}, [])

// tooltip
const tooltip = { trigger: "axis" }

// legend
const legend = {
	data: dataArr.result.map(item => item.name),
	textStyle: { fontSize: 14, color: '#fff'},
	itemWidth: 25,
	itemHeight: 15,
	itemGap: 15,
	top: '5%',
}
// grid
const grid = { top: '18%', left: '10%', right: '3%', bottom: '10%'}
//  滑动
const dataZoom = [
    {
      type: 'inside',
      show: true,
      start: 1,//数据窗口范围的起始百分比,表示1%
      end: 40,//数据窗口范围的结束百分比,表示35%坐标
    },
  ];
  
// xAxis
const xAxis = { 
	axisTick: { show: true },
	axisLine: { lineStyle: { color: 'rgba(255,255,255, .2)' } },
	axisLabel: { interval:0,textStyle: { fontSize: 12, color: '#fff'  }, },
	data: dataArr.xdata
}

// yAxis
  const yAxis = [{ 
  name: '分',
  nameTextStyle: {
      color: "#fff",
      fontSize: 14,
  },
	splitLine: { lineStyle: { color: 'rgba(255,255,255, .05)' } },
	axisLine: { show: false, },
	axisLabel: { textStyle: { fontSize: 16, color: '#fff' } }
}]
  return {
    tooltip,
    xAxis,
    yAxis,
    series,
    grid,
    legend,
    dataZoom,
  }
}