//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    imgUrls: [
      '/images/swiper01.jpg',
      '/images/swiper02.png',
      '/images/swiper03.png'
    ],
    indicatorDots: false,
    autoplay: true,
    interval: 5000,
    duration: 1000,
    proList: [
      {
      logo: '/images/pro_01.jpg',
      title: '重磅出炉！平安最值得骄傲的十佳...',
      desc: '服务无时差，平安无小事！',
      },
      {
        logo: '/images/pro_02.jpg',
        title: '就在你身边，这些平安人的服务做...',
        desc: '创意十足的广告，说到做到的服务。',
        },
        {
          logo: '/images/pro_03.jpg',
          title: '不是保险太贵，是你心里每个保险留地位。',
          desc: '中国平安',
          }
      ]
  },
  //事件处理函数
  
  onLoad: function () {
    this.setData({
         test: '01',
    })
  },
  toDetail: function(e){
      console.log(e);
      var index = e.currentTarget.dataset.index;
      console.log(index);
  }
})
