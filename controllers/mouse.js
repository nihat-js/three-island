let mouse = {
  x : null,
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
    mouse.x = event.x
    mouse.y = event.y
    return false
  }

  

  let degree = event.clientX / window.innerWidth * 100
  let degree2 = event.clientY / window.innerHeight * 100
  
  if (degree  )

  console.log( degree)
}


function onMouseUp() {
  isMouseDown = false
}

export {mouse }