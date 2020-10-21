var express = require('express');
var router = express.Router();
var mysql = require('mysql')
var models = require('../../sql/db')
var $sql = require('../../sql/sqlMap')

var connection = mysql.createConnection(models.mysql)
connection.connect()
// 登录验证语句
var sql = $sql.superUser.setProfile

router.put('/:mno', function(req, res, next) {
  var mno = req.params.mno
  var name = req.body.name
  var sex = req.body.sex
  var age = req.body.age
  var email = req.body.email
  var tel = req.body.tel
  var intro = req.body.intro
  connection.query(sql, [name, sex, age, email, tel, intro, mno], (err, result) => {
    if(err) {
      console.log(err)
      return
    }
    res.send({
      status: 1105,
      message: '个人信息修改成功'
    })
  })
});

module.exports = router;
