import * as THREE from 'three';
export const Plane = {
	width: 50,
	height: 50,
}


const textureLoader = new THREE.TextureLoader();
const planeGeometry = new THREE.PlaneGeometry(Plane.width, Plane.height)
const planeMaterial = new THREE.MeshBasicMaterial({ color: 0xF5DEB3, map: textureLoader.load('./textures/sand-minecraft.jpg') })


export const plane = new THREE.Mesh(planeGeometry, planeMaterial)
plane.rotation.x = - Math.PI / 2
