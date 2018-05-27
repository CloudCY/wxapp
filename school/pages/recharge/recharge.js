// pages/recharge/recharge.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    dorm: {
      name: '默认寝室',
      tip:{
        content: '研1034',
        color: 'green'
      }
    },
    amounts:[
      {value:50,checked:false},
      {value:100,checked:false},
      {value:150,checked:false},
      {value:200, checked:false},
      {value:250, checked:false}
    ],
    btn_disabled: true
  },
  bindAmountChange(e){
    // console.log(e.detail.value)
    let amounts = this.data.amounts;
    let strVal = e.detail.value;
    for (let amount of amounts){
      amount.checked = amount.value ===parseInt(strVal) ;
     
    }
    this.setData({
      amounts,
      btn_disabled: false
    })
  },
 
})