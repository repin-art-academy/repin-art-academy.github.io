class EpochSliderComponent extends SliderComponent {
    constructor(model, renderMap, epochs) {
        super(model, renderMap);
        this.levelNumber = window.EPOCHNUMBER;
        this.position = 0;
        this.epochs = epochs;
    }
    changeModel(i) {
        this.model.epoch = i;
    }
    setText(element, i) {
        element.textContent = this.epochs[i];
    }
    getData() {
        return this.model.epoch;
    }
}
