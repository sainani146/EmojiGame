// Write your code here.
import './index.css'

const Emojicard = props => {
  const {item, getEmoji} = props
  const {id, emojiName, emojiUrl} = item

  const onEmoji = () => {
    getEmoji(id)
  }
  return (
    <li>
      <button className="emojicard emoj-btn" type="button" onClick={onEmoji}>
        <img src={emojiUrl} alt={emojiName} />
      </button>
    </li>
  )
}

export default Emojicard
