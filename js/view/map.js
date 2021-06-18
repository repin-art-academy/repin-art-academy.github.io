class MapComponent {
    constructor(epoch, floor) {
        this._element = null;
        this.epoch = epoch;
        this.floor = floor;
    }
    getElement() {
        if (!this._element) {
            this._element = document.createElement(`img`);
            this._element.src = `img/epoch${this.epoch + 1}/floor${this.floor + 1}/map.jpg`;
            this._element.style.width = `${window.MAPWIDTH}%`;
            window.containerElement.getElement().appendChild(this._element);
        }
        return this._element;
    }
    hide() {
        this.getElement().style.display = `none`;
    }
    show() {
        this.getElement().style.display = `inline-block`;
    }
}
