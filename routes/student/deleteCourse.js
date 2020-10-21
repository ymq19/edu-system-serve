var express = require('express');
var router = express.Router();
var mysql = require('mysql')
var models = require('../../sql/db')
var $sql = require('../../sql/sqlMap')

var connection = mysql.createConnection(models.mysql)
connection.connect()
// 登录验证语句
var sql = $sql.user.deleteCourse

router.delete('/', function(req, res, next) {
  var sno = req.body.sno
  var cno = req.body.cno
  connection.query(sql, [sno, cno], (err, result) => {
    if(err) {
      console.log(err)
      return
    }
    res.send({
      status: 1105,
      message: '退课成功！'
    })
  })
});

module.exports = router;
