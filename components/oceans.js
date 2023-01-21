import * as THREE from 'three';
import { Loader } from 'three';
const Ocean = {
  width: 50,
  height: 50,
  
}

const textureLoader = new THREE.TextureLoader();
 
const planeGeometry = new THREE.PlaneGeometry(Ocean.width, Ocean.height)
const planeMaterial = new THREE.MeshBasicMaterial({ color: 0x2B65EC, map: textureLoader.load('./textures/ocean.jpg')  })


const ocean1 = new THREE.Mesh( new THREE.PlaneGeometry(100,50) , planeMaterial)
const ocean2 = new THREE.Mesh( new THREE.PlaneGeometry(100,50), planeMaterial)
const ocean3 = new THREE.Mesh( new THREE.PlaneGeometry(50,100) , planeMaterial)
const ocean4 = new THREE.Mesh( new THREE.PlaneGeometry(50,100) , planeMaterial)

ocean1.rotation.x = - Math.PI / 2
ocean2.rotation.x = - Math.PI / 2
ocean3.rotation.x = - Math.PI / 2
ocean4.rotation.x = - Math.PI / 2


ocean1.position.set(0 ,0 ,-50 )
ocean2.position.set( 0 ,0 ,50)
ocean3.position.set(-50 ,0 ,0)
ocean4.position.set(50 ,0 ,0)

export  { ocean1, ocean2, ocean3, ocean4 }
