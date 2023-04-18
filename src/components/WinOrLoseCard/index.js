// Write your code here.
import './index.css'

const Wl = props => {
  const {sc, wl, playAgain} = props
  const onPlayAgain = () => {
    playAgain(wl, sc)
  }

  if (sc === 12) {
    return (
      <div className="wl-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/won-game-img.png"
          alt="win or lose"
        />
        <div className="results-section">
          <h1 className="score-result">You Won</h1>
          <p className="score">Best Score</p>
          <p className="score-val">{sc}/12</p>
          <button type="button" onClick={onPlayAgain}>
            Play Again
          </button>
        </div>
      </div>
    )
  }
  return (
    <div className="wl-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/lose-game-img.png"
        alt="win or lose"
      />
      <div className="results-section">
        <h1 className="score-result">You Lose</h1>
        <p className="score">Score</p>
        <p className="score-val">{sc}/12</p>
        <button type="button" onClick={onPlayAgain}>
          Play Again
        </button>
      </div>
    </div>
  )
}

export default Wl
