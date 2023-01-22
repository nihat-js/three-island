export function collisionWithSphere(obj1, obj2, override = false) {
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
      width: obj2.geometry.parameters.radius,
      height: obj2.geometry.parameters.radius,
      depth: obj2.geometry.parameters.radius
    }
  } else {
    a = obj1, b = obj2
  }

  const st1 = isIntersectionExist([a.x - a.width / 2, a.x + a.width / 2], [b.x - b.width / 2, b.x + b.width / 2])
  const st2 = isIntersectionExist([a.y - a.height / 2, a.y + a.height / 2], [b.y - b.height, b.x + b.height / 2])
  const st3 = isIntersectionExist([a.z - a.depth / 2, a.z + a.depth / 2], [b.z - b.depth, b.z + b.depth / 2])

  if (st1 && st2 && st3) {
    console.log("you hit the object")
    return true
  }else {
    return false
  }
}





export function collisionWithObject(obj1, obj2, override = false) {
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
      width: obj2.geometry.parameters.width,
      height: obj2.geometry.parameters.height,
      depth: obj2.geometry.parameters.depth
    }
  } else {
    a = obj1, b = obj2
  }
  // console.log(a,b)

  const st1 = isIntersectionExist([a.x - a.width / 2, a.x + a.width / 2], [b.x - b.width / 2, b.x + b.width / 2])
  const st2 = isIntersectionExist([a.y - a.height / 2, a.y + a.height / 2], [b.y - b.height/2 , b.x + b.height / 2])
  const st3 = isIntersectionExist([a.z - a.depth / 2, a.z + a.depth / 2], [b.z - b.depth/2, b.z + b.depth / 2])


  if (st1 && st2 && st3) {
    console.log("you hit the object")
    return true
  }
}


export function isIntersectionExist(a, b) {
  let minVar, maxVar;
  if (a[0] < b[0]) {
    minVar = a
    maxVar = b
  } else if (a[0] == b[0]) {
    return true
  } else {
    minVar = b
    maxVar = a
  }
  return minVar[1] > maxVar[0]
}
// isIntersectionExist([5,50]  , [10,20] )

export function collisionWithCone(obj1, obj2, override = false) {
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
      width: obj2.geometry.parameters.radius *2,
      height: obj2.geometry.parameters.height,
      depth: obj2.geometry.parameters.radius * 2
    }
  } else {
    a = obj1, b = obj2
  }
  // console.log( a,b )

  const st1 = isIntersectionExist([a.x - a.width / 2, a.x + a.width / 2], [b.x - b.width / 2, b.x + b.width / 2])
  const st2 = isIntersectionExist([a.y - a.height / 2, a.y + a.height / 2], [b.y - b.height/2 , b.x + b.height / 2])
  const st3 = isIntersectionExist([a.z - a.depth / 2, a.z + a.depth / 2], [b.z - b.depth/2, b.z + b.depth / 2])


  if (st1 && st2 && st3) {
    console.log("you hit the object")
    return true
  }else{
    return false
  }


}

