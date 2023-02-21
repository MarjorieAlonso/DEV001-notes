/* eslint-disable react/prop-types */
/* eslint-disable react/function-component-definition */
import React, { useState } from 'react';

const EmojiCard = ({ imagePath, emotion }) => {
  const [isSelected, setIsSelected] = useState(false);
  return (
  <div onClick={() => setIsSelected(lastState => !lastState)} className={isSelected ? 'emojiCard-selected' : 'emojiCard'}>
    <img src={imagePath} alt={emotion} />
    <h5>{emotion}</h5>
  </div>
  )
}
export default EmojiCard;
