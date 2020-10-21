var express = require('express');
var router = express.Router();
var mysql = require('mysql')
var models = require('../../sql/db')
var $sql = require('../../sql/sqlMap')

var connection = mysql.createConnection(models.mysql)
connection.connect()
// 登录验证语句
var sql = ''

router.put('/:userType/:username', function(req, res, next) {
  var userType = req.params.userType
  if (userType === 'student') {
    sql = $sql.superUser.setUserProfile
  } else if (userType === 'management') {
    sql = $sql.superUser.setSuperUserProfile
  } else if (userType === 'teacher') {
    sql = $sql.superUser.setTeacherUserProfile
  }
  var username = req.params.username
  var name = req.body.name
  connection.query(sql, [name, username], (err, result) => {
    if(err) {
      console.log(err)
      return
    }
    res.send({
      status: 1105,
      message: '用户信息修改成功'
    })
  })
});

module.exports = router;
