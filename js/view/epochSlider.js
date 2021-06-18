class EpochSliderComponent extends SliderComponent {
    constructor(levelNumber, model, renderMap) {
        super(levelNumber, model, renderMap);
        this.levelNumber = window.EPOCHNUMBER;
        this.color = window.EPOCHCOLOR;
        this.position = 0;
    }
    changeModel(i) {
        this.model.epoch = i;
    }
}
