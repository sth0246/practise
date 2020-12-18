var pull1 = document.getElementById("main")
var menu1 = document.getElementById("lev2")
var btn1 = document.getElementById("btn")
var change = document.getElementById("view")
var oli = document.getElementsByClassName("ali")
var ali1 = Array.from(oli)
var aauto = document.getElementsByClassName("auto")
var aauto1 = Array.from(aauto)
var aau = document.getElementsByClassName("au")
var aau1 = Array.from(aau)
var feet = document.getElementById("feet")
var fot = document.getElementById("fot")
var feet = document.getElementById("feet")
var afot = fot.children
var afot1 = Array.from(afot)
var ainp = document.getElementById("inp")
var i = 0
var num = 0
var boor = 1

function pinp(){
    ainp.style.width = "10%"
  
}
feet.onclick = function(){
    if(boor == 1){
        fot.style.display = "block"
        boor = 0
    }
    else{
            fot.style.display = "none"
            boor = 1
    }

}
afot1[0].addEventListener('click',function(){feet.innerHTML = 'English'},false)
afot1[1].addEventListener('click',function(){feet.innerHTML = '简体中文'},false)
for(let m = 0;m<aauto1.length;m++){
    aauto1[m].index = m
    aauto1[m].onclick = function(){
        for(let j =0;j < aauto1.length;j++){
            aauto1[j].className = 'auto';
            aau1[j].className = 'au';
        }
        this.className = 'autox';
        aau1[aauto1[m].index].className = 'aux'
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