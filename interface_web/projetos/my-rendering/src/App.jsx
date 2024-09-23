
function App() {
  let userType = "Editor"
  return (
    <div>
      {userType === "Admin" ? (
        <div>
          <h1>Bem-vindo, Admin</h1>
          <button>Gerenciar Usuários</button>
        </div>
      ) : userType === "Editor" ? (
        <div>
          <h1>Bem-vindo, Editor</h1>
          <button>Gerenciar Editores</button>
        </div>
      ) : (
        <div>
          <h1>Bem vindo, Visitante</h1>
          <button>Fazer login</button>
        </div>
      )
      }
    </div>
    
  )
}


export default App;
