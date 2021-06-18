class FloorSliderComponent extends SliderComponent {
    constructor(levelNumber, model, renderMap) {
        super(levelNumber, model, renderMap);
        this.levelNumber = window.FLOORNUMBER;
        this.color = window.FLOORCOLOR;
        this.position = 50;
    }
    changeModel(i) {
        this.model.floor = i;
    }
}
