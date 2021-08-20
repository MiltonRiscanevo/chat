import React,{useState,useEffect} from "react";
import {BrowserRouter as Router} from 'react-router-dom'
import CssBaseline from '@material-ui/core/CssBaseline';  

import Header from './components/layout/Header'
import User from './components/User'
import Routes from './Routes'
import firebase from 'firebase/app'
import 'firebase/database'
import 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyC66bRSx7MusZOYApXAi1nXHZdo5K0J8O0",
  authDomain: "addmessages-1f5ff.firebaseapp.com",
  projectId: "addmessages-1f5ff",
  storageBucket: "addmessages-1f5ff.appspot.com",
  messagingSenderId: "1070316700899",
  appId: "1:1070316700899:web:de64d0d0913464100431d6",
  measurementId: "G-XJWPT8DM1R"
}; 
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

function App() {
  const [user, setUser] = useState(null)
  const onLogout =()=>{
    setUser(null)
  }
  useEffect(() => {
    firebase.auth().onAuthStateChanged(res => {
      if(res){
        firebase.database().ref('/users/${res.uid}')
        .once('value')
        .then(snapshot =>{
          setUser(snapshot.val())
        })
      }
    });
  }, [])
  
  return (
    <Router>
      <CssBaseline/>
      <Routes/>
      <Header>
        {user&&<User user={user} onLogout={onLogout}/>}
        
      </Header>
      
    </Router>
  );
}

export default App;
