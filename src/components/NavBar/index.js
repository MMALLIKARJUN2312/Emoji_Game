// Write your code here.

import './index.css'

const NavBar = props => {
  const {isGameInProgress, currentScore, topScore} = props

  return (
    <nav className="navbar-container">
      <div className="title-with-score-container">
        <div className="logo-and-title-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png"
            alt="emoji logo"
            className="emoji-game-logo"
          />
          <h1 className="title">Emoji Game</h1>
        </div>
        {isGameInProgress && (
          <div className="score-and-topscore-container">
            <p className="score">Score: {currentScore}</p>
            <p className="topscore">Top Score: {topScore}</p>
          </div>
        )}
      </div>
    </nav>
  )
}

export default NavBar
