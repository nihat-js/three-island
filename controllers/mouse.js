import { player } from '../components/player'
import { camera } from '../js/app'
let mouse = {
  x : ,
  y: null ,
}
let isMouseDown = false, isMenuActive = false, mouseX = -1, mouseY = -1

window.addEventListener("mousedown", onMouseDown)
window.addEventListener("mousemove", onMouseMove)
window.addEventListener("mouseup", onMouseUp)



function onMouseDown() {
  isMouseDown = true
}

// function onMouseMove(event) {
//   // if (!isMouseDown) return false
//   if (isMenuActive) {
//     return false
//   }
//   //   mouseX = (event.clientX / window.innerWidth) * 2 - 1
//   //   console.log(mouseX)
//   //   mouseY =  -(event.clientY / window.innerHeight) * 2 + 1

//   // camera.position.x +=  mouseX
//   // camera.position.y +=  mouseY




//   // renderer.render(scene,camera)
//   // console.log(camera.position.x,camera.position.y,camera.position.z)  
// }


function onMouseMove(){

  if (!mouse.x){
    mouse.x =  event.clientX / window.innerWidth * 100
    mouse.y =  event.clientX / window.innerWidth * 100
    return false
  }

  let degree = event.clientX / window.innerWidth * 100
  let degree2 = event.clientY / window.innerHeight * 100
  
  let differenceX = degree -mouse.x

    camera.rotation.y -=  Math.PI / 90 * differenceX 
    player.rotation.y -=  Math.PI / 90 * differenceX
    

    mouse.x = degree
    mouse.y = degree2

}


function onMouseUp() {
  isMouseDown = false
}

export {mouse }