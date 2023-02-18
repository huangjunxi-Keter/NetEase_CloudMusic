// pages/songDetil/songDetil.js

import request from '../../utils/request'

Page({

    /**
     * 页面的初始数据
     */
    data: {
        isPlay: true,
        song: null,
        backgroundAudioManager: null
    },

    //#region 点击播放/暂停的回调
    handleMusicPlay() {
        this.setData({
            isPlay: !this.data.isPlay
        });

        this.musicControl();
    },
    //#endregion

    //#region 控制音乐播放/暂停的功能函数
    musicControl() {
        if (this.data.isPlay) {
            if (this.data.backgroundAudioManager) {
                this.data.backgroundAudioManager.play();
            } else {
                this.getMusic();
            }
        } else {
            this.data.backgroundAudioManager.pause();
        }
    },
    //#endregion

    //#region 获取音乐数据，修改页面Title
    async getSongData(songId) {
        let song = await request('/song/detail', {
            ids: songId
        });
        song = song.songs[0];

        song.artistStr = '';
        for (let i = 0; i < song.ar.length; i++) {
            if (i > 0) {
                song.artistStr += '/';
            }
            song.artistStr += song.ar[i].name;
        }

        this.setData({
            song
        });

        wx.setNavigationBarTitle({
            title: this.data.song.name,
        });

        this.getMusic();
    },
    //#endregion

    //#region 获取&创建歌曲管理对象
    async getMusic() {
        //获取音频url
        let music = await request('/song/url', {
            id: this.data.song.id
        });
        music = music.data[0];

        // 创建控制音乐播放的实例对象
        let backgroundAudioManager = wx.getBackgroundAudioManager();
        backgroundAudioManager.title = this.data.song.name;
        backgroundAudioManager.src = music.url;
        backgroundAudioManager.play();
        // 系统背景音乐暂停回调
        backgroundAudioManager.onPause(() => {
            this.setData({
                isPlay: false
            });
        });
        // 系统背景音乐播放回调
        backgroundAudioManager.onPlay(() => {
            this.setData({
                isPlay: true
            });
        });
        // 系统停止音乐的回调
        backgroundAudioManager.onStop(() => {
            this.setData({
                isPlay: false
            });
        });

        this.setData({
            backgroundAudioManager
        });
    },
    //#endregion

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad(options) {
        let songId = options.songId;
        if (songId) {
            this.getSongData(songId);
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