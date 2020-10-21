var express = require('express');
var router = express.Router();
var mysql = require('mysql')
var models = require('../../sql/db')
var $sql = require('../../sql/sqlMap')

var connection = mysql.createConnection(models.mysql)
connection.connect()
// 登录验证语句
var sql = $sql.user.setStars

router.post('/', function(req, res, next) {
  var sno = req.body.sno
  var tno = req.body.tno
  var evaluation = req.body.evaluation
  connection.query(sql, [tno, evaluation, sno], (err, result) => {
    if(err) {
      console.log(err)
      return
    }
    res.send({
      status: 1105,
      message: '教学评价成功'
    })
  })
});

module.exports = router;
