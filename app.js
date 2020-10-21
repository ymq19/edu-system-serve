var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var tokenConfirm = require('./public/javascripts/tokenConfirm')

// 普通用户
var indexRouter = require('./routes/student/index');
var usersRouter = require('./routes/student/users');
var loginRouter = require('./routes/student/login')
var resetRouter = require('./routes/student/reset')
var getProfileRouter = require('./routes/student/getProfile')
var getNoticeRouter = require('./routes/student/getNotice')
var getAllNoticeRouter = require('./routes/student/getAllTeachNotice')
var getAllNoticeNoRouter = require('./routes/student/getAllTeachNoticeNo')
var setProfileRouter = require('./routes/student/setProfile')
var addAvatarRouter = require('./routes/student/addAvatar')
var getCourseRouter = require('./routes/student/getCourse')
var getAllCourseRouter = require('./routes/student/getAllCourse')
var getGradeRouter = require('./routes/student/getGrade')
var getAllGradeRouter = require('./routes/student/getAllGrade')
var getSelectionCourseRouter = require('./routes/student/getSelectionCourse')
var addSelectionCourseRouter = require('./routes/student/addCourse')
var deleteSelectionCourseRouter = require('./routes/student/deleteCourse')
var getEvaluationRouter = require('./routes/student/getEvaluation')
var setEvaluationRouter = require('./routes/student/setEvaluation')
// 管理员
var superLoginRouter = require('./routes/management/login')
var superResetRouter = require('./routes/management/reset')
var superGetProfileRouter = require('./routes/management/getProfile')
var superSetProfileRouter = require('./routes/management/setProfile')
var superGetUserStudentRouter = require('./routes/management/getUserStudent')
var superGetUserTeacherRouter = require('./routes/management/getUserTeach')
var superGetUserManaRouter = require('./routes/management/getUserMana')
var superGetUserRouter = require('./routes/management/getAllUserType')
var superGetStudentRouter = require('./routes/management/getStudentInfo')
var superGetAllStudentRouter = require('./routes/management/getAllStudentInfo')
var superGetTeacherName = require('./routes/management/getTeacherName')
var superSetStudentProfileRouter = require('./routes/management/setStudentProfile')
var superDeleteStudent = require('./routes/management/deleteStudent')
var superSetUserProfileRouter = require('./routes/management/setUserProfile')
var superSetCourseInfoRouter = require('./routes/management/setCourseInfo')
var superDeleteCourseInfoRouter = require('./routes/management/deleteCourse')
var superAddCourseInfoRouter = require('./routes/management/addCourseInfo')
var superSetGradeInfoRouter = require('./routes/management/setGradeInfo')
// 教师
var teacherLoginRouter = require('./routes/teacher/login')
var teacherResetRouter = require('./routes/teacher/reset')
var teacherGetProfileRouter = require('./routes/teacher/getProfile')
var teacherSetProfileRouter = require('./routes/teacher/setProfile')
var teacherGetTeachTasksRouter = require('./routes/teacher/getTeachTasks')
var teacherGetAllTeachTasksRouter = require('./routes/teacher/getAllTeachTasks')
var teacherGetAllTeachTasksNoRouter = require('./routes/teacher/getAllTeachTasksNo')
var teacherSetTeachTasksRouter = require('./routes/teacher/setTeachTasks')
var teacherDeleteTeachTasksRouter = require('./routes/teacher/deleteTeachTasks')
var teacherAddTeachTasksRouter = require('./routes/teacher/addTeachTasks')
var teacherGetGradeInfoRouter = require('./routes/teacher/getGradeInfo')
var teacherGetAllGradeInfoRouter = require('./routes/teacher/getAllGradeInfo')
var teacherGetAllGradeInfoNoRouter = require('./routes/teacher/getAllGradeInfoNo')
var teacherSetGradeInfoRouter = require('./routes/teacher/setGradeInfo')

var app = express();

