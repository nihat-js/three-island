import { vehicle ,  Vehicle } from '../components/vehicle';
import { plane , Plane } from '../components/plane';

export function checkMapBorder(){


  if ( Math.abs ( vehicle.position.z ) > Plane.height / 2  ){
    if (vehicle.position.z > 0){
      vehicle.position.z = Plane.height/2 - Vehicle.depth
    }else {
      vehicle.position.z = - Plane.height/2 + Vehicle.depth
    }
  }

  if ( Math.abs ( vehicle.position.x ) > Plane.width /2  ){
    if (vehicle.position.x  > 0 ){
      vehicle.position.x = Plane.width / 2 - Vehicle.width 
    }else {
      vehicle.position.x = - Plane.width /2 + Vehicle.width 
    }
  }

}