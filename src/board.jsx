import React from 'react';
import './index.css';

const Board =()=>{
    return (
        <form>
            <div id="emoticon">
            <label>
            <input type="radio" id="emoji1"/>Happy
            </label>
            <input type="radio" id="emoji2"/>Angry
            <input type="radio" id="emoji3"/>Sad
            <input type="radio" id="emoji4"/>Stressed
            <br/>
            <input type="radio" id="emoji5"/>In love 
            <input type="radio" id="emoji6"/>Excited
            <input type="radio" id="emoji7"/>Confused
            <input type="radio" id="emoji8"/>Sick
            
            </div>
            <textarea />
        </form>
    )

}
export default Board; 