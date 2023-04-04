
// 时间
let time = setInterval(() => {
  $('.timer').html(formatTime('SS'));
}, 1000);

// 1、查控方式
const inspectionManner = echarts.init(document.getElementById('inspectionManner'));
inspectionManner.setOption(inspectionMannerOption());

// 3、社会治安防控等级 、勤务等级
const prevention_respond = echarts.init(document.getElementById('prevention_respond'));

// 时间范围点击
$(function () {
    let flag = true;
    const laydate = $('.site-demo-laydate');
    const timeClick = $('.timer-p');
    timeClick.on('click', function () {
      //日期时间范围
      if (flag) {
        laydate.show();
        flag = false;
      }
      else {
        laydate.hide();
        flag = true;
      } 
    })
  })
  
layui.use('laydate', function () {
  var laydate = layui.laydate;
  laydate.render({
    elem: '#demo-n1'
    , position: 'static'
    
    ,range: true //或 range: '~' 来自定义分割字符
  });
})
  
// 视频
$(function () {
  $('.videoBtb').on('click', function () {
    layer.open({
      type: 1,
      closeBtn: 1, //关闭按钮
      title: ['视频', 'font-size:16px;'],  //标题
      area: ["1200px",'auto'],
      scrollbar: true,
      content: $('#video'), //这里content是一个DOM，注意：最好该元素要存放在body最外层，否则可能被其它的相对元素所影响
      end: function () {
        // 通过js获取Id然后进行隐藏
        $('#video').hide();
        layer.closeAll();
      }
    });
  })
});



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
// 物品查控、查控量统计
loopTraversal($('.statistics i'), function (index) {
  if (index == 0) {
    $('#article_custody').hide();
    $('.vidoes').show();
  }
  else {
    $('.vidoes').hide();
    $('#article_custody').show();
    // 2查控量统计
    const article_custody = echarts.init(document.getElementById('article_custody'));
    article_custody.clear();
    article_custody.setOption(inspectionStatisticsOption());
  }
});
$('.statistics i').eq(0).click();

// 社会治安防控响应等级、勤务等级
loopTraversal($('.grade i'), function (index) {
  prevention_respond.clear();
  if (index == 0) {
    $('.layui-respond').show();
    $('.layui-duty').hide();
    prevention_respond.setOption(prevention_respondOption([
      {
          value: 10,
          name: '三级响应',
      },
      {
          value: 6,
          name: '二级响应',
      },
      {
          value: 4,
          name: '一级响应',
      },
      {
          value: 1,
          name: '一级响应+',
      },
    ], '响应等级'));
  }
  else {
    $('.layui-respond').hide();
    $('.layui-duty').show();
    prevention_respond.setOption(prevention_respondOption([
  {
    value: 100,
    name: '三级勤务',
  },
  {
    value: 10,
    name: '二级勤务',
  },
  {
    value: 6,
    name: '一级勤务',
  },
    ], '勤务等级'));
  }
});
$('.grade i').eq(0).click();


// 频道
$('.tabNav').on('click', function () {
  const drawers = $('.drawers');
  drawers.show();
})