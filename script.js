const tween = KUTE.fromTo(
    '#blob1',
    { path: '#blob1' },
    { path: '#blob11'},
    { repeat : 999, duration : 3000, yoyo : true}
    ).start()

    const tween1 = KUTE.fromTo(
        '#blob2',
        { path: '#blob2' },
        { path: '#blob22'},
        { repeat : 999, duration : 3000, yoyo : true}
        ).start()