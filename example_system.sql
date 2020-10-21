/*
Navicat MySQL Data Transfer

Source Server         : YMQ
Source Server Version : 80017
Source Host           : localhost:3306
Source Database       : example_system

Target Server Type    : MYSQL
Target Server Version : 80017
File Encoding         : 65001

Date: 2020-10-21 21:46:22
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for course
-- ----------------------------
DROP TABLE IF EXISTS `course`;
CREATE TABLE `course` (
  `cno` varchar(10) NOT NULL,
  `cname` varchar(20) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `cpno` varchar(10) DEFAULT NULL,
  `ccredit` smallint(6) DEFAULT NULL,
  `tno` varchar(10) NOT NULL,
  `capacity` smallint(6) NOT NULL,
  PRIMARY KEY (`cno`),
  KEY `course_ibfk_1` (`cpno`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- ----------------------------
-- Records of course
-- ----------------------------
INSERT INTO `course` VALUES ('62517', '计算机网络', '62687', '4', '09001', '110');
INSERT INTO `course` VALUES ('62540', '数据库原理与应用A', null, '3', '09001', '110');
INSERT INTO `course` VALUES ('62640', '非线性编辑', '70511', '3', '09009', '80');
INSERT INTO `course` VALUES ('62647', '数据结构与算法', null, '4', '09002', '120');
INSERT INTO `course` VALUES ('62687', ' JAVA程序设计', null, '3', '09004', '100');
INSERT INTO `course` VALUES ('62695', 'C#程序设计', null, '2', '09011', '60');
INSERT INTO `course` VALUES ('70504', '互动应用开发', '70514', '2', '09008', '40');
INSERT INTO `course` VALUES ('70510', '数字媒体基础', '70504', '2', '09005', '80');
INSERT INTO `course` VALUES ('70512', '用户界面设计', null, '3', '09009', '70');
INSERT INTO `course` VALUES ('70513', '移动应用程序设计基础', '62687', '3', '09007', '90');
INSERT INTO `course` VALUES ('70514', ' Web编程基础', '70510', '3', '09008', '60');
INSERT INTO `course` VALUES ('70515', ' 动态网站设计与开发', '70514', '3', '09008', '50');
INSERT INTO `course` VALUES ('70534', '计算机图形学A', null, '3', '09011', '70');
INSERT INTO `course` VALUES ('70535', '数据可视化(双语)', null, '3', '09005', '90');
INSERT INTO `course` VALUES ('70537', '机器学习基础', '62647', '3', '09012', '60');
INSERT INTO `course` VALUES ('70903', '多媒体应用基础*', '70512', '3', '09008', '64');

-- ----------------------------
-- Table structure for management
-- ----------------------------
DROP TABLE IF EXISTS `management`;
CREATE TABLE `management` (
  `mno` varchar(15) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `name` varchar(20) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `sex` varchar(2) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `age` smallint(6) NOT NULL,
  `email` varchar(30) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `tel` varchar(20) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `intro` varchar(200) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  PRIMARY KEY (`mno`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- ----------------------------
-- Records of management
-- ----------------------------
INSERT INTO `management` VALUES ('150001', '邓紫棋', '女', '28', null, null, null);
INSERT INTO `management` VALUES ('150002', '周杰伦', '男', '41', null, null, null);
INSERT INTO `management` VALUES ('150003', '钱德勒', '男', '50', null, null, null);
INSERT INTO `management` VALUES ('150004', '乔伊', '男', '52', null, null, null);
INSERT INTO `management` VALUES ('150005', '罗斯', '男', '53', null, null, null);
INSERT INTO `management` VALUES ('150006', '瑞秋', '女', '51', null, null, null);
INSERT INTO `management` VALUES ('150007', '莫妮卡', '女', '56', null, null, null);
INSERT INTO `management` VALUES ('150008', '菲比', '女', '56', null, null, null);

-- ----------------------------
-- Table structure for sc
-- ----------------------------
DROP TABLE IF EXISTS `sc`;
CREATE TABLE `sc` (
  `sno` varchar(15) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `cno` varchar(10) NOT NULL,
  `grade` smallint(6) DEFAULT NULL,
  `gradepo` float DEFAULT NULL,
  PRIMARY KEY (`sno`,`cno`),
  KEY `FK_STUDENT_SC02` (`cno`),
  KEY `sno` (`sno`),
  CONSTRAINT `sc_ibfk_1` FOREIGN KEY (`sno`) REFERENCES `student` (`sno`) ON DELETE CASCADE ON UPDATE RESTRICT
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- ----------------------------
-- Records of sc
-- ----------------------------
INSERT INTO `sc` VALUES ('2018329621014', '62540', '79', '2.9');
INSERT INTO `sc` VALUES ('2018329621014', '70511', '90', '4');
INSERT INTO `sc` VALUES ('2018329621018', '70511', '91', '4.1');
INSERT INTO `sc` VALUES ('2018329621024', '62517', '88', '3.8');
INSERT INTO `sc` VALUES ('2018329621024', '62540', '80', '3');
INSERT INTO `sc` VALUES ('2018329621024', '62647', null, null);
INSERT INTO `sc` VALUES ('2018329621024', '62687', '88', '3.8');
INSERT INTO `sc` VALUES ('2018329621024', '70510', null, null);
INSERT INTO `sc` VALUES ('2018329621024', '70511', '80', '3');
INSERT INTO `sc` VALUES ('2018329621024', '70535', null, null);
INSERT INTO `sc` VALUES ('2018329621025', '70511', '89', '3.9');
INSERT INTO `sc` VALUES ('2018329621025', '70512', null, null);
INSERT INTO `sc` VALUES ('2018329621025', '70513', '88', '3.8');
INSERT INTO `sc` VALUES ('2018329621025', '70534', null, null);
INSERT INTO `sc` VALUES ('2018329621025', '70537', null, null);
INSERT INTO `sc` VALUES ('2018329621030', '62517', '94', '4.4');
INSERT INTO `sc` VALUES ('2018329621030', '62540', '90', '4');
INSERT INTO `sc` VALUES ('2018329621030', '62647', '82', '3.2');
INSERT INTO `sc` VALUES ('2018329621030', '62687', '78', '2.8');
INSERT INTO `sc` VALUES ('2018329621030', '62695', null, null);
INSERT INTO `sc` VALUES ('2018329621030', '70514', '85', '3.5');

-- ----------------------------
-- Table structure for student
-- ----------------------------
DROP TABLE IF EXISTS `student`;
CREATE TABLE `student` (
  `sno` varchar(15) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `sname` varchar(20) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `sex` varchar(2) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `sage` smallint(6) NOT NULL,
  `admi_date` varchar(10) NOT NULL,
  `school` varchar(20) DEFAULT NULL,
  `sdept` varchar(20) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `email` varchar(30) DEFAULT NULL,
  `tel` varchar(20) DEFAULT NULL,
  `hobby` varchar(50) DEFAULT NULL,
  `intro` varchar(200) DEFAULT NULL,
  PRIMARY KEY (`sno`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- ----------------------------
-- Records of student
-- ----------------------------
INSERT INTO `student` VALUES ('2018327113028', '海绵宝宝', '男', '22', '2018/9/10', '信息学院', '数字媒体技术', null, '13186979081', null, null);
INSERT INTO `student` VALUES ('2018327130012', '派大星', '男', '20', '2018/9/10', '信息学院', '数字媒体技术', null, null, null, null);
INSERT INTO `student` VALUES ('2018329600051', '章鱼哥', '男', '20', '2018/9/10', '信息学院', '数字媒体技术', null, null, null, null);
INSERT INTO `student` VALUES ('2018329600060', '蟹老板', '女', '19', '2018/9/9', '信息学院', '数字媒体技术', null, null, null, null);
INSERT INTO `student` VALUES ('2018329600124', '痞老板', '女', '19', '2018/9/9', '信息学院', '数字媒体技术', null, null, null, null);
INSERT INTO `student` VALUES ('2018329621001', '凯伦', '女', '19', '2018/9/9', '信息学院', '数字媒体技术', null, null, null, null);
INSERT INTO `student` VALUES ('2018329621002', '珊迪', '女', '19', '2018/9/9', '信息学院', '数字媒体技术', null, null, null, null);
INSERT INTO `student` VALUES ('2018329621009', '小蜗', '女', '19', '2018/9/9', '信息学院', '数字媒体技术', null, null, null, null);
INSERT INTO `student` VALUES ('2018329621014', '泡芙老师', '女', '22', '2018/9/10', '信息学院', '数字媒体技术', null, null, null, null);
INSERT INTO `student` VALUES ('2018329621018', '珍珍', '男', '20', '2018/9/10', '信息学院', '数字媒体技术', null, null, null, null);
INSERT INTO `student` VALUES ('2018329621024', '凯伦', '男', '20', '2018/9/10', '信息学院', '数字媒体技术', null, null, null, null);
INSERT INTO `student` VALUES ('2018329621025', '拉里', '男', '20', '2018/9/10', '信息学院', '数字媒体技术', null, null, null, null);
INSERT INTO `student` VALUES ('2018329621030', '服部平藏', '男', '20', '2018/9/10', '信息学院', '数字媒体技术', '1976583473@qq.com', null, null, null);
INSERT INTO `student` VALUES ('2018329621036', '杰瑞', '女', '19', '2018/9/9', '信息学院', '数字媒体技术', null, null, null, null);
INSERT INTO `student` VALUES ('2018329621037', '两只鞋太太', '女', '19', '2018/9/9', '信息学院', '数字媒体技术', null, null, null, null);
INSERT INTO `student` VALUES ('2018329621042', '斯派克', '女', '19', '2018/9/9', '信息学院', '数字媒体技术', null, null, null, null);
INSERT INTO `student` VALUES ('2018329621043', '泰克', '女', '19', '2018/9/9', '信息学院', '数字媒体技术', null, null, null, null);
INSERT INTO `student` VALUES ('2018329621045', '泰菲', '男', '20', '2018/9/10', '信息学院', '数字媒体技术', null, null, null, null);
INSERT INTO `student` VALUES ('2018329621047', '江户川柯南', '男', '20', '2018/9/10', '信息学院', '数字媒体技术', null, null, null, null);
INSERT INTO `student` VALUES ('2018329621051', '工藤新一', '男', '20', '2018/9/10', '信息学院', '数字媒体技术', null, null, null, null);
INSERT INTO `student` VALUES ('2018329621058', '毛利兰', '男', '20', '2018/9/10', '信息学院', '数字媒体技术', null, null, null, null);
INSERT INTO `student` VALUES ('2018329621065', '毛利小五郎', '男', '20', '2018/9/10', '信息学院', '数字媒体技术', null, null, null, null);
INSERT INTO `student` VALUES ('2018329621071', '阿笠博士', '女', '19', '2018/9/9', '信息学院', '数字媒体技术', null, null, null, null);
INSERT INTO `student` VALUES ('2018329621073', '灰原哀', '女', '19', '2018/9/9', '信息学院', '数字媒体技术', null, null, null, null);
INSERT INTO `student` VALUES ('2018329621079', '吉田步美', '女', '19', '2018/9/9', '信息学院', '数字媒体技术', null, null, null, null);
INSERT INTO `student` VALUES ('2018329621081', '圆谷光彦', '男', '20', '2018/9/10', '信息学院', '数字媒体技术', null, null, null, null);
INSERT INTO `student` VALUES ('2018329621084', '小岛元太', '男', '20', '2018/9/10', '信息学院', '数字媒体技术', null, null, null, null);
INSERT INTO `student` VALUES ('2018329621085', '铃木园子', '男', '20', '2018/9/10', '信息学院', '数字媒体技术', null, null, null, null);
INSERT INTO `student` VALUES ('2018329621089', '服部平次', '男', '20', '2018/9/10', '信息学院', '数字媒体技术', null, null, null, null);
INSERT INTO `student` VALUES ('2018329621100', '远山何叶', '男', '20', '2018/9/10', '信息学院', '数字媒体技术', null, null, null, null);
INSERT INTO `student` VALUES ('2018329621101', '世良真纯', '男', '20', '2018/9/10', '信息学院', '数字媒体技术', null, null, null, null);
INSERT INTO `student` VALUES ('2018329621216', '安室透', '女', '19', '2018/9/9', '信息学院', '数字媒体技术', null, null, null, null);
INSERT INTO `student` VALUES ('2018329621226', '工藤优作', '男', '20', '2018/9/10', '信息学院', '数字媒体技术', null, null, null, null);
INSERT INTO `student` VALUES ('2018329621243', '工藤有希子', '男', '20', '2018/9/10', '信息学院', '数字媒体技术', null, null, null, null);
INSERT INTO `student` VALUES ('2018331200240', '怪盗基德', '男', '20', '2018/9/10', '信息学院', '数字媒体技术', null, null, null, null);
INSERT INTO `student` VALUES ('2018332871024', '日暮十三', '男', '20', '2018/9/10', '信息学院', '数字媒体技术', null, null, null, null);
INSERT INTO `student` VALUES ('2018333503190', '白鸟任三郎', '男', '20', '2018/9/10', '信息学院', '数字媒体技术', null, null, null, null);
INSERT INTO `student` VALUES ('2018336711157', '佐藤美和子', '女', '19', '2018/9/9', '信息学院', '数字媒体技术', null, null, null, null);
INSERT INTO `student` VALUES ('2018339960004', '高木涉', '女', '19', '2018/9/9', '信息学院', '数字媒体技术', null, null, null, null);

-- ----------------------------
-- Table structure for super_user
-- ----------------------------
DROP TABLE IF EXISTS `super_user`;
CREATE TABLE `super_user` (
  `username` varchar(15) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `name` varchar(10) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `password` varchar(20) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `avatar` varchar(150) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  PRIMARY KEY (`username`),
  CONSTRAINT `super_user_ibfk_1` FOREIGN KEY (`username`) REFERENCES `management` (`mno`) ON DELETE CASCADE ON UPDATE RESTRICT
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- ----------------------------
-- Records of super_user
-- ----------------------------
INSERT INTO `super_user` VALUES ('150001', '邓紫棋', 'aaaaaa', null);
INSERT INTO `super_user` VALUES ('150002', '周杰伦', 'aaaaaa', null);
INSERT INTO `super_user` VALUES ('150003', '钱德勒', '123456', null);
INSERT INTO `super_user` VALUES ('150004', '乔伊', '123456', null);
INSERT INTO `super_user` VALUES ('150005', '罗斯', '123456', null);
INSERT INTO `super_user` VALUES ('150006', '瑞秋', '123456', null);
INSERT INTO `super_user` VALUES ('150007', '莫妮卡', '123456', null);
INSERT INTO `super_user` VALUES ('150008', '菲比', '123456', null);

-- ----------------------------
-- Table structure for teacher
-- ----------------------------
DROP TABLE IF EXISTS `teacher`;
CREATE TABLE `teacher` (
  `tno` varchar(15) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `name` varchar(20) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `sex` varchar(2) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `age` smallint(6) NOT NULL,
  `email` varchar(30) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `tel` varchar(20) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `intro` varchar(200) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  PRIMARY KEY (`tno`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- ----------------------------
-- Records of teacher
-- ----------------------------
INSERT INTO `teacher` VALUES ('09001', '琴酒', '男', '20', null, null, null);
INSERT INTO `teacher` VALUES ('09002', '伏特加', '男', '21', null, null, null);
INSERT INTO `teacher` VALUES ('09003', '波本', '男', '22', null, null, null);
INSERT INTO `teacher` VALUES ('09004', '贝尔摩得', '女', '23', null, null, null);
INSERT INTO `teacher` VALUES ('09005', '基安蒂', '男', '24', null, null, null);
INSERT INTO `teacher` VALUES ('09006', '宫野明美', '男', '25', null, null, null);
INSERT INTO `teacher` VALUES ('09007', '苏格兰', '男', '26', null, null, null);
INSERT INTO `teacher` VALUES ('09008', '宫野厚斯', '女', '27', null, null, null);
INSERT INTO `teacher` VALUES ('09009', '小林澄子', '女', '28', null, null, null);
INSERT INTO `teacher` VALUES ('09010', '上尉', '男', '29', null, null, null);
INSERT INTO `teacher` VALUES ('09011', '铃木朋子', '男', '30', null, null, null);
INSERT INTO `teacher` VALUES ('09012', '小岛原次', '女', '31', null, null, null);
INSERT INTO `teacher` VALUES ('09013', '目暮绿', '女', '32', null, null, null);

-- ----------------------------
-- Table structure for teacher_user
-- ----------------------------
DROP TABLE IF EXISTS `teacher_user`;
CREATE TABLE `teacher_user` (
  `username` varchar(15) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `name` varchar(10) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `password` varchar(20) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `avatar` varchar(150) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  PRIMARY KEY (`username`),
  CONSTRAINT `teacher_user_ibfk_1` FOREIGN KEY (`username`) REFERENCES `teacher` (`tno`) ON DELETE CASCADE ON UPDATE RESTRICT
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- ----------------------------
-- Records of teacher_user
-- ----------------------------
INSERT INTO `teacher_user` VALUES ('09001', '琴酒', 'aaaaaa', null);
INSERT INTO `teacher_user` VALUES ('09002', '伏特加', '123456', null);
INSERT INTO `teacher_user` VALUES ('09003', '波本', '123456', null);
INSERT INTO `teacher_user` VALUES ('09004', '贝尔摩得', '123456', null);
INSERT INTO `teacher_user` VALUES ('09005', '基安蒂', '123456', null);
INSERT INTO `teacher_user` VALUES ('09006', '宫野明美', '123456', null);
INSERT INTO `teacher_user` VALUES ('09007', '苏格兰', '123456', null);
INSERT INTO `teacher_user` VALUES ('09008', '宫野厚斯', '123456', null);
INSERT INTO `teacher_user` VALUES ('09009', '小林澄子', '123456', null);
INSERT INTO `teacher_user` VALUES ('09010', '上尉', '123456', null);
INSERT INTO `teacher_user` VALUES ('09011', '铃木朋子', '123456', null);
INSERT INTO `teacher_user` VALUES ('09012', '小岛原次', '123456', null);
INSERT INTO `teacher_user` VALUES ('09013', '目暮绿', '123456', null);

-- ----------------------------
-- Table structure for teaching_eval
-- ----------------------------
DROP TABLE IF EXISTS `teaching_eval`;
CREATE TABLE `teaching_eval` (
  `tno` varchar(15) NOT NULL,
  `evaluation` varchar(20) DEFAULT NULL,
  `sno` varchar(15) NOT NULL,
  PRIMARY KEY (`tno`,`sno`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- ----------------------------
-- Records of teaching_eval
-- ----------------------------
INSERT INTO `teaching_eval` VALUES ('09001', '满意', '2018329621030');
INSERT INTO `teaching_eval` VALUES ('09002', '非常满意', '2018329621030');
INSERT INTO `teaching_eval` VALUES ('09003', '非常满意', '2018329621030');
INSERT INTO `teaching_eval` VALUES ('09004', '非常满意', '2018329621030');
INSERT INTO `teaching_eval` VALUES ('09008', '非常满意', '2018329621030');

-- ----------------------------
-- Table structure for teaching_tasks
-- ----------------------------
DROP TABLE IF EXISTS `teaching_tasks`;
CREATE TABLE `teaching_tasks` (
  `tno` varchar(15) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `cno` varchar(10) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `title` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `content` varchar(500) DEFAULT NULL,
  `time` varchar(50) NOT NULL,
  PRIMARY KEY (`time`,`tno`,`cno`),
  KEY `cno` (`cno`),
  CONSTRAINT `teaching_tasks_ibfk_1` FOREIGN KEY (`cno`) REFERENCES `course` (`cno`) ON DELETE CASCADE ON UPDATE RESTRICT
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- ----------------------------
-- Records of teaching_tasks
-- ----------------------------
INSERT INTO `teaching_tasks` VALUES ('09001', '62540', '课程设计', '按照题目《教务管理系统》（或自拟题目）的应用需求进行调研，通过需求分析、模拟数据，提取实体、实体与实体之间的联系，运用数据库设计方法进行数据库的设计，并插入一定量的实验数据。', '2020/5/30 12:00');
INSERT INTO `teaching_tasks` VALUES ('09001', '62540', '开学第二课', '蓝墨云视频观看，并完成练习题', '2020/6/1 19:30');
INSERT INTO `teaching_tasks` VALUES ('09001', '62517', '本草纲目', '如果崇洋都被医治', '2020/6/29 22:09');
INSERT INTO `teaching_tasks` VALUES ('09001', '62517', '计算机网络', '哈哈哈啊哈', '2020/7/8 20:55');

-- ----------------------------
-- Table structure for user
-- ----------------------------
DROP TABLE IF EXISTS `user`;
CREATE TABLE `user` (
  `username` varchar(15) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `name` varchar(10) NOT NULL,
  `password` varchar(20) NOT NULL,
  `avatar` varchar(150) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  PRIMARY KEY (`username`),
  CONSTRAINT `user_ibfk_1` FOREIGN KEY (`username`) REFERENCES `student` (`sno`) ON DELETE CASCADE ON UPDATE RESTRICT
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- ----------------------------
-- Records of user
-- ----------------------------
INSERT INTO `user` VALUES ('2018327113028', '海绵宝宝', '123456', null);
INSERT INTO `user` VALUES ('2018327130012', '派大星', '123456', null);
INSERT INTO `user` VALUES ('2018329600051', '章鱼哥', '123456', null);
INSERT INTO `user` VALUES ('2018329600060', '蟹老板', '123456', null);
INSERT INTO `user` VALUES ('2018329600124', '痞老板', '123456', null);
INSERT INTO `user` VALUES ('2018329621001', '凯伦', '123456', null);
INSERT INTO `user` VALUES ('2018329621002', '珊迪', '123456', null);
INSERT INTO `user` VALUES ('2018329621009', '小蜗', '123456', null);
INSERT INTO `user` VALUES ('2018329621014', '泡芙老师', '123456', null);
INSERT INTO `user` VALUES ('2018329621018', '珍珍', '123456', null);
INSERT INTO `user` VALUES ('2018329621024', '凯伦', '123456', null);
INSERT INTO `user` VALUES ('2018329621025', '拉里', '123456', null);
INSERT INTO `user` VALUES ('2018329621030', '服部平藏', 'aaaaaa', null);
INSERT INTO `user` VALUES ('2018329621036', '杰瑞', '123456', null);
INSERT INTO `user` VALUES ('2018329621037', '两只鞋太太', '123456', null);
INSERT INTO `user` VALUES ('2018329621042', '斯派克', '123456', null);
INSERT INTO `user` VALUES ('2018329621043', '泰克', '123456', null);
INSERT INTO `user` VALUES ('2018329621045', '泰菲', '123456', null);
INSERT INTO `user` VALUES ('2018329621047', '江户川柯南', '123456', null);
INSERT INTO `user` VALUES ('2018329621051', '工藤新一', '123456', null);
INSERT INTO `user` VALUES ('2018329621058', '毛利兰', '123456', null);
INSERT INTO `user` VALUES ('2018329621065', '毛利小五郎', '123456', null);
INSERT INTO `user` VALUES ('2018329621071', '阿笠博士', '123456', null);
INSERT INTO `user` VALUES ('2018329621073', '灰原哀', '123456', null);
INSERT INTO `user` VALUES ('2018329621079', '吉田步美', '123456', null);
INSERT INTO `user` VALUES ('2018329621081', '圆谷光彦', '123456', null);
INSERT INTO `user` VALUES ('2018329621084', '小岛元太', '123456', null);
INSERT INTO `user` VALUES ('2018329621085', '铃木园子', '123456', null);
INSERT INTO `user` VALUES ('2018329621089', '服部平次', '123456', null);
INSERT INTO `user` VALUES ('2018329621100', '远山何叶', '123456', null);
INSERT INTO `user` VALUES ('2018329621101', '世良真纯', '123456', null);
INSERT INTO `user` VALUES ('2018329621216', '安室透', '123456', null);
INSERT INTO `user` VALUES ('2018329621226', '工藤优作', '123456', null);
INSERT INTO `user` VALUES ('2018329621243', '工藤有希子', '123456', null);
INSERT INTO `user` VALUES ('2018331200240', '怪盗基德', '123456', null);
INSERT INTO `user` VALUES ('2018332871024', '日暮十三', '123456', null);
INSERT INTO `user` VALUES ('2018333503190', '白鸟任三郎', '123456', null);
INSERT INTO `user` VALUES ('2018336711157', '佐藤美和子', '123456', null);
INSERT INTO `user` VALUES ('2018339960004', '高木涉', '123456', null);
