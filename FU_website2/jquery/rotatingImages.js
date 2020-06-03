/* Handles image rotation behavior */

// Global vars
var imgLoc, rotating = 0;
var imgs = ["images/Fab_logo.png", "images/FU_image.png", "images/picture.png", "images/Fab_logo.png"]
var imgSrc;

// Set the images to rotate
rotating = true;
setInterval(rotate, 4000); // every 4 seconds

// Select image on radio button functionality
$("div.imgrot > input").on("click", function () {
    stopRotating();
    imgLoc = $(this).val(); // Radio button number
    setImage(imgLoc);
    setTimeout(keepRotating, 3000); // Resumes rotation after 3 seconds
});


// Helper functions
function rotate() {
    if (rotating) {
        setImage(imgLoc);
        imgLoc++;
        if (imgLoc > 3) {
            imgLoc = 0;
        }
    }
}

function setImage(loc) {
    imgSrc = imgs[loc]; // Set path
    $("img#changable").attr("src", imgSrc); // set source to path
}

function keepRotating() {
    rotating = true;
}

function stopRotating() {
    rotating = false;
}