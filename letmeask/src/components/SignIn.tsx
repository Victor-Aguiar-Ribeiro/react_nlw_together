﻿import logoGoogle from '../assets/images/google-icon.svg'
import logo from '../assets/images/logo.svg'
import loginIcon from '../assets/images/login-icon.svg'
import { Button } from './Button'

export function SignIn() {
  return (
    <div id="signInWrapper">
          <img src={ logo } alt="Logo da Letmeask" />
          <Button className='btn-googleRed' >
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