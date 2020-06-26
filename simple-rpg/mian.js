window.onload=function(){
    //this.document.write("Hello JavaScript!");
}

let mapArray, ctx, currentImgMainX, currentImgMainY,currentEnemyImgMainX=0,currentEnemyImgMainY=700;
let imgMountain, imgMain, imgEnemy;
let dx = 0,dy =0;
let ballx,bally;
let ballDirection=-1;
let ballDirection2=-1;
let isBall = 0,isBall2=0;
let enemyStatus = 1;
let targetImgMainX,targetImgMainY,targetBlock,cutImagePositionX=0;
let targetEnemyImgMainX,targetEnemyImgMainY,targetEnemyBlock,cutEnemyImagePositionX;
let game1,game2,game3,game4,game5,game6,game7,game8;
let move=0;
let enemyBallx=0,enemyBally=0;
var live1=2,live2=2;

$(document).ready(function(){  

    

    //0:可走，1：障礙，2：終點，3：敵人
    mapArray = [0,0,0,0,0,0,1,0,
                0,0,1,0,0,0,0,0,
                0,0,0,4,1,0,0,0,
                1,0,0,0,0,0,1,0,
                0,0,0,1,0,0,0,0,
                0,0,0,0,4,0,0,1,
                0,1,0,0,0,0,0,0,
                0,0,0,0,0,0,1,0,
    ];
    ctx = $("#myCanvas")[0].getContext("2d");

    imgMain = new Image();
    imgMain.src = "simple-rpg/images/spriteSheet.png"
    currentImgMainX = 100;
    currentImgMainY = 0;
    imgMain.onload = function(){
    ctx.drawImage(imgMain,0,0,80,130,currentImgMainX,currentImgMainY,100,100);
    }
    drawLive();
    imgMountain = new Image();
    imgMountain.src = "simple-rpg/images/material.png"
    imgEnemy = new Image();
    imgEnemy.src = "simple-rpg/images/Enemy.png"
    imgMountain.onload = function(){
        imgEnemy.onload = function(){
            for(let x in mapArray){
                if(mapArray[x]==1){
                    //console.log("1");
                    ctx.drawImage(imgMountain,32,65,32,32,x%8*100,Math.floor(x/8)*100,100,100);
                }
                else if(mapArray[x]==3){
                    ctx.drawImage(imgEnemy,7,40,104,135,x%8*100,Math.floor(x/8)*100,100,100);
                }
                else if(mapArray[x]==4){
                    ctx.drawImage(imgMountain,320,0,32,32,x%8*100,Math.floor(x/8)*100,100,100);
                }
            }
            ctx.drawImage(imgEnemy,7,40,104,135,currentEnemyImgMainX,currentEnemyImgMainY,100,100);
        }
        
    };
/*
    function drawEnemyBall(){
        ctx.beginPath();
        ctx.arc(enemyBallx, enemyBally, 25, 0, Math.PI*2);
        ctx.fillStyle = "#0095DD";
        ctx.fill();
        ctx.closePath();
    }

    function moveEnemyBall(){
        ctx.clearRect(enemyBallx-100,enemyBally,200,25);
        enemyBally-=10;
        drawEnemyBall();
        if(enemyBally+100+30<0 ){

            clearInterval(game5);
            ctx.clearRect(0,0,800,800);
            drawScene();
            enemyBallx=100;
            enemyBally=570;
            game5 = setInterval(moveEnemyBall,100);
        }
    
        let targetEnemyBallUp = Math.floor((enemyBallx)/200)+Math.floor((enemyBally-25)/200)*4;
        if( mapArray[targetEnemyBallUp] == 1){
            
            clearInterval(game5);
            
            ctx.clearRect(0,0,800,800);
            drawScene();
            enemyBallx=100;
            enemyBally=570;
            game5 = setInterval(moveEnemyBall,100);
        }
        if(enemyBallx>=currentImgMainX && enemyBallx<=currentImgMainX+200 && enemyBally>=currentImgMainY && enemyBally<=currentImgMainY+200){
            clearInterval(game5);
            ctx.clearRect(0,0,800,800);
            drawScene();
            enemyBallx=100;
            enemyBally=570;
            alert("Game Over!");
            document.location.reload();
        }
    }

    game5 = setInterval(moveEnemyBall,100);
*/
   
if(enemyBallx>=currentImgMainX && enemyBallx<=currentImgMainX+100 && enemyBally>=currentImgMainY && enemyBally<=currentImgMainY+100){
    clearInterval(game5);
    live1-=1;
    ctx.clearRect(0,0,800,800);
    drawScene();
    enemyBallx=0;
    enemyBally=0;
    drawLive();
    if(live1 == 0){
        alert("2P Win!");
        document.location.reload();
    }
}

if(ballx>=currentEnemyImgMainX && ballx<=currentEnemyImgMainX+100 && bally>=currentEnemyImgMainY && bally<=currentEnemyImgMainY+100){
    clearInterval(game5);
    live2-=1;
    ctx.clearRect(0,0,800,800);
    drawScene();
    ballx=0;
    bally=0;
    drawLive();
    if(live2 == 0){
        alert("1P Win!");
        document.location.reload();
    }
}

});

