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
    setText() {}
    getElement() {
        if (!this._element) {
            this._element = document.createElement(`div`);
            this._element.style.position = `absolute`;
            this._element.style.right = `0`;
            this._element.style.top = `${this.position}%`;
            this._element.style.width = `${100 - window.MAPWIDTH}%`;
            this._element.style.height = `50%`;
            this._element.style.backgroundColor = `#000`;
            this._element.style.display = `flex`;
            this._element.style.flexDirection = `column`;
            this._element.style.transform = `scale(0.7)`;
            let levelElements = [];
            const clearColors = () => {
                levelElements.forEach((levelElement) => {
                    levelElement.style.backgroundColor = `#000`;
                });
            };
            for (let i = 0; i < this.levelNumber; i++) {
                levelElements.push(document.createElement(`div`));
                this.setText(levelElements[i], i);
                levelElements[i].style.textAlign = `center`;
                levelElements[i].style.color = `#fff`;
                levelElements[i].style.paddingTop = `50px`;
                levelElements[i].style.fontSize = `20px`;
                levelElements[i].style.width = `100`;
                levelElements[i].style.height = `${100 / this.levelNumber}%`;
                levelElements[i].style.boxSizing = `border-box`;
                levelElements[i].addEventListener(`click`, () => {
                    clearColors();
                    levelElements[i].style.backgroundColor = this.color;
                    this.changeModel(i);
                    this.renderMap();
                });
                this._element.appendChild(levelElements[i]);
            }
            levelElements[0].style.backgroundColor = this.color;
            window.containerElement.getElement().appendChild(this._element);
        }
        return this._element;
    }
}
