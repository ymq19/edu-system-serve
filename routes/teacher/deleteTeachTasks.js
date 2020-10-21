var express = require('express');
var router = express.Router();
var mysql = require('mysql')
var models = require('../../sql/db')
var $sql = require('../../sql/sqlMap')

var connection = mysql.createConnection(models.mysql)
connection.connect()
// 登录验证语句
var sql = $sql.teacherUser.deleteTeachTasks

router.delete('/:tno/tasks/course/:cno', function(req, res, next) {
  var tno = req.params.tno
  var cno = req.params.cno
  var time = req.body.time
  connection.query(sql, [tno, cno, time], (err, result) => {
    if(err) {
      console.log(err)
      return
    }
    res.send({
      status: 1105,
      message: '教学任务删除成功'
    })
  })
});

module.exports = router;
