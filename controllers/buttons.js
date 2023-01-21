import * as THREE from 'three';
import { plane} from '../components/plane'
import { Player } from '../components/player';
const textureLoader = new THREE.TextureLoader();
const groundArr = ["./textures/grass-16x16-1.png", "./texures/sand-minecraft.jpg" ]




function toggleMenuCanvas(){
  document.querySelector(".menu").classList.toggle("d-none")
  document.querySelector("canvas").classList.toggle("d-none")

}

document.querySelector(".new-game").addEventListener('click',newGame)  
document.querySelector(".random-ground").addEventListener('click',randomGround) 


function randomGround(){
  plane.material.map =   textureLoader.load (groundArr[Math.floor(Math.random()*groundArr.length)] ) 
  toggleMenuCanvas()
}
function newGame(){
  Player.spawn()
  toggleMenuCanvas()  
}
    
  


export const buttons = {} 