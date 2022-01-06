import styles from '../styles/Slide_1.module.scss'
import Image from 'next/image';
import picture from '/public/picture.png'


export default function Slide_1() {
    return (
      <>
      <div className={styles.titleWrapper}>
      <h1>Victor Oliveira</h1>
      <h2>Your <strong>NEXT</strong> web developer</h2>
      </div>
        <div className={styles.pictureWrapper}>
          <Image
            layout={"fill"}
            className={styles.picture}
            unsized={true}
            src={picture}
            alt=""
          />
        </div>
      </>
    );
}
