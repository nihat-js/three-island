import { isIntersectionExist } from "./collision";


export function collision2D(obj1, obj2, override = false) {
  let a, b
  if (!override) {
    a = {
      x: obj1.position.x,
      y: obj1.position.y,
      z: obj1.position.z,
      width: obj1.geometry.parameters.width,
      height: obj1.geometry.parameters.height,
      depth: obj1.geometry.parameters.depth
    }
    b = {
      x: obj2.position.x,
      y: obj2.position.y,
      z: obj2.position.z,
      width: obj2.geometry.parameters.width ,
      // height: obj2.geometry.parameters.height,
      depth: obj2.geometry.parameters.width 
    }
  } else {
    a = obj1, b = obj2
  }
  console.log( a,b )

  const st1 = isIntersectionExist([a.x - a.width / 2, a.x + a.width / 2], [b.x - b.width / 2, b.x + b.width / 2])
  const st3 = isIntersectionExist([a.z - a.depth / 2, a.z + a.depth / 2], [b.z - b.depth/2, b.z + b.depth / 2])


  if (st1 && st3  ) {
    console.log("you hit the object")
    return true
  }else{
    return false
  }


}
