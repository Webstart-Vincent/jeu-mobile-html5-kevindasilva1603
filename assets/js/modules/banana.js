export class Banana {
    sourceX = 0
    sourceY = 0

    fps = 1000 / 12
    framesLength = 4

    speed = 3
    /**
     * @param {Game} game
     */
    constructor(game) 
        constructor(game) {
            this.image = new Image()
            this.image.src = './assets/img/player-spritesheet.png'
    
            this.ctx = game.ctx

            const {canvas} = game
            this.canvasWidth = canvas.width
            this.canvasHeight = canvas.height
            this.frameWidth = 553
            this.frameHeight = 534

            this.reset
        }
        /**
         * 
         * @param {number} timeStamp 
         * @param {number} deltaTime 
         */

        update (timeStamp, deltaTime){
        this.destinationX -= (deltaTime * this.speed) / 1000
        if (this.destinationX <= -this.width) this.destinationX = 0
        }
        reset = () => {
            this.Active = true
            this.destinationX = this.canvasWidth
            this.destinationY = Math.random()*(this.canvasHeight - this.frameHeight)
            this.speed = Math.random()*50 + 100
        }
    }
    

