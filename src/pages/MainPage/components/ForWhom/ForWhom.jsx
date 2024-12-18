import React, { useEffect, useState } from 'react';
import styles from './styles.module.scss';
import StickyBox from "react-sticky-box";

const ForWhom = () => {
    const [isActive, setIsActive] = useState(false);

    const handleScroll = () => {
        const element = document.getElementById('forWhomHeading');
        if (element) {
            const rect = element.getBoundingClientRect();
            setIsActive(rect.top >= 0 && rect.bottom <= window.innerHeight);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    return (
        <>
        <div className={styles.mainWrapper}>
            <div className={styles.wrapperPosition}>
            <div className={styles.contentWrapper}> 
                <div className={styles.forWhomContent}>
                <StickyBox offsetTop={350} offsetBottom={20}>
                        <h2 id="forWhomHeading" 
                            className={`${styles.forWhomContentTitle} ${isActive ? styles.forWhomContentTitleActive : ''}`}>Разработчикам</h2>
                    </StickyBox>
                    <div className={styles.forWhomContentDescription}>
                        <p>Применение технологии искусственного интеллекта и машинного обучения в медицине и здравоохранении является одним из основных технологических трендов. 
                            Но для их использования в отечественной практике раньше не было необходимого объема размеченных данных. 
                            C помощью SibMed Clinical Data Repository можно разрабатывать и тестировать медицинские алгоритмы, 
                            а также создавать уникальные продукты для бизнеса и здравоохранения.
                        </p>  
                    </div>
                </div>
            </div>
            <div className={styles.contentWrapper}> 
                <div className={styles.forWhomContent}>
                    <StickyBox offsetTop={350} offsetBottom={20}>
                        <h2 className={styles.forWhomContentTitle}>Организациям</h2>
                    </StickyBox>
                    <div className={styles.forWhomContentDescription}>
                        <p>SibMed Clinical Data Repository позволит медицинским организациям проводить аналитику диагностических и лечебных мероприятий, 
                            объективно оценивать программы лечения заболеваний, влияющие на качество жизни пациентов и благополучие населения. 
                            Являясь донорами данных можно улучшить качество проводимых научных исследований и участвовать в разработке IT-продуктов.
                        </p>  
                    </div>
                </div>
            </div>
            <div className={styles.contentWrapper}> 
                <div className={styles.forWhomContent}>
                    <StickyBox offsetTop={350} offsetBottom={20}>
                        <h2 className={styles.forWhomContentTitle}>Исследователям</h2>
                    </StickyBox>
                    <div className={styles.forWhomContentDescription}>
                        <p>SibMed Clinical Data Repository предоставляет большие объемы данных для исследовательских целей. 
                            Исследования, проведенные с таким большим объемом данных, обеспечивают лучшее принятие клинических решений и статистически 
                            значимые результаты за меньшее время по сравнению с традиционными эпидемиологическими исследованиями. Большой объем ретроспективных
                             данных позволяет эффективно подходить к проверке статистических гипотез, осуществлять поиск 
                             редких случаев, проводить эпидемиологические исследования в ускоренном порядке.
                        </p>  
                    </div>
                </div>
            </div>
            </div>
        </div>
        </>
    );
};

export default ForWhom;