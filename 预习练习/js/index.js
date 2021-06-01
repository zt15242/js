var oliList = document.getElementsByTagName("li");
var oman = document.getElementById("man");
var obtnYes = document.getElementById("btnYes");
var oUl = document.getElementById("vip");




var names = ['蔡海婷','陈俊宇','陈树旺','范家渝','黄洁冰','黄丽玲','黄梅莲','黄梅艳','黄铭乐','黄楠媚','黄淇','黄琼萍','黄锐丽','黄诗静','黄诗云',
			'黄世辉','黄世军','黄书朋','黄水娇','黄婷','黄文珍','黄雯虹','黄燕香','黄耀冰','黄烨辉','黄怡敏','黄义瑞','黄意珺','黄银泽',
			'黄 颖','黄泳彬','黄泳俊','黄羽林','黄语菲','黄月梅','黄泽清','黄钊月','黄振荣','黄中亮','霍华冰','霍嘉杏','霍金英','江凤茵','江美玲',
			'江智文','赖季联','赖杰文','赖静雯','赖伟林','赖秀娟',
			'赖旭霖','赖泽宇','蓝才坤','黎雄辉','李登学','李泓颖','李焕辉','李锦霖','莫天翔','欧志涛','潘连坤','吴燕秋'];
var t = 0;
//格式
function place() {
    for (var i = 0; i < 58; i++) {
        t = i * (360 / 58) + "deg";
        oliList[i].innerHTML = names[i];
        oliList[i].style.transform = "rotate(" + t + ") translate(360px)";

        var oSpan = document.createElement("span");
        // oSpan.innerHTML = "";
        oSpan.style.color = "#ac112c"
        oSpan.style.cursor = "pointer";
        oSpan.style.textAlign = "lift";
        oliList[i].appendChild(oSpan);

    }

}
place();
//随机度数
function fun() {
    var num = Math.round((Math.random() * 58));
    return num * (360 / 58) + 180;
}
//旋转事件
var myDeg = 0;
obtnYes.onmousedown = function() {
    myDeg = myDeg + fun();
    oman.style.transitionDuration = "5s";
    obtnYes.style.boxShadow = "none";
    console.log(myDeg);
    oman.style.transform = "rotateZ(" + myDeg + "deg)";
}
obtnYes.onclick = function() {
    btnYes.style.boxShadow = "2px 2px 5px black";
}

//VIP列表
for (var i = 0; i < oliList.length; i++) {
    oliList[i].lastElementChild.onclick = function() {
        var oVip = document.createElement("li");
        oVip.innerHTML = this.parentElement.innerHTML;
        oVip.style.height = "20px";
        oVip.style.border = "1px solid #FFFFFF";
        oUl.appendChild(oVip);
    }
}