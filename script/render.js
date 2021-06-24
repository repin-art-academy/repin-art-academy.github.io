(() => {
    window.render = academyData => {
        window.containerElement = new ContainerComponent();
        let epochs = [];
        let academyModel = [];
        academyData.forEach((epoch, i) => {
            academyModel.push({
                time: epoch.time,
                map: [],
            });
            epochs.push(epoch.time);
            epoch.floors.forEach((floor, j) => {
                academyModel[i].map.push({
                    floor: new MapComponent(i, j, floor),
                    rooms: [],
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
        const epochSlider = new EpochSliderComponent(map, renderMap, epochs);
        const floorSlider = new FloorSliderComponent(map, renderMap);
        epochSlider.getElement();
        floorSlider.getElement();
    };
})();
