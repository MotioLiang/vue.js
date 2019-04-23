/* jshint indent: 2 */

module.exports = function (sequelize, DataTypes) {
  return sequelize.define('test_user', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    userName: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    passWord: {
      type: DataTypes.STRING(100),
      allowNull: true
    }
  }, {
      tableName: 'test_user'
    });
};
