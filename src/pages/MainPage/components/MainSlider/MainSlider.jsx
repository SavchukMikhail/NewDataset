import { useState, useRef } from 'react';
import SliderImageEnter from '../../../../images/sliderImageEnter.png';
import '../../../../../src/globalStyles.scss';
import styles from '../MainSlider/styles.module.scss';

const info = [
  {
    title: "Правила",
    description: "Ознакомиться с базой данных и правилами пользования сервисом",
    link: "#about",
    buttonText: "База данных",
  },
  {
    title: "Вход в систему",
    description: "Зарегистрироваться на сайте, заполнив всю необходимую информацию. Обязательным условием регистрации является загрузка в личный кабинет сертификата о прохождении программы повышения квалификации «Культура работы с биомедицинскими данными на платформе SibMED Data Clinical Repository». Сертификат подтверждает ваше право на пользование сервисом.",
    link: "#about",
    buttonText: "Присоединиться",
  },
  {
    title: "Результаты",
    description: "Ожидать результатов проверки достоверности заполненных при регистрации данных. Если верификация не была пройдена успешно, то вам будет предложено пройти повышение квалификации по программе “Культура работы с биомедицинскими данными на платформе SibMED Data Clinical Repository” и получить сертификат",
    link: "#about",
    buttonText: "Личный кабинет",
  },
];

const MainSlider = () => {
  

  return (
    <div
      className={styles.mainWrapper}

    >
      <div className={styles.sliderWrapper}>
        {info.map((item, index) => (
          <div
            key={index}
            className={styles.slide}
           
          >
            <img className={styles.image} src={SliderImageEnter}/>
            <div className={styles.card}>
              <h2 className={styles.title}>{item.title}</h2>
              <p className={styles.description}>{item.description}</p>
              <a href={item.link} className={`${styles.button} ${index % 2 === 0 ? 'mainButton' : 'secondaryButton'}`}>{item.buttonText}</a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MainSlider;
