var express = require('express');
var router = express.Router();
var mysql = require('mysql')
var models = require('../../sql/db')
var $sql = require('../../sql/sqlMap')

var connection = mysql.createConnection(models.mysql)
connection.connect()
// 登录验证语句
var sql = $sql.user.getTeachNotice

router.get('/:sno', function(req, res, next) {
  var sno = req.params.sno
  var limit = parseInt(req.query.limit)
  connection.query(sql, [sno, limit], (err, result) => {
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
