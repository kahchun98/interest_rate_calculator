import { simpleInterestCalculator, compoundInterestCalculator } from '../utils/interestCalculator'
import { useState } from 'react'

function Calculator () {
  const MAX_PRINCIPAL_AMOUNT = 1500000
  const MAX_INTEREST_RATE = 15
  const MAX_YEAR = 5

  const [finalBalance, setFinalBalance] = useState(0)
  const [totalInterestEarned, setTotalInterestEarned] = useState(0)
  const [principalAmount, setPrincipalAmount] = useState(0)
  const [interestRate, setInterestRate] = useState(0)
  const [termYear, setTermYear] = useState(0)
  const [termMonth, setTermMonth] = useState(0)

  const sanitiseInput = (input, min, max) => {
    // removes non-integer characters
    input = input.replace(/[^0-9.]/g, '')

    const inputNumber = Number(input)
    if (inputNumber >= min && inputNumber <= max) {
      return inputNumber
    } else if (inputNumber > max) {
      return max
    } else {
      return 0
    }
  }

  const calculator = (principalAmount, rate, termYear, termMonth, mode) => {
    const parsedRate = rate * 0.01
    const term = termYear + termMonth / 12
    let res = { totalInterestEarned: 0, finalBalance: 0 }

    // Ensure a date is inserted
    if (termYear <= 0 && termMonth <= 0) {
      alert('Please insert a date')
      return
    }

    switch (mode) {
      case 'atMaturity':
        res = simpleInterestCalculator(principalAmount, parsedRate, term)
        break
      case 'monthly':
        res = compoundInterestCalculator(principalAmount, parsedRate, term, 12)
        break
      case 'quarterly':
        res = compoundInterestCalculator(principalAmount, parsedRate, term, 4)
        break
      case 'yearly':
        // Ensure a year is inserted
        if (termYear <= 0) {
          alert('Year must at least be 1')
          return
        }
        res = compoundInterestCalculator(principalAmount, parsedRate, term, 1)
        break
      default:
        console.log('unrecognised mode')
    }

    setFinalBalance(res.finalBalance)
    setTotalInterestEarned(res.totalInterestEarned)
  }

  return (
        <div className="calculatorWrapper">
            <div className="calculatorRow">
              Total balance: {finalBalance}
            </div>
            <div className="calculatorRow">
              Total interest earned: {totalInterestEarned}
            </div>
            <div className="calculatorRow">
              <label>
                  Starting Amount: <input type="text" id="principalAmount" name="principalAmount" step="100" value={principalAmount} onChange={(e) => setPrincipalAmount(sanitiseInput(e.target.value, 0, MAX_PRINCIPAL_AMOUNT))}/>
              </label>
            </div>
            <div className="calculatorRow">
              <label>
                Interest Rate: <input type="range" id="interestRate" name="interestRate" min="0" max="15" step="0.01" value={interestRate} onChange={(e) => setInterestRate(sanitiseInput(e.target.value, 0, MAX_INTEREST_RATE))}/>{interestRate}% p.a.
              </label>
            </div>
            <div className="calculatorRow">
              <label>
                  Year: <input type="range" id="termYear" name="termYear" min="0" max="5" value={termYear} onChange={(e) => setTermYear(sanitiseInput(e.target.value, 0, MAX_YEAR))}/> {termYear}
                </label>
            </div>
            <div className="calculatorRow">
              <label>
                Month: <input type="range" id="termYear" name="termMomth" min="0" max="12" value={termMonth} onChange={(e) => setTermMonth(sanitiseInput(e.target.value, 0, 12))}/> {termMonth}
              </label>
            </div>
            <div className="calculatorRow">
              <button className="styled-button" onClick={() => calculator(principalAmount, interestRate, termYear, termMonth, 'atMaturity')}>Calculate at maturity interest</button>
            </div>
            <div className="calculatorRow">
              <button className="styled-button" onClick={() => calculator(principalAmount, interestRate, termYear, termMonth, 'monthly')}>Calculate monthly interest</button>
            </div>
            <div className="calculatorRow">
              <button className="styled-button" onClick={() => calculator(principalAmount, interestRate, termYear, termMonth, 'quarterly')}>Calculate quarterly interest</button>
            </div>
            <div className="calculatorRow">
              <button className="styled-button" onClick={() => calculator(principalAmount, interestRate, termYear, termMonth, 'yearly')}>Calculate yearly interest</button>
            </div>
        </div>
  )
}

export default Calculator
