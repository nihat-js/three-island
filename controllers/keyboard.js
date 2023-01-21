import {  camera, player, } from '../js/app'
import { Player } from '../components/player'
import { Plane } from '../components/plane'


// W A S D  => Move
// R  => Spawn
// Esc => Menu

let isMenuActive = false;



window.addEventListener("keydown", onKeyDown)
window.addEventListener("keyup", onKeyUp)



let downKeys = []


function onKeyDown() {
  event.key = event.key.toLowerCase()
 
  if (event.key=="esc"){
    
  }

  if (event.key == "r"){
    Player.spawn()
  }

  if ( !Player.isSpawning &&   downKeys.indexOf(event.key) == -1) {
    downKeys.push(event.key)
  }


  if (event.key == "v") {
    camera.position.z += 1
  } else if (event.key == "b") {
    camera.position.z -= 1
  }
  else if (event.key == "j") {
    camera.position.x -= 1
  }
  else if (event.key == "l") {
    camera.position.x += 1
  }
  else if (event.key == "i") {
    camera.position.y += 1
  } else if (event.key == "k") {
    camera.position.y -= 1
  }



}

function onKeyUp() {
  // console.log("key", event.key)
  downKeys = downKeys.filter(x => x != event.key)
  // console.log(downKeys)
  if (event.key == "w") {
    const timerId = setInterval(() => {
      if (Player.currentSpeed == 0) {
        clearInterval(timerId)
      } else {
        Player.deAccelerate()
        Player.goForward()
        render()
      }

    }, 1000 / 60)
  }
}



function keyControllers() {


    if (downKeys.length == 0) {
    return false
   }

  if (downKeys.indexOf("w") > -1) {
    // Player.accelerate()
    Player.goForward()

  } if (downKeys.indexOf("s") > -1) {
    Player.deAccelerate()
    // if (Math.abs(box.position.z + Player.currentSpeed + Player.height) < planeOptions.height / 2) {
    //   box.position.z += Player.currentSpeed;
    //   camera.position.z += Player.currentSpeed
    // }
  } if (downKeys.indexOf("a") > -1) {
    Player.rotateY("left")

  } if (downKeys.indexOf("d") > -1) {
    Player.rotateY("right")
  }


  // console.log("camera", camera.position.x, camera.position.y, camera.position.z)
  // console.log("box", box.position.x, box.position.y, box.position.z)

}




export const keyboard = {}

setInterval(keyControllers, 1000 / 60)