// pages/personal/personal.js

import request from '../../utils/request'

Page({

    /**
     * 页面的初始数据
     */
    data: {
        startY: 0,
        coverTransform: 'translateY(0)',
        coverTransition: '',
        userInfo: {
            avatarUrl: '/static/images/personal/missing-face.png',
            nickname: '游客',
            backgroundUrl: '/static/images/personal/bgImg2.jpg'
        },
        recentPlayList: []
    },

    //#region 拉动效果
    handleTouchStart(event) {
        // 获取手指的起始坐标
        this.setData({
            startY: event.touches[0].clientY,
            coverTransition: ''
        });
    },

    handleTouchMove(event) {
        let moveY = event.touches[0].clientY;
        let moveDistance = moveY - this.data.startY;

        if (moveDistance >= 0 && moveDistance <= 80) {
            this.setData({
                coverTransform: `translateY(${moveDistance}rpx)`
            });
        }
    },

    handleTouchend() {
        this.setData({
            startY: 0,
            coverTransform: 'translateY(0)',
            coverTransition: 'transform 0.35s linear'
        });
    },
    //#endregion

    //#region 跳转至login界面
    toLogin() {
        if (this.data.userInfo.nickname === '游客') {
            wx.reLaunch({
                url: '/pages/login/login'
            });
        } else {
            console.log("toLogin:", "已登录，不进行跳转");
        }
    },
    //#endregion

    //#region 获取最近播放
    async getRencentPlayListData(userId) {
        let recentPlayListData = await request('/user/record', {
            uid: userId,
            type: 1
        });

        let index = 0;
        let recentPlayList = recentPlayListData.weekData.splice(0, 10).map(item => {
            item.id = index++;
            return item;
        });

        this.setData({
            recentPlayList
        });
    },
    //#endregion

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad(options) {
        // 读取用户基本信息
        let userInfo = wx.getStorageSync('userInfo');
        if (userInfo) {
            this.setData({
                userInfo: JSON.parse(userInfo)
            });
            
            this.getRencentPlayListData(this.data.userInfo.userId);
        }
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