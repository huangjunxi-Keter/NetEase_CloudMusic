// pages/recommendSong/recommendSong.js

import request from '../../utils/request';
import PubSub from 'pubsub-js';

Page({

    /**
     * 页面的初始数据
     */
    data: {
        day: '',
        month: '',
        recommendSongList: []
    },

    //#region 获取每日推荐列表
    async getRecommendSongListData() {
        let recommendSongListData = await request('/recommend/songs');
        let recommendSongList = recommendSongListData.data.dailySongs.map(item => {
            item.artistStr = '';
            for (let i = 0; i < item.ar.length; i++) {
                if (i > 0) {
                    item.artistStr += '/';
                }
                item.artistStr += item.ar[i].name;
            }
            return item;
        });
        this.setData({
            recommendSongList
        });
    },
    //#endregion

    //#region 跳转到音乐详情
    toSongDetail(event) {
        let {
            song,
            index
        } = event.currentTarget.dataset;

        wx.navigateTo({
            url: `/pages/songDetail/songDetail?songId=${song.id}&index=${index}&songListType=recommend`,
        });
    },
    //#endregion

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad(options) {
        // 判断用户是否登录
        let userInfo = wx.getStorageSync('userInfo');
        if (!userInfo) {
            wx.showToast({
                title: '请先登录',
                icon: 'none',
                success: () => {
                    wx.reLaunch({
                        url: '/pages/login/login',
                    })
                }
            });
        }

        // 获取日期
        this.setData({
            day: new Date().getDate(),
            month: new Date().getMonth() + 1
        });

        // 获取每日推荐
        this.getRecommendSongListData();
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