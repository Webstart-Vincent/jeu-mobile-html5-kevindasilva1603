export class Player {
    sourceX = 0
    sourceY = 0
    frameWidht = 158
    frameHeigh = 183.91
    destinationX = 25
    destinationY = 100
    fps = 1000 / 12
    framesLength = 3 //nombre de frame dans la ligne

    /**
     *
     * @param {CanvasRenderingContext2D} ctx
     */
    constructor(ctx) {
        this.image = new Image()
        this.image.src = './assets/img/player-spritesheet.png'

        this.ctx = ctx
    }
    draw() {
        this.ctx.drawImage(
            this.image,
            this.sourceX,
            this.sourceY,
            this.frameWidht, //cadrage dans la source
            this.frameHeigh, //cadrage dans la source
            this.destinationX,
            this.destinationY,
            this.frameWidht, //dimension dans la destination
            this.frameHeigh //dimension dans la destination
        )
    }
    /**
     *
     * @param {number} timeStamp
     */
    update(timeStamp) {
        const frameIndex = Math.floor(timeStamp / this.fps) % this.framesLength
        this.sourceX = frameIndex * this.frameWidht
    }
}
