var express = require('express');
var path = require('path')
var router = express.Router();
var mysql = require('mysql')
var models = require('../../sql/db')
var multer = require('multer')
var upload = multer({dest: 'uploads/'}) //图片
var fs = require('fs') //读写文件模块
var $sql = require('../../sql/sqlMap')

var connection = mysql.createConnection(models.mysql)
connection.connect()
// 登录验证语句
var sql = $sql.user.addAvatar

router.post('/:username', upload.single('image'), function(req, res, next) {
  var image = req.file
  var username = req.params.username
  var userType = req.body.userType
  if(userType === 'mana') {
    sql = $sql.superUser.addAvatar
  } else if (userType === 'teach') {
    sql = $sql.teacherUser.addAvatar
  }
  fs.readFile(image.path, function(err, data) {
    if(err) {
      return
    }
    var imageName = image.originalname
    var randomName = Date.now() + parseInt(Math.random() * 999)
    var pic = randomName + '_' + imageName
    fs.writeFile(path.join(__dirname, '../../public/images/' + pic), data, function(err){
      if(err) {
        return
      }
      var avatar = 'http://localhost:3000/' + 'api/v1/avatar/images/' + pic
      // console.log(avatar)
      connection.query(sql, [avatar, username], (err, result) => {
        if(err) {
          console.log(err)
          return
        }
        res.send({
          status: 1105,
          url: avatar
        })
        // 删除中转站文件
        fs.unlink(path.join(__dirname, '../../uploads/' + image.filename), function(err) {
          if(err) {
              return
          }
          // console.log('删除中转站文件成功')
        })
      })
    })
    }) 
  })

module.exports = router;
