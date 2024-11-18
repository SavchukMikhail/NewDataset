import { Header } from "../../components/header/header";
import Hero from "../../components/hero/hero";
import Build from "../PersonalPage/components/BuildPage/buildPage";
import styles from './styles.module.scss';

const MainPage = () => {
    return (
        <div className={styles.wrapper}>
                <Header/>
                <Hero/>
            <h1>Г</h1>
            <Build/>
            <p>Добро пожаловать на главную страницу!</p>
        </div>
    );
};

export default MainPage;