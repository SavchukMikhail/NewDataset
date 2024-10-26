import { useState, useEffect } from 'react';
import styles from './styles.module.scss';
import classNames from 'classnames';
import Logo from '../../images/logo_ssmu_white.svg';


export const Header = () => {
    
    const [currentIndex, setCurrentIndex] = useState();
    
    const menu = [
        {
            text: "О проекте",
            link: "#aut",
        },
        {
            text: "База данных",
            link: "#database",
        },
        {
            text: "Новости",
            link: "#news",
        },
        {
            text: "Контакты",
            link: "#contacts",
        },
      
    ]
    return (
        <>
            <header className={styles.header}>
                <div>
                    <img src={Logo} alt={'ssmu logo'} width={200} height={50}/>
                </div>
                <div className={styles.menu}>
                            {
                                menu.map((item, index)=>{
                                    return(
                                        <div className={styles.item} key={index}>
                                            <a href={item.link} onClick={() => setCurrentIndex(index)} className={classNames(styles.itemText, currentIndex === index ? styles.itemTextActive : '')}>{item.text}</a>
                                        </div>
                                    )
                                    
                                })
                                
                            }
                            
                </div>
            </header>
        </>    

    )
}