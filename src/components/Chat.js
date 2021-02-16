import React, { useRef, useState } from 'react';
import ReactDOM from 'react-dom'
import App from '../App.js'
import firebaseConfig from "../config";

import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import 'firebase/analytics';


import { useAuthState } from 'react-firebase-hooks/auth';
import { useCollectionData } from 'react-firebase-hooks/firestore';
import Home from './Home.js';


const auth = firebase.auth();
const firestore = firebase.firestore();
const analytics = firebase.analytics();



function Chat() {

    const [user] = useAuthState(auth);
  
    return (
        
          user ? <ChatRoom /> : <Home />

    );
  }
  

function ChatRoom() {
    const dummy = useRef();
    const messagesRef = firestore.collection('messages');
    const query = messagesRef.orderBy('createdAt').limit(8);
    const [messages] = useCollectionData(query, { idField: 'id' });
    const [formValue, setFormValue] = useState();

  
    const sendMessage = async (e) => {
      e.preventDefault();
      const { uid, photoURL } = auth.currentUser;
  


      await messagesRef.add({
        name: auth.currentUser.uid,
        text: formValue,
        createdAt: firebase.firestore.FieldValue.serverTimestamp(),
        uid: 1,
        photoURL
      })
      
      setFormValue('');
      dummy.current.scrollIntoView({ behavior: 'smooth' });

    }

    return (<>
      <main>
  
        {messages && messages.map(msg => <ChatMessage key={msg.id} message={msg} />)}
  
        <span ref={dummy}></span>
  
      </main>
  
      <form onSubmit={sendMessage}>
  
        <input value={formValue} onChange={(e) => setFormValue(e.target.value)} placeholder="say something nice" />
  
        <button type="submit" disabled={!formValue}>Send</button>
  
      </form>
    </>)
  }
  
  function ChatMessage(props) {
    const { text, uid, photoURL } = props.message;
  
    const messageClass = uid === auth.currentUser.uid ? 'sent' : 'received';
  
    return (<>
      <div className={`message ${messageClass}`}>
        <p>{auth.currentUser.email}</p>
        <p>{text}</p>
      </div>
    </>)
  }
  
  
  export default Chat