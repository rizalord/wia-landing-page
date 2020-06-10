// Equalizer.js
// Author: https://github.com/rizalord

function createItem(className = "eqa") {
  var item = document.createElement("div");
  item.classList.add("top-not-edge-bar");
  item.classList.add(className);

  return item;
}

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

var root = document.querySelector(".nest-bar");
var item = createItem("eqa");
var item2 = createItem("eqb");
var allBar = document.querySelectorAll(".single-top-bar");
var refreshInterval = null;
var isHover = false;

var doLoopEqualize = function () {
  if (isHover == false) {
    isHover = true;
    refreshInterval = setInterval(() => {
      [...document.getElementsByClassName("top-not-edge-bar")].map(
        (n) => n && n.remove()
      );

      allBar.forEach((element, index) => {
        var top = element.querySelector(".top-edge-bar");
        var range = getRandomInt(0, 5);

        for (let index = 0; index < range; index++) {
          element.insertBefore(item.cloneNode(true), top);
        }
      });
    }, 100);
  }
};

// ON MOUSE HOVER
root.addEventListener("mouseenter", doLoopEqualize);

// ON MOUSE LEAVE HOVER
root.addEventListener("mouseleave", function () {
  isHover = false;
  clearInterval(window.refreshInterval);
});
