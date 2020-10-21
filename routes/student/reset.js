var express = require('express');
var router = express.Router();
var mysql = require('mysql')
var models = require('../../sql/db')
var $sql = require('../../sql/sqlMap')
var jwt = require('jsonwebtoken')

var connection = mysql.createConnection(models.mysql)
connection.connect()
// 登录验证语句
var sql = $sql.user.consfirm
// 更新密码语句
var sqlReset = $sql.user.resetPass

// 更新密码 用put请求
router.put('/:username', function(req, res, next) {
  var username = req.params.username
  var password = req.body.oldPassword
  connection.query(sql, [username, password], (err, result) => {
    var data = {}
    if(err) {
      console.log(err)
      return
    }
    if(result.length) {
      data.status = 1105
      password = req.body.password
      connection.query(sqlReset, [password, username], (err, result) => {
        if(err) {
          console.log(err)
          return
        }
        res.send(data)
      })
    } else {
      data.status = 1100
      data.message = '用户名或密码错误'
      res.send(data)
    }
  })
})

module.exports = router;
