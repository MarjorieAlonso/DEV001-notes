/* eslint-disable arrow-parens */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/prop-types */
/* eslint-disable react/function-component-definition */
import React, { useContext } from 'react';
import EmojiContext from '../context/emojiContext';

const EmojiCard = ({ imagePath, emotion, isSelected }) => {
  const { setListEmojisSelect } = useContext(EmojiContext);
  const handleEmoji = (emoji) => {
    setListEmojisSelect(emoji)
  }
  const claseEmoji = isSelected ? 'emojiCard-selected' : 'emojiCard'
  return (
    <div className={claseEmoji} onClick={() => handleEmoji({ imagePath, emotion })}>
      <img src={imagePath} alt={emotion} />
      <h5>{emotion}</h5>
    </div>
  )
}
export default EmojiCard;
