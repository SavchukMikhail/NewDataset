import { Header } from "../../components/header/header";
import NewsContent from "./components/NewsContent/NewsContent";
import styles from './styles.module.scss';

const NewsPage = () => {
    return (
        <div>
            <Header/>
            <h1>Новости</h1>
            <NewsContent/>
        </div>
    );
};

export default NewsPage;