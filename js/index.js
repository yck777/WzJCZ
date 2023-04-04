// 1、勤务等级
const control_grade = echarts.init(document.getElementById('control_grade'));
control_grade.setOption(control_gradeOption());

// 2、无感通行 时长
const city_lane_car = echarts.init(document.getElementById('city_lane_car'));

// 3、成效总览
const city_lane_number = echarts.init(document.getElementById('city_lane_number'));

// 4.警护装备
const county_bayonet_car = echarts.init(document.getElementById('county_bayonet_car'));
county_bayonet_car.setOption(city_bayonet_carOption());

// 5、处置分类
const county_lane_car = echarts.init(document.getElementById('county_lane_car'));
county_lane_car.setOption(county_bayonet_carOption());

// 6、圈层分类
const circles = echarts.init(document.getElementById('circles'));

// 7、数据透视
const item_comparison = echarts.init(document.getElementById('item_comparison'));


// 时间
let time = setInterval(() => {
  $('.timer').html(formatTime('SS'));
}, 1000);

// 封装点击
const loopTraversal = (dom,callback) => {
  const handoff = dom;
  handoff.each(function (index) {
    $(this).on('click', function () {
      $(this).addClass('active').siblings().removeClass('active');
      callback(index);
    })
  })
}

// 勤务资源
let serviceFlag = true;
loopTraversal($('.service i'), function (index) {
  if (index == 0) {
    $('#control_grade').show();
    $('.service_box').hide();
  } else {
    $('#control_grade').hide();
    if (serviceFlag) {
      let str = `
    <div class="width100 calc100 check_box service_box">
      <div class="check" style="padding:0 20px;">
          <div class="bor">
            <p><span class="fs_color">500</span>人</p>
            <p>警力总数</p>
          </div>
          <div>
            <p><span class="fs_color">450</span>人</p>
            <p>在岗警力数</p>
          </div>
      </div>
      <div id="police_type_num" class="height100"></div>
    </div>`
    $('.naturalResources').append(str);
    // 1.2 警力类型
    const police_type_num = echarts.init(document.getElementById('police_type_num'));
    police_type_num.setOption(police_type_numOption());
    serviceFlag = false;
    }
    else {
      $('.service_box').show();
    }
  }
});

// 无感通行 noninductiveGo
loopTraversal($('.noninductive i'), function (index) {
  city_lane_car.clear();
  if (index == 0) {
    city_lane_car.setOption(city_lane_carOption());
  } else {
    city_lane_car.setOption(ranking_Top3Option());
    
  }
});
$(".noninductive i").eq(0).click();

// 成效总览
loopTraversal($('.effectOverview i'), function (index) {
  // 今日核查数据
  if (index == 0) {
    city_lane_number.setOption(city_lane_numberOption([
      {
         onlineNum: 40,
          name:'人'
      },
      {
         onlineNum: 50,
         name:'车'
      },
      {
         onlineNum: 20,
         name:'物'
       }
      ]));
  } else {
    // 历史核查数据
    city_lane_number.setOption(city_lane_numberOption([
      {
         onlineNum: 70,
          name:'人'
      },
      {
         onlineNum: 20,
         name:'车'
      },
      {
         onlineNum: 30,
         name:'物'
       }
      ]));
  }
}) 
$(".effectOverview i").eq(0).click();


//站点信息
const aisleData1 = [
  {
    name: '站点总数',
    num: 123
  },
  {
    name: '站点运行总数',
    num: 93
  },
  {
    name: '卡口总数',
    num: 41
  },
  {
    name: '视频总数',
    num: 37
  },
  {
    name: '无人机总数',
    num: 25
  }
];
const aisleData2 = [
  {
    name: '固定检查站总数',
    num: 123
  },
  {
    name: '固定检查站已启用数',
    num: 93
  },
  {
    name: '移动检查站总数',
    num: 41
  },
  {
    name: '移动检查站启用数',
    num: 37
  }
];
function forData(data) {
  let str = '';
  for (let i = 0; i < data.length; i++){
    str += `
    <div class="aisle_num">
        <div class="aisle_box"></div>
        <div class="box_cont">
          <p>${ data[i].name }</p>
          <p>${ data[i].num }</p>>
        </div>
    </div>`
  }
    $('.aisle').append(str);
}
loopTraversal($('.site i'), function (index) {
  $('.aisle').children().remove();
  // 今日核查数据
  if (index == 0) {
    forData(aisleData1);
  } else {
    forData(aisleData2);
  }
});
$(".site i").eq(0).click();

