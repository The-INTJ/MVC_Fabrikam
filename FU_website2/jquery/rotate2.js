rotate(0);

function rotate(num) {

    var imgLoc = 0;
    var tracker = 0;
    var go = true;
    setRadioButton(imgLoc);

    var slider = $("#jquery-slideshow"), // cache the slider object for later use
        item_width = slider.parent().outerWidth(); // get the width of the container for later use
    // We have more than one slide,
    if (slider.children("li").length > 1) {


        const forward = (prev, curr) => {
            tracker = (tracker + 1) % 4;

            slider.animate({
                
                left: -item_width
            }, 3000, "swing", function () {
                    while (prev < curr) {
                        slider.children().next().prependTo(slider);
                        prev++;
                        
                    }
                    //slider.children("li:first").prependTo(slider);
                    slider.css("left", 0);
            });
        }


        const backward = (prev, curr) => {
            tracker = (tracker - 1) % 4;
            while (prev > curr) {
                slider.children().prev().appendTo(slider);
                prev--;
            }
            
            //slider.children("li:last").appendTo(slider);
            slider.css("left", -item_width);
            slider.animate({
                left: 0
            }, 3000, "swing");
        }

        setInterval(function () {
            var currLoc = $("div.imgrot >> input").val();
            var nextImg = (currLoc + 1) % 4;
            if (go) {
                forward(currLoc, nextImg);
            }
        }, 1000);

        $("div.imgrot >> input").on("click", function () {

            setInterval(function () { go = true; }, 3000);
            go = false;
            var prevLoc = imgLoc;
            imgLoc = $(this).val(); // Radio button number

            if (prevLoc < imgLoc) {
                forward(prevLoc, imgLoc);

            } else {
                backward(prevLoc, imgLoc);
            }
        });


    }

    function setRadioButton(loc) {
        $('input:radio[name=place]')[loc].checked = true;
    }
}
