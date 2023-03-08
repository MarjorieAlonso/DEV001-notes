/* eslint-disable react/no-array-index-key */
/* eslint-disable max-len */
/* eslint-disable no-undef */
/* eslint-disable react/button-has-type */
/* eslint-disable arrow-parens */
/* eslint-disable no-shadow */
/* eslint-disable no-unused-vars */
/* eslint-disable no-empty */
/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable jsx-a11y/label-has-associated-control */
import {
  React, useContext, useEffect, useState,
} from 'react';
import { useNavigate } from 'react-router';
import {
  collection,
  addDoc,
  getDoc,
  doc,
  getDocs,
  deleteDoc,
  setDoc,
} from 'firebase/firestore';
import { useAuth } from './context/authContext';
import './App.css';
import EmojiCard from './components/EmojiCard';
import { db } from './assets/firebase';
import listEmojis from './assets/emojis';
import EmojiContext from './context/emojiContext';

function Board() {
  const { user, logout, loading } = useAuth();
  const { listEmojisSelect } = useContext(EmojiContext);
  const navigate = useNavigate();
  const valorInicial = {
    texto: '',
  }
  const [usuario, setUsuario] = useState(valorInicial);
  const [lista, setLista] = useState([]);
  const [subId, setSubId] = useState('');
  let dataUser;
  if (loading === true) {
    return <h1>Loading</h1>
  } if (loading === false) {
    dataUser = user.uid;
  }
  const getLista = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, `nota${dataUser}`))
      const docs = [];
      querySnapshot.forEach((doc) => {
        docs.push({ ...doc.data(), id: doc.id })
      })
      setLista(docs)
    } catch (error) {
      // console.log(error)
    }
  }
  useEffect(() => {
    getLista()
  }, [])
  // funcion de editar
  const getOne = async (id) => {
    try {
      const docRef = doc(db, `nota${dataUser}`, id)
      const docSnap = await getDoc(docRef)
      setUsuario(docSnap.data())
    } catch (error) {
      // console.log(error)
    }
  }
  useEffect(() => {
    if (subId !== '') {
      getOne(subId)
    }
  }, [subId]);
  // funcion de borrar
  const deleteUser = async (id) => {
    await deleteDoc(doc(db, `nota${dataUser}`, id))
    getLista()
  }
  // funcion de cierre de sesion
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
  // capturar los valores del imput
  const capture = (e) => {
    const { name, value } = e.target;
    setUsuario({ ...usuario, [name]: value })
  }

  // guarda lo del textarea en la base de datos
  const saveEmotion = async (e) => {
    e.preventDefault();
    if (subId === '') {
      try {
        await (addDoc(collection(db, `nota${dataUser}`), {
          ...usuario,
        }))
      } catch (error) {
        // console.log(error)
      }
    } else {
      await setDoc(doc(db, `nota${dataUser}`, subId), {
        ...usuario,
      })
    }
    getLista()
    setUsuario({ ...valorInicial })
    setSubId('')
  }
  const [isListEmojiSelect, setListEmojisSelect] = useState(null);
  useEffect(() => {
    const list = listEmojis.map(emoji => emoji.emotion === listEmojisSelect.emotion)
    setListEmojisSelect(list.indexOf(true))
  }, [listEmojisSelect])
  return (
    <>
      <form id="formBoard" onSubmit={saveEmotion}>
        {email !== null ? <h3>Welcome {user.displayName || email }</h3> : <p>loading</p>}
        <p>Match your emotions to an emoji</p>
        <div className="emoticon">
          {listEmojis.map((emoji, i) => (
            isListEmojiSelect === i
              ? <EmojiCard key={i} imagePath={emoji.imagePath} emotion={emoji.emotion} isSelected />
              : <EmojiCard key={i} imagePath={emoji.imagePath} emotion={emoji.emotion} isSelected={false} />
          ))}
        </div>
        <br />
        <p>Describe how you feel...</p>
        <textarea name="texto" onChange={capture} value={usuario.texto} placeholder="I feel" />
        <div className="enviar">
          <button type="submit" id="guardar">{subId === '' ? 'Save' : 'Update'}</button>
        </div>
      </form>
      <div id="logout">
        <button type="button" onClick={handleLogout} id="cerrarSesion">Logout</button>
      </div>
      <div className="container">
        {
          lista.map(lest => (
            <div key={lest.id} className="notas">
              <p>{lest.texto} </p>
              <button className="btn-Delete" onClick={() => deleteUser(lest.id)}>Delete</button>
              <button className="btn-Edit" onClick={() => setSubId(lest.id)}> Edit</button>
            </div>
          ))
        }
      </div>
    </>
  )
}
export default Board;