// 圈层分类
loopTraversal($('.circlesType i'), function (index) {
  // 今日核查数据
  if (index == 0) {
    circles.setOption(circlesOption([[17, 8, 17, 6, 80, 7], [26, 14, 33, 10, 10, 3]]));
  } else {
    // 历史核查数据
    circles.setOption(circlesOption([[37, 18, 27, 16, 20, 17], [46, 24, 13, 30, 15, 24]]));
  }
});
$(".circlesType i").eq(0).click();

// 成效分类
const total1 = [
  {
    name: '历史总量',
    num: 42,
    unit:'件',
  },
  {
    name: '总量(环比)',
    num: 52,
    unit:'%',
  },
  {
    name: '异常数据',
    num: 44,
    unit:'件',
  },
];
const total2 = [
  {
    name: '历史总量',
    num: 22,
    unit:'件',
  },
  {
    name: '总量(环比)',
    num: 32,
    unit:'%',
  },
  {
    name: '异常数据',
    num: 54,
    unit:'件',
  },
];
const total3 = [
  {
    name: '历史总量',
    num: 72,
    unit:'件',
  },
  {
    name: '总量(环比)',
    num: 22,
    unit:'%',
  },
  {
    name: '异常数据',
    num: 53,
    unit:'件',
  },
];
function effectForData(data) {
  let str = '';
  for (let i = 0; i < data.length; i++){
    str += `
    <div class="total_item">
      <div class="total_box">
        <div class="bors">
          <div class="bors_btm"></div>
        </div>
          <p><span>${data[i].num}</span>${data[i].unit}</p>
      </div>
      <div class="total_label">
          <p>${data[i].name}</p>
      </div>
    </div>`
  }
    $('.total').append(str);
}
loopTraversal($('.effectType i'), function (index) {
  $('.total').children().remove();
  if (index == 0) {
    effectForData(total1);
  }
  else if (index == 1) {
    effectForData(total2);
  } 
  else {
    effectForData(total3);
  }
});
$(".effectType i").eq(0).click();

// 数据透视
// 今日/历史
function btnFor(data1, data2) {
  // 优化tab栏切换卡顿问题-去除绑定事件
  $('.btnType button').unbind('click');
  loopTraversal($('.btnType button'), function (i) {
    if (i == 0) {
      item_comparison.setOption(item_comparisonOption(data1));
      }
    else {
      item_comparison.setOption(item_comparisonOption(data2));
      }
  });
  $(".btnType button").eq(0).click();
}

