var pull1 = document.getElementById("main")
var menu1 = document.getElementById("lev2")
var btn1 = document.getElementById("btn")
var change = document.getElementById("view")
var oli = document.getElementsByClassName("ali")
var ali1 = Array.from(oli)
var aauto = document.getElementsByClassName("auto")
var aau = document.getElementsByClassName("au")
var aau1 = Array.from(aau)
var i = 0
var num = 0


for(m=0;m<aauto.length;m++){
    aauto[m].index = m
    aauto[m].onclick = function(){
       aau1[this.index].style.display="block"
       aauto[this.index].className="lix"
    }
}
ali1[0].className="active"      
function changeImg() {
    if(num==0){
        ali1[4].className="ali"
    }
    if(num>=1){
        ali1[num-1].className="ali"
    }
    
    change.style.left = "-" + i + "px"
    ali1[num].className="active"
    num++
    i += 1581
    if (i > 6324) {
        i = 0
    }
    if (num==5){
        num=0
    }
   
  
}
setInterval("changeImg()", 1000)
function menu() {
        menu1.style.display = "block"
    }
function menua() {
        menu1.style.display = "none"
    }
function pull() {
        pull1.style.height = 1660 + "px"
        btn1.style.display = "none"
    }