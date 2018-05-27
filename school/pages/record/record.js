// pages/record/record.js
Page({

  data: {
    startData: '2018-05-25',
    endData: ''
  },
  bindDateChange(e) {
    // console.log(e)
   const type =  e.currentTarget.dataset.type;
   if(type =='startPicker'){
    this.startData({
      startData: e.detail.value,
      endPickerStart: e.detail.value
    })
   }else{
     this.setData({
       endData: e.detail.value,
       
     })
   }
  
  },
  
})