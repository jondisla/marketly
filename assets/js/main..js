/** @format */

$(document).ready(() => {
  // Nav buttons

  if ($(window).width() > 991) {
  $(".logo").click(() => {
    $("#solution, #about").css({ borderBottom: "none" });
    $("#features, .bottom-details").slideUp("slow");
    $("#hero-wrapper").slideDown("slow");
  });

  $("#solution").click(() => {
    $("#about").css({ borderBottom: "none" });
    $("#solution").css({
      borderBottom: "1px solid rgb(194, 109, 194)",
    });
    $(".bottom-details").removeClass("feature-active");
    $("#features").addClass("feature-active");
    $("#hero-wrapper").slideUp("slow");
    $(".bottom-details").hide().slideUp("slow");
    $("#features").slideDown("slow");
  });

  $("#about").click(() => {
    $("#solution").css({ borderBottom: "none" });
    $("#about").css({
      borderBottom: "1px solid rgb(194, 109, 194)",
    });
    $("#features").removeClass("feature-active");
    $(".bottom-details").addClass("feature-active");
    $("#hero-wrapper").slideUp("slow");
    $("#features").hide().slideUp("slow");
    $(".bottom-details").slideDown("slow");
  });
  }


  $(window).resize(function() {
    if ($(window).width() < 991) {
      location.reload();
      return;
    }
  });
  
  //Signup to modal

  $('.modal-close').click(()=>{
    $("#getStartedModal").fadeOut(300);
  })

  $(".signup").click(() => {
      
    $("#getStartedModal").css({ visibility: "visible" });
    $("#getStartedModal").fadeIn(300);
    $("#getStartedModal").animate({ opacity: 1 });
  });

  $("form").submit((e) => {
      e.preventDefault();
    if ($.trim($("#email").val()) !== "" || $.trim($("#name").val()) !== "") {
        $(".signup").css({cursor:'not-allowed', background:'gray', color:'#aeafb0',border:'0px'})
        $(".modal-wrapper").fadeOut(200);
        $("#subscribedSuccess").delay(200).animate({ opacity: 1 });
        $("#getStartedModal").delay(2500).fadeOut(300);
    }
  });
});
