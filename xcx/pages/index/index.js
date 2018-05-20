import util from '../../utils/index';
import config from '../../utils/config';
const app = getApp()

Page({
  data: {
    hiddenLoading: false,
    hasMore: true,
    page: 1,
    pageSize: 4,
    days: 3,
    articleList: [],
    articles: []
  },
 onLoad(){
  this.requestArticle();
  

 },
 requestArticle(){
    util.request({
      url: 'list',
      // ? web url , mock 本地的
      mock: true,
      data: {
        tagL: '微信热门',
        status: this.data.page|| 1,
        days: this.data.days || 3,
        pageSize: this.data.pageSize,
        langs: 'en'
      }
    }).then((res)=>{
      console.log(res.data)
      this.setData({
        hiddenLoading:true,
        articleList: res.data
      })
    })
 },
 onShareAppMessage(){
   let title = config.defaultsShareText ||''
   return {
     title,
     path: `/pages/index/index`,
     success: function(res){

     },
     fail: function(res){

     }
   }
 },

 onReachBottom(){
  if(this.data.hasMore){
    let nextPage = this.data.page +1;
    this.setData({
      page:nextPage
    });
    this.requestArticle();
  }
 },
 onPullDownRefreash(){
   this.setData({
     hiddenLoading:true
   })
  //  this.requestArticle();
 },
 showDetail(e){
   let dataset= e.currentTarget.dataset;
   let item = dataset && dataset.item;
   let contentId = item.contentId || 0;
   wx.navigateTo({
     url: `../detail/detail?contentId?=${contentId}`,
     success: function(res){
       // success
     },
     fail: function() {
       // fail
     },
     complete: function() {
       // complete
     }
   })
 }

})
