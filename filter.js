var slider2 = new rSlider({
    target: '#sampleSlider',
    values: [2008, 2009, 2010],
    range: false,
    set: [2010],
    tooltip: false,
    onChange: function (vals) {
        console.log(vals);
    }
});