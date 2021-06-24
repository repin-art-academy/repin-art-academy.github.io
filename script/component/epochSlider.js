class EpochSliderComponent extends SliderComponent {
    constructor(model, renderMap, epochs) {
        super(model, renderMap);
        this.levelNumber = window.EPOCHNUMBER;
        this.color = window.EPOCHCOLOR;
        this.position = 0;
        this.epochs = epochs;
    }
    changeModel(i) {
        this.model.epoch = i;
    }
    setText(element, i) {
        element.textContent = this.epochs[i];
    }
}
