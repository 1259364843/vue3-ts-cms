// let BASE_URL = ''
// let BASE_NAME = ''

let BASE_URL = ''
const TIME_OUT = 5000
if (process.env.NODE_ENV === 'development') {
  console.log('development')

  BASE_URL = '/api'
} else if (process.env.NODE_ENV === 'production') {
  BASE_URL = 'http://coderwhy.org/prod'
} else {
  BASE_URL = 'http://coderwhy.org/test'
}
export { TIME_OUT, BASE_URL }
