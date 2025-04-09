import styles from './styles.module.scss'

interface InputProps extends React.HTMLProps<HTMLInputElement> {
    isError?: boolean;
    helperText?: string;
    label?: string;
}

export const Input: React.FC<InputProps> = ({
    isError = false, 
    helperText, 
    label,
    id,
     ...props
    }) => {
    const className = isError ? styles.inputError : styles.inputRight;
    return (
        <div className={styles.inputContainer}>
            {label && <label htmlFor={id} className={styles.label}>{label}</label>}
            <input id={id}
                className={`${styles.input} ${isError ? styles.inputError : ''}`}
                {...props}
            />
            {isError && helperText && (
                <div className={styles.warningText}>{helperText}</div>
            )}
        </div>
        

)
};

