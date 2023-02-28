/* eslint-disable no-empty */
/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable jsx-a11y/label-has-associated-control */
import { React, useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import { useAuth } from './context/authContext';
import './index.css';
import EmojiCard from './components/EmojiCard';
import {collection,addDoc,getDoc,doc,getDocs,deleteDoc,setDoc}from'firebase/firestore'
import { db } from './assets/firebase';

function Board() {
  const { user, logout, loading } = useAuth();
  const navigate = useNavigate();
  const valorInicial = {
    texto: '',
  }
  const [usuario, setUsuario] = useState(valorInicial);
  const [lista, setLista]=useState([]);
  useEffect(()=>{
const getLista= async()=>{
  try { 
    const querySnapshot= await getDocs(collection(db,'nota'))
    const docs=[];
    querySnapshot.forEach((doc)=>{
      docs.push({...doc.data(), id:doc.id})
    })
    setLista(docs)
    
  } catch (error) {
    console.log(error)
  }
}
getLista()
  },[])
  const handleLogout = async () => {
    try {
      await logout()
      navigate('/');
    } catch (error) {
    }
  }
  if (loading) return <h1>Loading</h1>
  let email;
  if (user !== null) {
    email = user.email
  } else (email = null)

  const capture = (e) => {
    const { name, value } = e.target;
    setUsuario({ ...usuario, [name]: value })
  }
  const saveEmotion = async (e) => {
    e.preventDefault();
   try {
    await(addDoc(collection(db,'nota'),{
      ...usuario
    }))
   } catch (error) {
    console.log(error)
   }
    setUsuario({ ...valorInicial })
  }
  return (
    <>
      <form onSubmit={saveEmotion}>
        {email !== null ? <h3>Welcome {user.displayName || email }</h3> : <p>loading</p>}
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
        <textarea name="texto" onChange={capture} value={usuario.texto} />
        <div className="enviar">
          <button type="submit" id="guardar">Enviar</button>
        </div>
      </form>
      <div id="logout">
        <button type="button" onClick={handleLogout} id="cerrarSesion">Logout</button>
      </div>
      <div className='container'>
        {
          lista.map(lest=>(
            <div key={lest.id}>  
               <p>I felt:{lest.texto} </p>
               <button className='btn-Delete'>Delete</button>
               <button className='btn-Edit'> Edit</button>
            </div>
          ))
        }
      </div>
    </>
  )
}
export default Board;
