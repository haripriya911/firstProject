$("h1").addClass("big-title margin");
$("a").attr("href","https://api.jquery.com/attr/");
$("button").click(function(){
    $("h1").css("color","red");
}

);
$(document).keypress(function(event) {

$("h1").text(event,key);
});