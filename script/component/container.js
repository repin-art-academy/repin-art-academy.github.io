class ContainerComponent {
    constructor() {
        document.querySelector(`body`).style.margin = 0;
        document.querySelector(`body`).style.backgroundColor = window.SLIDERCOLOR;
        this._element = document.createElement(`div`);
        this._element.style.position = `relative`;
        document.querySelector(`body`).appendChild(this._element);
    }
    getElement() {
        return this._element;
    }
}
