
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';


import * as dat from 'dat.gui';

import { plane , Plane } from '../components/plane';
import { player , Player } from '../components/player'
import { ball,Ball } from '../components/ball'
import { wall1, Wall1 } from '../components/wall1'
import { wall2, Wall2 } from '../components/wall2'
import { capsule1 ,capsule2 ,capsule3, capsule4 , capsule5 } from '../components/goal'
import { ocean1,ocean2,ocean3,ocean4 } from '../components/oceans';
import { cone1,cone2,cone3,cone4 } from '../components/cones'; 


import { collisionWithSphere, collisionWithObject, collisionWithCone, isIntersectionExist } from '../engine/collision'
import { collision2D } from '../engine/collision-2d';

import {checkMapBorder} from '../engine/mapBorder'


import { mouse ,  } from '../controllers/mouse';
import { keyboard } from '../controllers/keyboard'
import { buttons} from "../controllers/buttons"
import { finalPlane } from '../components/finalPlane';

const gltfLoader = new GLTFLoader();




export const renderer = new THREE.WebGLRenderer()
renderer.setSize(window.innerWidth, window.innerHeight)
renderer.setPixelRatio(window.devicePixelRatio)
document.body.appendChild(renderer.domElement)



export const scene = new THREE.Scene()
scene.background = new THREE.Color(0x72bcd4)
export const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 80)

// const axesHelper = new THREE.AxesHelper(5)
// const gridHelper = new THREE.GridHelper(30, 100)
// scene.add(axesHelper)
// scene.add(gridHelper)
















const controls = new OrbitControls(camera, renderer.domElement);
controls.update();








const gui = new dat.GUI();
gui.addColor({ color: "#008080" }, 'color').onChange((e) => {
    wall1.material.color.set(e)
    wall2.material.color.set(e)
})


// const player_ = new THREE.Box3(new THREE.Vector3() , new THREE.Vector3() )
// const ball_ = new THREE.Box3(new THREE.Vector3() , new THREE.Vector3() )
// const ball_ = new THREE.Sphere( ball.position,1 )
// player.geometry.computeBoundingBox();
// ball.geometry.computeBoundingBox();







export function render() {
   let result  = collisionWithSphere (player,ball  )
   if (result){
     Ball.move()
    }
  result = collisionWithObject (player,wall1)
  if (result) {
    wall1.material.color.set(0xc30010)
    Player.spawn()
  }
  result = collisionWithObject (player,wall2)
  if (result){
    wall2.material.color.set(0xc30010)
    Player.spawn()
  }
  
  let arr = [cone1,cone2,cone3,cone4]

  arr.forEach(x => {
    let result = collisionWithCone  (player,x)
    if (result) {
      Player.spawn()
      x.material.color.set(0xc30010)
      return false
    }
  })


  checkMapBorder()

  if (player.position.z < -23){
    alert("Game over => Wrong finish line  ")
    Player.spawn()
  }


  Player.lookAt()


  renderer.render(scene, camera)
}





// player.position.set(0, Player.height/2, 3)
Player.lookAt() //  change camera target to vehicel

SceneArray = [ 
  player, plane, capsule1, capsule2, capsule4, capsule5, ball,
  wall1,wall2 , 
  ocean1 , 
  ocean2 , 
  ocean3 ,
   ocean4 ,
   cone1,
   cone2,
   cone3,
   cone4,
   finalPlane
  ]



scene.add( ...SceneArray )








setInterval(()=>{
  render()
},1000/60)
