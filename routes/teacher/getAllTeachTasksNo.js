var express = require('express');
var router = express.Router();
var mysql = require('mysql')
var models = require('../../sql/db')
var $sql = require('../../sql/sqlMap')

var connection = mysql.createConnection(models.mysql)
connection.connect()
// 登录验证语句
var sql = $sql.teacherUser.getAllTeachTasks

router.get('/:tno/course/:cno/tasks/all', function(req, res, next) {
  var tno = req.params.tno
  var cno = req.params.cno
  connection.query(sql, [tno, cno], (err, result) => {
    if(err) {
      console.log(err)
      return
    }
    var tasks = result
    res.send({
      tasks
    })
  })
});

module.exports = router;
