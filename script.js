window.addEventListener("load", function () {
  var loadingScreen = document.getElementById("loading-screen");
  var bodyWrapper = document.getElementById("body-wrapper");
  loadingScreen.style.display = "none";
  bodyWrapper.style.display = "block";
});

$(document).ready(function () {
  function toggleSidebar() {
    $(".button").toggleClass("active");
    $("main").toggleClass("move-to-left");
    $(".sidebar-item").toggleClass("active");
  }

  $(".button").on("click tap", function () {
    toggleSidebar();
  });

  $(document).keyup(function (e) {
    if (e.keyCode === 27) {
      toggleSidebar();
    }
  });
});
