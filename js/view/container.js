class ContainerComponent {
    constructor() {
        this._element = document.createElement(`div`);
        this._element.style.position = `relative`;
        document.querySelector(`body`).appendChild(this._element);
    }
    getElement() {
        return this._element;
    }
}
