/*
 * @Author: XuChaoC
 * @Date: 2019-08-15 14:11:19
 * @LastEditors: TerryMin
 * @LastEditTime: 2020-12-15 16:01:05
 * @Description:
 */
const PROXY_CONFIG = [
  {
    context: [
      "/"
    ],
    // target: "https://beta.platform.mingduochina.com",
    target: "https://dev.platform.mingduochina.com",
    // target: "https://uat.platform.mingduochina.com",
    // target: "https://platform.mingduochina.com",
    secure: false, // 不检查安全问题,可以接受运行在 HTTPSs
		changeOrigin: true,
		// logLevel: "debug",
  },

]
module.exports = PROXY_CONFIG;