//设置跨域访问
app.all('*', function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
  res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
  res.header("X-Powered-By",' 3.2.1')
  next();
});

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
// token验证
app.use(function(req, res, next) {
  var token = req.get('Authorization')
  if(token === undefined) {
    next()
  } else if(tokenConfirm(token) === 1) {
    return res.send({
      status: 10010,
      message: 'token过期'
    })
  } else {
    next()
  }
})

app.use('/api/v1/avatar', express.static('public'))//设置图片的虚拟静态目录
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
// 普通用户接口
app.use('/api/v1/login', loginRouter)
app.use('/api/v1/reset', resetRouter)
app.use('/api/v1/profile', getProfileRouter)
app.use('/api/v1/profile', setProfileRouter)
app.use('/api/v1/avatar', addAvatarRouter)
app.use('/api/v1/course', getCourseRouter)
app.use('/api/v1/notice', getNoticeRouter)
app.use('/api/v1/notice', getAllNoticeRouter)
app.use('/api/v1/notice', getAllNoticeNoRouter)
app.use('/api/v1/course/all', getAllCourseRouter)
app.use('/api/v1/grade', getGradeRouter)
app.use('/api/v1/grade/all', getAllGradeRouter)
app.use('/api/v1', getSelectionCourseRouter)
app.use('/api/v1/selection/course', addSelectionCourseRouter)
app.use('/api/v1/selection/course', deleteSelectionCourseRouter)
app.use('/api/v1/evaluation', getEvaluationRouter)
app.use('/api/v1/evaluation/teacher', setEvaluationRouter)

// 超级用户接口
app.use('/api/v1/super-user/login', superLoginRouter)
app.use('/api/v1/super-user/reset', superResetRouter)
app.use('/api/v1/super-user/profile', superGetProfileRouter)
app.use('/api/v1/super-user/profile', superSetProfileRouter)
app.use('/api/v1/super-user/user/student', superGetUserStudentRouter)
app.use('/api/v1/super-user/user/teacher', superGetUserTeacherRouter)
app.use('/api/v1/super-user/user/management', superGetUserManaRouter)
app.use('/api/v1/super-user/user/all', superGetUserRouter)
app.use('/api/v1/super-user/info/teacher', superGetTeacherName)
app.use('/api/v1/super-user/info/student', superGetStudentRouter)
app.use('/api/v1/super-user/info/student/all', superGetAllStudentRouter)
app.use('/api/v1/super-user/info/student', superSetStudentProfileRouter)
app.use('/api/v1/super-user/info/student', superDeleteStudent)
app.use('/api/v1/super-user/user', superSetUserProfileRouter)
app.use('/api/v1/super-user/info/course', superSetCourseInfoRouter)
app.use('/api/v1/super-user/info/course', superDeleteCourseInfoRouter)
app.use('/api/v1/super-user/info/course', superAddCourseInfoRouter)
app.use('/api/v1/super-user/info/grade', superSetGradeInfoRouter)
// 教师用户接口
app.use('/api/v1/teacher/login', teacherLoginRouter)
app.use('/api/v1/teacher/reset', teacherResetRouter)
app.use('/api/v1/teacher/profile', teacherGetProfileRouter)
app.use('/api/v1/teacher/profile', teacherSetProfileRouter)
app.use('/api/v1/teacher/info', teacherGetTeachTasksRouter)
app.use('/api/v1/teacher/info', teacherGetAllTeachTasksRouter)
app.use('/api/v1/teacher/info', teacherGetAllTeachTasksNoRouter)
app.use('/api/v1/teacher/info', teacherSetTeachTasksRouter)
app.use('/api/v1/teacher/info', teacherDeleteTeachTasksRouter)
app.use('/api/v1/teacher/info', teacherAddTeachTasksRouter)
app.use('/api/v1/teacher', teacherGetGradeInfoRouter)
app.use('/api/v1/teacher/info', teacherGetAllGradeInfoRouter)
app.use('/api/v1/teacher/info', teacherGetAllGradeInfoNoRouter)
app.use('/api/v1/teacher/info/course', teacherSetGradeInfoRouter)

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
