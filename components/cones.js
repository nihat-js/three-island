import * as THREE from 'three';
export const Cone = {
  width: .5,
  depth: .5,
  height: .5,
  radialSegments : 30,
}

const geometry = new THREE.ConeGeometry( Cone.width /2 ,Cone.height , Cone.radialSegments );
const material = new THREE.MeshBasicMaterial( {color: 0xffff00} );

const cone1 = new THREE.Mesh( geometry, new THREE.MeshBasicMaterial(0xff8f23)  );
const cone2 = new THREE.Mesh( geometry, new THREE.MeshBasicMaterial(0xff8f23)  );
const cone3 = new THREE.Mesh( geometry, new THREE.MeshBasicMaterial(0xff8f23)  );
const cone4 = new THREE.Mesh( geometry, new THREE.MeshBasicMaterial(0xff8f23)  );
const cone5 = new THREE.Mesh( geometry, new THREE.MeshBasicMaterial(0xff8f23)  );
const cone6 = new THREE.Mesh( geometry, new THREE.MeshBasicMaterial(0xff8f23)  );



cone1.position.set(-5,Cone.height/2 , -8 )
cone2.position.set(0,Cone.height/2 , -9 )
cone3.position.set(5,Cone.height/2 , -6 )
cone4.position.set(10,Cone.height/2 , -5 )


export { cone1, cone2, cone3, cone4,  }





