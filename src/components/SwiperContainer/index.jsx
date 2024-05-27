import { useEffect, useRef } from 'react';
import { Container } from "./styles.js";
import { register } from 'swiper/element/bundle';

export function Swiper(props) {
  const swiperRef = useRef(null);
  const {
    children,
    ...rest
  } = props;

  useEffect(() => {
    
    register();

    const params = {
      ...rest
    };

    Object.assign(swiperRef.current, params);
    
    swiperRef.current.initialize();
  }, []);

  return (
    <Container>
      <swiper-container init="false" ref={swiperRef}>
        {children}
      </swiper-container> 
    </Container>
    
  );
}
export function SwiperSlide(props) {
  const {
    children,
    ...rest
  } = props;

  return (
    <Container>
      <swiper-slide {...rest}>
        {children}
      </swiper-slide>
    </Container>
  );
}