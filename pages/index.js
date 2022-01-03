import { useState } from 'react';
import Head from 'next/head'
import Image from 'next/image';
import styles from '../styles/Home.module.scss'
import { Swiper, SwiperSlide } from "swiper/react";
import picture from '/public/picture.png'
import "swiper/css";
import "swiper/css/free-mode"

import SwiperCore, {
  FreeMode, Mousewheel
} from 'swiper';

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
        <Swiper onSwiper={setSwiper} direction={'vertical'} mousewheel={true} className={styles.slider}>
          <SwiperSlide className={styles.slide}>
            <div className={styles.pictureWrapper}>
              <Image layout={"fill"} className={styles.picture} unsized={true} src={picture} alt=""/>
            </div>
          </SwiperSlide>
          <SwiperSlide className={styles.slide1}>Slide 1</SwiperSlide>
          <SwiperSlide className={styles.slide2}>Slide 2</SwiperSlide>
          <SwiperSlide className={styles.slide3}>Slide 3</SwiperSlide>
          <SwiperSlide className={styles.slide4}>Slide 4</SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}
