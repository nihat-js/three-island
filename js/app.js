
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';


import * as dat from 'dat.gui';
import { UserController } from './userController'

import { Plane } from '../components/plane';
import { Vehicle } from '../components/vehicle'
import { Ball } from '../components/ball'


import {collisionWithObject } from '../engine/collision'
import {checkMapBorder} from '../engine/mapBorder'

const textureLoader = new THREE.TextureLoader();
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


const boxGeometry = new THREE.BoxGeometry(Vehicle.width, Vehicle.height, Vehicle.depth)
const boxMaterial = new THREE.MeshNormalMaterial({ color: 0x191919, })
export const vehicle = new THREE.Mesh(boxGeometry, boxMaterial)


let capsuleGeometry = new THREE.CapsuleGeometry(.2, 5, 4, 8);
let capsuleMaterial = new THREE.MeshBasicMaterial({ color: 0x008080 });
const capsule1 = new THREE.Mesh(capsuleGeometry, capsuleMaterial);
const capsule2 = new THREE.Mesh(capsuleGeometry, capsuleMaterial);
const capsule3 = new THREE.Mesh(capsuleGeometry, capsuleMaterial);
const capsule4 = new THREE.Mesh(capsuleGeometry, capsuleMaterial);
const capsule5 = new THREE.Mesh(capsuleGeometry, capsuleMaterial);
const capsule6 = new THREE.Mesh(capsuleGeometry, capsuleMaterial);




const sphereGeometry = new THREE.SphereGeometry(Ball.radius, 15, 15);
const sphereMaterial = new THREE.MeshBasicMaterial({ color: 0xffff00, map: textureLoader.load("./textures/tennis-ball.svg") });
export const ball = new THREE.Mesh(sphereGeometry, sphereMaterial);


const material = new THREE.LineBasicMaterial({ color: 0x008080 });
const points = [];
points.push(new THREE.Vector3(10, 0, 5));
points.push(new THREE.Vector3(-10, 0, 5));
// points.push( new THREE.Vector3( 10, 0, 0 ) );
const geometry = new THREE.BufferGeometry().setFromPoints(points);
const centerLine = new THREE.Line(geometry, material);


const planeGeometry = new THREE.PlaneGeometry(Plane.width, Plane.height)
const planeMaterial = new THREE.MeshBasicMaterial({ color: 0xF5DEB3, map: textureLoader.load('./textures/sand-minecraft.jpg') })

export const plane = new THREE.Mesh(planeGeometry, planeMaterial)
plane.rotation.x = - Math.PI / 2



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
  
  collisionWithObject (vehicle,ball  )
  checkMapBorder()

  Vehicle.lookAt()
  renderer.render(scene, camera)
}




capsule1.position.set(-5, 0, -15)
capsule2.position.set(5, 0, -15)
capsule4.position.set(5, 0, 15)
capsule5.position.set(-5, 0, 15)

vehicle.position.set(0, Vehicle.height/2, 3)
Vehicle.lookAt() //  change camera target to vehicel
ball.position.set(0, Ball.radius, -5)
scene.add(vehicle, plane, capsule1, capsule2, capsule4, capsule5, ball)








setInterval(()=>{
  render()
},1000/60)



