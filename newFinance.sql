set names utf8;

drop database if exists newFinance;

create database newFinance charset=utf8;
 
use newFinance;

#1.创建用户表【user】
create table user(
	u_id int primary key auto_increment,
	phone varchar(16),
	upwd varchar(16),
	head_img varchar(64),
	uname varchar(12),
	introduce varchar(36),
	sex varchar(1),
	birthday varchar(24),
	address varchar(36),
	email varchar(36),
	is_freeze varchar(1)
);

#2.系统管理员表【admin】
create table admin(
	aname varchar(16),
	apwd varchar(16)
);

#3.文章表【article】
create table article(
	a_id int primary key auto_increment,
	writer varchar(8),
	title varchar(128),
	content varchar(720),
	img_url varchar(128),
	pubdate varchar(32),
	a_check varchar(1),
	a_reason varchar(64),
	sorts varchar(3)
);

#4.用户倾向表【user_trend】
create table user_trend(
	a_id int,
	writer varchar(8),
	u_id int,
	is_collect varchar(1),
	collect_time varchar(36),
	is_zan varchar(1),
	id_focus varchar(1)
);

#5.评论表【user_comment】
create table user_comment(
	id int primary key auto_increment,
	a_id int,
	by_user int,
	comment varchar(64),
	comment_time varchar(36)
);

#6.回复表【writer_reply】
create table writer_reply(
	id int primary key auto_increment,
	a_id int,
	by_reply varchar(8),
	reply varchar(64),
	reply_time varchar(32)
);


#用户表数据
insert into user(phone,upwd,head_img,uname,introduce,sex,birthday,address,email,is_freeze) values(111111,111111,"004cbad7-c3b0-4498-888a-e22ace54f59c.jpg","马小云","nihao","1","2000/12/12","北京","123456@qq.com",0),
(222222,222222,"7e54a56cade24fb49ddda1ac30f0e551.jpg","杰尼龟","good","0","1994/11/11","上海","222@123.com",1),
(333333,333333,"8f13e260ea60448a939aeb8f0ade44c9.jpg","小红","huai","1","2000/03/24","深圳","333@qq.com",0),
(444444,444444,"b5735c73dc5a410c889e3be58d17cfee.jpg","小艾","boot","0","1998/04/16","广东","44@123.com",0),
(555555,555555,"39756701-e25f-4d1f-81a6-6c560a741677.jpg","小芽","string","1","1992/02/05","厦门","5555@qq.com",0);

#系统管理员数据
insert into admin(aname,apwd) values(111,111),
(222,222);

