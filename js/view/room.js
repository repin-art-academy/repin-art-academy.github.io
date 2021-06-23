class RoomComponent {
    constructor(x, y, width, height) {
        this._element = null;
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
    }
    getElement() {
        if (!this._element) {
            this._element = document.createElement(`div`);
            this._element.style.position = `absolute`;
            this._element.style.left = `${this.x}px`;
            this._element.style.top = `${this.y}px`;
            this._element.style.width = `${this.width}px`;
            this._element.style.height = `${this.height}px`;
            /////////
            this.getElement().style.backgroundColor = `rgba(0, 0, 0, 0.2)`;
        }
        return this._element;
    }
    addListeners() {
        this.getElement().addEventListener(`mouseover`, () => {
            this.getElement().style.backgroundColor = `rgba(0, 0, 0, ${window.ROOMOVERCOLOR})`;
        });
        this.getElement().addEventListener(`mouseout`, () => {
            this.getElement().style.backgroundColor = `rgba(0, 0, 0, 0.2)`;
        });
    }
}
