
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';


import * as dat from 'dat.gui';
import { UserController } from './userController'

import { plane , Plane } from '../components/plane';
import { vehicle , Vehicle } from '../components/vehicle'
import { ball,Ball } from '../components/ball'
import { wall1, Wall1 } from '../components/wall1'
import { wall2, Wall2 } from '../components/wall2'
import { capsule1 ,capsule2 ,capsule3, capsule4 , capsule5 } from '../components/goal'


import { collisionWithSphere, collisionWithObject } from '../engine/collision'
import {checkMapBorder} from '../engine/mapBorder'

const gltfLoader = new GLTFLoader();




export const renderer = new THREE.WebGLRenderer()
renderer.setSize(window.innerWidth, window.innerHeight)
renderer.setPixelRatio(window.devicePixelRatio)
document.body.appendChild(renderer.domElement)



export const scene = new THREE.Scene()
scene.background = new THREE.Color(0x72bcd4)
export const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 100)

// const axesHelper = new THREE.AxesHelper(5)
// const gridHelper = new THREE.GridHelper(30, 100)
// scene.add(axesHelper)
// scene.add(gridHelper)
















const controls = new OrbitControls(camera, renderer.domElement);
controls.update();








const gui = new dat.GUI();
gui.addColor({ color: "#008080" }, 'color').onChange((e) => {
  box.material.color.set(e)
})


// const vehicle_ = new THREE.Box3(new THREE.Vector3() , new THREE.Vector3() )
// const ball_ = new THREE.Box3(new THREE.Vector3() , new THREE.Vector3() )
// const ball_ = new THREE.Sphere( ball.position,1 )
// vehicle.geometry.computeBoundingBox();
// ball.geometry.computeBoundingBox();







export function render() {
  //  let result  = collisionWithSphere (vehicle,ball  )
  //  if (result){
  //    Ball.move()
  //   }
  // result = collisionWithObject (vehicle,capsule1)
  // if (result) {
  //   capsule1.material.color.set(0x008080)
  // }

  // checkMapBorder()

  Vehicle.lookAt()
  renderer.render(scene, camera)
}





vehicle.position.set(0, Vehicle.height/2, 3)
Vehicle.lookAt() //  change camera target to vehicel
ball.position.set(0, Ball.radius, -5)
scene.add(vehicle, plane, capsule1, capsule2, capsule4, capsule5, ball,wall1,wall2)








setInterval(()=>{
  render()
},1000/60)



