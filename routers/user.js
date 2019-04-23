const router = require('koa-router')()
const user = require('../controllers/user.js')

router
  .get('/api/user', user.getUserInfo)
  .post('/api/register', user.register)
  .post('/api/login', user.login)
  .post('/api/updataUser', user.updataUser)
  .get('/api/deleteUser', user.deleteUser)

module.exports = router
