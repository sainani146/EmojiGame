/* 
Quick Tip 

- Use the below function in the EmojiGame Component to shuffle the emojisList every time when an emoji is clicked.

const shuffledEmojisList = () => {
  const {emojisList} = this.props
  return emojisList.sort(() => Math.random() - 0.5)
}

*/
// Write your code here.

import {Component} from 'react'
import './index.css'
import Emojicard from '../EmojiCard'
import Nav from '../NavBar'
import Wl from '../WinOrLoseCard'

export default class EmojiGame extends Component {
  state = {sc: 0, ts: 0, em: [], wl: true}

  shuffledEmojisList = () => {
    const {emojisList} = this.props
    return emojisList.sort(() => Math.random() - 0.5)
  }

  playAgain = () => {
    this.setState({wl: true})

    this.setState({sc: 0})

    this.setState({em: []})
  }

  getEmoji = id => {
    console.log(id)
    const {sc, ts, em} = this.state
    const emojiClicked = em.includes(id)

    let getscore = sc

    if (emojiClicked) {
      this.setState({wl: false})
      if (getscore > ts) {
        this.setState({ts: getscore})
      }
    } else {
      this.setState(prevState => ({
        em: [...prevState.em, id],
      }))
      getscore += 1
      this.setState({sc: getscore})

      if (getscore === 12) {
        this.setState({ts: getscore})
        this.setState({wl: false})
        console.log('win')
      }
    }
  }

  render() {
    const emojis = this.shuffledEmojisList()
    const {sc, ts, wl} = this.state
    // const {emojisList} = this.props
    // const emojis = emojisList

    let gamePreview
    if (wl) {
      gamePreview = (
        <ul className="emoji-container">
          {emojis.map(each => (
            <Emojicard key={each.id} item={each} getEmoji={this.getEmoji} />
          ))}
        </ul>
      )
    } else {
      gamePreview = <Wl sc={sc} ts={ts} wl={wl} playAgain={this.playAgain} />
    }

    return (
      <div>
        <Nav sc={sc} ts={ts} wl={wl} />
        <div className="container">
          <h1>A MEMORY TEST</h1>
          <p>Remember a Emoji that you have Clicked...!</p>
          <div className="emojisection">{gamePreview}</div>
        </div>
        <div className="footer">
          <p>CLICK AN EMOJI ONLY ONCE AND SCORE 12 YOU WILL WIN THE GAME </p>
          <p>
            Designed By: &#10645; <p className="skted">SK TED</p>
          </p>
        </div>
      </div>
    )
  }
}
