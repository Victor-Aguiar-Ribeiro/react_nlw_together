import illustrationHome from '../assets/images/illustration.svg'

export function Home(){
  return(
    // <div id="homeWrapper">
      <aside className="bgAside">
        <img src={ illustrationHome } alt="Imagem de fundo representando perguntas e respostas" />
        <h1>Toda pergunta tem uma resposta.</h1>
        <p>Aprenda e compartilhe conhecimento com outras pessoas</p>
      </aside>
    // </div>
  )
}