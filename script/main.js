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
                    width: 2.5,
                    height: 12.2,
                    x: 23.6,
                    y: 54,
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
window.CHOOSEDCOLOR = `#181a2f`;
window.HOVERCOLOR = `#585a6f`;
window.SLIDERCOLOR = `#383a4f`;
window.ROOMOUTCOLOR = `0.2`;
window.ROOMOVERCOLOR = `0.5`;
window.render(ACADEMY);
