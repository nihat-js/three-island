export function collisionWithSphere(a, b) {
  const st1 = isIntersectionExist([vehicle.position.x - Vehicle.width / 2, vehicle.position.x + Vehicle.width / 2],
    [ball.position.x - Ball.radius, ball.position.x + Ball.radius])

  const st2 = isIntersectionExist([vehicle.position.y - Vehicle.height / 2, vehicle.position.y + Vehicle.height / 2],
    [ball.position.y - Ball.radius, ball.position.y + Ball.radius])

  const st3 = isIntersectionExist([vehicle.position.z - Vehicle.depth / 2, vehicle.position.z + Vehicle.depth / 2],
    [ball.position.z - Ball.radius, ball.position.z + Ball.radius])
  if (st1 && st2 && st3) {
    console.log("you hit the object")
    Ball.move()
  }
}


export function collisionWithObject(obj1, obj2, override = false) {
  let a, b
  if (!override) {
    a = {
      x: obj1.position.x,
      y: obj1.position.y,
      z: obj1.position.z,
      width: obj1.geometry.width,
      height: obj1.geometry.height,
      depth: obj1.geometry.depth
    }
    b = {
      x: obj1.position.x,
      y: obj1.position.y,
      z: obj1.position.z,
      width: obj1.geometry.width,
      height: obj1.geometry.height,
      depth: obj1.geometry.depth
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
  }
}


function isIntersectionExist(a, b) {
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