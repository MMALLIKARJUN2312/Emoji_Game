// Write your code here.

import './index.css'

const EmojiCard = props => {
  const {emojiCardDetails, clickEmojiCard} = props
  const {id, emojiName, emojiUrl} = emojiCardDetails

  const onClickEmoji = () => {
    clickEmojiCard(id)
  }

  return (
    <li className="emoji-item">
      <button type="button" className="emoji-button" onClick={onClickEmoji}>
        <img src={emojiUrl} alt={emojiName} className="emoji-image" />
      </button>
    </li>
  )
}

export default EmojiCard
