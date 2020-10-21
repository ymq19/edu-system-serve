var express = require('express');
var router = express.Router();
var mysql = require('mysql')
var models = require('../../sql/db')
var $sql = require('../../sql/sqlMap')

var connection = mysql.createConnection(models.mysql)
connection.connect()
// 登录验证语句
var sql = $sql.user.getAllTeachNotice

router.get('/:sno/course/:cno/all', function(req, res, next) {
  // var sno = req.params.sno
  var cno = req.params.cno
  connection.query(sql, [cno], (err, result) => {
    if(err) {
      console.log(err)
      return
    }
    var notice = result
    res.send({
      notice
    })
  })
});

module.exports = router;
