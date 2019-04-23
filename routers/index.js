const combineRouters = require('koa-combine-routers')
const user = require('./user')

const registerRouter = combineRouters(
  user
)

module.exports = registerRouter