﻿import logo from '../assets/images/logo.svg'
import loginIcon from '../assets/images/login-icon.svg'
import { Button } from './Button'

export function NewRoom() {
  return (
    <div id="signInWrapper">
          <img src={ logo } alt="Logo da Letmeask" />
          <h1>Crie uma nova sala</h1>
          <form action="">
            <label className="srOnly" htmlFor="">Nome da Sala</label>
            <input className="outlined" type="number" placeholder="Nome da Sala" />
            <Button type="submit" className="btn-primary">
              Criar Sala
            </Button>
          </form>
          <p className="inputBottom">
            Quer entrar em uma sala já existente? <a href="/">Clique aqui!</a> 
          </p>
    </div>
  )
}