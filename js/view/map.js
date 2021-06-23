class MapComponent {
    constructor(epoch, floor, rooms) {
        this._element = null;
        this.epoch = epoch;
        this.floor = floor;
        this.rooms = rooms;
    }
    getElement() {
        if (!this._element) {
            this._element = document.createElement(`img`);
            //this._element.style.display = `block`;
            this._element.style.position = `relative`;
            this._element.src = `source/epoch${this.epoch + 1}/floor${this.floor + 1}/map.jpg`;
            this._element.style.width = `${window.MAPWIDTH}%`;
            this.rooms.forEach((room, i) => {
                const roomComponent = new RoomComponent(room.x, room.y, room.width, room.height);
                roomComponent.addListeners();
                this._element.appendChild(roomComponent.getElement());
            });
            window.containerElement.getElement().appendChild(this._element);
        }
        return this._element;
    }
    hide() {
        this.getElement().style.display = `none`;
    }
    show() {
        this.getElement().style.display = `block`;
    }
}
