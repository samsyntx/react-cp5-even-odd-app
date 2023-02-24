import {Component} from 'react'
import './index.css'

class EvenOddApp extends Component {
  state = {number: 0}

  incrementButton = () => {
    const generateRandomNum = Math.random() * 100
    const ceilingRandomNumber = Math.ceil(generateRandomNum)
    this.setState(prevState => ({
      number: prevState.number + ceilingRandomNumber,
    }))
  }

  render() {
    const {number} = this.state
    let evenOrOddContent = ''
    if (number % 2 === 0) {
      evenOrOddContent = 'Even'
    } else {
      evenOrOddContent = 'Odd'
    }
    return (
      <div className="body-container">
        <div className="main-bg-container">
          <h1 className="count-heading-style">Count {number}</h1>
          <p className="even-odd-style">Count is {evenOrOddContent}</p>
          <button
            onClick={this.incrementButton}
            className="button-style"
            type="button"
          >
            Increment
          </button>
          <p className="increase-description-style">
            *Increase by Random Number between 0 to 100{' '}
          </p>
        </div>
      </div>
    )
  }
}
export default EvenOddApp
