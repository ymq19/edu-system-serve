var express = require('express');
var router = express.Router();
var mysql = require('mysql')
var models = require('../../sql/db')
var $sql = require('../../sql/sqlMap')

var connection = mysql.createConnection(models.mysql)
connection.connect()
// 登录验证语句
var sql = ''

router.get('/:userType', function(req, res, next) {
  var userType = req.params.userType
  if (userType === 'student') {
    sql = $sql.superUser.getAllUserStudent
  } else if (userType === 'management') {
    sql = $sql.superUser.getAllUserManagement
  } else if (userType === 'teacher') {
    sql = $sql.superUser.getAllUserTeacher
  }
  connection.query(sql, (err, result) => {
    if(err) {
      console.log(err)
      return
    }
    res.send({
      result
    })
  })
});

module.exports = router;
