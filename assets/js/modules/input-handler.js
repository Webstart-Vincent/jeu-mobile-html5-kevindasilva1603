export class InputHandler {
    constructor() {
        /** @type {Set<Key>} */ this.keys = new Set()
    }
}

//Énumération JS
export const Key = Object.freeze({
    ArrowDown: 'ArrowDown',
    ArrowDown: 'ArrowUp',
    ArrowDown: 'ArrowLeft',
    ArrowDown: 'ArrowRight',
    Space: 'Space',
    Enter: 'Enter',
})
