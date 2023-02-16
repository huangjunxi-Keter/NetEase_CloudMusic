// 【发送 ajax 请求】
/*
 *   1. 封装功能函数
 *       1. 功能点明确
 *       2. 函数内部保留固定代码
 *       3. 将动态的数据抽取成形参，由使用者根据情况动态传入
 *       4. 良好的功能函数应该设置形参的默认值
 *
 *   2. 封装功能组件
 *       1. 功能点明确
 *       2. 组件内部保留静态代码
 *       3. 将动态的数据抽取成props参数，由使用者根据情况以标签属性的形式动态传入
 *       4. 良好的组件应该设置组件的必要性及数据类型：
 *           props: {
 *               required: trur, // 必要性
 *               default: "默认值",
 *               type: String
 *           }
 */

 import config from './config'

export default (url, data = {}, method = 'Get') => {

    let cookie = wx.getStorageSync('cookie');
    
    if (cookie) {
        cookie = cookie.substring(cookie.indexOf('MUSIC_U'), cookie.length);
    }

    return new Promise((resolve, reject) => {
        // 1. new Promise 初始化 promise 实例状态为 pending
        wx.request({
            header: {
                cookie
            },
            method,
            url: config.host + url,
            data,
            success: res => {
                resolve(res.data);
            },
            fail: err => {
                reject(err);
            }
        });
    });
}