#文章表数据
insert into article(writer,title,content,img_url,pubdate,a_check,a_reason,sorts) 
values("王","标题","内容","路径","发布时间","审查","理由","种类"),
("作者2","中共中央关于坚持和完善中国特色社会主义制度","内容22","RgOzn71D9ipnT2.jpg","2019/10/10","0","理由2","军事"),
("作者3","习近平出席第二届中国国际进口博览会开模式","内容33","RgSYsPeIbXUyvi.jpg","2019/10/18","1","理由3","国际"),
("作者4","李克强同泰国总理巴育举行会谈","内容4","RggB9JgFE7uc7g.jpg","2019/10/20","2","理由4","历史"),
("作者5","袁隆平的梦：'禾下乘凉'和'覆盖全球'","内容5","RggB9JgFE7uc7g.jpg","2019/11/11","1","理由5","美食"),
("作者6","联播+|五年再巧合，习近平这次出访中的'偶然'和'必然'","内容66","a26a5891-080d-457a-ac4a-dad96803b882.jpg","2019/09/25","1","理由6","国际"),
("央视新闻","'美丽山'的美丽传奇","内容77","","2019/10/18","1","理由7","旅游"),
("胡锡进","胡锡进:应授权港警实弹还击发射弓箭的暴徒，且无需对伤亡负责","内容8","5468b1426d994c49a2739eb7c490bf29.jpg","2019/10/28","1","理由8","社会"),
("中国经济网","驻港部队清路障被 '纵暴派' 泼脏水 港网友:指手画脚","内容9","RhzRiNUGOIUKXW.jpg","2019/11/01","1","理由9","军事"),
("中国网","各地垃圾分类标准不同怎么办？统一标准来了","内容10","Ri2yqk0BQsxJ93.jpg","2019/11/10","1","理由10","其它"),
("中国新闻周刊","南开大学校长曹雪涛被曝论文造假，本人回应：查完了会有回复","内容11","5d63748044c448568647de9783ec1e8f.jpg","2019/10/18","1","理由11","其它"),
("环球网","'冻到发紫'！今冬以来气温最大'扣折'来了","内容12","Ri3sc3WIhPxjzy.jpg","2019/10/20","1","理由12","社会"),
("请勿靠近868","最新车标大全","内容13","e6faf37c73084059a28acc6a0ee6f8ad.jpg","2019/11/14","1","理由13","汽车"),
("光明网","这些照片真没PS过","内容14","R6f8wPX2l0qZnY.jpg","2019/11/15","1","理由14","摄影"),
("面包财经","绿地香港：前十月累计销售385亿元，均价同比增4成","内容15","f4e9e21618ac455c8743ba9c0ba1907e.jpg","2019/11/14","1","理由15","房产"),
("gooood谷德设计网","坡道构成动态立面-IMEC中心和KUI计算机科学大楼的停车楼","内容16","Ri7LZR8AOI47KU.jpg","2019/11/14","1","理由16","设计"),
("光明网","和你有关，社保分哪3种，很多人还不知道","内容17","Rhrwlan3UCctsf.jpg","2019/09/24","1","理由17","社会"),
("中国网文化","揭秘毛主席纪念堂为何最终选址天安门广场？","内容18","2379d88331f74972bdbbf6753faba19b.jpg","2019/11/14","1","理由18","历史"),
("小明商业评说","70多岁富豪出狱，以为北京还有2百多套房，结果发现早不是他的了","内容19","2b46f1086fe94d9b95bf1e0b73a118bf.jpg","2019/10/23","1","理由19","房产"),
("光明网","一个家庭若是出现这三个问题 中了的赶紧改才行","内容20","Ri7wsl41pWM6eB.jpg","2019/12/01","1","理由20","育儿"),
("环球网","怒了，法国内政部长喊他们是'暴徒'","内容21","Ri7wkMt5ZONO8J.jpg","2019/11/08","1","理由21","国际"),
("中国网","炖排骨，有人先焯水，有人直接炖，大厨：全不对，教你正确做法","内容22","Ri8E4YVHDFeMBj.jpg","2019/11/14","1","理由22","美食"),
("新华社","习主席香港局势重要讲话'3+3+3+1'值得逐句细读","内容23","","2019/11/09","1","理由23","时政"),
("光明网","寒潮黄色预警！温度断崖式下降！这件事得赶紧安排","内容24","Ri8CSxD1z1giG5.jpg","2019/11/14","1","理由24","社会"),
("新京报","北京周一现早高峰：目前全路网严重拥堵","内容25","Ri8C1Vq5Y80CkN.jpg","2019/11/15","1","理由25","社会"),
("LOL游戏解说","s9赛季LOL全球联赛，FPX战队夺冠！","内容25","7857c48190ce4ea6a3ec6a5c0a444216.jpg","2019/11/14","1","理由25","游戏");

#用户倾向表数据
insert into user_trend(a_id,writer,u_id,is_collect,collect_time,is_zan,id_focus) 
values(1,"作者",11,"0","2019/10/31","0","1"),
(2,"22",22,"1","2019/11/01","1","0"),
(3,"33",33,"0","2019/11/02","0","1"),
(4,"44",44,"1","2019/10/29","1","0"),
(5,"55",55,"0","2019/10/03","0","1");

#评论表数据
insert into user_comment(a_id,by_user,comment,comment_time) 
values(11,11,"1评论内容","11评论时间"),
(22,22,"22","22"),
(3,33,"33","33"),
(44,44,"44","44");

#回复表数据
insert into writer_reply(a_id,by_reply,reply,reply_time) 
values(1,"被回复的人1","回复内容11","2019-10-31"),
(2,"222","2","2019/10/30"),
(3,"33","33","2019/11/03"),
(4,"444","44","2019/10/28"),
(5,"55","55","2019/11/01");









