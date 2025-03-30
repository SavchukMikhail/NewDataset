import  '../../../src/globalStyles.scss';
import styles from './styles.module.scss';
import Logo from '../../images/logo_ssmu_white.svg';
import { Input } from '../../components/fields';
import { Button } from '../../components/buttons';
import { useState } from 'react';

const validateIsEmpty = (value: string) => {
    if (!value) return 'текст ошибки';
    return null;
}

const validateUsername = (value: string) => {
    return validateIsEmpty(value);
}
const validatePassword = (value: string) => {
    return validateIsEmpty(value);
}

//типы и автоподскажи при использовании FormErrors
interface FormErrors {
    username : string|null;
    password : string|null;

}
const LoginPage = () => {
        const [formValues, setFormValues] = useState({ username: '', password: ''});
        const [formErrors, setFormErrors] = useState<FormErrors>({username: null, password: null})
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
                                onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                                    const username = event.target.value;
                                    setFormValues({...formValues, username})

                                    const error = validateUsername(username);
                                    setFormErrors({...formErrors, username: error })
                                }}
                                {...(
                                    !!formErrors.username && {
                                      isError: !!formErrors.username,
                                      helperText: formErrors.username
                                    })}
                            />
                        </div>
                        <div className={styles.fieldData}>
                            <Input
                                placeholder='Пароль'
                                value={formValues.password}
                                onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                                    const password = event.target.value;
                                    setFormValues({...formValues, password})

                                    const error = validateUsername(password);
                                    setFormErrors({...formErrors, password: error })
                                }}
                                {...(
                                    !!formErrors.password && {
                                      isError: !!formErrors.password,
                                      helperText: formErrors.password
                                    })}
                            />
                        </div>
                        <Button>Войти</Button>
                    </form>
                </div>
            </div>
           
        </div>
     );
}

export default LoginPage;