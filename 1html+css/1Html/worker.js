/*
 * @Author: TerryMin
 * @Date: 2020-07-09 15:51:04
 * @LastEditors: TerryMin
 * @LastEditTime: 2020-12-14 14:49:49
 * @Description: file not
 */
self.addEventListener('message', (e) => {
  const { data } = e;
  if (!data) return;
  // worker线程发送消息
  self.postMessage({ data: 'worker received data' })
});