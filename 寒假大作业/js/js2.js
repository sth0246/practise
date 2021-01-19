var w = window.innerWidth //获取页面长度宽度
var h = window.innerHeight
var header = document.getElementsByClassName("header")[0]
var header_a = header.getElementsByTagName("a")
var header_a_li = header.getElementsByTagName("li")
var row = document.getElementsByClassName("row")[0]
var logo_li = document.getElementsByClassName("logo-li")[0]
var logo_li_li = logo_li.getElementsByTagName("li")
var logo_li_img_ = logo_li.getElementsByTagName("img")//伪数组，因为下面要用到indexof获取this的索引值 所以要转化为标准数组
var logo_li_img = Array.from(logo_li_img_)
var txt = document.getElementsByClassName("txt")[0]
var txt_div = txt.getElementsByTagName("div")
var txt_img = txt.getElementsByTagName("img")
var s = 0 //这个是用来记录 停留在哪个图标和背景图片上的，并之后通过函数改变s以改变 图标和背景图片

header.style.height = 0.07 * h + "px"
row.style.height = 0.92 * h + "px"
console.log(w)//调试一下看看对不对
console.log(h)

function clear() {//用来清除所有样式，以达到每次只改变一个样式的目的
    for (var j = 0; j < logo_li_img.length; j++) {
        logo_li_img[j].style.height = "100%"
        logo_li_img[j].style.boxShadow = "0px 0px 0px 0px #fff"
        txt_div[j].style.display = "none"
    }
}
//鼠标滚动函数，计入滚动多少次
function windowAddMouseWheel() {
    logo_li_img[s].style.height = "135%"
    logo_li_img[s].style.boxShadow = "5px 5px 20px 1px #676a6f"
    row.style.background = "url(img2/row" + (s + 1) + ".jpg"
    row.style.backgroundSize = "100% 100%"
    txt_div[s].style.display = "block"
    var u = 0 //判断滚轮滚动多少次
    var scrollFunc = function () {
        if (window.event.wheelDelta > 0) { //当滑轮向上滚动时
            u++
            if (u >= 8) {
                if (s == 0) {
                    s = 10
                } else {
                    s--
                }
                clear()
                logo_li_img[s].style.height = "135%"
                logo_li_img[s].style.boxShadow = "5px 5px 20px 1px #676a6f"
                row.style.background = "url(img2/row" + (s + 1) + ".jpg"
                row.style.backgroundSize = "100% 100%"
                txt_div[s].style.display = "block"
                u = 0
            }
        }
        if (window.event.wheelDelta < 0) { //当滑轮向下滚动时
            u--
            if (u <= -8) {
                if (s == 10) {
                    s = 0
                } else {
                    s++
                }
                clear()
                logo_li_img[s].style.height = "135%"
                logo_li_img[s].style.boxShadow = "5px 5px 20px 1px #676a6f"
                row.style.background = "url(img2/row" + (s + 1) + ".jpg"
                row.style.backgroundSize = "100% 100%"
                txt_div[s].style.display = "block"
                u = 0
            }
        }
    };
    window.onmousewheel = document.onmousewheel = scrollFunc;
}
windowAddMouseWheel()
//导航栏：hover效果
for (var i = 0; i < header_a.length; i++) {
    header_a[i].style.color = "#646a73"
    header_a[i].onmouseover = function () {
        this.style.color = "#3370ff"
    }
    header_a[i].onmouseout = function () {
        this.style.color = "#646a73"
        header_a[2].style.color = "#3370ff"
        header_a[2].style.fontWeight = "1000"
        header_a_li[2].style.borderBottom = "2px solid #3370ff"
    }
    header_a[2].style.color = "#3370ff"
    header_a[2].style.fontWeight = "1000"
    header_a_li[2].style.borderBottom = "2px solid #3370ff"
}
//偷个懒 用js给十一个logo加路径 想继续写：hover图片放大效果，发现可以用一个for循环，真方便
//内容logo的src也在这了
for (var i = 0; i < logo_li_img.length; i++) {
    logo_li_img[i].src = "img2/logo" + (i + 1) + ".png"
    txt_img[i].src = "img2/logo" + (i + 1) + ".png"
    logo_li_img[i].onclick = function () {
        for (var j = 0; j < logo_li_img.length; j++) {
            logo_li_img[j].style.height = "100%"
            logo_li_img[j].style.boxShadow = "0px 0px 0px 0px #fff"
            txt_div[j].style.display = "none"
        }
        s = logo_li_img.indexOf(this) //将点击的索引值计入全局变量s里，通过鼠标滚轮改变s+1或-1，得出滚轮滚动切换下一个的效果 
        this.style.height = "135%"
        this.style.boxShadow = "5px 5px 20px 1px #676a6f"
        row.style.background = "url(img2/row" + (s + 1) + ".jpg"
        row.style.backgroundSize = "100% 100%"
        txt_div[s].style.display = "block"
    }
}