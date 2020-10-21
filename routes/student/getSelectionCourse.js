var express = require('express');
var router = express.Router();
var mysql = require('mysql')
var models = require('../../sql/db')
var $sql = require('../../sql/sqlMap')

var connection = mysql.createConnection(models.mysql)
connection.connect()
// 登录验证语句
var sql = $sql.user.getSelectionCourse
var sql2 = $sql.user.getAlreadySelection

router.get('/:sno/selection/course', function(req, res, next) {
  var sno = req.params.sno
  connection.query(sql, [sno], (err, result) => {
    if(err) {
      console.log(err)
      return
    }
    var stuCourse = result
    connection.query(sql2, (err, result) => {
      if(err) {
        console.log(err)
        return
      }
      var course = result
      res.send({
        stuCourse, 
        course
      })
    })
  })
});

module.exports = router;
