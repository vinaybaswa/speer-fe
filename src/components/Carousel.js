import React, { useState } from 'react';
import { CarouselData } from './CarouselData';
import "./CarouselStyle.scss";

const Carousel = () => {
  const [current, setCurrent] = useState(0);
  // const length = CarouselData.length;

  // const nextSlide = () => {
  //   setCurrent(current === length - 1 ? 0 : current + 1);
  // };

  // let timer = setTimeout(nextSlide, 9000);

  const firstSlide = () => {
    // clearTimeout(timer)
    setCurrent(0)
    // timer = setTimeout(nextSlide, 10000)
  };

  const secondSlide = () => {
    setCurrent(1);
  };

  const thirdSlide = () => {
    setCurrent(2);
  };


  if (!Array.isArray(CarouselData) || CarouselData.length <= 0) {
    return null;
  }



  return (
    <section className='slider'>
      {CarouselData.map((slide, index) => {
        return (
          <div
            className={index === current ? 'slide active' : 'slide'}
            key={index}
          >
            {index === current && (
              <img src={slide.image} alt='' className='image' />
            )}
          </div>
        );
      })}
      <h1 id='contentOne'>INTERACTIVE CONCERT EXPERIENCE</h1>
      <input type="radio" id="radio1" onClick={firstSlide} checked={current === 0 ? true : false} />
      <input type="radio" id="radio2" onClick={secondSlide} checked={current === 1 ? true : false} />
      <input type="radio" id="radio3" onClick={thirdSlide} checked={current === 2 ? true : false} />
    </section>
  );
};

export default Carousel;