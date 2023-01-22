import * as THREE from 'three';
export const FinalPlane = {
	width: 18,
  depth : 2,
}


const textureLoader = new THREE.TextureLoader();
const planeGeometry = new THREE.PlaneGeometry(FinalPlane.width, FinalPlane.depth, )
const planeMaterial = new THREE.MeshBasicMaterial({ color: 0xF5DEB3, map: textureLoader.load('./textures/finish-line.jpg') })



const finalPlane = new THREE.Mesh(planeGeometry, planeMaterial)
finalPlane.rotation.x = - Math.PI / 2
finalPlane.position.set(0 , .1 ,-24)

export {finalPlane}



