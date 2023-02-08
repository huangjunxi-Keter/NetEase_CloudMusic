// pages/index/index.js
import request from '../../utils/request'

Page({

    /**
     * 页面的初始数据
     */
    data: {
        bannersArray: null,
        recommendArray: null,
        topArray: null
    },

    /**
     * 生命周期函数--监听页面加载
     */
    async onLoad(options) {
        //#region  获取轮播图数据
        let bannersData = await request('/banner', {
            type: 2
        });

        this.setData({
            bannersArray: bannersData.banners
        });
        //#endregion

        //#region  获取推荐歌单数据
        let recommendData = await request('/personalized', {
            limit: 10
        });

        this.setData({
            recommendArray: recommendData.result
        });
        //#endregion

        //#region 获取排行榜数据
        /*
         *   需求分析：
         *       1. 需要根据 idx 的值获取对应的数据
         *       2. idx 的值取值范围是 0-20，我们只需要 0-4
         *       3. 需要发送5次请求
         * 
         */
        let topIndex = 0;
        let topData = [];

        while (topIndex < 5) {
            let result = await request('/top/list', {
                idx: topIndex++
            });
            let topDataItem = {
                name: result.playlist.name,
                tracks: result.playlist.tracks.slice(0, 5)
            };
            topData.push(topDataItem);

            this.setData({
                topArray: topData
            });
        }
        //#endregion
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