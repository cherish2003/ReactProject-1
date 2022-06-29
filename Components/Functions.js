import React from 'react';

function toggleSwitch() {
  let chgDiv = document.querySelector("#checkbox").checked;
  let lftxt = document.querySelector(".lefttxt");
  let ritxt = document.querySelector(".righttxt");
  if (chgDiv == true) {
    lftxt.style.fontWeight = "normal";
    lftxt.style.opacity = "0.8";
    ritxt.style.fontWeight = "600";
    ritxt.style.opacity = "1";
  } else {
    ritxt.style.fontWeight = "normal";
    ritxt.style.opacity = "0.8";
    lftxt.style.fontWeight = "600";
    lftxt.style.opacity = "1";
  }
}
// function Carousel() {
//   $(".carousel").OwlCarousel({
//     margin:10,
//     loop:true,
//     autoplay:true,
//     autoplayTimeout:2000,
//     autoplayHoverPause:true,
//   });
// }

export default toggleSwitch;
