class MapComponent {
    constructor(epoch, floor, rooms) {
        this._element = null;
        this.epoch = epoch;
        this.floor = floor;
        this.rooms = rooms;
        this.roomComponents = [];
    }
    getElement() {
        if (!this._element) {
            this._element = document.createElement(`img`);
            this._element.style.position = `relative`;
            this._element.src = `source/epoch${this.epoch + 1}/floor${this.floor + 1}/map.jpg`;
            this._element.style.width = `${window.MAPWIDTH}%`;
            this.rooms.forEach((room, i) => {
                this.roomComponents.push(new RoomComponent(room.x, room.y, room.width, room.height, this.epoch, this.floor, i));
                this.roomComponents[i].addListeners();
                this.roomComponents[i].hide();
                window.containerElement.getElement().appendChild(this.roomComponents[i].getElement());
            });
            window.containerElement.getElement().appendChild(this._element);
        }
        return this._element;
    }
    hide() {
        this.roomComponents.forEach((roomComponent) => {
            roomComponent.hide();
        });
        this.getElement().style.display = `none`;
    }
    show() {
        this.roomComponents.forEach((roomComponent) => {
            roomComponent.show();
        });
        this.getElement().style.display = `inline-block`;
    }
}
