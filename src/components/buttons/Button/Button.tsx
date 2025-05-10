import styles from './styles.module.scss';

interface ButtonProps extends React.HTMLProps<HTMLButtonElement> {};

export const Button: React.FC<ButtonProps> = ({children}) => {
    return (
        <button className={styles.button}>{children}</button> //children - чтобы кнопка отображала любой текст, который на странице напишем
    );
};