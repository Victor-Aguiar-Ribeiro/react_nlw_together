﻿import illustrationHome from '../assets/images/illustration.svg'
import logoGoogle from '../assets/images/google-icon.svg'
import logo from '../assets/images/logo.svg'
import loginIcon from '../assets/images/login-icon.svg'

export function Home(){
  return(
    <div id="homeWrapper">
      <aside>
        <img src={ illustrationHome } alt="Imagem de fundo representando perguntas e respostas" />
        <h1>Toda pergunta tem uma resposta.</h1>
        <p>
          Aprenda e compartilhe conhecimento<br/>
          com outras pessoas
        </p>
      </aside>

      <div className="signInWrapper">
        <img src={ logo } alt="Logo da Letmeask" />
        <button className="btn btn-googleRed">
          <img src={ logoGoogle } alt="Crie sua sala com Google" />
          Crie sua sala com o Google
        </button>
        <p>ou entre em uma sala</p>
        <form action="">
          <label htmlFor="">Digite o código da sala</label>
          <input type="number" placeholder="Digite o código da sala" />
          <button type="submit" className="btn btn-primary">
            <img src={ loginIcon } alt="Entrar na sala" />
            Entrar na sala
          </button>
        </form>
      </div>

    </div>
  )
}