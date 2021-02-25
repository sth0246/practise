var height = window.innerHeight;//获取屏幕高度
var map = document.getElementsByClassName("box")[0];//获取画布
var score = document.getElementsByClassName("box")[1];//获取计分板
var viewed_score = score.getElementsByTagName("span")[0];//提示当前长度
var stared = score.getElementsByTagName("div")[2]//开始和暂停键
var box_width = height / 40;//设置小格子宽度
var boxs = map.children;//获取小格子
var head = "right";//头（行驶）的方向，默认为右
var x = 0;//规定蛇头的初始位置
var y = 2;
var snake = new Array;//蛇身构成
var snake_length = 3;//蛇身长度
var map_position = new Array;//二维数组坐标系
var food_x = null;//食物的坐标
var food_y = null;
var timer = null;//设置一个定时器
var gaming = false;//记录是否在游戏
var rank = new Array;//设置一个排名榜数组
var rank_div = document.getElementsByClassName("rank")[0];//获取排名榜的节点，便于从此节点往下用js创造div
var gaming_times = 1 //设置游戏次数，便于排名榜填入成绩和js创建新div
var bones = [9,19,29,39]//设置一个彩蛋数组，当随机数等于彩蛋数组中的任何一个，这次的食物变色，并且有特殊效果
var lev = document.getElementsByClassName("lev")[0];
var lev_span = lev.getElementsByTagName("span");
var speed = 300 //设置一个速度参数
var body_color = "rgb(32, 37, 107)"

