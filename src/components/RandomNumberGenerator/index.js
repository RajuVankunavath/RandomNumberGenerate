import {Component} from 'react'
import './index.css'

class RandomNumberGenerator extends Component {
  state = {random: 0}

  onClickRandomNumber = () => {
    const randomNumber = Math.ceil(Math.random() * 100)
    this.setState({random: randomNumber})
  }

  render() {
    const {random} = this.state

    return (
      <div className="container">
        <div className="card-container">
          <h1 className="heading">Random Number</h1>
          <p className="description">
            Generate a random number in the range of 0 to 100
          </p>
          <button
            type="button"
            className="button"
            onClick={this.onClickRandomNumber}
          >
            Generate
          </button>
          <p className="random-number">{random}</p>
        </div>
      </div>
    )
  }
}

export default RandomNumberGenerator
