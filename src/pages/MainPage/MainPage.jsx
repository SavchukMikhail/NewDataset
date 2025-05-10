import { Header } from "../../components/header/header";
import Hero from "../../components/hero/hero";
import Build from "../PersonalPage/components/BuildPage/buildPage";
import AboutBase from "./components/AboutBase/AboutBase";
import ForWhom from "./components/ForWhom/ForWhom";
import MainSlider from "./components/MainSlider/MainSlider";
import styles from './styles.module.scss';

const MainPage = () => {
    return (
        <div className={styles.wrapper}>
                <Header/>
                <Hero/>
                <AboutBase/>
                <ForWhom/>
                <AboutBase/>
                <AboutBase/>
                <MainSlider/>
            <h1>Г</h1>
            <Build/>
            <p>Добро пожаловать на главную страницу!</p>
        </div>
    );
};

export default MainPage;