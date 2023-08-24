var canvas = document.getElementById("mycanvas");
//取得繪圖介面
var ctx = canvas.getContext("2d");
//設定大小
canvas.width = 400;
canvas.height = 400;

//填色
// ctx.fillStyle = "red";
//畫有填色正方形
// ctx.fillRect(100, 100, 200, 200);
// 左右 上下 寬 高
// ctx.fillRect(300, 300, 100, 100);

//線條色
// ctx.strokeStyle = "purple";
//畫有線條正方形
// ctx.strokeRect(200, 200, 200, 200);
// 左右 上下 寬 高
// ctx.strokeRect(0, 0, 100, 100);

//線段畫圖型
// ctx.beginPath();
// ctx.moveTo(100, 100);
// ctx.lineTo(300, 100);
// ctx.lineTo(300, 300);
// ctx.lineTo(100, 300);
// ctx.closePath();
//只有線
// ctx.stroke();
//有塗色
// ctx.fill();

//畫圓形
// ctx.beginPath()
// ctx.arc(200,200,50,0,2*Math.PI)
// ctx.fill()

//蓋城堡
function draw() {
  //繪製格線
  ctx.beginPath();
  for (var i = 0; i < 10; i++) {
    var pos = i * 50;
    ctx.moveTo(pos, 0);
    ctx.lineTo(pos, 400);
    ctx.fillText(pos, pos, 10);

    ctx.moveTo(0, pos);
    ctx.lineTo(400, pos);
    //填文字 左右 上下
    ctx.fillText(pos, 10, pos);
  }
  ctx.strokeStyle = "rgba(0,0,0,0.05)";
  ctx.stroke();

  ctx.beginPath();
  ctx.moveTo(50, 350);
  ctx.lineTo(350, 350);
  ctx.strokeStyle = "black";
  ctx.lineWidth = 2;
  ctx.stroke();

  ctx.fillStyle = "orange";
  ctx.fillRect(300, 300, 50, 50);
  ctx.strokeRect(300, 300, 50, 50);

  ctx.fillStyle = "yellow";
  ctx.fillRect(250, 250, 50, 100);
  ctx.strokeRect(250, 250, 50, 100);

  ctx.fillStyle = "yellow";
  ctx.fillRect(50, 300, 50, 50);
  ctx.strokeRect(50, 300, 50, 50);

  ctx.beginPath();
  ctx.rect(100, 250, 50, 100);
  ctx.rect(200, 250, 50, 100);
  ctx.fillStyle = "pink";
  ctx.fill();
  ctx.stroke();

  ctx.beginPath();
  ctx.moveTo(100, 200);
  ctx.lineTo(250, 200);
  ctx.lineTo(250, 250);
  ctx.lineTo(200, 250);
  // 圓心左右 圓心上下 半徑 開始度數:360度 結束度數:180度 逆時針
  ctx.arc(175, 250, 25, Math.PI * 2, Math.PI, true);
  ctx.lineTo(100, 250);
  ctx.closePath();
  ctx.fillStyle = "blue";
  ctx.fill();
  ctx.stroke();

  ctx.beginPath();
  ctx.moveTo(100, 200);
  ctx.lineTo(175, 150);
  ctx.lineTo(250, 200);
  ctx.closePath();
  ctx.fillStyle = "lightblue";
  ctx.fill();
  ctx.stroke();

  ctx.beginPath();
  ctx.moveTo(175, 150);
  ctx.lineTo(175, 100);
  ctx.lineTo(200, 110);
  ctx.lineTo(175, 120);
  ctx.closePath();
  ctx.fill();
  ctx.stroke();
}
draw();
