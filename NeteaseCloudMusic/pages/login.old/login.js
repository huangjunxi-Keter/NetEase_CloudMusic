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
        phone: '',
        password: ''
    },

    /**
     * 表单项内容发生改变的回调
     */
    handleInput(event) {
        // let key = event.currentTarget.id;
        let key = event.currentTarget.dataset.key;
        let value = event.detail.value;
        this.setData({
            [key]: value
        });
    },

    login() {
        // 1. 收集数据
        let {
            phone,
            password
        } = this.data;

        // 2. 前端验证
        /*
         *   手机号验证
         *       1. 内容为空
         *       2. 格式不正确
         *           1. ^1：以 1 开头
         *           2. (3|4|5|6|7|8|9)：第二位为 3-9
         *           3. \d：其余的是数字就行
         *           4. {9}：\d 的长度为9（加前两位一共 11）
         *       3. 格式正确
         */
        let phoneReg = /^1(3|4|5|6|7|8|9)\d{9}$/;
        if (!phone) {
            // 提示用户
            wx.showToast({
                title: '手机号不能为空',
                icon: 'none'
            });
            return;
        } else if (!phoneReg.test(phone)) {
            wx.showToast({
                title: '手机号格式错误',
                icon: 'none'
            });
            return;
        } else if (!password) {
            wx.showToast({
                title: '密码不能为空',
                icon: 'none'
            });
            return;
        } else {
            // 3. 后端验证
            let response = request('/login/cellphone', { phone, password });
        }
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {

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