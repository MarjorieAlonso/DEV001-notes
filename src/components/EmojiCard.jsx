/* eslint-disable arrow-parens */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/prop-types */
/* eslint-disable react/function-component-definition */
import React, { createContext, useState } from 'react';




const EmojiCard = ({ imagePath, emotion }) => {
 /*  const defaultGlobalState={
    select:'true', 
    notSelect:'false',  
    }
    const handleCurrentChange= ()=>{
      defaultGlobalState()
    } */
  const [isSelected, setIsSelected] = useState(false);

   /*  const globalStateContext= createContext(defaultGlobalState)
    const globalStateProvider =({children})=>{
      
    } */
  return (
    <div className="container" >
      <div onClick={() => setIsSelected(lastState => !lastState)} className={isSelected ? 'emojiCard-selected' : 'emojiCard'}>
        <img src={imagePath} alt={emotion} />
        <h5>{emotion}</h5>
      </div>
    </div>
  )
}
export default EmojiCard;

