jQuery(function ($) {

    var imgLoc = 0;
    setRadioButton(imgLoc);

    var slider = $("#jquery-slideshow"), // cache the slider object for later use
        item_width = slider.parent().outerWidth(); // get the width of the container for later use

    // Adjust the slider when/if the window gets resized
    //$(window).on("resize", adjust);
    //adjust();

    // We have more than one slide,
    if (slider.children("li").length > 1) {

        $("div.imgrot >> input").on("click", function () {
            var prevLoc = imgLoc;
            imgLoc = $(this).val(); // Radio button number

            const forward = () => {
                slider.children().next().prependTo(slider);
                slider.css("left", -item_width);
                slider.animate({
                    left: 0
                }, 300, "swing");
            }

            const backward = () => {
                slider.animate({
                    left: -item_width
                }, 300, "swing", function () {
                    slider.children().prev().appendTo(slider);
                    slider.css("left", 0);
                });
            }

            if (prevLoc < imgLoc) {
                while(prevLoc != imgLoc) {
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

        // Handle clicks on the next button
        /*
        $("div.imgrot >> input").on("click", "a#btn-prev", function (e) {
            e.preventDefault();

            slider.children("li:last").prependTo(slider);
            slider.css("left", -item_width);

            slider.animate({
                left: 0
            }, 300, "swing");
        });

        // Handle clicks on the previous button
        slider.parent().on("click", "a#btn-next", function (e) {
            e.preventDefault();

            slider.animate({
                left: -item_width
            }, 300, "swing", function () {
                slider.children("li:first").appendTo(slider);
                slider.css("left", 0);
            });
        });
        */
    }

    // Helpers
    function adjust() {
        item_width = slider.parent().outerWidth();
        slider.children("li").width(item_width).parent().width(item_width * slider.children("li").length);
    }

    function setRadioButton(loc) {
        $('input:radio[name=place]')[loc].checked = true;
    }

});