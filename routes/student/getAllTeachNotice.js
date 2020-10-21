var express = require('express');
var router = express.Router();
var mysql = require('mysql')
var models = require('../../sql/db')
var $sql = require('../../sql/sqlMap')

var connection = mysql.createConnection(models.mysql)
connection.connect()
// 登录验证语句
var sql = $sql.user.getTeachCnoName
var sql2 = $sql.user.getAllTeachNotice

router.get('/:sno/all', function(req, res, next) {
  var sno = req.params.sno
  connection.query(sql, [sno], (err, result) => {
    if(err) {
      console.log(err)
      return
    }
    if(result.length === 0) {
      res.send({
        status: 1100,
        message: '暂无课程'
      })
      return
    }
    var course = result
    var cno = result[0].cno
    connection.query(sql2, [cno], (err, result) => {
      if(err) {
        console.log(err)
        return
      }
      var notice = result
      res.send({
        course,
        notice
      })
    })
  })
});

module.exports = router;
