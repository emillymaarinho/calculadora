import styles from './Digit.module.css'

const Digit = ({ label, click, ...props }) => {
    return <button className={`${styles.button} ${props.className}`} onClick={click}>{label}</button>
}

export default Digit