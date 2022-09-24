// 网络请求相关配置
let BASE_URL = ''
const TIME_OUT = 10000

if (process.env.NODE_ENV === 'development') {
  // BASE_URL = 'http://152.136.185.210:4000'
  BASE_URL = 'https://api.2xb.cn/RainbowWord'
} else if (process.env.NODE_ENV === 'production') {
  BASE_URL = 'https://api.2xb.cn/RainbowWord'
} else {
  BASE_URL = 'https://api.2xb.cn/RainbowWord'
}
export { BASE_URL, TIME_OUT }
