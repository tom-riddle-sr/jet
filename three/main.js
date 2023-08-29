import * as THREE from "three";

//建立場景
const scene = new THREE.Scene();
//建立相機
const camera = new THREE.PerspectiveCamera(
  45, //視野角度越大，可見越廣
  window.innerWidth / window.innerHeight, //畫面寬高比
  0.1, //近平面距離
  1000 //遠平面距離
  //視錐體:尖端是camera，射出去有一個方形近平面，一個方形遠平面，物體要在這2者之間才看得到
);
camera.position.set(0, 0, 100); // x,y,z設定相機位置
camera.lookAt(0, 0, 0);// x,y,z設定相機觀察點

//渲染
const renderer = new THREE.WebGLRenderer();
//設定渲染的寬高比 這邊設定是跟畫面大小相同
renderer.setSize(window.innerWidth, window.innerHeight);
//加到DOM
document.body.appendChild(renderer.domElement);

//物件
const geometry = new THREE.BoxGeometry(1, 1, 1); //建立一個立方體，寬、高、深度
const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 }); //基本材質，顏色為綠ㄉ
const cube = new THREE.Mesh(geometry, material); //用上面的網格體和材質建立一個網格物體
scene.add(cube); //添加到場景裡

camera.position.z = 5; //數值越小，物體越大 數值越大，物體越小

function animate() {
  requestAnimationFrame(animate); //畫面更新時呼叫指定函式，每秒60次
  cube.rotation.x += 0.01;
  cube.rotation.y += 0.01;
  renderer.render(scene, camera); //將內容繪製到場景中
}
animate();

// THREE.js網址
//https://threejs.org/docs/index.html#manual/en/introduction/Drawing-lines