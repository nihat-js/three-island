import { camera , render } from '../js/app'
import * as THREE from 'three'




 export const Vehicle = {
	width: .5,
	height: 1,
	depth: 1,
	
	rotationSpeed: Math.PI / 51,
	lastPosition : [],
	currentSpeed: 0,
	maxSpeed: .1,
	accelerateSpeed: .01,

	accelerate: function () {
		this.currentSpeed = this.currentSpeed + this.accelerateSpeed > this.maxSpeed ? this.maxSpeed : this.currentSpeed + this.accelerateSpeed
	},
	deAccelerate: function () {
		this.currentSpeed = this.currentSpeed - this.accelerateSpeed < 0 ? 0 : this.currentSpeed - this.accelerateSpeed
	},
	rotateY: function (direction) {

		if (this.currentSpeed == 0 ){
			// return false
		}

		if (direction == 'right') {
			vehicle.rotation.y -= this.rotationSpeed
			// camera.rotation.y = -  vehicle.rotation.y 
		}
		else if (direction == 'left') {
			vehicle.rotation.y += this.rotationSpeed
		}
		// console.log("vehicle-rot-y",vehicle.rotation.y)
	},

	goForward: function () {
		vehicle.rotation.y < 0 ? vehicle.rotation.y +=  Math.abs ( Math.floor (vehicle.rotation.y / 2* Math.PI )  ) * 2 * Math.PI : ''; 
		vehicle.rotation.y > Math.PI? vehicle.rotation.y %= 2* Math.PI : ""

		if (vehicle.rotation.y == 0){
			vehicle.position.z -= this.currentSpeed  
		}
		else if (0 < vehicle.rotation.y && vehicle.rotation.y < Math.PI / 2) {
			vehicle.position.x -= this.currentSpeed * (1 - Math.sin(vehicle.rotation.y))
			vehicle.position.z -= this.currentSpeed * (1 - Math.cos(vehicle.rotation.y))
			
		} else if (vehicle.rotation.y > Math.PI / 2 && vehicle.rotation.y < Math.PI) {
			vehicle.position.x -= this.currentSpeed * (1 - Math.sin(vehicle.rotation.y))
			vehicle.position.z += this.currentSpeed * (1 - Math.cos(vehicle.rotation.y))
		} else if (vehicle.rotation.y > Math.PI && vehicle.rotation.y < Math.PI * 1.5) {
			vehicle.position.x += this.currentSpeed * (1 - Math.sin(vehicle.rotation.y))
			vehicle.position.z += this.currentSpeed * (1 - Math.cos(vehicle.rotation.y))
		} else if (vehicle.rotation.y > Math.PI * 1.5 && vehicle.rotation.y < Math.PI * 2) {
			vehicle.position.x += this.currentSpeed * (1 - Math.cos(vehicle.rotation.y))
			vehicle.position.z -= this.currentSpeed * (1 - Math.sin(vehicle.rotation.y))
		}

		// console.log("z,",vehicle.position.z)
		this.lookAt()
		camera.position.x = vehicle.position.x 
		// camera.rotation.y =  -  Math.pi /360 * 75 / vehicle.rotation.y  
		
		
	},
	goBackward: function () {
		
	},
	lookAt : function (){
		camera.position.set(0, 4 , vehicle.position.z + 10)
	}
}



const boxGeometry = new THREE.BoxGeometry(Vehicle.width, Vehicle.height, Vehicle.depth)
const boxMaterial = new THREE.MeshNormalMaterial({ color: 0x191919, })
export const vehicle = new THREE.Mesh(boxGeometry, boxMaterial)

console.log(vehicle)