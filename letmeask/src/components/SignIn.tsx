import { useNavigate } from 'react-router-dom'

import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth'
import { auth } from '../services/firebase' 

import logoGoogle from '../assets/images/google-icon.svg'
import logo from '../assets/images/logo.svg'
import loginIcon from '../assets/images/login-icon.svg'
import { Button } from './Button'

export function SignIn() {
  const navigate = useNavigate();

  async function handleCreateRoom() {
    const provider = new GoogleAuthProvider();

    await signInWithPopup( auth, provider ).then( result => {
      // Get Google access token. Can be used to access Google API
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential?.accessToken;
      // Get signed-in user info
      const user = result.user;

      console.log( result );
    })

    navigate('/room/create');
  }

  return (
    <div id="signInWrapper">
          <img src={ logo } alt="Logo da Letmeask" />
          <Button onClick={ handleCreateRoom } className='btn-googleRed' >
            <img src={ logoGoogle } alt="Crie sua sala com Google" />
            Crie sua sala com o Google
          </Button>
          <p className="separator">ou entre em uma sala</p>
          <form action="">
            <label className="srOnly" htmlFor="">Digite o código da sala</label>
            <input className="outlined" type="number" placeholder="Digite o código da sala" />
            <Button type="submit" className="btn-primary">
              <img src={ loginIcon } alt="Entrar na sala" />
              Entrar na sala
            </Button>
          </form>
    </div>
  )
}