// Write your code here.
import './index.css'

const Nav = props => {
  const {sc, ts, wl} = props

  if (wl) {
    return (
      <nav className="nav-bar">
        <div className="nav-logo-section">
          <img
            className="nav-img"
            src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png"
            alt="emoji logo"
          />
          <h1>Emoji Game</h1>
        </div>
        <div className="nav-score-section">
          <p className="score-p">
            Score: <div className="br">.</div>{' '}
            <span className="points">{sc}</span>
          </p>
          <p className="score-p">
            Top Score: <div className="br">.</div>{' '}
            <span className="points">{ts}</span>
          </p>
        </div>
      </nav>
    )
  }
  return (
    <nav className="nav-bar">
      <div className="nav-logo-section">
        <img
          className="nav-img"
          src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png"
          alt="emoji logo"
        />
        <h1>Emoji Game</h1>
      </div>
    </nav>
  )
}
export default Nav
