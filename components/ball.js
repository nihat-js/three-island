import * as THREE from 'three';


import { Player} from '../components/player';

const textureLoader = new THREE.TextureLoader();

export const Ball  =  {
  radius : .25 ,
  weight : .5 , // .5kg
  isMoving : false,
  currentSpeed : 0,
  move : function(){
    if ( this.isMoving == true ){
      return false
    }
    // console.log("i am moving",this.isMoving)


    this_ = this,
    this.ismMoving = true;
    let  count = 0
    let id = setInterval(() => {
      count++
      if (count == 30){
        this_.ismMoving = false
        clearInterval(id)
      }
      ball.position.z -= .03
      // render()
    } ,1000 /60 )
  }
}

const sphereGeometry = new THREE.SphereGeometry(Ball.radius, 15, 15);
const sphereMaterial = new THREE.MeshBasicMaterial({ color: 0xffff00, map: textureLoader.load("./textures/tennis-ball.svg") });
export const ball = new THREE.Mesh(sphereGeometry, sphereMaterial);
ball.position.set(0, Ball.radius, -4)