function drawLive(){
    ctx.font = "26px Arial";
    ctx.fillStyle = "Black";
    ctx.fillText("Live1: "+live1, 8, 30);
    ctx.fillText("Live2: "+live2, 8, 60);
}


function drawBall() {
    if(isBall == 0){
        ballx = currentImgMainX;
        bally = currentImgMainY;
        
    }
   
    isBall = 1;
    ctx.beginPath();
    ctx.arc(ballx+50, bally+100, 25, 0, Math.PI*2);
    ctx.fillStyle = "#0095DD";
    ctx.fill();
    ctx.closePath();
}


function drawScene() {
       //0:可走，1：障礙，2：終點，3：敵人
    //mapArray = [0,1,1,0,0,1,0,0,0,0,0,1,3,1,0,2];
    //ctx = $("#myCanvas")[0].getContext("2d");
    ctx = $("#myCanvas")[0].getContext("2d");
    imgMain = new Image();
    imgMain.src = "simple-rpg/images/spriteSheet.png"
    //currentImgMainX = 0;
    //currentImgMainY = 0;
    imgMain.onload = function(){
        if(move == 0){
            ctx.drawImage(imgMain,0,0,80,130,currentImgMainX,currentImgMainY,100,100);
        }else{
            
            ctx.drawImage(imgMain,cutImagePositionX,0,80,130,currentImgMainX,currentImgMainY,100,100)
        }
        console.log(cutImagePositionX,currentImgMainX,currentImgMainY);
    }
    drawLive();
    imgMountain = new Image();
    imgMountain.src = "simple-rpg/images/material.png"
    imgEnemy = new Image();
    imgEnemy.src = "simple-rpg/images/Enemy.png"
    imgMountain.onload = function(){
        imgEnemy.onload = function(){
            for(let x in mapArray){
                if(mapArray[x]==1){
                    ctx.drawImage(imgMountain,32,65,32,32,x%8*100,Math.floor(x/8)*100,100,100);
                }
                else if(mapArray[x]==3){
                    if(enemyStatus == 1)
                        ctx.drawImage(imgEnemy,7,40,104,135,x%8*100,Math.floor(x/8)*100,100,100);
                }
                else if(mapArray[x]==4){
                    ctx.drawImage(imgMountain,320,0,32,32,x%8*100,Math.floor(x/8)*100,100,100);
                }
            }
            ctx.drawImage(imgEnemy,7,40,104,135,currentEnemyImgMainX,currentEnemyImgMainY,100,100);
        }
        
    }; 

}

