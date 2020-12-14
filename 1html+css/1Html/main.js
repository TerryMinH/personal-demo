/*
 * @Author: TerryMin
 * @Date: 2020-04-08 14:36:36
 * @LastEditors: TerryMin
 * @LastEditTime: 2020-12-14 14:49:26
 * @Description: file not
 */
const worker = new Worker("./worker.js");
 
// 主线程发送消息
worker.postMessage({ data: 'mainthread send data' });
 
// 主线程接收消息
worker.onmessage = (e) => {
    const { data } = e;
    if (!data) return;
    console.log(data);
}
