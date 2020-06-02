







// Testing to see jquery work
$("header h1").on("mouseover", function () {
    $(this).addClass("boldNshadow");
    $("header h1").on("mouseleave", function () {
        $(this).removeClass("boldNshadow");
    });
});
