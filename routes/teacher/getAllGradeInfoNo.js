var express = require('express');
var router = express.Router();
var mysql = require('mysql')
var models = require('../../sql/db')
var $sql = require('../../sql/sqlMap')

var connection = mysql.createConnection(models.mysql)
connection.connect()
// 登录验证语句
var sql = $sql.teacherUser.getAllGradeInfo

router.get('/:tno/grade/:cno', function(req, res, next) {
  // var tno = req.params.tno
  var cno = req.params.cno
  connection.query(sql, [cno], (err, result) => {
    if(err) {
      console.log(err)
      return
    }
    var grade = result
    res.send({
      grade
    })
  })
});

module.exports = router;
