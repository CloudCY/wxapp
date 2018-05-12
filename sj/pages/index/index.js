
import testDrive from "../../modules/test-drive"
// 在page里得到app 
const app = getApp()

Page({
  data: {
   slides: []
  },
  onLoad(){
    this.setData({
      slides: app.globalData.slides
    })
  },
  indicatorDots:true,
  testDrive,
  readMore(event) {
    const id = event.target.dataset.id
    wx.navigateTo({
      url: `/pages/vehicies/show?id=${id}`
    })
  }
  
})
