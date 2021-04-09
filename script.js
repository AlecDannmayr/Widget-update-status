window.addEventListener("load", function () {
  var e = document.getElementById("loading-screen"),
    t = document.getElementById("body-wrapper");
  (e.style.display = "none"), (t.style.display = "block");
}),
  $(document).ready(function () {
    function e() {
      $(".button").toggleClass("active"),
        $("main").toggleClass("move-to-left"),
        $(".sidebar-item").toggleClass("active");
    }
    $(".button").on("click tap", function () {
      e();
    }),
      $(document).keyup(function (t) {
        27 === t.keyCode && e();
      });
  });
