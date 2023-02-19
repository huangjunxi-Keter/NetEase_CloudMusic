// pages/index/index.js
import request from '../../utils/request'

Page({

    /**
     * 页面的初始数据
     */
    /**
     * 页面的初始数据
     */
    data: {
        bannersArray: null,
        recommendArray: null,
        topArray: null,
    },

    //#region 跳转到每日推荐
    toRecommendSong() {
        wx.navigateTo({
            url: '/pages/recommendSong/recommendSong',
        });
    },
    //#endregion

    //#region 跳转到音乐详情
    toSongDetail(event) {
        let {
            songid,
            index,
            songlisttype,
            songlistid
        } = event.currentTarget.dataset;

        wx.navigateTo({
            url: `/pages/songDetail/songDetail?songId=${songid}&index=${index}&songListId=${songlistid}&songListType=${songlisttype}`,
        });
    },
    //#endregion

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
        let topData = [];
        let tops = await request('/toplist');
        for (let i = 0; i < 5; i++) {
            let result = await request('/playlist/track/all', {
                id: tops.list[i].id,
                limit: 5
            });
            let topDataItem = {
                id: tops.list[i].id,
                name: tops.list[i].name,
                tracks: result.songs
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
    onReady: function () {

    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow: function () {

    },

    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide: function () {

    },

    /**
     * 生命周期函数--监听页面卸载
     */
    onUnload: function () {

    },

    /**
     * 页面相关事件处理函数--监听用户下拉动作
     */
    onPullDownRefresh: function () {

    },

    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom: function () {

    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage: function () {

    }
})