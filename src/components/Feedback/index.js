// Write your React code here.
import {Component} from 'react'
import './index.css'

class Feedback extends Component {
  state = {reacted: false}

  changeReaction = () => {
    this.setState({
      reacted: true,
    })
  }

  render() {
    const {reacted} = this.state
    const {resources} = this.props
    const {emojis, loveEmojiUrl} = resources
    return (
      <div className="bg-container">
        {reacted && (
          <div className="inner1">
            <img src={loveEmojiUrl} alt="love emoji" />
            <h1>Thank You!</h1>
            <p>
              we will use your feedback to improve our customer support
              performance
            </p>
          </div>
        )}
        {!reacted && (
          <div className="inner2">
            <div className="first">
              <h1>
                How satisfied are you with our customer support performance
              </h1>
            </div>
            <ul className="second">
              {emojis.map(eachItem => (
                <li key={eachItem.id}>
                  <img
                    onClick={this.changeReaction}
                    className="emoji"
                    src={eachItem.imageUrl}
                    alt={eachItem.name}
                  />
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    )
  }
}

export default Feedback
