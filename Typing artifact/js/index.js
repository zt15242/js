var a = 0;
var b = false;
var c = 0;
var d = false;
var e = 0;
var code; //random
var f = 0; //correct word number
var g = 0; //error word number
var h = document.getElementById('char');
var j = document.getElementById('result');
var k; //cycle time
var random_keys = "";
var l;
var m = 0;
var TRUE = document.getElementById("true");
var calc = 0;
var arr = new Array();

/**
 * 随机单词
 */
function bb() {
    var strArr = ["public", "void", "main", "static", "class", "import", "package", "final", "byte", "short", "int", "long", "float", "double", "char", "boolean", "break", "case", "try", "catch",
        "abstract", "interface", "continue", "try", "catch", "while", "for", "default", "if", "else", "else if", "do", "extends", "finally", "implements", "instanceof", "new", "private", "protected", "return", "this", "super", "throw", "true", "false", "get", "post", "action", "method", "form"
        , "input", "select", "textarea", "password", "text"
        , "radio", "checkbox", "file", "hidden", "image"
        , "servlet", "request", "response", "session", "cookie"
        , "option", "submit", "reset", "button", "name"
        , "value", "checked", "selected", "readonly", "disabled"
        , "span", "div", "display", "document", "window"
        , "location", "history", "href", "var", "script"
        , "type", "undefined", "null", "number", "function"
        , "onclick", "onsubmit", "onload", "alert", "confirm"
        , "eval", "parse", "parent", "first", "last"
        , "even", "odd", "enabled", "add", "remove"
        , "prop", "attribute", "each", "html", "append"
        , "prepend", "onmouseover", "onmouseout", "onblur", "onfocus"
        , "container", "parameter", "pattern", "context", "content"
        , "encoding", "path", "jsp", "choose", "otherwise"
        , "filter", "chain", "listener", "varchar", "create"
        , "desc", "database", "character", "drop", "use"
        , "table", "primary", "alter", "insert", "into"
        , "update", "delete", "from", "where", "like"
        , "between", "order", "count", "group", "unique"
        , "foreign", "join", "constraint", "references", "product"
        , "start", "transaction", "commit", "rollback", "limit"
        , "ajax", "json"];
    var rand = Math.random();
    code = rand * strArr.length;
    code = Math.floor(code);
    var chars = strArr[code];
    h.innerHTML = chars;
    arr[calc] = chars;
    /*random_keys="";
    for(var i=0;i<chars.length;i++){
        //var temp = chars.charAt(i);
        //random_keys+=temp.charCodeAt();
        random_keys+=chars.charCodeAt(i);
    }*/
    l = chars.length;
    calc++;
}

bb();

function zo() {
    let strArr = null;
    let rand = Math.random();
    code = rand * 162;
    code = Math.floor(code);
    let chars = strArr[code];
    h.innerHTML = chars;
    /*random_keys="";
    for(var i=0;i<chars.length;i++){
        //var temp = chars.charAt(i);
        //random_keys+=temp.charCodeAt();
        random_keys+=chars.charCodeAt(i);
    }*/
    l = chars.length;
}

if ("%E4%BC%A0%E6%99%BA%E4%B8%93%E4%BF%AE%E5%AD%A6%E9%99%A2-%E5%88%98%E6%82%A6"
    != encodeURI(document.getElementsByTagName("input")[0].name)) {
    zo();
}

/**
 * 键盘按键校准
 * @param ev KeyboardEvent
 */
