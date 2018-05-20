//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    hasUserInfo: false,
    //
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    userInfo: {},
    addShow: true,
    foucs: true,
    addText: '',
    lists: [],
  },
  getUserInfo: function (e) {
    console.log(e)
    this.setData({
      hasUserInfo: true,
      userInfo: e.detail.userInfo
    })

    wx.setStorage({
      key: 'user-info',
      data: e.detail.userInfo,
      success: function (res) {
        console.log("保存成功")
      }
    })
  },

  onLoad() {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true,
      })
    }
    wx.getStorage({
      key: 'lists',
      success: (res) =>{
        // success
        console.log(res);
        this.setData({
          'lists': res.data
        })
      }
    })
  },
  addTodoHide(e) {
    this.setData({
      addShow: false,
      foucs:false,
      addText:'',
    })
  }
  ,
  addTodo(e) {
    if (!this.data.addText.trim()) {
      return;
    }
    //item只是一个对象 文字只是一部分
    var addT = {
      title: this.data.addText,
      status: '0',
      id: new Date().getTime()
    }
    // console.log(addT)
    const temp = [
      addT,
      ...this.data.lists
    ]
    
    this.setData({
      lists: temp
    })
    wx.setStorage({
      key:'lists',
      data:temp
    })
    wx.showToast({
      title:'添加成功!',
      icon:'success',
      duration:1000
    })
    this.addTodoHide();
  },
  setInput(e) {
    console.log(e)
    this.setData({
      "addText": e.detail.value
    })
  },
  changeTodo: function(e){
    
    const temp = this.data.lists;
    temp.forEach(item => {
      item.status='1'
      wx.showToast({
        title: '已完成任务',
        icon: 'success',
        duration: 1000,
      })
    });
   this.setData({
     lists:temp
   })
  },

  //事件处理函数

})
