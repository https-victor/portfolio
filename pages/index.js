import { useState } from 'react';
import Head from 'next/head'
import styles from '../styles/Home.module.scss'
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/free-mode"

import SwiperCore, {
  FreeMode, Mousewheel
} from 'swiper';
import Slide_1 from '../components/Slide_1';
import Slide_2 from '../components/Slide_2';
import Slide_3 from '../components/Slide_3';

// install Swiper modules
SwiperCore.use([FreeMode, Mousewheel]);

export default function Home() {

  
  const [swiper, setSwiper] = useState(null);


  return (
    <div className={styles.container}>
      <Head>
        <title>How to Victor — Your NEXT Web Developer</title>
        <meta
          name="description"
          content="Hi, I'm Victor Oliveira • I'll help you create your NEXT project."
        />
        
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={styles.firstSection}>
        <Swiper
          onSwiper={setSwiper}
          direction={"vertical"}
          mousewheel={true}
          className={styles.slider}
        >
          <SwiperSlide className={styles.slide}>
            <Slide_1 />
          </SwiperSlide>
          <SwiperSlide className={styles.slide2}>
            <Slide_2 />
          </SwiperSlide>
          <SwiperSlide className={styles.slide3}>
            <Slide_3 />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}
