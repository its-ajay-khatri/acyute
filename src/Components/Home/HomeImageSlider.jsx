import React, { useState, useRef, useEffect } from 'react';
import './homeImageSlider.css'

const HomeImageSlider = () => {
    const [activeSlideIndex, setActiveSlideIndex] = useState(0);
  const sliderContainerRef = useRef(null);
  const secondSectionRef = useRef(null);
  

  useEffect(() => {
    const sliderContainer = sliderContainerRef.current;
    const slides = document.querySelectorAll('.slide');
    const slidesLength = slides.length;

    const moveToSlide = (swap) => {
      if (sliderContainer.classList.contains('slider-locked')) return;

      const newIndex = (activeSlideIndex + swap + slidesLength) % slidesLength;
      setActiveSlideIndex(newIndex);

      sliderContainer.classList.add('slider-locked');

      slides.forEach((slide, index) => {
        slide.classList.toggle('scrolling_active', index === newIndex);
      });
    };

    const onTransitionEnd = () => {
      sliderContainer.classList.remove('slider-locked');
    };

    const onScroll = (event) => {
      event.preventDefault();
      const swap = Math.sign(event.deltaY);
      moveToSlide(swap);
    };

    document.addEventListener('wheel', onScroll);
    sliderContainer.addEventListener('transitionend', onTransitionEnd);

    return () => {
      document.removeEventListener('wheel', onScroll);
      sliderContainer.removeEventListener('transitionend', onTransitionEnd);
    };
  }, [activeSlideIndex]);

  return (
    <div className="App">
      <div class="slider-container second-section" ref={sliderContainerRef}>
        <div class="slide slide0 scrolling_active">
          <div class="slide-part slide-left-part">
            <div class="slide-skew">
              <div class="slide-content content-left-part"></div>
            </div>
          </div>
          <div class="slide-part slide-right-part">
            <div class="slide-skew">
              <div class="slide-content content-right-part">
                <h3 class="slide-title">First slide</h3>
                <p class="slide-subtitle">Just scroll down</p>
              </div>
            </div>
          </div>
        </div>

        <div class="slide slide1">
          <div class="slide-part slide-left-part">
            <div class="slide-skew">
              <div class="slide-content content-left-part">
                <h3 class="slide-title">Second slide</h3>
                <p class="slide-subtitle">Continue scrolling</p>
              </div>
            </div>
          </div>
          <div class="slide-part slide-right-part">
            <div class="slide-skew">
              <div class="slide-content content-right-part"></div>
            </div>
          </div>
        </div>

        <div class="slide slide2">
          <div class="slide-part slide-left-part">
            <div class="slide-skew">
              <div class="slide-content content-left-part"></div>
            </div>
          </div>
          <div class="slide-part slide-right-part">
            <div class="slide-skew">
              <div class="slide-content content-right-part">
                <h3 class="slide-title">Third slide</h3>
                <p class="slide-subtitle">Keep scrolling down</p>
              </div>
            </div>
          </div>
        </div>

        <div class="slide slide3">
          <div class="slide-part slide-left-part">
            <div class="slide-skew">
              <div class="slide-content content-left-part">
                <h3 class="slide-title">Fourth slide</h3>
                <p class="slide-subtitle">Look what beautiful photos</p>
              </div>
            </div>
          </div>
          <div class="slide-part slide-right-part">
            <div class="slide-skew">
              <div class="slide-content content-right-part"></div>
            </div>
          </div>
        </div>

        <div class="slide slide4">
          <div class="slide-part slide-left-part">
            <div class="slide-skew">
              <div class="slide-content content-left-part"></div>
            </div>
          </div>
          <div class="slide-part slide-right-part">
            <div class="slide-skew">
              <div class="slide-content content-right-part">
                <h3 class="slide-title">Fifth slide</h3>
                <p class="slide-subtitle">We're getting close to the end</p>
              </div>
            </div>
          </div>
        </div>

        <div class="slide slide5">
          <div class="slide-part slide-left-part">
            <div class="slide-skew">
              <div class="slide-content content-left-part">
                <h3 class="slide-title">Sixth slide</h3>
                <p class="slide-subtitle">
                  Last slide. But if you want, you can keep scrolling
                </p>
              </div>
            </div>
          </div>
          <div class="slide-part slide-right-part">
            <div class="slide-skew">
              <div class="slide-content content-right-part"></div>
            </div>
          </div>
        </div>
      </div>
  
    </div>
  );
}

export default HomeImageSlider;