function drawLeft() {
    ctx.clearRect(ballx,bally,25,100);
    clearInterval(game4);
    clearInterval(game2);
    clearInterval(game3);
    //drawScene();
    //drawBall();
    if(isBall == 0){
        ballx = currentImgMainX;
        bally = currentImgMainY;
        
    }
   
    isBall = 1;
    ctx.beginPath();
    ctx.arc(ballx-10, bally+50, 25, 0, Math.PI*2);
    ctx.fillStyle = "#0095DD";
    ctx.fill();
    ctx.closePath();
    dx = -10;
    ballx += dx;
    if(ballx+80 <0 ){
        isBall =0;
        clearInterval(game1);
        clearInterval(game3);
        ctx.clearRect(0,0,800,800);
        drawScene();
        ballx=0;
        bally=0;
        
    }

    let targetBallLeft = Math.floor((ballx+50-25)/100)+Math.floor(bally/100)*8;
    console.log(ballx);
    console.log(targetBallLeft);
    if(mapArray[targetBallLeft] == 1 ){
        isBall =0;
        clearInterval(game1);
        clearInterval(game3);
        ctx.clearRect(0,0,800,800);
        drawScene();
        ballx=0;
        bally=0;
    }
    if(mapArray[targetBallLeft] == 3 ){
        isBall =0;
        live1+=1;
        mapArray[12]=0;
        clearInterval(game1);
        clearInterval(game3);
        ctx.clearRect(0,0,800,800);
        enemyStatus = 0;
        drawScene();
        ballx=0;
        bally=0;
    }
  
    if(mapArray[targetBallLeft] == 4 ){
        isBall =0;
        mapArray[targetBallLeft]=0;
        clearInterval(game1);
        clearInterval(game3);
        ctx.clearRect(0,0,800,800);
        drawScene();
        ballx=0;
        bally=0;
    }
  

    if(ballx-25>currentEnemyImgMainX && ballx-25<currentEnemyImgMainX+100 && bally+25>currentEnemyImgMainY && bally<currentEnemyImgMainY+100){
        clearInterval(game1);
        live2-=1;
        ctx.clearRect(0,0,800,800);
        drawScene();
        ballx=0;
        bally=0;
        drawLive();
        isBall=0;
        if(live2 == 0){
            alert("1P Win!");
            document.location.reload();
        }
    }
    

}

function drawUp() {
    ctx.clearRect(ballx,bally-25,100,25);
    clearInterval(game4);
    clearInterval(game3);
    clearInterval(game1);
    //drawScene();
    //drawBall();
    if(isBall == 0){
        ballx = currentImgMainX;
        bally = currentImgMainY;
        
    }
   
    isBall = 1;
    ctx.beginPath();
    ctx.arc(ballx+50, bally-35, 25, 0, Math.PI*2);
    ctx.fillStyle = "#0095DD";
    ctx.fill();
    ctx.closePath();
    dy = -10;
    bally += dy;
    if(bally+50+30<0 ){
        isBall =0;
        clearInterval(game2);
        ctx.clearRect(0,0,800,800);
        drawScene();
        ballx=0;
        bally=0;
    }

    let targetBallUp = Math.floor((ballx)/100)+Math.floor((bally-25)/100)*8;
    if( mapArray[targetBallUp] == 1){
        isBall =0;
        clearInterval(game2);
        
        ctx.clearRect(0,0,800,800);
        drawScene();
        ballx=0;
        bally=0;
    }
    if(mapArray[targetBallUp] == 3 ){
        isBall =0;
        mapArray[12]=0;
        clearInterval(game2);
        ctx.clearRect(0,0,800,800);
        enemyStatus = 0;
        drawScene();
        ballx=0;
        bally=0;
        
    }

    if(mapArray[targetBallUp] == 4 ){
        isBall =0;
        live1+=1;
        console.log(live1);
        mapArray[targetBallUp]=0;
        //clearInterval(game1);
        clearInterval(game2);
        ctx.clearRect(0,0,800,800);
        drawScene();
        ballx=0;
        bally=0;
    }

    if(ballx+25>currentEnemyImgMainX && ballx+25<currentEnemyImgMainX+100 && bally-25>currentEnemyImgMainY && bally-25<currentEnemyImgMainY+100){
        clearInterval(game2);
        live2-=1;
        ctx.clearRect(0,0,800,800);
        drawScene();
        ballx=0;
        bally=0;
        drawLive();
        isBall=0;
        if(live2 == 0){
            alert("1P Win!");
            document.location.reload();
        }
    }
    
    
}

