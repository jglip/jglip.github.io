let testimonialsSlideNumber = 0;

        // function l() {
        //     if (testimonialsSlideNumber >=0 && testimonialsSlideNumber < 8) {
        //         testimonialsSlideNumber += 1;
        //         setSlidePosition();
        //   }
        // };

        // function r() {
        //     if (testimonialsSlideNumber > 0) {
        //         testimonialsSlideNumber -= 1;
        //         setSlidePosition();
        //   }
        // };

function n(value) {
    if (value >= 0 && value < 9) {
        testimonialsSlideNumber = value * 1;
        setSlidePosition();
  }
}
function setSlidePosition(n) {
    let el = document.querySelector('.slide:first-child');
    let sliderRange = document.querySelector('.slider-range');
    sliderRange.value = testimonialsSlideNumber;
    el.style.marginLeft = testimonialsSlideNumber * (-235) + 'px';
}