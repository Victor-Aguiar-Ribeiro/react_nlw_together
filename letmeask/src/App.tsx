import { createContext, useState, useEffect } from 'react';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth'
import { auth } from './services/firebase' 

import { NewRoom } from './components/NewRoom';
import { SignIn } from './components/SignIn';
import { Home } from "./pages/Home";

type User = {
  id: string;
  name: string;
  avatarURL: string;
}

type AuthContextType = {
  user: User | undefined;
  signInWithGoogle: () => Promise<void>;
}

export const AuthContext = createContext( {} as AuthContextType)

export function App() {
  const [ user, setUser ] = useState<User>()

  useEffect( () => {
    auth.onAuthStateChanged( user => {
      if( user ){
        const { displayName, photoURL, uid } = user;
        if( !displayName || !photoURL){
          throw new Error(`Missing information from Google Account. (Existing Photo and Name are needed)`)
        }
        setUser({
          id: uid,
          name: displayName,
          avatarURL: photoURL
        })
      }
    })
  }, [])

  async function signInWithGoogle() {
    const provider = new GoogleAuthProvider();

    const result = await signInWithPopup( auth, provider )
    // Get Google access token. Can be used to access Google API
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential?.accessToken;
    // Get signed-in user info

    if( result.user ){
      const { displayName, photoURL, uid } = result.user;
      if( !displayName || !photoURL){
        throw new Error(`Missing information from Google Account. (Existing Photo and Name are needed)`)
      }
      setUser({
        id: uid,
        name: displayName,
        avatarURL: photoURL
      })
    }

      console.log( result );
    
  }

  return (
    <Router>
      <AuthContext.Provider value={{ user, signInWithGoogle }}>
        <div id="homeWrapper">
          <Home />
          <main>
            <Routes>
              <Route path="/room/create" element={<NewRoom />} />
              <Route path="/" element={<SignIn />} />
            </Routes>
          </main>
        </div>
      </AuthContext.Provider >
    </Router>
  );
}


