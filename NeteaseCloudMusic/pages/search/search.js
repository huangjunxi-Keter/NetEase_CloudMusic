// pages/search/search.js

import request from '../../utils/request'

Page({

    /**
     * 页面的初始数据
     */
    data: {
        placeholderContent: '',
        hotList: []
    },

    //#region 获取初始化数据
    async getInitData() {
        let placeholderContentData = await request('/search/default');
        let hotListData = await request('/search/hot/detail');

        this.setData({
            placeholderContent: placeholderContentData.data.showKeyword,
            hotList: hotListData.data
        });
    },
    //#endregion

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad(options) {
        this.getInitData();
    },

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady() {

    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow() {

    },

    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide() {

    },

    /**
     * 生命周期函数--监听页面卸载
     */
    onUnload() {

    },

    /**
     * 页面相关事件处理函数--监听用户下拉动作
     */
    onPullDownRefresh() {

    },

    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom() {

    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage() {

    }
})