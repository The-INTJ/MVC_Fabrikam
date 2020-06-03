/* Handles image rotation behavior */

// Global vars
var imgLoc = 0;
var imgs = ["images/Fab_logo.png", "images/FU_image.png", "images/picture.png", "images/school.jpg"]
var imgSrc;

// Set the images to rotate
var rotating = true;
//setInterval(rotate, 1000); // every 4 seconds

// Select image on radio button functionality
/*
$("div.imgrot >> input").on("click", function () {
    stopRotating();
    imgLoc = $(this).val(); // Radio button number
    setImage(imgLoc);
    setTimeout(keepRotating, 3000); // Resumes rotation after 3 seconds
});
*/

// Animation functionality
/*
$("div.imgrot > img").animate({
    left: 300
});
*/

// Helper functions
function rotate() {
    if (rotating) {
        setImage(imgLoc);
        setRadioButton(imgLoc);
        imgLoc++;
        if (imgLoc > 3) {
            imgLoc = 0;
        }
    }
}

function setImage(loc) {
    imgSrc = imgs[loc]; // Set path
    $("img#current").attr("src", imgSrc); // set source to path
}

function keepRotating() {
    rotating = true;
}

function stopRotating() {
    rotating = false;
}

function setRadioButton(loc) {
    $('input:radio[name=place]')[loc].checked = true;
}


$("div.imgrot >> input").on("click", function () {
    var prevLoc = imgLoc;
    imgLoc = $(this).val(); // Radio button number

    $("<img src=" + imgs[imgLoc] + " /> ").apendTo("div.img-cont");



});

