var express = require('express');
var router = express.Router();
var mysql = require('mysql')
var models = require('../../sql/db')
var $sql = require('../../sql/sqlMap')

var connection = mysql.createConnection(models.mysql)
connection.connect()
// 登录验证语句
var sql = $sql.superUser.setStudentProfile

router.put('/:sno', function(req, res, next) {
  var sno = req.params.sno
  var sname = req.body.name
  var sex = req.body.sex
  var sage = req.body.age
  var admi_date = req.body.admi_date
  var school = req.body.school
  var sdept = req.body.sdept
  var email = req.body.email
  var tel = req.body.tel
  var hobby = req.body.hobby
  var intro = req.body.intro
  connection.query(sql, [sname, sex, sage, admi_date, school, sdept, email, tel, hobby, intro, sno], (err, result) => {
    if(err) {
      console.log(err)
      return
    }
    res.send({
      status: 1105,
      message: '学生信息修改成功'
    })
  })
});

module.exports = router;
