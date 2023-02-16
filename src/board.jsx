import React from 'react';
import './index.css';


const Board =()=>{
    return (
        <><form>
            <h1>MOOD TRACKER</h1>

            <div className="emoticon">
                <label>
                <input type="radio" className='emoji' id="emoji1" />Happy 
                <img src='https://em-content.zobj.net/source/microsoft-teams/337/smiling-face_263a-fe0f.png'/>
                </label>
                <label >
                <input type="radio" className='emoji'id="emoji2" />Angry
                <img src='https://em-content.zobj.net/source/microsoft-teams/337/pouting-face_1f621.png'/>
                </label>
                <label >
                <input type="radio" className='emoji'id="emoji3" />Sad 
                <img src='https://em-content.zobj.net/source/noto-emoji-animations/344/disappointed-face_1f61e.gif'/>
                </label>
                <label >
                <input type="radio" className='emoji'id="emoji4" />Stressed
                <img src='https://em-content.zobj.net/source/microsoft-teams/337/grimacing-face_1f62c.png'/>
                </label>
                <br/>
                <label >
                <input type="radio"className='emoji' id="emoji5" />In love
                <img  src='https://em-content.zobj.net/source/microsoft-teams/337/smiling-face-with-heart-eyes_1f60d.png'/>
                </label>
                <label >
                <input type="radio"className='emoji' id="emoji6" />Neutral
                <img src='https://em-content.zobj.net/source/microsoft-teams/337/neutral-face_1f610.png'/>
                </label>
                <label >
                <input type="radio"className='emoji'id="emoji7" />Anxious</label>
                <img src='https://em-content.zobj.net/source/microsoft-teams/337/anxious-face-with-sweat_1f630.png'/>
                <label >
                <input type="radio" className='emoji'id="emoji8" />Sick
                <img src='https://em-content.zobj.net/source/microsoft-teams/337/nauseated-face_1f922.png'/>
                </label>
                </div>
            <textarea />
            <button type="submit" id="guardar">Enviar</button>

        </form><div id="logout">
                <button type="button" id="cerrarSesion">Logout</button>
            </div></>
    )

}
export default Board; 