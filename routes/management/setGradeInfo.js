var express = require('express');
var router = express.Router();
var mysql = require('mysql')
var models = require('../../sql/db')
var $sql = require('../../sql/sqlMap')

var connection = mysql.createConnection(models.mysql)
connection.connect()
// 登录验证语句
var sql = $sql.superUser.setGradeInfo

router.put('/:sno/course/:cno', function(req, res, next) {
  var sno = req.params.sno
  var cno = req.params.cno
  var grade = req.body.grade
  var gradepo = req.body.gradePo
  connection.query(sql, [grade, gradepo, sno, cno], (err, result) => {
    if(err) {
      console.log(err)
      return
    }
    res.send({
      status: 1105,
      message: '成绩信息修改成功'
    })
  })
});

module.exports = router;
