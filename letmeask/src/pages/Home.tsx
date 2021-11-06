import illustrationHome from '../assets/images/illustration.svg'
import logoGoogle from '../assets/images/google-icon.svg'
import logo from '../assets/images/logo.svg'
import loginIcon from '../assets/images/login-icon.svg'

export function Home(){
  return(
    <div id="homeWrapper">
      <aside className="bgAside">
        <img src={ illustrationHome } alt="Imagem de fundo representando perguntas e respostas" />
        <h1>Toda pergunta tem uma resposta.</h1>
        <p>Aprenda e compartilhe conhecimento com outras pessoas</p>
      </aside>

      <main>
        <div id="signInWrapper">
          <img src={ logo } alt="Logo da Letmeask" />
          <button className="btn btn-googleRed">
            <img src={ logoGoogle } alt="Crie sua sala com Google" />
            Crie sua sala com o Google
          </button>
          <p className="separator">ou entre em uma sala</p>
          <form action="">
            <label className="srOnly" htmlFor="">Digite o código da sala</label>
            <input className="outlined" type="number" placeholder="Digite o código da sala" />
            <button type="submit" className="btn btn-primary">
              <img src={ loginIcon } alt="Entrar na sala" />
              Entrar na sala
            </button>
          </form>
        </div>
      </main>

    </div>
  )
}