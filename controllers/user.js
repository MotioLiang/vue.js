const user = require('../models/user.js')
const bcrypt = require('bcryptjs')

const bcryptFn = passWord => {
  let salt = bcrypt.genSaltSync(10)
  return bcrypt.hashSync(passWord, salt)
}

const getUserInfo = async ctx => {
  let { id } = ctx.query
  const result = await user.getUserById(id)
  ctx.body = {
    msg: '获取信息成功！',
    data: result
  }
}

const register = async ctx => {
  const { userName, passWord } = ctx.request.body
  const result = await user.getUserByName(userName)
  if (result === null) { // 如果查无此用户会返回null
    let data = await user.register(userName, bcryptFn(passWord))
    ctx.body = {
      success: true,
      msg: '注册成功！',
      data: data
    }
  } else {
    ctx.body = {
      success: false,
      msg: '该用户名已存在！'
    }
  }
}

const login = async ctx => {
  const { userName, passWord } = ctx.request.body
  const result = await user.getUserByName(userName)
  if (result !== null) { // 如果查无此用户会返回null
    if (bcrypt.compareSync(passWord, result.passWord)) {
      ctx.body = {
        success: true,
        msg: '登陆成功！',
        data: result
      }
    } else {
      ctx.body = {
        success: false,
        msg: '密码错误！'
      }
    }
  } else {
    ctx.body = {
      success: false,
      msg: '用户不存在！'
    }
  }
}

const updataUser = async ctx => {
  const { userName, passWord } = ctx.request.body
  const result = await user.getUserByName(userName)
  user.updataUser(bcryptFn(passWord), result.id).then(() => {
    ctx.body = {
      success: true,
      msg: '修改成功！'
    }
  })
}

const deleteUser = async ctx => {
  let { id } = ctx.query
  user.deleteUser(id).then(() => {
    ctx.body = {
      success: true,
      msg: '删除成功！'
    }
  })

}

module.exports = {
  getUserInfo,
  register,
  login,
  updataUser,
  deleteUser
}