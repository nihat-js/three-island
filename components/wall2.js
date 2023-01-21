import * as THREE from 'three';
export const Wall2 = {
  width: 1,
  height: 2,
  depth: 8,
}

let wallGeometry = new THREE.BoxGeometry(Wall2.width, Wall2.height, Wall2.depth)
let wallMaterial = new THREE.MeshBasicMaterial({ color: 0x666666 })


export let wall2 = new THREE.Mesh(wallGeometry, wallMaterial)
wall2.position.set(15,Wall2.height/2 , -2 )







