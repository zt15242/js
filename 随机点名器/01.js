var arr = ["1","2","3","4","5","6",
			"7","8","9","10","11","12",
			"13","14","15","16","17","18",
			"19","20","21","22","23","24",
			"25","26","27","28","29","30",
			"31","32","33","34","35","36",
			"37","38","39","40","41","42",
			"43","44","45","46","47","48",
			"49","50","51","52","53","54",
			"55","56","57","58","59","60"]
var box = document.getElementById("box");
var span = document.getElementById("span");//获取元素
var state = 0;//定义状态，开始和结束
var t;
span.onclick = function () {
if (state == 0) {
  //如果是0即开始随机，变为1时结束，不是0时执行else
  clearInterval(t);
  t = setInterval(function () {
    // console.log(1);
    var sj = Math.round(Math.random() * (arr.length - 1));
    console.log(arr[sj]);
    box.innerHTML = arr[sj];
  }, 50)
  span.innerHTML = "结束"//更改按钮的内容
  state=1;
}else{
  state=0;
  clearInterval(t);
  span.innerHTML = "开始"
}
}
