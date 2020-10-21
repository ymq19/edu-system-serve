var express = require('express');
var router = express.Router();
var mysql = require('mysql')
var models = require('../../sql/db')
var $sql = require('../../sql/sqlMap')

var connection = mysql.createConnection(models.mysql)
connection.connect()
// 登录验证语句
var sql = $sql.teacherUser.getTeachTasks

router.get('/:tno/tasks', function(req, res, next) {
  var tno = req.params.tno
  var limit = parseInt(req.query.limit)
  connection.query(sql, [tno, limit], (err, result) => {
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
