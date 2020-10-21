var express = require('express');
var router = express.Router();
var mysql = require('mysql')
var models = require('../../sql/db')
var $sql = require('../../sql/sqlMap')

var connection = mysql.createConnection(models.mysql)
connection.connect()
// 登录验证语句
var sql = $sql.teacherUser.getCourseCno
var sql2 = $sql.teacherUser.getAllGradeInfo

router.get('/:tno/grade/all', function(req, res, next) {
  var tno = req.params.tno
  connection.query(sql, [tno], (err, result) => {
    if(err) {
      console.log(err)
      return
    }
    var course = result
    var cno = result[0].cno
    connection.query(sql2, [cno], (err, result) => {
      if(err) {
        console.log(err)
        return
      }
      var grade = result
      res.send({
        course,
        grade
      })
    })
  })
});

module.exports = router;
