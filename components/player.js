import { camera, render } from '../js/app'
import * as THREE from 'three'




export const Player = {
	width: .5,
	height: 1,
	depth: 1,

	rotationSpeed: Math.PI / 51,
	lastPosition: [],
	currentSpeed: 0,
	maxSpeed: .1,
	accelerateSpeed: .01,
	isSpawning: false,
	accelerate: function () {
		this.currentSpeed = this.currentSpeed + this.accelerateSpeed > this.maxSpeed ? this.maxSpeed : this.currentSpeed + this.accelerateSpeed
	},
	deAccelerate: function () {
		this.currentSpeed = this.currentSpeed - this.accelerateSpeed < 0 ? 0 : this.currentSpeed - this.accelerateSpeed
	},
	rotateY: function (direction) {

		if (this.currentSpeed == 0) {
			// return false
		}

		if (direction == 'right') {
			player.rotation.y -= this.rotationSpeed
			// camera.rotation.y = -  player.rotation.y 
		}
		else if (direction == 'left') {
			player.rotation.y += this.rotationSpeed
		}
		// console.log("player-rot-y",player.rotation.y)
	},

	goForward: function () {
		player.rotation.y < 0 ? player.rotation.y += Math.abs(Math.floor(player.rotation.y / 2 * Math.PI)) * 2 * Math.PI : '';
		player.rotation.y > Math.PI ? player.rotation.y %= 2 * Math.PI : ""

		if (player.rotation.y == 0) {
			player.position.z -= this.currentSpeed
		}
		else if (0 < player.rotation.y && player.rotation.y < Math.PI / 2) {
			player.position.x -= this.currentSpeed * (1 - Math.sin(player.rotation.y))
			player.position.z -= this.currentSpeed * (1 - Math.cos(player.rotation.y))

		} else if (player.rotation.y > Math.PI / 2 && player.rotation.y < Math.PI) {
			player.position.x -= this.currentSpeed * (1 - Math.sin(player.rotation.y))
			player.position.z += this.currentSpeed * (1 - Math.cos(player.rotation.y))
		} else if (player.rotation.y > Math.PI && player.rotation.y < Math.PI * 1.5) {
			player.position.x += this.currentSpeed * (1 - Math.sin(player.rotation.y))
			player.position.z += this.currentSpeed * (1 - Math.cos(player.rotation.y))
		} else if (player.rotation.y > Math.PI * 1.5 && player.rotation.y < Math.PI * 2) {
			player.position.x += this.currentSpeed * (1 - Math.cos(player.rotation.y))
			player.position.z -= this.currentSpeed * (1 - Math.sin(player.rotation.y))
		}

		// console.log("z,",player.position.z)
		this.lookAt()
		camera.position.x = player.position.x
		// camera.rotation.y =  -  Math.pi /360 * 75 / player.rotation.y  


	},
	goBackward: function () {

	},
	lookAt: function () {
		camera.position.set(0, 4, player.position.z + 10)
	},
	spawn: function () {
		this_ = this

		if (this.isSpawning) {
			clearInterval(id)
		}
		this.lookAt()
		player.position.set(0, 1 ,5)
		let count = 1
		const id = setInterval(() => {
			 if (count == 50) {
				clearInterval(id)
				this_.isSpawning = false
			} else {
				player.position.y = 10.5 - 10/50*count
				count++
			}
		}, 1000 / 60)
	}
}



const boxGeometry = new THREE.BoxGeometry(Player.width, Player.height, Player.depth)
const boxMaterial = new THREE.MeshNormalMaterial({ color: 0x191919, })
export const player = new THREE.Mesh(boxGeometry, boxMaterial)

// console.log(player)