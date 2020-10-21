var express = require('express');
var router = express.Router();
var mysql = require('mysql')
var models = require('../../sql/db')
var $sql = require('../../sql/sqlMap')

var connection = mysql.createConnection(models.mysql)
connection.connect()
// 登录验证语句
var sql = $sql.superUser.getTeacherName

router.get('/:tno', function(req, res, next) {
  var tno = req.params.tno
  connection.query(sql, [tno], (err, result) => {
    if(err) {
      console.log(err)
      return
    }
    // console.log(result)
    res.send({
      result
    })
  })
})

module.exports = router;
