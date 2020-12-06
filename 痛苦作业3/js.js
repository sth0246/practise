var i = 0
var change = document.getElementById("view")
function changeimg(){
    i++
    change.style.left = "-"+ i + "px"
}
setInterval("changeimg()",1)