// 异常人员、区域车牌、车辆分类、物品分类
loopTraversal($('.dataPerspective i'), function (index) {
if (index == 0) {
  btnFor([
    {
      value: 30,
      name: '涉黄',
      color1: 'rgba(53, 183, 250, 0)',
      color2:'rgba(53, 183, 250, 1)'
    },
    {
      value: 30,
      name: '失信',
      color1: 'rgba(49, 108, 239, 0)',
      color2:'rgba(49, 108, 239, 1)'
    },
    {
      value: 30,
      name: '涉稳',
      color1: 'rgba(177, 72, 88, 0)',
      color2:'rgba(177, 72, 88, 1)'
    },
    {
      value: 30,
      name: '涉恐',
      color1: 'rgba(0, 255, 162, 0)',
      color2:'rgba(0, 255, 162, 1)'
    },{
      value: 30,
      name: '被剥夺政治权利',
      color1: 'rgba(238, 186, 26, 0)',
      color2:'rgba(238, 186, 26, 1)'
    },
    {
      value: 30,
      name: '其他',
      color1: 'rgba(240, 255, 0, 0)',
      color2:'rgba(240, 255, 0, 1)'
    }
  ],[
    {
      value: 130,
      name: '涉黄',
      color1: 'rgba(53, 183, 250, 0)',
      color2:'rgba(53, 183, 250, 1)'
    },
    {
      value: 130,
      name: '失信',
      color1: 'rgba(49, 108, 239, 0)',
      color2:'rgba(49, 108, 239, 1)'
    },
    {
      value: 130,
      name: '涉稳',
      color1: 'rgba(177, 72, 88, 0)',
      color2:'rgba(177, 72, 88, 1)'
    },
    {
      value: 130,
      name: '涉恐',
      color1: 'rgba(0, 255, 162, 0)',
      color2:'rgba(0, 255, 162, 1)'
    },{
      value: 130,
      name: '被剥夺政治权利',
      color1: 'rgba(238, 186, 26, 0)',
      color2:'rgba(238, 186, 26, 1)'
    },
    {
      value: 130,
      name: '其他',
      color1: 'rgba(240, 255, 0, 0)',
      color2:'rgba(240, 255, 0, 1)'
    }
  ]);
}   
else if (index == 1) {
  btnFor(
    [{
      value: 50,
      name: '省外',
      color1: 'rgba(53, 183, 250, 0)',
      color2:'rgba(53, 183, 250, 1)'
    },
    {
      value: 130,
      name: '省内非浙A',
      color1: 'rgba(49, 108, 239, 0)',
      color2:'rgba(49, 108, 239, 1)'
    },
    {
      value: 230,
      name: '浙A',
      color1: 'rgba(177, 72, 88, 0)',
      color2:'rgba(177, 72, 88, 1)'
    },
  ],[{
      value: 150,
      name: '省外',
      color1: 'rgba(53, 183, 250, 0)',
      color2:'rgba(53, 183, 250, 1)'
    },
    {
      value: 230,
      name: '省内非浙A',
      color1: 'rgba(49, 108, 239, 0)',
      color2:'rgba(49, 108, 239, 1)'
    },
    {
      value: 330,
      name: '浙A',
      color1: 'rgba(177, 72, 88, 0)',
      color2:'rgba(177, 72, 88, 1)'
    },
  ]);
} 
else if (index == 2) {
  btnFor([
    {
      value: 35,
      name: '网约车',
      color1: 'rgba(53, 183, 250, 0)',
      color2:'rgba(53, 183, 250, 1)'
    },
    {
      value: 10,
      name: '货运车',
      color1: 'rgba(49, 108, 239, 0)',
      color2:'rgba(49, 108, 239, 1)'
    },
    {
      value: 230,
      name: '危化品车',
      color1: 'rgba(177, 72, 88, 0)',
      color2:'rgba(177, 72, 88, 1)'
    },
    {
      value: 66,
      name: '客运大巴',
      color1: 'rgba(0, 255, 162, 0)',
      color2:'rgba(0, 255, 162, 1)'
    },
    {
      value: 65,
      name: '重点车辆',
      color1: 'rgba(238, 186, 26, 0)',
      color2:'rgba(238, 186, 26, 1)'
    },
    {
      value: 146,
      name: '租赁车',
      color1: 'rgba(240, 255, 0, 0)',
      color2:'rgba(240, 255, 0, 1)'
    },
    {
      value: 89,
      name: '出租车',
      color1: 'rgba(148, 55, 255, 0)',
      color2:'rgba(148, 55, 255, 1)'
    },
    {
      value: 101,
      name: '被盗抢车',
      color1: 'rgba(214, 0, 255, 0)',
      color2:'rgba(214, 0, 255, 1)'
    },
    {
      value: 45,
      name: '其他',
      color1: 'rgba(0, 255, 50, 0)',
      color2:'rgba(0, 255, 50, 1)'
    },
  ],[
    {
      value: 135,
      name: '网约车',
      color1: 'rgba(53, 183, 250, 0)',
      color2:'rgba(53, 183, 250, 1)'
    },
    {
      value: 110,
      name: '货运车',
      color1: 'rgba(49, 108, 239, 0)',
      color2:'rgba(49, 108, 239, 1)'
    },
    {
      value: 330,
      name: '危化品车',
      color1: 'rgba(177, 72, 88, 0)',
      color2:'rgba(177, 72, 88, 1)'
    },
    {
      value: 166,
      name: '客运大巴',
      color1: 'rgba(0, 255, 162, 0)',
      color2:'rgba(0, 255, 162, 1)'
    },
    {
      value: 165,
      name: '重点车辆',
      color1: 'rgba(238, 186, 26, 0)',
      color2:'rgba(238, 186, 26, 1)'
    },
    {
      value: 246,
      name: '租赁车',
      color1: 'rgba(240, 255, 0, 0)',
      color2:'rgba(240, 255, 0, 1)'
    },
    {
      value: 189,
      name: '出租车',
      color1: 'rgba(148, 55, 255, 0)',
      color2:'rgba(148, 55, 255, 1)'
    },
    {
      value: 201,
      name: '被盗抢车',
      color1: 'rgba(214, 0, 255, 0)',
      color2:'rgba(214, 0, 255, 1)'
    },
    {
      value: 145,
      name: '其他',
      color1: 'rgba(0, 255, 50, 0)',
      color2:'rgba(0, 255, 50, 1)'
    },
  ]);
}
else{
  btnFor([
    {
      value: 35,
      name: '枪支',
      color1: 'rgba(53, 183, 250, 0)',
      color2:'rgba(53, 183, 250, 1)'
    },
    {
      value: 10,
      name: '仿真枪',
      color1: 'rgba(49, 108, 239, 0)',
      color2:'rgba(49, 108, 239, 1)'
    },
    {
      value: 230,
      name: '子弹',
      color1: 'rgba(177, 72, 88, 0)',
      color2:'rgba(177, 72, 88, 1)'
    },
    {
      value: 66,
      name: '炸药',
      color1: 'rgba(0, 255, 162, 0)',
      color2:'rgba(0, 255, 162, 1)'
    },
    {
      value: 65,
      name: '雷管',
      color1: 'rgba(238, 186, 26, 0)',
      color2:'rgba(238, 186, 26, 1)'
    },
    {
      value: 146,
      name: '烟花爆竹',
      color1: 'rgba(240, 255, 0, 0)',
      color2:'rgba(240, 255, 0, 1)'
    },
    {
      value: 89,
      name: '危险化学品',
      color1: 'rgba(148, 55, 255, 0)',
      color2:'rgba(148, 55, 255, 1)'
    },
    {
      value: 101,
      name: '毒品',
      color1: 'rgba(214, 0, 255, 0)',
      color2:'rgba(214, 0, 255, 1)'
    },
    {
      value: 45,
      name: '管制刀具',
      color1: 'rgba(0, 255, 50, 0)',
      color2:'rgba(0, 255, 50, 1)'
    },
    {
      value: 89,
      name: '非法出版物及音响制品',
      color1: 'rgba(148, 55, 255, 0)',
      color2:'rgba(148, 55, 255, 1)'
    },
    {
      value: 101,
      name: '低慢小',
      color1: 'rgba(214, 0, 255, 0)',
      color2:'rgba(214, 0, 255, 1)'
    },
    {
      value: 45,
      name: '其他物品',
      color1: 'rgba(0, 255, 50, 0)',
      color2:'rgba(0, 255, 50, 1)'
    },
  ],[
    {
      value: 135,
      name: '枪支',
      color1: 'rgba(53, 183, 250, 0)',
      color2:'rgba(53, 183, 250, 1)'
    },
    {
      value: 110,
      name: '仿真枪',
      color1: 'rgba(49, 108, 239, 0)',
      color2:'rgba(49, 108, 239, 1)'
    },
    {
      value: 330,
      name: '子弹',
      color1: 'rgba(177, 72, 88, 0)',
      color2:'rgba(177, 72, 88, 1)'
    },
    {
      value: 166,
      name: '炸药',
      color1: 'rgba(0, 255, 162, 0)',
      color2:'rgba(0, 255, 162, 1)'
    },
    {
      value: 165,
      name: '雷管',
      color1: 'rgba(238, 186, 26, 0)',
      color2:'rgba(238, 186, 26, 1)'
    },
    {
      value: 246,
      name: '烟花爆竹',
      color1: 'rgba(240, 255, 0, 0)',
      color2:'rgba(240, 255, 0, 1)'
    },
    {
      value: 189,
      name: '危险化学品',
      color1: 'rgba(148, 55, 255, 0)',
      color2:'rgba(148, 55, 255, 1)'
    },
    {
      value: 201,
      name: '毒品',
      color1: 'rgba(214, 0, 255, 0)',
      color2:'rgba(214, 0, 255, 1)'
    },
    {
      value: 45,
      name: '管制刀具',
      color1: 'rgba(0, 255, 50, 0)',
      color2:'rgba(0, 255, 50, 1)'
    },
    {
      value: 189,
      name: '非法出版物及音响制品',
      color1: 'rgba(148, 55, 255, 0)',
      color2:'rgba(148, 55, 255, 1)'
    },
    {
      value: 201,
      name: '低慢小',
      color1: 'rgba(214, 0, 255, 0)',
      color2:'rgba(214, 0, 255, 1)'
    },
    {
      value: 145,
      name: '其他物品',
      color1: 'rgba(0, 255, 50, 0)',
      color2:'rgba(0, 255, 50, 1)'
    },
  ]);
}  
});
$(".dataPerspective i").eq(0).click();




// 频道
$('.drawers_mask').hide();
const drawers = $('.drawers');
$('.tabNav').on('click', function () {
  $('.drawers_mask').show();
  drawers.css('left', '0').css('transition', 'all 0.5s');
});