rotate(0);

function rotate(num) {

    var imgLoc = 0;
    var tracker = 0;
    setRadioButton(imgLoc);

    var slider = $("#jquery-slideshow"), // cache the slider object for later use
        item_width = slider.parent().outerWidth(); // get the width of the container for later use
    // We have more than one slide,
    if (slider.children("li").length > 1) {


        const forward = () => {
            tracker = (tracker + 1) % 4;
            slider.children().next().prependTo(slider);
            slider.css("left", -item_width);
            slider.animate({
                left: 0
            }, 300, "swing");
        }

        //setInterval(forward, 1000);

        const backward = () => {
            tracker = (tracker - 1) % 4;
            slider.animate({
                left: -item_width
            }, 300, "swing", function () {
                slider.children().prev().appendTo(slider);
                slider.css("left", 0);
            });
        }

        $("div.imgrot >> input").on("click", function () {
            go = false;
            var prevLoc = imgLoc;
            imgLoc = $(this).val(); // Radio button number

            if (prevLoc < imgLoc) {
                while (prevLoc != imgLoc) {
                    forward();
                    prevLoc++;
                }

            } else {
                while (prevLoc > imgLoc) {
                    backward();
                    prevLoc--;
                }
            }
        });


    }

    function setRadioButton(loc) {
        $('input:radio[name=place]')[loc].checked = true;
    }
}