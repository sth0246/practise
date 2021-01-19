var bodor_line = document.getElementById("botton-line")
var header = document.getElementsByClassName("header")[0]
var lev1 = document.getElementsByClassName("lev1")
var btn11 = document.getElementById("btn1")
var banner = document.getElementById("banner")
var row1_a = document.getElementsByClassName("row1_a")
var row2 = document.getElementsByClassName("row2_1")[0]
var row2_a = row2.getElementsByTagName("a")
var content3 = document.getElementsByClassName("content3")[0]
var li3_ = content3.getElementsByTagName("li")
var li3 = Array.from(li3_)
var con3_img = ['img/row3-1.png','img/row3-2.png','img/row3-3.png','img/row3-4.png','img/row3-5.png','img/row3-6.jpg']
var con3 = document.getElementById("imgs")
var con9 = document.getElementsByClassName("cont9")[0]
var con9_div = con9.getElementsByTagName("div")
var buttom_li = document.getElementsByClassName("buttom-lix")
var right = document.getElementsByClassName("right")[0]
var right_lix = right.getElementsByTagName("li")
var right_li = Array.from(right_lix)
var qr = document.getElementsByClassName("qr_code")[0]
var qr_code = qr.getElementsByTagName("div")
var logo = document.getElementById("logo")


function windowAddMouseWheel() {
    var u = 0 //判断滚轮滚动多少次
    var scrollFunc = function (e) {
            if (window.event.wheelDelta > 0) {
                u++
                if(u>=10){
                   header.style.position = "fixed"
                   header.style.marginTop = "0px"
                   for(var i = 0;i<lev1.length;i++){
                       lev1[i].style.color = "#a6abb0"
                   }
                   lev1[0].style.color = "#3370ff"
                   bodor_line.style.borderBottom = "2px solid #3370ff"
                   logo.src = "img/bytedance_logo.png"
                    u=0
                }
            }
    }
    window.onmousewheel = document.onmousewheel = scrollFunc;
}
windowAddMouseWheel();
// 代替：hover效果的背景颜色切换函数
function hover_color(id,ex,ed){
    var temp = document.getElementById(id)
    temp.onmouseover = function(){
        temp.style.backgroundColor = ex
    }
    temp.onmouseout = function(){
        temp.style.backgroundColor =ed
    }
}
//导航栏 ：hover效果
for (var i = 0; i < lev1.length; i++) {
    lev1[i].onmouseover = function () {
        this.className = "lev1x"
    }
    lev1[i].onmouseout = function () {
        this.className = "lev1"
    }
}
//字体变色，图片放大，加阴影（：hover效果）
for(var i =0;i<row1_a.length;i++){
    row1_a[i].onmouseover =  function(){
        var a = this.getElementsByTagName("img")[0]
        this.style.color = "#6291fe"
        a.style.width = "80%"
        a.style.boxShadow = "5px 5px 20px 1px #676a6f"
    }
    row1_a[i].onmouseout =  function(){
        var a = this.getElementsByTagName("img")[0]
        this.style.color = "black"
        a.style.width = "60%"
        a.style.boxShadow = "0 0 0px 0px #333"
    }
}
hover_color("more","#82a7fc","#3370ff")
hover_color("btn1","#82a7fc","#3370ff")
//字体变色加阴影（：hover效果）
for(var i =0;i<row2_a.length;i++){
    row2_a[i].onmouseover =  function(){
        var a = this.getElementsByTagName("img")[0]
        var b = this.getElementsByTagName("p")[0]
        b.style.color = "#6291fe"
        a.style.boxShadow = "5px 5px 20px 1px #676a6f"
    }
    row2_a[i].onmouseout =  function(){
        var a = this.getElementsByTagName("img")[0]
        var b = this.getElementsByTagName("p")[0]
        b.style.color = "black"
        a.style.boxShadow = "0 0 0px 0px #333"
    }
}
var m =40
//选项卡内图片拉伸效果函数
function push(id,end){
    var b = document.getElementById(id)
   if(m<=end){
       m++
       b.style.width = m+"%"
   }
}
//选项卡动画效果
var timer = null
for( var i = 0;i<li3.length;i++){
    li3[i].onclick = function(){
        clearInterval(timer)
        m=40
        for(var j = 0;j<li3.length;j++){
            var a = li3[j].getElementsByTagName("p")[0]
            a.style.display = "none"
            li3[j].style.fontSize = "20px"
            li3[j].style.fontWeight = "400"
            li3[j].style.color = "#646a73"
            push('imgs',40,)
        }
        var b = this.getElementsByTagName("p")[0]
        b.style.display = "block"
        this.style.fontSize = "28px"
        this.style.fontWeight = "500"
        this.style.color = "black"
        con3.src = con3_img[li3.indexOf(this)]
        timer = setInterval("push('imgs',100)",300/(m^5))
    }
}
// 员工故事里的：hover效果
for( var i =0;i<con9_div.length;i++){
    con9_div[i].onmouseover = function(){
        var a = this.getElementsByTagName("button")[0]
        this.style.boxShadow = "0 0 10px 5px #f6f6f7"
        a.style.backgroundColor = "#99b7ff"
    }
    con9_div[i].onmouseout = function(){
        var a = this.getElementsByTagName("button")[0]
        this.style.boxShadow = "0 0 0px 0px #333"
        a.style.backgroundColor = "#edeeef"
    }
}
//底部的：hover效果
for(var i =0;i<buttom_li.length;i++){
    buttom_li[i].onmouseover = function(){
        this.style.color = "#7b7e81"
    }
    buttom_li[i].onmouseout = function(){
        this.style.color = "#D2D3D4"
    }
}
for(var i =0;i<right_li.length;i++){
    right_li[i].onmouseover = function(){
        this.style.filter = "brightness(0.7)"
        var l = right_li.indexOf(this)
        qr_code[l].style.display = "block"
    }
    right_li[i].onmouseout = function(){
        this.style.filter = "brightness(1)"
        var l = right_li.indexOf(this)
        qr_code[l].style.display = "none"
    }
}