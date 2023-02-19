// pages/songDetil/songDetil.js

import request from '../../utils/request';
import Moment from 'moment'

Page({

    /**
     * 页面的初始数据
     */
    data: {
        isPlay: true,
        song: null,
        songList: [],
        backgroundAudioManager: null,
        index: 0,
        currentTime: '00:00',
        durationTime: '00:00',
        currentWhite: 0,
        songListInfos: {
            playlist: {
                url: '/playlist/track/all?id=',
                keys: ['songs']
            },
            recommend: {
                url: '/recommend/songs',
                keys: ['data', 'dailySongs']
            },
            user: {
                url: `/user/record?uid=${JSON.parse(wx.getStorageSync('userInfo')).userId}&type=1`,
                keys: ['weekData']
            }
        }
    },

    //#region 页面数据初始化
    initialization(songId, index) {
        this.setData({
            index
        });

        this.getSongData(songId);
    },
    //#endregion

    //#region 点击播放/暂停
    handleMusicPlay() {
        this.setData({
            isPlay: !this.data.isPlay
        });

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

    //#region 获取音乐数据，初始化音频总时长，修改页面Title
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
            song,
            // Moment 的参数是ms
            durationTime: Moment(song.dt).format('mm:ss')
        });

        wx.setNavigationBarTitle({
            title: this.data.song.name,
        });

        this.getMusic();
    },
    //#endregion

    //#region 获取音乐url，创建歌曲管理对象
    async getMusic() {
        //获取音频url
        let music = await request('/song/url', {
            id: this.data.song.id
        });
        music = music.data[0];

        if (music.url) {
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
            // 监听背景音乐播放进度
            backgroundAudioManager.onTimeUpdate((...params) => {
                // 背景音乐的播放时长 单位：s
                let BGMcurrentTime = backgroundAudioManager.currentTime;
                // 背景音乐的总时长 单位：s
                let BGMdurationTime = backgroundAudioManager.duration;

                // Moment 的参数需要 ms 所以乘 1000
                let currentTime = Moment(BGMcurrentTime * 1000).format('mm:ss');

                // 计算进度条百分比
                let currentWhite = BGMcurrentTime / BGMdurationTime * 100;

                this.setData({
                    currentTime,
                    currentWhite
                });
            });
            // 监听音乐播放结束
            backgroundAudioManager.onEnded(() => {
                this.changSong('next');
            });

            this.setData({
                backgroundAudioManager
            });
        } else {
            wx.showToast({
              title: '歌曲加载失败',
              icon: 'none',
              success: () => {
                  setTimeout(() => {
                    this.changSong('next');
                  }, 1500);
              }
            });
        }
    },
    //#endregion

    //#region 点击切歌回调
    handleSwitch(event) {
        let type = event.currentTarget.dataset.type;
        this.changSong(type);
    },
    //#endregion

    //#region 切换歌曲
    changSong(type) {
        let {
            index,
            songList
        } = this.data;

        if (type === 'pre') {
            if (index === 0) {
                index = songList.length - 1;
            } else {
                index--;
            }
        } else if (type === 'next') {
            if (index === songList.length - 1) {
                index = 0;
            } else {
                index++;
            }
        }

        if (songList[index].id) {
            this.initialization(songList[index].id, index);
        } else {
            this.initialization(songList[index].song.id, index);
        }
    },
    //#endregion

    //#region 获取播放列表
    async getSongListData(songListId, songListType) {

        let songListInfo = this.data.songListInfos[songListType];

        let songListData = await request(songListInfo.url + (songListId ? songListId : ''));

        for (let key of songListInfo.keys) {
            songListData = songListData[key]
        }

        this.setData({
            songList: songListData
        });
    },
    //#endregion

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad(options) {
        let {
            songId,
            index,
            songListId,
            songListType
        } = options;

        if (songId) {
            // 进入页面首次初始化页面数据
            this.initialization(songId, index);
        }

        if (songListType) {
            // 获取歌曲列表
            this.getSongListData(songListId, songListType);
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