function drawRight() {
    ctx.clearRect(ballx+80,bally,25,100);

    clearInterval(game4);
    clearInterval(game1);
    clearInterval(game2);
    //drawScene();
    //drawBall();
    if(isBall == 0){
        ballx = currentImgMainX;
        bally = currentImgMainY;
        
    }
   
    isBall = 1;
    ctx.beginPath();
    ctx.arc(ballx+115, bally+50, 25, 0, Math.PI*2);
    ctx.fillStyle = "#0095DD";
    ctx.fill();
    ctx.closePath();
    dx = 10;
    dy = 0;
    ballx += dx;
    
     
    if(ballx+75>=800){
        isBall =0;
        clearInterval(game3);
        clearInterval(game4);
        ctx.clearRect(0,0,800,800);
        drawScene();
        ballx=0;
        bally=0;
        
    }
    //detectEnemy();        
    
    let targetBallRight = Math.floor((ballx+100)/100)+Math.floor(bally/100)*8;
    if(mapArray[targetBallRight] == 3){
        isBall =0;
        mapArray[12]=0;
        clearInterval(game3);
        ctx.clearRect(0,0,800,800);
        enemyStatus = 0;
        drawScene();
        ballx=0;
        bally=0;
        
       
    }

    if(mapArray[targetBallRight] == 1 ) {
        isBall =0;
        clearInterval(game3);
        clearInterval(game4);
        ctx.clearRect(0,0,800,800);
        drawScene();
        ballx=0;
        bally=0;
        
        
    }

    if(mapArray[targetBallRight] == 4 ){
        isBall =0;
        live1+=1;
        mapArray[targetBallRight]=0;
        clearInterval(game4);
        clearInterval(game3);
        ctx.clearRect(0,0,800,800);
        drawScene();
        ballx=0;
        bally=0;
    }

    if(ballx+25>currentEnemyImgMainX && ballx+25<currentEnemyImgMainX+100 && bally+25>currentEnemyImgMainY && bally+25<currentEnemyImgMainY+100){
        clearInterval(game3);
        live2-=1;
        ctx.clearRect(0,0,800,800);
        drawScene();
        ballx=0;
        bally=0;
        drawLive();
        isBall=0;
        if(live2 == 0){
            alert("1P Win!");
            document.location.reload();
        }
    }
    
    
}   

function drawDown() {
    ctx.clearRect(ballx,bally+85,100,25);
    imgMain = new Image();
    imgMain.src = "simple-rpg/images/spriteSheet.png"
    //currentImgMainX = 0;
    //currentImgMainY = 0;
    /*imgMain.onload = function(){
        if(move == 0){
            ctx.drawImage(imgMain,0,100,80,130,currentImgMainX,currentImgMainY+90,100,100);
        }else{
            
            ctx.drawImage(imgMain,cutImagePositionX,100,80,130,currentImgMainX,currentImgMainY+90,100,100)
        }
        
    }*/
    //clearArcFun(ballx+100,bally+100,25);
    clearInterval(game3);
    clearInterval(game1);
    clearInterval(game2);
    //drawScene();
    //drawBall();
    if(isBall == 0){
        ballx = currentImgMainX;
        bally = currentImgMainY;
        
    }
   
    isBall = 1;
    ctx.beginPath();
    ctx.arc(ballx+50, bally+120, 25, 0, Math.PI*2);
    ctx.fillStyle = "#0095DD";
    ctx.fill();
    ctx.closePath();
    dy = 10;
    bally += dy;
    //console.log(bally,isBall);
    //detectEnemy();
    let targetBallDown = Math.floor((ballx)/100)+Math.floor((bally+50+50)/100)*8;
    if( mapArray[targetBallDown] == 3){
        isBall =0;
        mapArray[12]=0;
        clearInterval(game4);
        //cancelAnimationFrame(game4);
        ctx.clearRect(0,0,800,800);
        enemyStatus = 0;
        drawScene();
        ballx=0;
        bally=0;
        
    }
    if(bally+75>=800){
        isBall =0;
        clearInterval(game4);
        ctx.clearRect(0,0,800,800);
        drawScene();
        //cancelAnimationFrame(game4);
        console.log(3);
        ballx=0;
        bally=0;
        
    }
    //detectMountain();

    if(mapArray[targetBallDown] == 1){
        isBall =0;
        clearInterval(game4);
        //cancelAnimationFrame(game4);
        ctx.clearRect(0,0,800,800);
        drawScene();
        ballx=0;
        bally=0;
        
    }

    if(mapArray[targetBallDown] == 4 ){
        isBall =0;
        live1+=1;
        mapArray[targetBallDown]=0;
        clearInterval(game4);
        ctx.clearRect(0,0,800,800);
        drawScene();
        ballx=0;
        bally=0;
    }

    if(ballx+25>currentEnemyImgMainX && ballx+25<currentEnemyImgMainX+100 && bally+25>currentEnemyImgMainY && bally+25<=currentEnemyImgMainY+100){
        clearInterval(game4);
        live2-=1;
        ctx.clearRect(0,0,800,800);
        drawScene();
        ballx=0;
        bally=0;
        isBall=0;
        drawLive();
        isBall=0;
        if(live2 == 0){
            alert("1P Win!");
            document.location.reload();
        }
    }
    
    
}

