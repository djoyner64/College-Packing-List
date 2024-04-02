$(".to-pack-button").click(function() {
    var things = $(".to-pack-input").val();
    $(".packing-list").append("<li>" + "I am going to pack "+ things + "</li>");
    $("body").css("background-color","darkred");
    $("h1").css("background-color","yellow");
    
});

$(".coursebutton").click(function() {
    var school = $(".coursesinput").val();
    $(".course-list").append("<li>" + school + "</li>");
    $("body").css("background-color","beige");
});