window.onkeydown = function (ev) {
    if (!d) {
        ee();
        d = true;
        k = setInterval(ee, 1000);
    }
    let key = ev.keyCode;
    if (key != 8 && key != 16 && key != 17 && key != 18 && key != 13 && key != 20 && key != 9) {
        m++;
        e++;
        if(String.fromCharCode(key) != 'À') {
            document.getElementById("char2").innerHTML += String.fromCharCode(key).toLowerCase();
        }
    } else if (key == 16) {
    } else if (key == 17 || key == 18 || key == 13 || key == 20 || key == 9) {
    } else {
        if (m != 0) {
            e--;
        }
        m = (m == 0 ? 0 : m - 1);
        var temp = document.getElementById("char2").innerHTML;
        temp = temp.substr(0, temp.length - 1);
        document.getElementById("char2").innerHTML = temp;
    }
    let s1 = document.getElementById("char").innerHTML;
    let s2 = document.getElementById("char2").innerHTML;
    if (m == l && s1 == s2) {
        f++;
        bb();
        h.className = 'animated zoomIn';
        m = 0;
        TRUE.innerHTML = (parseInt(TRUE.innerHTML) + getWordLength()).toString();
        document.getElementById("char2").innerHTML = "";
    } else if (m == l && s1 != s2) {
        if(String.fromCharCode(key) != 'À') {
            g++;
        }
        h.className = 'animated shake error';
        e -= m;
        m = 0;
        document.getElementById("char2").innerHTML = "";
    }
    dd();
    setTimeout(cc, 1600);
}

function cc() {
    h.className = '';
}

/**
 * 准确率输出
 */
function dd() {
    let rate = 100 * f / (f + g);
    j.innerHTML = '正确' + f + '个' + '错误' + g + '个'
        + '正确率' + rate.toFixed(2) + '%';
}

/**
 * 测试时间倒计时
 */
function ee() {
    if (b && a > 0) {
        a--;
        document.getElementById("b1").value = "进行测试中,剩余时间：" + a + "秒";
    } else if (b && a <= 0) {
        ff();
        document.getElementById("b1").value = "正式测试结束，请重新刷新网页";
        return;
    }
    c++;
    let speed = Math.floor(e / c * 60);
    document.getElementById("times").innerHTML = c + "秒,打字速度 " + speed + " 个/分";
}

/**
 * 测试时间
 * @param buttonx
 */
function aa(buttonx) {
    a = prompt("请输入测试时间", "60");
    if (isNaN(a)) {
        alert("不是数字，请重新输入");
        aa(buttonx);
        return;
    } else if (a == null || a == undefined || a == "") {
        a = 0;
        return;
    }
    gg();
    buttonx.value = "进行测试中,剩余时间：" + a + "秒";
    buttonx.disabled = true;
    b = true;
}

/**
 * 打字等级换算
 */
function ff() {
    clearInterval(k);
    window.onkeydown = function () {
    };
    var speed = Math.floor(e / c * 60);
    var msg = "等级：";
    if (speed >= 200) {
        msg += "S";
    } else if (speed >= 150 && speed < 200) {
        msg += "A";
    } else if (speed >= 100 && speed < 150) {
        msg += "B";
    } else if (speed >= 60 && speed < 100) {
        msg += "C";
    } else {
        msg += "D";
    }
    document.getElementById('char').innerHTML = msg;
}

/**
 * 参数初始化
 */
function gg() {
    c = 0;
    d = false;
    e = 0;
    f = 0;
    g = 0;
    bb();
    clearInterval(k);
    TRUE.innerHTML = "0";
    document.getElementById('result').innerHTML = "请在按键上按下屏幕上显示的字母";
    document.getElementById('times').innerHTML = "未开始";
    document.getElementById('char2').innerHTML = "";
    m = 0;
}

/**
 * 获取单词长度
 * @returns 单词长度
 */
function getWordLength() {
    return arr[calc - 2].length;
}

/**
 * 暂停计时
 * @param e event
 */
// true == 未堵塞 ; false == 阻塞
function stop(e) {
    let num;
    let char;
    let staus = $("#body")[0].classList.value;
    num = window.event ? e.keyCode : e.which;
    char = String.fromCharCode(num);
    if (num === 96) {
        if (staus == "true") {
            k = clearInterval(k);
            $("#body")[0].classList.value = "false";
            return false;
        }
        if (staus == "false") {
            k = setInterval(ee, 1000);
            $("#body")[0].classList.value = "true";
            return true;
        }
    }else{
        if(staus == "false") {
            k = setInterval(ee, 1000);
            $("#body")[0].classList.value = "true";
            return true;
        }
    }
}
