$(".change").on("click", function () {
  if ($("body").hasClass("dark")) {
    $("body").removeClass("dark");
    $(".topnav").removeClass("lightdark");
    $(".change").text("OFF");
  } else {
    $("body").addClass("dark");
    $(".topnav").addClass("lightdark");
    $(".change").text("ON");
  }
}); 
