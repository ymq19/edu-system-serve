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

router.post('/', function(req, res, next) {
  var username = req.body.username
  var password = req.body.password
  connection.query(sql, [username, password], (err, result) => {
    var data = {}
    // 加密key
    var secretkey = 'ymq19'
    var token = jwt.sign({username}, secretkey, {
      expiresIn: 60 * 60 * 1
    })
    if(err) {
      console.log(err)
      return
    }
    if(result.length) {
      data.status = 1105
      data.name = result[0].name,
      data.url = result[0].avatar
      data.token = token
    } else {
      data.status = 1100
      data.message = '用户名或密码错误'
    }
    res.send(data)
  })
});

module.exports = router;
