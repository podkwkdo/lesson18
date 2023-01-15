import Carousel from "./carousel.js";
export default class SwipeCarousel extends Carousel {
  _initListeners() {
    super._initListeners();
    this.container.addEventListener("touchstart", this._swipeStart.bind(this));
    this.container.addEventListener("mousedown", this._swipeStart.bind(this));
    this.container.addEventListener("touchend", this._swipeEnd.bind(this));
    this.container.addEventListener("mouseup", this._swipeEnd.bind(this));
  }

  _swipeStart(e) {
    if (e instanceof MouseEvent) {
      this.startPosX = e.pageX;

      return;
    }

    if (e instanceof TouchEvent) {
      this.endPosX = e.changedTouches[0].pageX;
    }
  }

  _swipeEnd(e) {
    if (e instanceof MouseEvent) {
      this.endPosX = e.pageX;
    } else if (e instanceof TouchEvent) {
      this.startPosX = e.changedTouches[0].pageX;
    }

    if (this.endPosX - this.startPosX < -100) this.next();
    if (this.endPosX - this.startPosX > 100) this.prev();
  }
}
