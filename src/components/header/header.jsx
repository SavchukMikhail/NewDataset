import { useState } from 'react';
import styles from './styles.module.scss';
import classNames from 'classnames';
import Logo from '../../images/logo_ssmu_white.svg';
import { BiSolidUserCircle } from "react-icons/bi";

import Hamburger from 'hamburger-react';

export const Header = () => {
    
    const [isHeaderBig, setBigHeader] = useState(false);

    const [currentIndex, setCurrentIndex] = useState();
    const [coloredHeader, setColoredHeader] = useState(false);
    
    const menu = [
        {
            text: "О проекте",
            link: "#about",
        },
        {
            text: "База данных",
            link: "#database",
        },
        {
            text: "Новости",
            link: "news",
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
                    <a href='/'>
                        <img src={Logo} alt={'ssmu logo'} width={200} height={50}/>
                    </a>
                    
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
                <a className={styles.button}>                    
                        <BiSolidUserCircle  className={styles.buttonIcon} fill='#fff' />
                        <span>Личный кабинет</span>
                </a>         
            </header>
            <div className={styles.mobileWrapper}>
                    <img className={styles.mobileLogo} src={Logo} alt={'ssmu logo'} height={200}/>
                 <Hamburger toggled={isHeaderBig} onToggle={() => setBigHeader(!isHeaderBig)} color='white'/>
                        <div className={classNames(styles.small, `${isHeaderBig ? styles.big : ''}`)}>
                            <div className={styles.menuMobile}>
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
                            <div className={styles.buttonWrapper}>
                                 
                            <a className={styles.button} href='/'>                    
                                <BiSolidUserCircle  className={styles.buttonIcon} fill='#fff' />
                                <span>Личный кабинет</span>
                            </a>   
                            </div>

                        </div>
                    </div> 
        </>    

    )
}