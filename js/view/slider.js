class SliderComponent {
    constructor(model, renderMap) {
        this._element = null;
        this.levelNumber = null;
        this.model = model;
        this.renderMap = renderMap;
        this.color = null;
        this.position = null;
    }
    changeModel() {}
    getElement() {
        if (!this._element) {
            this._element = document.createElement(`div`);
            this._element.style.position = `absolute`;
            this._element.style.right = `0`;
            this._element.style.top = `${this.position}%`;
            this._element.style.width = `${100 - window.MAPWIDTH}%`;
            this._element.style.height = `50%`;
            this._element.style.display = `flex`;
            this._element.style.flexDirection = `column`;
            this._element.style.transform = `scale(0.7)`;
            let levels = [];
            const clearColors = () => {
                levels.forEach((level) => {
                    level.style.backgroundColor = `#fff`;
                });
            };
            for (let i = 0; i < this.levelNumber; i++) {
                levels.push(document.createElement(`div`));
                levels[i].style.width = `100`;
                levels[i].style.height = `${100 / this.levelNumber}%`;
                levels[i].style.boxSizing = `border-box`;
                levels[i].style.border = `1px solid #000000`;
                levels[i].addEventListener(`click`, () => {
                    clearColors();
                    levels[i].style.backgroundColor = this.color;
                    this.changeModel(i);
                    this.renderMap();
                });
                this._element.appendChild(levels[i]);
            }
            window.containerElement.getElement().appendChild(this._element);
        }
        return this._element;
    }
}
