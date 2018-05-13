//index.js
//获取应用实例
const app = getApp()

Page({
  // 数据会对应转态 界面转态
  data: {
    // 默认的status是1 全部  setData 2 已完成
    status: 1,
    addShow: false,
    lists: [{
      title:'帮徐加元同学砍价',
      data:'刚刚',
      status: '1'
    },
    {
      title:'邀请柔柔同学看电影',
      data:'刚刚',
      status: '0'
    }],
    addText: '',
    curLists: [],
  },
  onLoad: function(options) {
status= this.options.status
  },

  onReady: function(){
      this.setData({
        status: status,
        curLists: this.data.lists
      })
   
  },
  showStatus: function(e){
    const status =  e.currentTarget.dataset.status;
    console.log(status);
    // console.log(this.data.status);
   
    if (status === '1') {
      this.setData({
        status: status,
        curLists: this.data.lists
      })
    }else{
      this.setData({
        status: status,
        curLists: this.data.lists.filter(item => +item.status === (status - 2))
      })
    }
  },
  showCur: function(data){
    if(this.data.status==='1'){
      this.setData({
        lists:data,
        curLists:data
      })
    }else{
      this.setData({
        lists:data,
        curLists:data.filter(item => +item.status === (this.data.status - 2))
      })
    }
  },


  addTodoShow: function(e){
    this.setData({
      addShow: true
    })
  },
  addTodo: function(e){
    const task = {
      title: this.data.addText,
      data: '刚刚',
      status: '0'
    }
    const temp = [...this.data.lists,task];
    this.setData({
      lists: temp,
      addShow: false
    })
    this.showCur(temp)
    wx.showToast({
      title: '添加成功',
      icon: 'success',
      duration: 1000
    })
      // 如何添加一条新的任务？ 显示多少条 由lists决定 lists push
      // 数据驱动界面，数据变，界面刷新  mvvm model（数据模型data）view  vm（视图模型层）
  },
 
  addTodoHide: function(e){
    this.setData({
      addShow:false
    })
  },
  setInput: function(e){
    this.setData({
      addText: e.detail.value
    })
  },
  changeTodo: function(e){
    // 当前点击条目的status sucess 数据lists 跟当前条目相关的这一条数据 将status 值更新为1
    const index =e.currentTarget.dataset.item;
    const temp = this.data.lists;
  temp.forEach((item, i) => {
      // console.log(item, i);
      if (i == index) {
        if(item.status=='0'){
          item.status='1'
          this.showCur(temp)
          wx.showToast({
            title: '已完成任务',
            icon: 'success',
            duration: 1000,
          })
        }else{
          item.status ='0'
          this.showCur(temp)
          wx.showToast({
            title: '任务打回重做',
            icon: 'success',
            duration: 1000
          })
        }
      }
    })
    this.setData({
      lists: temp
    })
  }
 
})
