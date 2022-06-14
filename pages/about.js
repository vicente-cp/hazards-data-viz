import Image from 'next/image';
import styles from '../styles/About.module.css'


const About = () => {
    return (
        <div>
            <h1 className={styles.title}>Everything About Us (Me) can be explained in the following image</h1>


            <div className={styles.birdiediv}>
                <Image
                    src="/birdie.jpg"
                    alt="Birdieee"
                    height={360}
                    width={640}
                />
            </div>
        </div>
    );
}

export default About;