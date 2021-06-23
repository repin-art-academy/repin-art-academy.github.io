const ACADEMY = [
    {
        time: `1900-1950`,
        floors: [
            [
                {
                    x: 50,
                    y: 40,
                    width: 10,
                    height: 5,
                },
                {},
                {},
            ],
            [],
            [],
        ],
    },
    {
        time: `1950-2021`,
        floors: [
            [],
            [],
            [],
        ],
    },
];
window.EPOCHNUMBER = 2;
window.FLOORNUMBER = 3;
window.MAPWIDTH = 90;
window.EPOCHCOLOR = `#f00`;
window.FLOORCOLOR = `#00f`;
window.ROOMOVERCOLOR = `0.5`;
window.render(ACADEMY);
