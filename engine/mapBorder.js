import { player ,  Player } from '../components/player';
import { plane , Plane } from '../components/plane';

export function checkMapBorder(){



  if ( Math.abs ( player.position.z ) > Plane.height / 2  ){
    if (player.position.z > 0){
      player.position.z = Plane.height/2 - Player.depth
    }else {
      player.position.z = - Plane.height/2 + Player.depth
    }
  }

  if ( Math.abs ( player.position.x ) > Plane.width /2  ){
    if (player.position.x  > 0 ){
      player.position.x = Plane.width / 2 - Player.width 
    }else {
      player.position.x = - Plane.width /2 + Player.width 
    }
  }

}