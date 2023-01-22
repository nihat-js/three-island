import * as THREE from 'three';
export const Wall1 = {
  width: 1,
  height: 2,
  depth: 8,
}

let wallGeometry = new THREE.BoxGeometry(Wall1.width, Wall1.height, Wall1.depth)
let wallMaterial = new THREE.MeshBasicMaterial({ color: 0xe28743 })


export let wall1 = new THREE.Mesh(wallGeometry, wallMaterial)
wall1.position.set(-8,Wall1.height/2 , -2 )







