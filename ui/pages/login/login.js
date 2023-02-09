// pages/login/login.js

/*
 *   说明：登录流程
 *       1. 手机表单数据
 *       2. 前端验证
 *           1. 验证 用户信息是否合法
 *           2. 前端验证不通过就提示用户，不需要发请求给后端
 *           3. 前端验证通过，发请求（携带账号，密码）给服务器
 *       3. 后端验证
 *           1. 验证用户是否存在
 *           2. 用户不存在直接返回，告诉前端用户不存在
 *           3. 用户存在，验证密码是否正确
 *           4. 密码不正确，返回给前端，提示密码不正确
 *           5. 密码正确，返回给前端，提示用户登陆成功（会携带用户信息）
 */
import request from '../../utils/request'

Page({

    /**
     * 页面的初始数据
     */
    data: {
        qrBase64: '',
        timer: null
    },

    async getLoginQR() {
        if (this.data.timer != null) {
            clearInterval(this.data.timer);
        }

        // 获取生成二维码的Key
        let qrKey = await request(`/login/qr/key?timerstamp=${Date.now()}`);
        if (qrKey.code == 200) {
            // 获取二维码的Base64
            let qrData = await request(`/login/qr/create?timerstamp=${Date.now()}`, {
                key: qrKey.data.unikey,
                qrimg: true
            });
            if (qrData.code == 200) {
                this.setData({
                    qrBase64: qrData.data.qrimg
                });

                this.checkLoginState(qrKey.data.unikey);
                return;
            }
        }

        wx.showToast({
            title: '获取二维码失败',
            icon: 'none'
        });
    },

    async checkLoginState(key) {

        let timer = setInterval(async () => {

            // 方便跟新二维码的时候关闭定时器
            this.setData({
                timer
            });
            //查询二维码是否过期
            let QrState = await request(`/login/qr/check?key=${key}&timerstamp=${Date.now()}`);
            // 打印二维码状态
            console.log(QrState);
            // 二维码过期
            if (QrState.code === 800) {
                // 更新二维码（跟新时会关闭当前定时器）
                this.getLoginQR();
                // 结束此次调用
                return;
            } else if (QrState.code === 803) { // 登录成功
                clearInterval(timer);
                let res = await request(`/login/status?timerstamp=${Date.now()}`, {
                    cookie: QrState.cookie
                }, 'post');
                // 打印登录成功后的数据
                console.log(res);
                // 将用户的信息存储至本地（同步）
                wx.setStorageSync('userInfo', JSON.stringify(res.data.profile));
                // 跳转至个人中心
                wx.switchTab({
                  url: '/pages/personal/personal',
                });
            }
        }, 3000);
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        this.getLoginQR();
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