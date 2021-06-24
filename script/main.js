const ACADEMY = [
    {
        time: `XXI`,
        floors: [
            [],
            [],
            [],
        ],
    },
    {
        time: `XX`,
        floors: [
            [],
            [],
            [],
        ],
    },
    {
        time: `XIX`,
        floors: [
            [
                {
                    width: 3.5,
                    height: 11,
                    x: 25,
                    y: 63,
                },
            ],
            [],
            [],
        ],
    },
];
window.EPOCHNUMBER = 3;
window.FLOORNUMBER = 3;
window.MAPWIDTH = 90;
window.EPOCHCOLOR = `#333`;
window.FLOORCOLOR = `#333`;
window.ROOMOVERCOLOR = `0.5`;
window.render(ACADEMY);
