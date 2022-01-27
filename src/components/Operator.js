import styles from './Operator.module.css'

const Operator = ({ label, click }) => {
    return <button className={styles.button} onClick={click}>{label}</button>
}

export default Operator