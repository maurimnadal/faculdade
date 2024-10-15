import './HomePage.css'

function HomePage() {
    return (
      <>
        <div className='div'>
            <h1>Escola ABC</h1>
            <p>Bem-vindo ao sistema escolar da Escola ABC</p>
            <button onClick={() => alert("Bem vindo ao sistema de gestão escolar")}>
                Acessar Sistema
            </button>
        </div>
      </>
    )
  }
  
  export default HomePage