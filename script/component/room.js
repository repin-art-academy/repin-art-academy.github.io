class RoomComponent {
    constructor(x, y, width, height, epoch, floor, room) {
        this._element = null;
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.epoch = epoch;
        this.floor = floor;
        this.room = room;
    }
    getElement() {
        if (!this._element) {
            this._element = document.createElement(`a`);
            this._element.href = `source/epoch${this.epoch + 1}/floor${this.floor + 1}/room${this.room + 1}/page.html`;
            this._element.style.display = `block`;
            this._element.style.position = `absolute`;
            this._element.style.zIndex = `1`;
            this._element.style.left = `${this.x}%`;
            this._element.style.top = `${this.y}%`;
            this._element.style.width = `${this.width}%`;
            this._element.style.height = `${this.height}%`;
            this._element.style.backgroundColor = `rgba(0, 0, 0, 0)`;
        }
        return this._element;
    }
    addListeners() {
        this.getElement().addEventListener(`mouseover`, () => {
            this.getElement().style.backgroundColor = `rgba(0, 0, 0, ${window.ROOMOVERCOLOR})`;
        });
        this.getElement().addEventListener(`mouseout`, () => {
            this.getElement().style.backgroundColor = `rgba(0, 0, 0, 0)`;
        });
    }
    hide() {
        this.getElement().style.display = `none`;
    }
    show() {
        this.getElement().style.display = `block`;
    }
}
