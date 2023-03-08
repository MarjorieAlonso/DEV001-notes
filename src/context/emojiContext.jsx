/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-no-constructed-context-values */
/* eslint-disable react/react-in-jsx-scope */
import { createContext, useState } from 'react';

const EmojiContext = createContext();

export function EmojiContextProvider({ children }) {
  const [listEmojisSelect, setListEmojisSelect] = useState([]);
  return (
    <EmojiContext.Provider value={{ listEmojisSelect, setListEmojisSelect }}>
      {children}
    </EmojiContext.Provider>
  )
}

export default EmojiContext;
