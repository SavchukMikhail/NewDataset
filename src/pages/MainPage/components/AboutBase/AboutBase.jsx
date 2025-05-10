import CountUp from 'react-countup';
import styles from './styles.module.scss';
import patientStore from '../../../../stores/PatientStore';

const AboutBase = () => {
    console.log(patientStore.getTotalPatients());
    return (
        
        <>
        <div className={styles.mainWrapper}>
            <div className={styles.contentWrapper}>
                <div className={styles.aboutBase}>
                    <div className={styles.aboutBaseDescription}>
                        <h2 className={styles.aboutBaseTitle}>О репозитории</h2>
                        <h4 className={styles.aboutBaseTitleSmall}>SibMed Clinical Data Repository</h4>
                        <p>Репозиторий СибГМУ является первым уникальным русскоязычным хранилищем обезличенных данных пациентов. 
                            В нём содержится анонимизированная база клинических данных университетских клиник СибГМУ. В базе данных хранятся амбулаторные и стационарные данные. 
                            Представлены текстовые и числовые данные объективных и параклинических обследований. 
                            В настоящий момент на платформе размещаются постоянно дополняющиеся эпидемиологические данные, информация об обращениях и лабораторных исследованиях.
                            SibMed Clinical Data Repository позволяет использовать большие медицинские данные для научных исследований, 
                            разработок в области искусственного интеллекта и машинного обучения, а также для эффективного менеджмента в сфере здравоохранения
                        </p>
                    </div>
                    <div className={styles.aboutBaseNumbersWrapper}>
                        <div className={styles.aboutBaseNumbers}>
                             <CountUp className={styles.numbers} start={0} end={1427210} duration={2} separator='  '/> {/*<CountUp start={0} end={patientStore.getTotalPatients()} duration={2} /> */}
                            <span className={styles.aboutBaseNumbersText}>записей</span>
                        </div>
                        <div className={styles.aboutBaseNumbers}>
                             <CountUp className={styles.numbers} start={0} end={275512} duration={2} separator='  '/> 
                            <span className={styles.aboutBaseNumbersText}>случаев</span>
                        </div>
                        <div className={styles.aboutBaseNumbers}>
                             <CountUp className={styles.numbers} start={0} end={67020} duration={2} separator='  '/> 
                            <span className={styles.aboutBaseNumbersText}>выписных эпикризов</span>
                        </div>
                        <div className={styles.aboutBaseNumbers}>
                             <CountUp className={styles.numbers} start={0} end={510453} duration={2} separator='  '/> 
                            <span className={styles.aboutBaseNumbersText}>лабораторных исследований</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
};

export default AboutBase;