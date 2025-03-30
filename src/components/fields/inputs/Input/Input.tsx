import styles from './styles.module.scss'

interface InputProps extends React.HTMLProps<HTMLInputElement> {
    isError?: boolean;
    helperText?: string;
}

export const Input: React.FC<InputProps> = ({isError = false, helperText, ...props}) => {
    const className = isError ? styles.inputError : styles.inputRight;
    return (
        <div>
            <input className={className} {...props}/>
            {isError && helperText && <div className={styles.warningText}>{helperText}</div>}
        </div>
        

)
};

