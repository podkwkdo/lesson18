import SwipeCarousel from "./carousel-swipe.js";

const slider = new SwipeCarousel({
  containerID: "#carousel",

  interval: 4000,
  isPlaying: false,
});

slider.init();
