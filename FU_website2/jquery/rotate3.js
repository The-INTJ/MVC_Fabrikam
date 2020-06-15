var currImg = 0;
var prevImg = 0;
setRadioButton(currImg);
var autoRotate = true;

var slider = $("#jquery-slideshow");
var item_width = slider.parent().outerWidth();

$("div.imgrot >> input").on("click", function () {
    autoRotate = false;
    prevImg = currImg;
    currImg = $(this).val();

    if (prevImg < currImg) {
        forward(prevImg, currImg);
    } else {
        backward(prevImg, currImg);
    }

    setTimeout(function() { autoRotate = true }, 5000);

});

function forward(prev, curr) {
    slider.animate({
            left: -item_width
        },
        300,
        "swing",
        function() {
            while (prev < curr) {
                slider.children().next().prependTo(slider);
                prev++;
            }
            slider.css("left", 0);
        });
}

function backward(prev, curr) {
    while (prev > curr) {
        slider.children().prev().appendTo(slider);
        prev--;
    }
    slider.css("left", -item_width);
    slider.animate({
        left: 0
    }, 300, "swing");
}

function setRadioButton(loc) {
    $('input:radio[name=place]')[loc].checked = true;
}

// Interval Processing
setInterval(function () {
    var _prevImg = prevImg;
    var _currImg = currImg;
    if (autoRotate) {
        _currImg = (_prevImg + 1) % 4; // 4 images
        forward(_prevImg, _currImg);
        setRadioButton(_currImg);
    }
}, 1000)