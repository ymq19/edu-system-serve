var jwt = require('jsonwebtoken')
module.exports = function tokenConfirm(token) {
  // var token = req.get('Authorization')
  // 密钥
  var secretKey = 'ymq19'
  var flag = 0
  jwt.verify(token, secretKey, function(err, decode) {
    if(err) {
      flag = 1
    }
  })
  if(flag === 1) {
    return 1
  }
  return 0
}