function drawEnemyLeft() {
    ctx.clearRect(enemyBallx-10,enemyBally,25,100);
    clearInterval(game8);
    clearInterval(game6);
    clearInterval(game7);
    //drawScene();
    //drawBall();
    if(isBall2 == 0){
        enemyBallx = currentEnemyImgMainX;
        enemyBally = currentEnemyImgMainY;
        
    }
   
    isBall2 = 1;
    ctx.beginPath();
    ctx.arc(enemyBallx-20, enemyBally+50, 25, 0, Math.PI*2);
    ctx.fillStyle = "#0095DD";
    ctx.fill();
    ctx.closePath();
    dx = -10;
    enemyBallx += dx;
    if(enemyBallx+80 <0 ){
        isBall2 =0;
        clearInterval(game5);
        
        clearInterval(game7);
        ctx.clearRect(0,0,800,800);
        drawScene();
        enemyBallx=0;
        enemyBally=0;
        
    }

    let targetEnemyBallLeft = Math.floor((enemyBallx+50-25)/100)+Math.floor(enemyBally/100)*8;
   
    if(mapArray[targetEnemyBallLeft] == 1 ){
        isBall2 =0;
        clearInterval(game5);
        clearInterval(game7);
        ctx.clearRect(0,0,800,800);
        drawScene();
        enemyBallx=0;
        enemyBally=0;
    }
    if(mapArray[targetEnemyBallLeft] == 3 ){
        isBall2 =0;
        mapArray[12]=0;
        clearInterval(game5);
        clearInterval(game7);
        ctx.clearRect(0,0,800,800);
        enemyStatus = 0;
        drawScene();
        enemyBallx=0;
        enemyBally=0;
    }

    if(mapArray[targetEnemyBallLeft] == 4 ){
        isBall2 =0;
        live2+=1;
        mapArray[targetEnemyBallLeft]=0;
        clearInterval(game5);
        clearInterval(game7);
        ctx.clearRect(0,0,800,800);
        drawScene();
        enemyBallx=0;
        enemyBally=0;
    }

    if(enemyBallx>currentImgMainX && enemyBallx<currentImgMainX+100 && enemyBally+25>currentImgMainY && enemyBally+25<currentImgMainY+100){
        clearInterval(game5);
        live1-=1;
        ctx.clearRect(0,0,800,800);
        drawScene();
        enemyBallx=0;
        enemyBally=0;
        drawLive();
        isBall2 = 0;
        if(live1 == 0){
            alert("2P Win!");
            document.location.reload();
        }
    }
  
}

function drawEnemyUp() {
    ctx.clearRect(enemyBallx,enemyBally-25,100,25);
    clearInterval(game8);
    clearInterval(game7);
    clearInterval(game5);
    //drawScene();
    //drawBall();
    if(isBall2 == 0){
        enemyBallx = currentEnemyImgMainX;
        enemyBally = currentEnemyImgMainY;
        
    }
   
    isBall2 = 1;
    ctx.beginPath();
    ctx.arc(enemyBallx+50, enemyBally-35, 25, 0, Math.PI*2);
    ctx.fillStyle = "#0095DD";
    ctx.fill();
    ctx.closePath();
    dy = -10;
    enemyBally += dy;
    if(enemyBally+100+30<0 ){
        isBall2 =0;
        clearInterval(game6);
        ctx.clearRect(0,0,800,800);
        drawScene();
        enemyBallx=0;
        enemyBally=0;
    }

    let targetEnemyBallUp = Math.floor((enemyBallx)/100)+Math.floor((enemyBally-25)/100)*8;
    if( mapArray[targetEnemyBallUp] == 1){
        isBall2 =0;
        clearInterval(game6);
        
        ctx.clearRect(0,0,800,800);
        drawScene();
        enemyBallx=0;
        enemyBally=0;
    }
    if(mapArray[targetEnemyBallUp] == 3 ){
        isBall2 =0;
        mapArray[12]=0;
        clearInterval(game6);
        ctx.clearRect(0,0,800,800);
        enemyStatus = 0;
        drawScene();
        enemyBallx=0;
        enemyBally=0;
        
    }

    if(mapArray[targetEnemyBallUp] == 4 ){
        isBall2 =0;
        live2+=1;
        mapArray[targetEnemyBallUp]=0;
        clearInterval(game6);
        ctx.clearRect(0,0,800,800);
        drawScene();
        enemyBallx=0;
        enemyBally=0;
    }

    if(enemyBallx+25>currentImgMainX && enemyBallx+25<currentImgMainX+100 && enemyBally-25>currentImgMainY && enemyBally-25<currentImgMainY+100){
        clearInterval(game6);
        live1-=1;
        ctx.clearRect(0,0,800,800);
        drawScene();
        enemyBallx=0;
        enemyBally=0;
        drawLive();
        isBall2 = 0;
        if(live1 == 0){
            alert("2P Win!");
            document.location.reload();
        }
    }
    
}

