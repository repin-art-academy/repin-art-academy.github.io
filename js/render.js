(() => {
    window.render = academyData => {
        window.containerElement = new ContainerComponent();
        let academyModel = [];
        academyData.forEach((epoch, i) => {
            academyModel.push({
                time: epoch.time,
                map: [],
            });
            epoch.floors.forEach((floor, j) => {
                academyModel[i].map.push({
                    floor: new MapComponent(i, j),
                    rooms: [],
                });
                floor.forEach(room => {
                    academyModel[i].map[j].rooms.push({
                        x: room.x,
                        y: room.y,
                        width: room.width,
                        height: room.height,
                    });
                });
            });
        });
        academyModel[0].map[0].floor.show();
        let map = {
            epoch: 0,
            floor: 0,
        };
        const renderMap = (() => {
            academyModel.forEach(epoch => {
                epoch.map.forEach(floor => {
                    floor.floor.hide();
                });
            });
            academyModel[map.epoch].map[map.floor].floor.show();
        }).bind(this);
        const epochSlider = new EpochSliderComponent(map, renderMap);
        const floorSlider = new FloorSliderComponent(map, renderMap);
        epochSlider.getElement();
        floorSlider.getElement();
    };
})();
