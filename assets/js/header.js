$(window).on('load' , function(){
  const person1 = document.querySelector(".person-01");
  const person2 = document.querySelector(".person-02");
  const person3 = document.querySelector(".person-03");
  const person4 = document.querySelector(".person-04");
  const person5 = document.querySelector(".person-05");
  let left5 = +window
      .getComputedStyle(person5)
      .getPropertyValue("left")
      .replace("px", "")
      .split(".")[0],
    left4 = +window
      .getComputedStyle(person4)
      .getPropertyValue("left")
      .replace("px", "")
      .split(".")[0],
    left3 = +window
      .getComputedStyle(person3)
      .getPropertyValue("left")
      .replace("px", "")
      .split(".")[0],
    left2 = +window
      .getComputedStyle(person2)
      .getPropertyValue("left")
      .replace("px", "")
      .split(".")[0],
    left1 = +window
      .getComputedStyle(person1)
      .getPropertyValue("left")
      .replace("px", "")
      .split(".")[0];

  document.addEventListener("mousemove", function (ev) {
    if (window.innerWidth > 640) {
      const midPoint = +(window.innerWidth / 2).toFixed(0);

      const move5 = (left5 - ev.clientX.toFixed(0) / 100)
        .toString()
        .split(".")[0];
      const move4 = (left4 - (+ev.clientX.toString() / 100) * 1.8)
        .toString()
        .split(".")[0];
      const move3 = (left3 - (+ev.clientX.toString() / 100) * 1.8)
        .toString()
        .split(".")[0];
      const move2 = (left2 - (+ev.clientX.toString() / 100) * 1.5)
        .toString()
        .split(".")[0];
      const move1 = (left1 - (+ev.clientX.toString() / 100) * 1.5)
        .toString()
        .split(".")[0];

      setTimeout(() => {
        person5.style.left = move5 + "px";
        person4.style.left = move4 + "px";
        person3.style.left = move3 + "px";
        person2.style.left = move2 + "px";
        person1.style.left = move1 + "px";
      }, 102);
    }
  });

  window.addEventListener("resize", function (ev) {
    person5.style.left = window.innerWidth * 0.318 + "px";
    person4.style.left = window.innerWidth * 0.5275 + "px";
    person3.style.left = window.innerWidth * 0.155 + "px";
    person2.style.left =
      window.innerWidth > 640
        ? window.innerWidth * 0.76 + "px"
        : window.innerWidth * 0.83 + "px";
    person1.style.left = window.innerWidth * 0.01 + "px";

    left5 = +window
      .getComputedStyle(person5)
      .getPropertyValue("left")
      .replace("px", "")
      .split(".")[0];
    left4 = +window
      .getComputedStyle(person4)
      .getPropertyValue("left")
      .replace("px", "")
      .split(".")[0];
    left3 = +window
      .getComputedStyle(person3)
      .getPropertyValue("left")
      .replace("px", "")
      .split(".")[0];
    left2 = +window
      .getComputedStyle(person2)
      .getPropertyValue("left")
      .replace("px", "")
      .split(".")[0];
    left1 = +window
      .getComputedStyle(person1)
      .getPropertyValue("left")
      .replace("px", "")
      .split(".")[0];
  });

  $('#toggle-btn').on('click' , function(){
    $("#toggled-view").css('right' , '0px')
    $("#toggled-view").css("left", "0px");
    $('body').css('overflow' , 'hidden')
  });

  $("#btn-close").on("click", function () {
    $("#toggled-view").css("right", "100%");
    $("#toggled-view").css("left", "-200%");
    $("body").css("overflow", "auto");
  });

});

