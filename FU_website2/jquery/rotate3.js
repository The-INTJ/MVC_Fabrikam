var currImg = 0;
var prevImg = 0;
setRadioButton(currImg);
var timeoutInterval;
var rotateInterval = setInterval(autoRotate, 3000);

var slider = $("#jquery-slideshow");
var item_width = slider.parent().outerWidth();

$("div.imgrot >> input").on("click", function () {
    clearTimeout(timeoutInterval);
    clearInterval(rotateInterval); // Stop the current autoRotate
    prevImg = currImg;
    currImg = $(this).val();

    if (prevImg < currImg) {
        forward(prevImg, currImg);
    } else if (prevImg > currImg) {
        backward(prevImg, currImg);
    }

    // Reset variable after 5 seconds
    timeoutInterval = setTimeout(
        rotateInterval = setInterval(autoRotate, 3000),
        5000);

});

function forward(prev, curr) {
    slider.animate({
            left: -item_width
        }, 300, "swing", function() {
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

//Interval Processing

function autoRotate() {
    var _prevImg = $("div.imgrot >> input").val();
    var _currImg = (_prevImg + 1) % 4; // 4 images
    setRadioButton(_currImg);
    forward(_prevImg, _currImg);
}