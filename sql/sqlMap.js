var sqlMap = {
  user: {
    // 用户验证
    consfirm: 'select * from user where username = ? and password = ?',
    // 修改密码
    resetPass: 'update user set password = ? where username = ?',
    // 获取个人信息
    getProfile: 'select sex, sage, admi_date, school, sdept, email, tel, hobby, intro from student where sno = ?',
    // 修改个人信息
    setProfile: 'update student set email = ?, tel = ?, hobby = ?, intro = ? where sno = ?',
    // 添加用户头像
    addAvatar: 'update user set avatar = ? where username = ?',
    // 查询课程（前五条）
    getCourse: '(SELECT cno, cname, ccredit, cpno, cpno as prename, teacher.name AS teacher, course.tno, capacity FROM course, teacher WHERE cpno IS NULL AND teacher.tno = course.tno UNION ' +
        'SELECT FIRST .cno, FIRST .cname, FIRST .ccredit, FIRST .cpno, SECOND .cname AS precname, teacher .name AS teacher, FIRST .tno, FIRST .capacity FROM course FIRST, course SECOND, teacher WHERE FIRST .cpno = SECOND .cno AND teacher.tno = FIRST .tno) ORDER BY cno ASC LIMIT ?',
    // 查询所有课程
    getAllCourse: '(SELECT cno, cname, ccredit, cpno, cpno as prename, teacher.name AS teacher, course.tno, capacity FROM course, teacher WHERE cpno IS NULL And teacher.tno = course.tno UNION ' +
        'SELECT FIRST .cno, FIRST .cname, FIRST .ccredit, FIRST .cpno, SECOND .cname AS precname, teacher .name AS teacher, FIRST .tno, FIRST .capacity FROM course FIRST, course SECOND, teacher WHERE FIRST .cpno = SECOND .cno AND teacher.tno = FIRST .tno) ORDER BY cno ASC',
    // 查询成绩（前五条）
    getGrade: 'select sc.cno, cname, gradepo, grade from sc, course where sno = ? and sc.cno = course.cno limit ?',
    // 查询成绩
    getAllGrade: 'select sc.cno, cname, gradepo, grade from sc, course where sno = ? and sc.cno = course.cno',
    // 查询教学任务
    getTeachNotice: 'SELECT title, content, time FROM teaching_tasks WHERE cno IN ( SELECT cno FROM sc WHERE sno = ?) limit ?',
    // 查询课程表和教学任务
    getTeachCnoName: 'SELECT sc.cno, cname from sc, course where sno = ? and  sc.cno = course.cno',
    getAllTeachNotice: 'SELECT title, content, time FROM teaching_tasks WHERE cno = ?',
    // 查询自己的选课情况
    getSelectionCourse: 'select cno from sc where sno = ?',
    getAlreadySelection: 'SELECT cno, COUNT(cno) as num FROM sc GROUP BY cno',
    // 选课
    addCourse: 'insert into sc (sno, cno, grade, gradepo) values(?, ? , NULL, NULL)',
    // 退课
    deleteCourse: 'delete from sc where sno = ? and cno = ?',
    // 教学评价
    getStars: 'SELECT sc.cno, cname, course.tno, teacher.name AS teacher, evaluation FROM (sc INNER JOIN course ON sc.sno = ? AND sc.cno = course.cno INNER JOIN teacher ON teacher.tno = course.tno) LEFT OUTER JOIN teaching_eval ON course.tno = teaching_eval.tno AND teaching_eval.sno = ?',
    // 教学评价(存在时更新，不存在是新增)
    setStars: 'replace into teaching_eval values(?, ?, ?)',
  },
  superUser: {
    // 用户验证
    consfirm: 'select * from super_user where username = ? and password = ?',
    // 修改密码
    resetPass: 'update super_user set password = ? where username = ?',
    // 获取个人信息
    getProfile: 'select sex, age, email, tel, intro from management where mno = ?',
    // 修改个人信息
    setProfile: 'update management set name = ?, sex = ?, age = ?, email = ?, tel = ?, intro = ? where mno = ?',
    // 添加用户头像
    addAvatar: 'update super_user set avatar = ? where username = ?',
    // 查找学生用户
    getUserStudent: 'select username, name from user limit ?',
    // 查找管理员用户
    getUserManagement: 'select username, name from super_user limit ?',
    // 查找教师用户
    getUserTeacher: 'select username, name from teacher_user limit ?',
    // 查找全部学生用户
    getAllUserStudent: 'select username, name from user',
    // 查找全部管理员用户
    getAllUserManagement: 'select username, name from super_user',
    // 查找全部教师用户
    getAllUserTeacher: 'select username, name from teacher_user',
    // 查找教师名字
    getTeacherName: 'select name from teacher where tno = ?',
    // 查找学生信息
    getStudentInfo: 'select sno, sname, school from student limit ?',
    // 查找全部学生信息
    getAllStudentInfo: 'select * from student',
    // 设置学生的个人信息
    setStudentProfile: 'update student set sname = ?, sex = ?, sage = ?, admi_date = ?, school = ?, sdept = ?, email = ?, tel = ?, hobby = ?, intro = ? where sno = ?',
    // 删除学生的所有信息
    deleteStudentInfo: 'delete from student where sno = ?',
    // 更新用户信息
    setUserProfile: 'update user set name = ? where username = ?',
    setSuperUserProfile: 'update super_user set name = ? where username = ?',
    setTeacherUserProfile: 'update teacher_user set name = ? where username = ?',
    // 更新课程信息
    setCourseInfo: 'update course set cname = ?, cpno = ?, ccredit = ?, tno = ?, capacity = ? where cno = ?',
    // 删除课程（事务，删除课程时，设置有它先修课属性值为空）
    deleteCourse: 'delete from course where cno = ?',
    updateDeleteCourse: 'update course set cpno = NULL where cpno = ?',
    // 新增课程
    addCourseInfo: 'insert into course values(?, ?, ?, ? , ?, ?)',
    // 修改成绩信息
    setGradeInfo: 'update sc set grade = ?, gradepo = ? where sno = ? and cno = ?'
  },
  teacherUser: {
    // 用户验证
    consfirm: 'select * from teacher_user where username = ? and password = ?',
    // 修改密码
    resetPass: 'update teacher_user set password = ? where username = ?',
    // 获取个人信息
    getProfile: 'select sex, age, email, tel, intro from teacher where tno = ?',
    // 修改个人信息
    setProfile: 'update teacher set name = ?, sex = ?, age = ?, email = ?, tel = ?, intro = ? where tno = ?',
     // 添加用户头像
     addAvatar: 'update teacher_user set avatar = ? where username = ?',
    // 查询教学任务
    getTeachTasks: 'select title, content, time from teaching_tasks where tno = ? limit ?',
    // 查询教学任务
    getCourseCno: 'select distinct cno, cname from course where tno = ?',
    getAllTeachTasks: 'select title, content, time from teaching_tasks where tno = ? and cno = ?', 
    // 更新教学任务
    setTeachTasks: 'update teaching_tasks set title = ?, content = ? where tno = ? and cno = ? and time = ?',
    // 删除教学任务
    deleteTeachTasks: 'delete from teaching_tasks where tno = ? and cno = ? and time = ?',
    // 新增教学任务
    addTeachTasks: 'insert into teaching_tasks values(?, ?, ?, ?, ?)',
    // 查询学生成绩信息
    getGradeInfo: 'SELECT FIRST .sno, SECOND .sname, cname, grade, gradepo FROM sc FIRST, student SECOND, course THRID WHERE FIRST.sno = SECOND.sno and FIRST.cno = THRID.cno and tno = ? limit ?',
    // 查询全部学生成绩信息
    getAllGradeInfo: 'select first. sno, sname, grade, gradepo from sc first, student second where first.sno = second.sno and cno = ?',
    // 更新成绩信息
    setGradeInfo: 'update sc set grade = ?, gradepo = ? where sno = ? and cno = ?'
  }
}
module.exports = sqlMap