function drawEnemyRight() {
    ctx.clearRect(enemyBallx+90,enemyBally,25,100);

    clearInterval(game8);
    clearInterval(game5);
    clearInterval(game6);
    //drawScene();
    //drawBall();
    if(isBall2 == 0){
        enemyBallx = currentEnemyImgMainX;
        enemyBally = currentEnemyImgMainY;
        
    }
   
    isBall2 = 1;
    ctx.beginPath();
    ctx.arc(enemyBallx+130, enemyBally+50, 25, 0, Math.PI*2);
    ctx.fillStyle = "#0095DD";
    ctx.fill();
    ctx.closePath();
    dx = 10;
    dy = 0;
    enemyBallx += dx;
    
     
    if(enemyBallx+75>=800){
        isBall =0;
        clearInterval(game7);
        clearInterval(game8);
        ctx.clearRect(0,0,800,800);
        drawScene();
        enemyBallx=0;
        enemyBally=0;
        
    }
    //detectEnemy();        
    
    let targetEnemyBallRight = Math.floor((enemyBallx+110)/100)+Math.floor(enemyBally/100)*8;
    if(mapArray[targetEnemyBallRight] == 3){
        isBall2 =0;
        mapArray[12]=0;
        clearInterval(game7);
        ctx.clearRect(0,0,800,800);
        enemyStatus = 0;
        drawScene();
        enemyBallx=0;
        enemyBally=0;
        
       
    }

    if(mapArray[targetEnemyBallRight] == 1 ) {
        isBall2 =0;
        clearInterval(game7);
        clearInterval(game8);
        ctx.clearRect(0,0,800,800);
        drawScene();
        enemyBallx=0;
        enemyBally=0;     
        
    }

    if(mapArray[targetEnemyBallRight] == 4 ){
        isBall2 =0;
        live2+=1;
        mapArray[targetEnemyBallRight]=0;
        clearInterval(game7);
        clearInterval(game8);
        ctx.clearRect(0,0,800,800);
        drawScene();
        enemyBallx=0;
        enemyBally=0;
    }

    if(enemyBallx+25>currentImgMainX && enemyBallx+25<currentImgMainX+100 && enemyBally+25>currentImgMainY && enemyBally+25<currentImgMainY+100){
        clearInterval(game7);
        live1-=1;
        ctx.clearRect(0,0,800,800);
        drawScene();
        enemyBallx=0;
        enemyBally=0;
        drawLive();
        isBall2 = 0;
        if(live1 == 0){
            alert("2P Win!");
            document.location.reload();
        }
    }
    
}   

