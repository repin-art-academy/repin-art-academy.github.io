class FloorSliderComponent extends SliderComponent {
    constructor(model, renderMap) {
        super(model, renderMap);
        this.levelNumber = window.FLOORNUMBER;
        this.color = window.FLOORCOLOR;
        this.position = 50;
    }
    changeModel(i) {
        this.model.floor = i;
    }
    setText(element, i) {
        element.textContent = `${i + 1} \u044d\u0442\u0430\u0436`;
    }
}
