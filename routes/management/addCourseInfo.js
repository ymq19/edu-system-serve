var express = require('express');
var router = express.Router();
var mysql = require('mysql')
var models = require('../../sql/db')
var $sql = require('../../sql/sqlMap')

var connection = mysql.createConnection(models.mysql)
connection.connect()
// 登录验证语句
var sql = $sql.superUser.addCourseInfo

router.post('/', function(req, res, next) {
  var cno = req.body.cno
  var cname = req.body.name
  var cpno = req.body.cpno
  var ccredit = req.body.credit
  var tno = req.body.tno
  var capacity = req.body.capacity
  req.body.preCourse === '无' ? cpno = null : ''
  connection.query(sql, [cno, cname, cpno, ccredit, tno, capacity], (err, result) => {
    if(err) {
      console.log(err)
      return
    }
    res.send({
      status: 1105,
      message: '课程增加成功'
    })
  })
});

module.exports = router;
