// 运用启动 onlaunch
// App -> page
// 全局运用级别的一些行为，添加全局的数据
import db from './assets/db.js';

App({
  onLaunch: function () {
    Object.assign(this.globalData, db);
    // console.log(this.globalData);
    // 展示本地存储能力
    // ajax请求
    // wx.request({
    //   url: 'https://resources.ninghao.net/wxapp-case/db.json',
    //   data: {},
    //   method: 'GET', 
    //   success: (response)=>{
    //     // console.log(response)
    //     Object.assign(this.globalData,response.data)
    //     console.log(this.globalData)
    //   },
    //   fail: (error)=>{
    //     // console.log(error)
    //   },
     
    // })
  },
  globalData: {

  }
})