export class InputHandler {
    constructor() {
        /** @type {Set<Key>} */ this.keys = new Set()
        window.addEventListener('keydown', ({ code }) => {
            // if (
            //     code === Key.ArrowDown
            //     code === Key.ArrowUp
            //     code === Key.ArrowLeft
            //     code === Key.ArrowRight
            //     code === Key.Space
            //     code === Key.Enter)
            if (Object.keys(Key).includes(code)) this.keys.add(code)
        })
        window.addEventListener('keyup', ({ code }) => this.keys.delete(code))
    }
}

//Énumération JS
export const Key = Object.freeze({
    ArrowDown: 'ArrowDown',
    ArrowUp: 'ArrowUp',
    ArrowLeft: 'ArrowLeft',
    ArrowRight: 'ArrowRight',
    Space: 'Space',
    Enter: 'Enter',
})
