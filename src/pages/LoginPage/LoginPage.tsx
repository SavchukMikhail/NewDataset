import  '../../../src/globalStyles.scss';
import styles from './styles.module.scss';
import Logo from '../../images/logo_ssmu_white.svg';
import { Input } from '../../components/fields';
import { useState } from 'react';

const LoginPage = () => {
        const [formValues, setFormValues] = useState({ username: '', password: ''})
    return ( 
        <div className={styles.loginWrapper}>
            <div className={styles.loginContent}>
                <div className={styles.loginHeader}>
                        <a className={`${''} ${styles.loginLink} `} href='/'>
                            <span>Главная страница</span>
                        </a>
                        <img src={Logo} alt={'ssmu logo'} width={200} height={50}/>
                </div>
                <div className={styles.loginForm}>
                    <h1>Вход</h1>
                    <form>
                        <div className={styles.fieldData}>
                            <Input 
                                placeholder='Имя пользователя' 
                                value={formValues.username}
                                onChange={(event: React.ChangeEvent<HTMLInputElement>) => setFormValues({...formValues, username: event.target.value})}
                            />
                        </div>
                        <div className={styles.fieldData}>
                            <Input
                                placeholder='Пароль'
                                value={formValues.password}
                                onChange={(event: React.ChangeEvent<HTMLInputElement>) => setFormValues({...formValues, password: event.target.value})}
                            />
                        </div>
                        <button>
                            <span>Войти</span>
                        </button>
                    </form>
                </div>
            </div>
           
        </div>
     );
}

export default LoginPage;