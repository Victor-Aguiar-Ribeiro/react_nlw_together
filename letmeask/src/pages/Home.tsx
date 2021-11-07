import illustrationHome from '../assets/images/illustration.svg'
import { NewRoom } from '../components/NewRoom'
import { SignIn } from '../components/SignIn'


export function Home(){
  return(
    <div id="homeWrapper">
      <aside className="bgAside">
        <img src={ illustrationHome } alt="Imagem de fundo representando perguntas e respostas" />
        <h1>Toda pergunta tem uma resposta.</h1>
        <p>Aprenda e compartilhe conhecimento com outras pessoas</p>
      </aside>

      <main>
        <SignIn />
        {/* <NewRoom /> */}
      </main>

    </div>
  )
}