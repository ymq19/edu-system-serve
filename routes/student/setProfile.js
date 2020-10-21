var express = require('express');
var router = express.Router();
var mysql = require('mysql')
var models = require('../../sql/db')
var $sql = require('../../sql/sqlMap')

var connection = mysql.createConnection(models.mysql)
connection.connect()
// 登录验证语句
var sql = $sql.user.setProfile

router.put('/:sno', function(req, res, next) {
  var sno = req.params.sno
  var email = req.body.email
  var tel = req.body.tel
  var hobby = req.body.hobby
  var intro = req.body.intro
  connection.query(sql, [email, tel, hobby, intro, sno], (err, result) => {
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
