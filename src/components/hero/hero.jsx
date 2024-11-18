import sky from '../../assets/sky.mp4'
import styles from './styles.module.scss';


const Hero = () => {
    return (
        <>
        <div className={styles.mainWrapper}>
        <div className={styles.backgroundWrapper}>
              <video src={sky} autoPlay loop muted playsInline/>
        </div>
        <div className={styles.contentWrapper}> 
            <div className={styles.content}>
                <p className={styles.text}>SibMed Clinical Data Repository</p>
                <h1 className={styles.title}>Первый русскоязычный репозиторий клинических данных</h1>
                <a className={styles.button}>
                    <span>Зарегистрироваться</span>
                </a>
            </div>
        </div>
        </div>
        </>
    );
};

export default Hero;