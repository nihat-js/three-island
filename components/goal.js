import * as THREE from 'three';

let capsuleGeometry = new THREE.CapsuleGeometry(.2, 5, 4, 8);
let capsuleMaterial = new THREE.MeshBasicMaterial({ color: 0x008080 });
const capsule1 = new THREE.Mesh(capsuleGeometry, capsuleMaterial);
const capsule2 = new THREE.Mesh(capsuleGeometry, capsuleMaterial);
const capsule3 = new THREE.Mesh(capsuleGeometry, capsuleMaterial);
const capsule4 = new THREE.Mesh(capsuleGeometry, capsuleMaterial);
const capsule5 = new THREE.Mesh(capsuleGeometry, capsuleMaterial);
const capsule6 = new THREE.Mesh(capsuleGeometry, capsuleMaterial);



capsule1.position.set(-5, 0, -15)
capsule2.position.set(5, 0, -15)
capsule4.position.set(5, 0, 15)
capsule5.position.set(-5, 0, 15)

export { capsule1, capsule2, capsule3, capsule4, capsule5, capsule6}