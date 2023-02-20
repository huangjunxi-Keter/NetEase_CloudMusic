// pages/search/search.js

import request from '../../utils/request'

Page({

    /**
     * 页面的初始数据
     */
    data: {
        placeholderContent: '',
        hotList: [],
        searchList: [],
        searchContent: '',
        isSend: false,
        time: null,
        historyList: []
    },

    //#region 获取初始化数据
    async getInitData() {
        // input 默认提示
        let placeholderContentData = await request('/search/default');
        // 热搜榜
        let hotListData = await request('/search/hot/detail');
        // 搜索记录
        let historyListData = wx.getStorageSync('searchHistoryList')

        this.setData({
            placeholderContent: placeholderContentData.data.showKeyword,
            hotList: hotListData.data,
            historyList: historyListData ? historyListData : []
        });
    },
    //#endregion

    //#region 表单Input回调（bindinput函数会把返回值作为input的value，不要把async写在回调函数上）
    handleInputChange(event) {

        //#region 函数节流（函数一段时间内只执行一次，不适合用在搜索，适合加载）
        /*
         *       1.初次进入 isSend 为 false
         *       2.开启节流阀 isSend = true（阻塞节流阀之后的操作）
         *       3.开启定时器
         *       4.定时器结束后 关闭节流阀 isSend = false
         */
        // if (this.data.isSend) {
        //     return;
        // }

        // this.setData({
        //     searchContent: event.detail.value,
        //     isSend: true
        // });

        // setTimeout(async () => {
        //     // 获取模糊匹配数据
        //     let searchListData = await request('/search', {
        //         keywords: this.data.searchContent,
        //         limit: 10
        //     });

        //     this.setData({
        //         searchList: searchListData,
        //         isSend: false
        //     });
        // }, 300);
        //#endregion

        //#region 防抖（函数 延迟&覆盖 执行）
        /*
         *   每次进入 关闭旧的定时器 创建新的定时器 功能函数放在定时器内部
         */
        // 清除旧的定时器
        if (this.data.time != null) {
            clearTimeout(this.data.time);
        }

        // 创建新的定时器
        let newTime = setTimeout(async () => {
            // 获取模糊匹配数据
            let searchListData = await request('/search', {
                keywords: event.detail.value,
                limit: 10
            });

            let searchList = [];
            let historyList = this.data.historyList;

            if (searchListData.code === 200) {
                searchList = searchListData.result.songs
            }
            // 更新搜索历史
            if (event.detail.value) {
                // 过滤掉与当前相同的历史
                historyList = historyList.filter(item => {
                   return item !== event.detail.value
                });
                // 更新
                historyList.unshift(event.detail.value);
                wx.setStorageSync('searchHistoryList', historyList)
            }

            this.setData({
                searchList,
                historyList
            });
        }, 300);

        this.setData({
            time: newTime,
            searchContent: event.detail.value
        });
        //#endregion
    },
    //#endregion

    //#region 清空搜索框
    clearSearchContent() {
        this.setData({
            searchContent: '',
            searchList: []
        });
    },
    //#endregion

    //#region 清空历史记录
    clearSearchHistory() {
        this.setData({
            historyList: []
        });
        wx.removeStorageSync('searchHistoryList');
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