import { camera, player, } from '../js/app'
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
  let key = event.key.toLowerCase()

  if (key == "escape") {
    document.querySelector("canvas").classList.toggle("d-none")
    document.querySelector(".menu").classList.toggle("d-none")
    return false
  }
  if (key == "r") {
    Player.spawn()
    return false;
  }
  if (Player.isSpawning) {
    return false
  }
  downKeys.push(key)
}

function onKeyUp() {
  let key = event.key.toLowerCase()
  downKeys = downKeys.filter(x => x != event.key)
  if (event.key == "w") {
    const timerId = setInterval(() => {
      if (Player.currentSpeed == 0) {
        clearInterval(timerId)
      } else {
        // Player.goForward()
      }

    }, 1000 / 60)
  }
}



function keyControllers() {

  if (downKeys.length == 0) {
    return false
  }

  if (downKeys.indexOf("w") > -1) {
    Player.goForward()

  } if (downKeys.indexOf("s") > -1) {
    Player.deAccelerate()
  } if (downKeys.indexOf("a") > -1) {
    Player.rotateY("left")

  } if (downKeys.indexOf("d") > -1) {
    Player.rotateY("right")
  }

}




export const keyboard = {}

setInterval(keyControllers, 1000 / 60)