// Write your code here.

import './index.css'

const WinOrLoseCard = props => {
  const lossImage = 'https://assets.ccbp.in/frontend/react-js/lose-game-img.png'
  const wonImage = 'https://assets.ccbp.in/frontend/react-js/won-game-img.png'

  const {isWon, score, clickPlayAgain} = props
  const imageUrl = isWon ? wonImage : lossImage
  const gameStatus = isWon ? 'You Won' : 'You Lose'
  const scoreLabel = isWon ? 'Best Score' : 'Score'

  return (
    <div className="win-or-lose-card">
      <div className="game-details-container">
        <h1 className="game-status">{gameStatus}</h1>
        <p className="current-score-label">{scoreLabel}</p>
        <p className="current-score-value">{score}/12</p>
        <button
          type="button"
          className="play-again-button"
          onClick={clickPlayAgain}
        >
          Play Again
        </button>
      </div>
      <div className="image-container">
        <img src={imageUrl} alt="win or lose" className="win-or-lose-image" />
      </div>
    </div>
  )
}

export default WinOrLoseCard
