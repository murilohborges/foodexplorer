import { useEffect, useRef } from 'react';
import { Container } from "./styles.js";
import { register } from 'swiper/element/bundle';

export function Swiper(props) {
  const swiperRef = useRef(null);
  const {
    children,
    indexLeftArrow,
    indexRightArrow,
    numberElements,
    ...rest
  } = props;
  
  useEffect(() => {
    
    register();

    const params = {
      navigation: {
        nextEl: `.${String(indexRightArrow)}`,
        prevEl: `.${String(indexLeftArrow)}`,
      },
      breakpoints: {
        320: {
          slidesPerView: 1,
          centeredSlides: true,
          loop: false
        },
        380: {
          spaceBetween: 5,
          slidesPerView: 2,
          centeredSlidesBounds: true
        },
        540: {
          spaceBetween: 0,
          slidesPerView: 3,
          centeredSlidesBounds: true,
          centeredSlides: true,
          loop: false,
        },
        640: {
          spaceBetween: 0,
          slidesPerView: 3,
          centeredSlidesBounds: true,
          centeredSlides: true,
          ...rest
        },
        768: {
          spaceBetween: 5,
          slidesPerView: 2,
          centeredSlides: false,
          loop: true,
          ...rest
        },
        1000: {
          spaceBetween: 10,
          slidesPerView: 3,
          centeredSlidesBounds: true,
          centeredSlides: true,
          ...rest
        },
  
      },
      ...rest
    };
    

    Object.assign(swiperRef.current, params);
    swiperRef.current.initialize();
  }, []);
    

  return (
    <Container $numberElements={numberElements}>
      <div className="left-shadow" />
      <button className={String(indexLeftArrow)} >
        <svg width="16" height="28" viewBox="0 0 16 28" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M14.8839 0.616117C15.372 1.10427 15.372 1.89573 14.8839 2.38388L3.26777 14L14.8839 25.6161C15.372 26.1043 15.372 26.8957 14.8839 27.3839C14.3957 27.872 13.6043 27.872 13.1161 27.3839L0.616117 14.8839C0.127961 14.3957 0.127961 13.6043 0.616117 13.1161L13.1161 0.616117C13.6043 0.127961 14.3957 0.127961 14.8839 0.616117Z" fill="white"/>
        </svg>
      </button>
      <swiper-container init="false" ref={swiperRef}>
        {children}
      </swiper-container>
      <button className={String(indexRightArrow)} >
        <svg width="16" height="28" viewBox="0 0 16 28" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M1.11612 0.616117C1.60427 0.127961 2.39573 0.127961 2.88388 0.616117L15.3839 13.1161C15.872 13.6043 15.872 14.3957 15.3839 14.8839L2.88388 27.3839C2.39573 27.872 1.60427 27.872 1.11612 27.3839C0.627961 26.8957 0.627961 26.1043 1.11612 25.6161L12.7322 14L1.11612 2.38388C0.627961 1.89573 0.627961 1.10427 1.11612 0.616117Z" fill="white"/>
        </svg>
      </button>
      <div className="right-shadow" />
    </Container>
    
  );
}
export function SwiperSlide(props) {
  const {
    children,
    numberElements,
    ...rest
  } = props;

  return (
    <Container $numberElements={numberElements}>
      <swiper-slide {...rest}>
        {children}
      </swiper-slide>
    </Container>
  );
}