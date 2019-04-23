const Koa = require('koa')
const app = new Koa()
const json = require('koa-json')
const cors = require('koa2-cors')
const bodyParser = require('koa-bodyparser')
const registerRouter = require('./routers/index.js')


app.use(cors())
app.use(bodyParser())
app.use(json())
app.use(registerRouter())

app.on('error', err => {
  console.log('server error', err)
})

app.listen(8000, () => {
  console.log('Koa is listening in 8000')
})

