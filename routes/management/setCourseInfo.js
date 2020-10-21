var express = require('express');
var router = express.Router();
var mysql = require('mysql')
var models = require('../../sql/db')
var $sql = require('../../sql/sqlMap')

var connection = mysql.createConnection(models.mysql)
connection.connect()
// 登录验证语句
var sql = $sql.superUser.setCourseInfo

router.put('/:cno', function(req, res, next) {
  var cno = req.params.cno
  var cname = req.body.name
  var cpno = req.body.cpno
  var ccredit = req.body.credit
  var capacity = req.body.capacity
  var tno = req.body.tno
  req.body.preCourse === '无' ? cpno = null : ''
  connection.query(sql, [cname, cpno, ccredit, tno, capacity, cno], (err, result) => {
    if(err) {
      console.log(err)
      return
    }
    res.send({
      status: 1105,
      message: '课程信息修改成功'
    })
  })
});

module.exports = router;
