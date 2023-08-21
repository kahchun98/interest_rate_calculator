import logo from './images/calculator-money-icon.svg'
import './App.css'
import Calculator from './components/calculator'

function App () {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <body>
        <Calculator/>
      </body>
    </div>
  )
}

export default App
