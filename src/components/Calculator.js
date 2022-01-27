
import styles from './Calculator.module.css'
import { useState } from 'react'
import Digit from './Digit'
import Operator from './Operator'

const Calculator = () => {

    const [displayValue, setDisplayValue] = useState('')
    const [firstValue, setFirstValue] = useState()
    const [operation, setOperation] = useState()

    const clearDisplay = () => {
        setDisplayValue("")
    }

    const addDigit = (d) => {
        if (d === '.' && displayValue.toString().includes('.')) {
            return
        }
        setDisplayValue(displayValue + d.toString())
    }

    const getOperation = (oper) => {
        setOperation(oper)
        if (firstValue && operation) {
            doOperation()
            setFirstValue(displayValue)
        } else {
            setFirstValue(displayValue)
            clearDisplay()
        }
    }

    const doOperation = () => {
        const result = eval(`${firstValue}` + operation + `${displayValue}`)
        setDisplayValue(result.toString())
        setFirstValue()
    }

    return (
        <div>
            <div className={styles.wrapper}>
                <h1 className={styles.title}>Calculadora</h1>
                <div className={styles.display}>{displayValue}</div>
                <div className={styles.calculator} >
                    <Digit label={'AC'} click={clearDisplay} className={styles.triple} />
                    <Operator label={'/'} click={() => getOperation('/')} />
                    <Digit label={7} click={() => addDigit(7)} />
                    <Digit label={8} click={() => addDigit(8)} />
                    <Digit label={9} click={() => addDigit(9)} />
                    <Operator label={'x'} click={() => getOperation('*')} />
                    <Digit label={4} click={() => addDigit(4)} />
                    <Digit label={5} click={() => addDigit(5)} />
                    <Digit label={6} click={() => addDigit(6)} />
                    <Operator label={'-'} click={() => getOperation('-')} />
                    <Digit label={1} click={() => addDigit(1)} />
                    <Digit label={2} click={() => addDigit(2)} />
                    <Digit label={3} click={() => addDigit(3)} />
                    <Operator label={'+'} click={() => getOperation('+')} />
                    <Digit label={0} click={() => addDigit(0)} className={styles.double} />
                    <Digit label={'.'} click={() => addDigit('.')} />
                    <Digit label={'='} click={doOperation} />
                </div>
            </div>
            <div className={styles.name}>
                <span >Émilly Marinho</span>
            </div>

        </div>
    )
}

export default Calculator