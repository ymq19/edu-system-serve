var express = require('express');
var router = express.Router();
var mysql = require('mysql')
var models = require('../../sql/db')
var $sql = require('../../sql/sqlMap')

var connection = mysql.createConnection(models.mysql)
connection.connect()
// 登录验证语句
var sql = $sql.superUser.deleteCourse
var sql2 = $sql.superUser.updateDeleteCourse

router.delete('/:cno', function(req, res, next) {
  var cno = req.params.cno
  // 开启事务
  connection.beginTransaction(err => {
    if(err) {
      console.log(err)
      return 
    }
    connection.query(sql, [cno], (err, result) => {
      if(err) {
        // 删除失败数据回滚
        connection.rollback(() => {})
        return
      }
      connection.query(sql2, [cno], (err, result) => {
        if(err) {
          // 更新失败
          connection.rollback(() => {})
          return
        }
        connection.commit(err => {
          if(err) {
            console.log('提交事务失败')
            return
          }
        })
        res.send({
          status: 1105,
          message: '课程删除成功！'
        })
      })
    })
  })
  
})

module.exports = router;
