import { GoogleAuthProvider, signInWithPopup } from "@firebase/auth"
import { createContext, ReactNode, useEffect, useState } from "react"
import { auth } from "../services/firebase"

type User = {
  id: string;
  name: string;
  avatarURL: string;
}

type AuthContextType = {
  user: User | undefined;
  signInWithGoogle: () => Promise<void>;
}

type AuthContextProviderProps = {
  children: ReactNode;
}

export const AuthContext = createContext( {} as AuthContextType)

export function AuthContextProvider(props: AuthContextProviderProps) {
  const [ user, setUser ] = useState<User>()

  useEffect( () => {
    const unsubscribe = auth.onAuthStateChanged( user => {
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
    return () => {
      unsubscribe();
    }
  }, [])

  async function signInWithGoogle() {
    const provider = new GoogleAuthProvider();

    const result = await signInWithPopup( auth, provider )
    // Get Google access token. Can be used to access Google API
    // const credential = GoogleAuthProvider.credentialFromResult(result);
    // const token = credential?.accessToken;
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
    <AuthContext.Provider value={{ user, signInWithGoogle }}>
      { props.children }
    </AuthContext.Provider>
  )
}