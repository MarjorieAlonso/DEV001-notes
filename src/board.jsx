/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable jsx-a11y/label-has-associated-control */
import { React } from 'react';
import { useNavigate } from 'react-router';
import { useAuth } from './context/authContext';
import './index.css';
import EmojiCard from './components/EmojiCard';

function Board() {
  const { user, logout, loading } = useAuth();
  const navigate = useNavigate();
  const handleLogout = async () => {
    await logout()
    navigate('/');
  }
  if (loading) return <h1>Loading</h1>
  return (
    <>
      <form>
        <h3>Welcome {user.email}</h3>
        <p>Match your emotions to an emoji</p>
        <div className="emoticon">
          <EmojiCard imagePath="https://em-content.zobj.net/source/microsoft-teams/337/smiling-face_263a-fe0f.png" emotion="Happy" />
          <EmojiCard imagePath="https://em-content.zobj.net/source/microsoft-teams/337/pouting-face_1f621.png" emotion="Angry" />
          <EmojiCard imagePath="https://em-content.zobj.net/source/noto-emoji-animations/344/disappointed-face_1f61e.gif" emotion="Sad" />
          <EmojiCard imagePath="https://em-content.zobj.net/source/microsoft-teams/337/grimacing-face_1f62c.png" emotion="Stressed" />
          <EmojiCard imagePath="https://em-content.zobj.net/source/microsoft-teams/337/smiling-face-with-heart-eyes_1f60d.png" emotion="In Love" />
          <EmojiCard imagePath="https://em-content.zobj.net/source/microsoft-teams/337/neutral-face_1f610.png" emotion="Neutral" />
          <EmojiCard imagePath="https://em-content.zobj.net/source/microsoft-teams/337/anxious-face-with-sweat_1f630.png" emotion="Anxious" />
          <EmojiCard imagePath="https://em-content.zobj.net/source/microsoft-teams/337/nauseated-face_1f922.png" emotion="Sick" />
        </div>
        <br />
        <p>Describe how you feel...</p>
        <textarea />
        <div className="enviar">
          <button type="submit" id="guardar">Enviar</button>
        </div>
      </form>
      <div id="logout">
        <button type="button" onClick={handleLogout} id="cerrarSesion">Logout</button>
      </div>
    </>
  )
}
export default Board;
