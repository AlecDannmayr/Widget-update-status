fetch("http://feed.decimalcricket.com/api/match/list", {
  method: "GET",
  headers: {
    "x-api-key": "decimaltest",
    "Content-Type": "application/json",
  },
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