function drawEnemyDown() {
    ctx.clearRect(enemyBallx,enemyBally+90,100,25);
    
    //currentImgMainX = 0;
    //currentImgMainY = 0;
    imgMountain.onload = function(){
        imgEnemy.onload = function(){
            for(let x in mapArray){
                if(mapArray[x]==1){
                    //console.log("1");
                    ctx.drawImage(imgMountain,32,65,32,32,x%8*100,Math.floor(x/8)*100,100,100);
                }
                else if(mapArray[x]==3){
                    ctx.drawImage(imgEnemy,200,5,20,50,x%8*100,Math.floor(x/8)*100,100,100);
                }
            }
            ctx.drawImage(imgEnemy,200,5,20,50,currentEnemyImgMainX,currentEnemyImgMainY,100,100);
        }
        
    };
    //clearArcFun(ballx+100,bally+100,25);
    clearInterval(game5);
    clearInterval(game6);
    clearInterval(game7);
    //drawScene();
    //drawBall();
    if(isBall2 == 0){
        enemyBallx = currentEnemyImgMainX;
        enemyBally = currentEnemyImgMainY;
        
    }
   
    isBall2 = 1;
    ctx.beginPath();
    ctx.arc(enemyBallx+50, enemyBally+125, 25, 0, Math.PI*2);
    ctx.fillStyle = "#0095DD";
    ctx.fill();
    ctx.closePath();
    dy = 10;
    enemyBally += dy;
    //console.log(bally,isBall);
    //detectEnemy();
    let targetEnemyBallDown = Math.floor((enemyBallx)/100)+Math.floor((enemyBally+50+50)/100)*8;
    if( mapArray[targetEnemyBallDown] == 3){
        isBall2 =0;
        mapArray[12]=0;
        clearInterval(game8);
        //cancelAnimationFrame(game4);
        ctx.clearRect(0,0,800,800);
        enemyStatus = 0;
        drawScene();
        ballx=0;
        bally=0;
        
    }
    if(enemyBally+75>=800){
        isBall2 =0;
        clearInterval(game8);
        ctx.clearRect(0,0,800,800);
        drawScene();
        //cancelAnimationFrame(game4);
        console.log(3);
        enemyBallx=0;
        enemyBally=0;
        
    }
    //detectMountain();

    if(mapArray[targetEnemyBallDown] == 1){
        isBall2 =0;
        clearInterval(game8);
        //cancelAnimationFrame(game4);
        ctx.clearRect(0,0,800,800);
        drawScene();
        enemyBallx=0;
        enemyBally=0;
        
    }

    if(mapArray[targetEnemyBallDown] == 4 ){
        isBall2 =0;
        live2+=1;
        mapArray[targetEnemyBallDown]=0;
        clearInterval(game8);
        ctx.clearRect(0,0,800,800);
        drawScene();
        enemyBallx=0;
        enemyBally=0;
    }

    if(enemyBallx+25>currentImgMainX && enemyBallx+25<currentImgMainX+100 && enemyBally+25>currentImgMainY && enemyBally+25<currentImgMainY+100){
        clearInterval(game8);
        live1-=1;
        ctx.clearRect(0,0,800,800);
        drawScene();
        enemyBallx=0;
        enemyBally=0;
        drawLive();
        isBall2 = 0;
        if(live1 == 0){
            alert("2P Win!");
            document.location.reload();
        }
    }
    
}

$(document).keydown(function(event){
    if(event.originalEvent.code == "Space"){
        if(ballDirection == -1){
            ctx.clearRect(0,0,800,800);
            drawScene();
        }
        else{ 
            if(ballDirection == 1){
                game1 =setInterval(drawLeft,10);
            }
            else if(ballDirection == 2)
                game2 = setInterval(drawUp,10);
            else if(ballDirection == 3){
                //drawRight();
                game3 = setInterval(drawRight,10);
                console.log(6);
            }
            else if(ballDirection == 4){
                
                //drawDown();
                game4 = setInterval(drawDown,10);
                //game4=requestAnimationFrame(drawDown);
                //drawDown();
                console.log(2);   
            }
        }
    }
    if(event.originalEvent.code == "KeyQ"){
        if(ballDirection2 == -1){
            ctx.clearRect(0,0,800,800);
            drawScene();
        }
        else{ 
            if(ballDirection2 == 1){
                game5 =setInterval(drawEnemyLeft,10);
            }
            else if(ballDirection2 == 2)
                game6 = setInterval(drawEnemyUp,10);
            else if(ballDirection2 == 3){
                //drawRight();
                game7 = setInterval(drawEnemyRight,10);
                
            }
            else if(ballDirection2 == 4){
                
                //drawDown();
                game8 = setInterval(drawEnemyDown,10);
                //game4=requestAnimationFrame(drawDown);
                //drawDown();
                   
            }
        }
    }
});

