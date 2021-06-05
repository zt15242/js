var arrName=new Array();
				arrName[0]=new Array('蔡昀飞','曾圣华','曾诗华',
	'曾依雯','陈炳雄','陈惠玲','陈火英','陈明珍','陈天泽','陈烨坤','何海梅','黄锦雄','黄 俊','黄 鑫','江加友','黎文华','李观微','李 政','梁国琳','梁鹏年',
	'梁宇燕','刘晓婷','龙志军','陆丽娟','陆秋宇','莫敏婷','欧阳恩','潘春丽','彭钊丽','覃柏梅','覃采妮','覃德榕','覃祥婷','覃 炫','覃茵琳','覃英祐','覃卓华','谭健敏','唐露敏',
	'王菲菲','王 妍','吴贵文','吴日德','徐金玉','徐思思','徐思雯','徐雅婷','杨洁敏','杨 明','杨馨月','杨正民','原颖诗','张世铭','郑圣泉','钟泽明',
	'周玮岚','朱保铭');
			arrName[1]=new Array('卜彩媚','岑禹廷','陈媛媛','陈月兰','程菲','程金婷','邓海韵','邓满超','邓明欣','方焕生','甘海兰','甘海全',
	        '甘焕玉','甘洁芬','高晓茵','光钧泉','郭彩燕','郭日焕','郭榕清','郭鋆丽','郭志强',
			'韩石容','何海玲','何海月','何锦开','何日兰','何文静','何卓桓','侯辉龙','胡海明','胡其森','胡燕敏','黄宝儀','黄北兰','黄昌宏','黄春燕','黄栋乾','黄发传','黄芳琳',
			'黄光兰','黄海华','黄海婷','黄海炜','黄华轩','黄焕兰','黄家乐','黄家炜','黄健安','黄进','黄俊琨','黄蓝青','黄立祥',
			'黄禄昌','黄铭华','黄平辉','黄瑞波','黄添荣','黄耀谊','黄紫蕾','林 鹏','覃忠泉','王清林','周月容','朱建霏'
			);
			arrName[2]=new Array('蔡广美','蔡华莹','蔡勇浩','曹新怡','曹雨轩',
		'岑林峰','曾春丽','曾德芳','曾恩雅','曾海灵','曾桦标','曾锦华','曾桔兰','曾军荣','曾丽坤','曾令炜','曾茗军','曾诗茵','曾祥皆','曾修强',
		'曾彦琳','曾伊曼','曾月灵','陈才粤','陈国希','陈佳茵','陈家兵','陈家海','陈家鹏','陈金英','陈锦杰','陈娟宇','陈俊颖',
		'陈美君','陈清梅','陈秋冰','陈秋镕','陈日凤','陈胜海','陈石荣','陈霜雨','陈文海','陈文湘','陈小雲','陈新月','陈 烨','陈 滢','陈宇凌',
		'陈志辉','黄玮锦','梁胜奇','林海胜','林满钊','陆柏能','覃恩强','唐杰华','唐永褚','徐炎兰','徐智坤','余振满','张女婷','张天明'
			);
			arrName[3]=new Array('曾思宁','陈福健','陈洁华','陈金怡','陈连心','陈秋颖','陈小漫','陈永甲','邓敏丽','何彬彬','胡秋梅',
		'黄德华','黄桂德','黄海东','黄海伦','黄焕媚','黄佳欣','黄家雯','黄嘉欣','黄梅丽','黄显龙','黄晓华','黄咏岚','黄政锋','黎荣华','黎晓童','李燕萍',
		'李振锋','梁铭秀','梁泳凤','林森华','刘岚清','龙思颖','龙泽豪','卢万杰','陆青兰','陆烨莹','罗朵朵','蒙宇亭','邱金萍','覃达财','覃桂宇','覃梁梅',
		'覃秋玲','覃瑞渝','覃炎玲','唐礼浩','吴涣辉','徐桂榕','薛燕秋','杨词怡','杨鑫升','张 铭','张泳夏','张玉艳','赵汝玲','周羽清','刘超玉'
			);
			var NameList=[];
			var mytime=null;
		    var	rutime=null;
			var music=false;
			function doit() {
				console.log(NameList);
				var bt=window.document.getElementById("bt");
				if (mytime==null && music==false) {
					musics.src="https://zt15242.github.io/js/%E9%9A%8F%E6%9C%BA%E7%82%B9%E5%90%8D%E5%99%A8/muisc/%E7%A5%96%E6%B5%B7%20-%20%E5%A5%BD%E8%BF%90%E6%9D%A5.mp3";
					musics.play();
					 bt.innerHTML="停止";
					  show();
					  run();
				} else{
					var box=window.document.getElementById("box");
					var bxz=window.document.getElementById("bxz");
					bxz.innerHTML="恭喜&nbsp;&nbsp;<font color='red'style='font-weight: bold;font-size: 25px;'>"+box.innerHTML+"</font>&nbsp;&nbsp;同学被选中";
					musics.pause();
					musics.src="";
					 bt.innerHTML="开始点名";
					  clearTimeout(mytime);
					  clearTimeout(rutime);
					  mytime=null;
					  rutime=null;
				}
			}
			function show () {
				var box=window.document.getElementById("box");
				var num=Math.floor((Math.random()*100000))%NameList.length;
				box.innerHTML=NameList[num];
				mytime=setTimeout("show()",50);
			}
			function run() {
				var bxz=window.document.getElementById("bxz");
				var sum=Math.floor((Math.random()*100000))%play.length;
				bxz.innerHTML="<font style='font-size: 1.875rem; color: red;'>"+play[sum]+"</font>";
				rutime=setTimeout("run()",1000);
			}
			window.onload=function () {
				var province=document.getElementById("province");
				var box=window.document.getElementById("box");
				var dqbj=document.getElementById("dqbj");
				province.onchange=function () {
					var arr=arrName[this.value];
					NameList=arr;
					var a=parseInt(this.value)+1;
					// console.log(a);
					for (var i = 1; i < this.length; i++) {
						dqbj.innerHTML="当前选中班级为："+this[a].innerHTML+"班";
					}
					box.innerHTML="亲，准备好点名了吗？";
				}
			}
			
		
var play=['天选之人---','这就不可能是我好吧！！！','不是我！！！不是我！！！！',
'下一个下一个！！！','嗯嗯嗯嗯额！！！','不可能是我的吧！！！','没问题的，没问题的！',
'就不可能是我好吧','选不到我，选不到我！！','停下吧，心忐忑忐忑的！！！','这要是能选到我那就怪了！！！',
'晕，还不停吗！！','不能吧','等的好累！！','嗯？？？？','只有这时候我不想当天选之人','有画面了，有画面了','还好不是我哎','好好学习，天天向上',
'此刻，我想好好学习!!!','哎，二氧化碳','少玩手机多学习','保护好眼睛','听老师的话,老师都是过来人','再也不怕跟老师对上眼喊我回答问题','对错没关系','现在是天选之人，以后也会是天选之人'
,'成功其实很简单，就是当你坚持不住的时候，再坚持一下','to young to simple','不要整天TIMI!!!!','你要好好学习呀','越努力越优秀！！','就决定是你了！！','我保证现在不是心动，是忐忑！！！'
]
