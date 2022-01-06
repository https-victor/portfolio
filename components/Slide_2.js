import styles from '../styles/Slide_2.module.scss'
import Image from 'next/image';
import lookingUp from '/public/lookingUp.png'

export default function Slide_2() {
    return (
        <>
        <div className={styles.titleWrapper}>
        <h1>Victor Oliveira</h1>
        <h2>Your <strong>NEXT</strong> web developer</h2>
        </div>
          <div className={styles.pictureWrapper}>
            <Image
              layout={"fill"}
              className={styles.lookingUp}
              unsized={true}
              src={lookingUp}
              alt=""
            />
          </div>
        </>
    )
}
