var nextImg = 0;
var curImg = 0;
setRadioButton(curImg);
var timeoutInterval;
var intervalAR = setInterval(autoRotate, 3000);

var slider = $("#jquery-slideshow");
var item_width = slider.parent().outerWidth();

$("#radioButtons input").on("click", function () {
    clearTimeout(timeoutInterval);
    clearInterval(intervalAR); // Stop the current autoRotate
    curImg = nextImg; // next image will change, making it the next current
    nextImg = $("#radioButtons input").val(); // grabbing the value of clicked radio button

    if (curImg < nextImg) { // If we need to advance
        forward(curImg, nextImg);
    } else if (curImg > nextImg) { // If the user clicked a previous button
        backward(curImg, nextImg);
    }

    // call the autorotate after 2 seconds, setting the interval for 3 -- 5 seconds of stop
    timeoutInterval = (
        (intervalAR = setInterval(autoRotate, 3000)),
        2000);

});

function forward(current, next) {
    slider.animate({
            left: -item_width
        }, 300, "swing", function() {
            while (current < next) { // loop enables image skipping
                slider.children().next().prependTo(slider);
                current++;
            }
            slider.css("left", 0);
        });
}

function backward(current, next) {
    while (current > next) { // loop enables image skipping
        slider.children().prev().appendTo(slider);
        current--;
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
    curImg = $("#radioButtons input").val(); // is called at a random point, so check buttons
    nextImg = (curImg + 1) % 4; // increment for advance, reset to 0 if at last image
    setRadioButton(nextImg); // set the button
    // Tertiary statement ensuring proper function call based on next required image
    curImg < nextImg ? forward(curImg, nextImg) : backward(curImg, nextImg);
}