map.style.width = height + "px";//画布的长宽
map.style.height = height + "px";
map.style.backgroundColor = "rgb(32, 37, 107)"
score.style.width = 0.382 * height + "px"
score.style.height = height + "px"
score.style.marginLeft = 0.01 * height + "px"
score.style.backgroundColor = "rgb(116, 123, 231)"
lev_span[0].style.border = "3px solid #47aece"
for(var i = 0;i<lev_span.length;i++){
    lev_span[i].index = i;
    lev_span[i].onclick = function(){
        for(var j = 0;j<lev_span.length;j++){
            lev_span[j].style.border = "2px solid black"
        }
        if (this.index == 0) {
            speed = 300;
        }
        if (this.index == 1) {
            speed = 200;
        }
        if (this.index == 2) {
            speed = 100;
        }
        
        this.style.border = "3px solid #47aece"
        console.log(speed)
        console.log(this.index)
    }
}
for (var i = 0; i < 1600; i++) {//向画布里填格子并给他们属性
    var box = document.createElement("div")
    box.style.height = box_width + "px";
    box.style.width = box_width + "px";
    box.style.float = "left"
    // box.innerHTML = i;
    map.appendChild(box);
}
for (var i = 0, n = 0; i < 40; i++) {//将填的格子再装在一个二维数组里（便于控制和计算）
    map_position[i] = new Array
    for (var j = 0; j < 40; j++) {
        map_position[i][j] = boxs[n];
        n++;
    }
}
function compare(value1, value2) {//设置比较函数 便于数组的sort方法排序
    return value2 - value1;
}
function gameover() {//游戏结束提示的东西 
    star();
    x = 0;
    y = 2;
    head = "right"
    snake.splice(0, snake.length)
    for (var i = 0; i < 3; i++) {
        snake[i] = map_position[0][i];
        snake[i].style.backgroundColor = "rgb(71, 174, 206)";
        snake[i].style.borderRadius = "50%";
    }

    viewed_score.innerHTML = "您当前的长度<br>" + snake_length;

    rank[gaming_times - 1] = snake_length;
    rank.sort(compare)
    var ranks = document.createElement("div")
    ranks.style.width = "100%"
    ranks.style.height = "13%"
    rank_div.appendChild(ranks)
    var rank_div_children =rank_div.getElementsByTagName("div");
    for(var i =0 ;i<gaming_times;i++){
        rank_div_children[i].style.fontSize = 28-2*i+"px"
        rank_div_children[i].innerHTML = "这是第"+(i+1)+"名! &nbsp&nbsp&nbsp&nbsp&nbsp"+rank[i]
    }
    gaming_times++;
    snake_length = 3;
    alert("你输掉了游戏")
    console.log(rank)
}
//初始化蛇身
for (var i = 0; i < 3; i++) {
    snake[i] = map_position[0][i]
    snake[i].style.backgroundColor = "rgb(71, 174, 206)"
    snake[i].style.borderRadius = "50%"
}
function move() {//小蛇如何行走
    if (x < 0 || x == 40) {
        gameover()
    }
    if (y < 0 || y == 40) {
        gameover()
    }
    switch(snake_length){
        case 5 : clearInterval(timer);timer = setInterval("move()", 0.9*speed);break;
        case 7: clearInterval(timer);timer = setInterval("move()", 0.8*speed);break;
        case 9: clearInterval(timer);timer = setInterval("move()", 0.7*speed);break;
        case 11: clearInterval(timer);timer = setInterval("move()", 0.6*speed);break;
        case 14: clearInterval(timer);timer = setInterval("move()", 0.5*speed);break;
        case 17: clearInterval(timer);timer = setInterval("move()", 0.4*speed);break;
        case 20: clearInterval(timer);timer = setInterval("move()", 0.3*speed);break;
        case 22: clearInterval(timer);timer = setInterval("move()", 0.2*speed);break;
        case 24: clearInterval(timer);timer = setInterval("move()", 0.1*speed);break;
        case 25: clearInterval(timer);timer = setInterval("move()", 0.05*speed);break;
    }
    for (var i = 0; i < snake_length - 1; i++) {//小蛇头撞到自己时，这个for循环也涵盖了小蛇反向走致死的情况
        if (map_position[x][y] == snake[i]) {
            gameover()
        }
    }
    if (head == "right") {
        if (x == food_x && y == food_y) {//小蛇的头碰到食物
            snake_length++;
            snake.splice(snake_length - 1, 0, map_position[x][y])
            map_position[food_x][food_y].style.backgroundColor = "rgb(32, 37, 107)"
            food()
        } else {
            snake.splice(0, 1)
            snake.splice(snake_length - 1, 0, map_position[x][y])
        }
        y++;
    }
    if (head == "left") {
        if (x == food_x && y == food_y) {
            snake_length++;
            snake.splice(snake_length - 1, 0, map_position[x][y])
            map_position[food_x][food_y].style.backgroundColor = "rgb(32, 37, 107)"
            food()
        } else {
            snake.splice(0, 1)
            snake.splice(snake_length - 1, 0, map_position[x][y])
        }
        y--;
    }
    if (head == "up") {
        if (x == food_x && y == food_y) {
            snake_length++;
            snake.splice(snake_length - 1, 0, map_position[x][y])
            map_position[food_x][food_y].style.backgroundColor = "rgb(32, 37, 107)"
            food()
        } else {
            snake.splice(0, 1)
            snake.splice(snake_length - 1, 0, map_position[x][y])
        }
        x--;
    }
    if (head == "down") {
        if (x == food_x && y == food_y) {
            snake_length++;
            snake.splice(snake_length - 1, 0, map_position[x][y])
            map_position[food_x][food_y].style.backgroundColor = "rgb(32, 37, 107)"
            food()
        } else {
            snake.splice(0, 1)
            snake.splice(snake_length - 1, 0, map_position[x][y])
        }
        x++;
    }

    viewed_score.innerHTML = "您当前的长度<br>" + snake_length//计分板提示长度
    for (var i = 0; i < 40; i++) {//放止刷新地图时把食物刷掉
        for (var j = 0; j < 40; j++) {
            if (i == food_x && j == food_y) {
                continue;
            }
            map_position[i][j].style.backgroundColor = "rgb(32, 37, 107)"
        }
    }
    for (var i = 0; i < snake.length; i++) {//显示出蛇身
        snake[i].style.backgroundColor = "rgb(71, 174, 206)"
        snake[i].style.borderRadius = "50%"
    }
    console.log(head)
}
function star() {
    if (gaming) {
        clearInterval(timer)
        stared.innerHTML = "点击开始"
    } else {
        timer = setInterval("move()", speed);
        stared.innerHTML = "点击暂停"
    }
    gaming = !gaming;
}
//监听器
document.onkeydown = keylinstener;
function keylinstener() {
    var keycode = event.which || event.keyCode;
    if (keycode == 37) {
        head = "left";
        console.log("left");
    }
    if (keycode == 38) {
        head = "up";
        console.log("up");
    }
    if (keycode == 39) {
        head = "right";
        console.log("right");
    }
    if (keycode == 40) {
        head = "down";
        console.log("down")
    }
    if (keycode == 32) {
        star()
    }
}
//随机数生成
function random() {
    Math.random() * 40;
    var num = Math.random() * 40;
    num = parseInt(num, 10)
    return num;
}
//食物
function food() {
    food_x = random()
    food_y = random()
    map_position[food_x][food_y].style.backgroundColor = "rgb(71, 174, 206)"
    console.log(food_x)
    console.log(food_y)
}
food()



console.log(height)
console.log(x,y)