const db = require('../config/db.js')
// 引入user的表结构
const userModel = '../schema/test_user.js'

// 用sequelize的import方法引入表结构，实例化了User。
const User = db.model.import(userModel)

const getUserById = async id => {
  const userInfo = await User.findOne({
    where: {
      id
    }
  })
  return userInfo
}

const getUserByName = async  userName => {
  const result = await User.findOne({
    where: {
      userName
    }
  })
  return result
}

const register = async (userName, passWord) => {
  const result = await User.create({
    userName,
    passWord
  })
  return result
}

const updataUser = async (passWord, id) => {
  const result = await User.update({
    passWord
  }, {
      where: {
        id
      }
    })
  return result
}

const deleteUser = async id => {
  const result = await User.destroy({
    where: {
      id
    }
  })
  return result
}

module.exports = {
  getUserById,
  getUserByName,
  register,
  updataUser,
  deleteUser
}