$(document).keydown(function(event){
    //let targetImgMainX,targetImgMainY,targetBlock,cutImagePositionX;
    event.preventDefault();

    switch(event.originalEvent.code){
        case "ArrowLeft": //向左
            targetImgMainX = currentImgMainX-100;
            targetImgMainY = currentImgMainY;
            cutImagePositionX = 175;
            ballDirection = 1;
            drawLive();
            move=1;
            break
        case "ArrowUp": //向上
            targetImgMainX = currentImgMainX;
            targetImgMainY = currentImgMainY-100;
            cutImagePositionX = 355; 
            ballDirection = 2;
            drawLive();
            move=1;
            break 
        case "ArrowRight": //向右
            targetImgMainX = currentImgMainX+100;
            targetImgMainY = currentImgMainY;
            cutImagePositionX = 540;  
            ballDirection = 3;
            drawLive();
            move=1
            break
        case "ArrowDown": //向下
            targetImgMainX = currentImgMainX;
            targetImgMainY = currentImgMainY+100;
            cutImagePositionX = 0;
            ballDirection = 4;
            drawLive();
            move=1;
            break;  
        
        
        
    }
    //在邊界內
    if(targetImgMainX<=700 && targetImgMainX>=0 &&
        targetImgMainY<=700 && targetImgMainY>=0){
            targetBlock = targetImgMainX/100+targetImgMainY/100*8;
    }else{//超出邊界
        targetBlock = -1;
    }
    //清楚主角原本的位置
    ctx = $("#myCanvas")[0].getContext("2d");
    ctx.clearRect(currentImgMainX,currentImgMainY,100,100);
    if(targetBlock == -1 || mapArray[targetBlock]==1 || mapArray[targetBlock]==3){
        //所有異常（出界、遇到敵人、遇到障礙物都不動）
    }else{
        $("#talkBox").empty();
        currentImgMainX = targetImgMainX;
        currentImgMainY = targetImgMainY;
    }
    //在新的位置上畫上主角
    ctx.drawImage(imgMain,cutImagePositionX,0,80,130,currentImgMainX,currentImgMainY,100,100)



    switch(mapArray[targetBlock]){
        case undefined:
            $("#talkBox").text("邊界");
            break;
        case 1:
            $("#talkBox").text("有山");
            break;
        case 2:
            $("#talkBox").text("抵達終點");
            break;
        case 3:
            $("#talkBox").text("哈嘍");
            break;
    }

});

$(document).keydown(function(event){
    //let targetImgMainX,targetImgMainY,targetBlock,cutImagePositionX;
    event.preventDefault();

    

    switch(event.originalEvent.code){
        case "KeyA": //向左
            targetEnemyImgMainX = currentEnemyImgMainX-100;
            targetEnemyImgMainY = currentEnemyImgMainY;
            //cutImagePositionX = 175;
            ballDirection2 = 1;
            drawLive();
            move=1;
            break
        case "KeyW": //向上
            targetEnemyImgMainX = currentEnemyImgMainX;
            targetEnemyImgMainY = currentEnemyImgMainY-100;
            //utImagePositionX = 355; 
            ballDirection2 = 2;
            drawLive();
            move=1;
            break 
        case "KeyD": //向右
            targetEnemyImgMainX = currentEnemyImgMainX+100;
            targetEnemyImgMainY = currentEnemyImgMainY;
            //cutImagePositionX = 540;  
            ballDirection2 = 3;
            drawLive();
            move=1
            break
        case "KeyS": //向下
            targetEnemyImgMainX = currentEnemyImgMainX;
            targetEnemyImgMainY = currentEnemyImgMainY+100;
            //cutImagePositionX = 0;
            ballDirection2 = 4;
            drawLive();
            move=1;
            break;  
        
    }
    //在邊界內
    if(targetEnemyImgMainX<=700 && targetEnemyImgMainX>=0 &&
        targetEnemyImgMainY<=700 && targetEnemyImgMainY>=0){
            targetEnemyBlock = targetEnemyImgMainX/100+targetEnemyImgMainY/100*8;
    }else{//超出邊界
        targetEnemyBlock = -1;
    }
    //清楚主角原本的位置
    ctx = $("#myCanvas")[0].getContext("2d");
    ctx.clearRect(currentEnemyImgMainX,currentEnemyImgMainY,100,100);
    if(targetEnemyBlock == -1 || mapArray[targetEnemyBlock]==1 || mapArray[targetEnemyBlock]==3){
        //所有異常（出界、遇到敵人、遇到障礙物都不動）
    }else{
        $("#talkBox").empty();
        currentEnemyImgMainX = targetEnemyImgMainX;
        currentEnemyImgMainY = targetEnemyImgMainY;
    }
    //在新的位置上畫上主角
    ctx.drawImage(imgEnemy,7,40,104,135,currentEnemyImgMainX,currentEnemyImgMainY,100,100)


    
    

});