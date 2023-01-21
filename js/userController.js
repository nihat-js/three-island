import { render ,  scene, camera, vehicle, } from './app'
import { Vehicle } from '../components/vehicle'
import { Plane } from '../components/plane'

let isMouseDown = false, isMenuActive = false, mouseX = -1, mouseY = -1




window.addEventListener("mousedown", onMouseDown)
window.addEventListener("mousemove", onMouseMove)
window.addEventListener("mouseup", onMouseUp)

window.addEventListener("keydown", onKeyDown)
window.addEventListener("keyup", onKeyUp)


function onMouseDown() {
  isMouseDown = true
}

function onMouseMove(event) {
  // if (!isMouseDown) return false
  if (isMenuActive) {
    return false
  }
  //   mouseX = (event.clientX / window.innerWidth) * 2 - 1
  //   console.log(mouseX)
  //   mouseY =  -(event.clientY / window.innerHeight) * 2 + 1

  // camera.position.x +=  mouseX
  // camera.position.y +=  mouseY




  // renderer.render(scene,camera)
  // console.log(camera.position.x,camera.position.y,camera.position.z)  
}

function onMouseUp() {
  isMouseDown = false
}

let downKeys = []


function onKeyDown() {
  event.key = event.key.toLowerCase()
  event.key == "ArrowUp" ? event.key = "w" :
    event.key == "ArrowDown" ? event.key == "s" :
      event.key == "ArrowLeft" ? event.key = "a" :
        event.key == "ArrowRight" ? event.key = "d" : null


  if (downKeys.indexOf(event.key) == -1) {
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
      if (Vehicle.currentSpeed == 0) {
        clearInterval(timerId)
      } else {
        Vehicle.deAccelerate()
        Vehicle.goForward()
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
    Vehicle.accelerate()
    Vehicle.goForward()

  } if (downKeys.indexOf("s") > -1) {
    Vehicle.deAccelerate()
    // if (Math.abs(box.position.z + Vehicle.currentSpeed + Vehicle.height) < planeOptions.height / 2) {
    //   box.position.z += Vehicle.currentSpeed;
    //   camera.position.z += Vehicle.currentSpeed
    // }
  } if (downKeys.indexOf("a") > -1) {
    Vehicle.rotateY("left")

  } if (downKeys.indexOf("d") > -1) {
    Vehicle.rotateY("right")
  }


  // console.log("camera", camera.position.x, camera.position.y, camera.position.z)
  // console.log("box", box.position.x, box.position.y, box.position.z)

}




export const userController = () => {

}

setInterval(keyControllers, 1000 / 60)