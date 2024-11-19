import { useState, useEffect } from "react";
import axios from "axios";
function App() {
  const [usuarios, setUsuarios] = useState([]);
  const [loading, setLoading] = useState(true); // Estado de carregamento
  const [error, setError] = useState(null);
  const [timeoutError, setTimeoutError] = useState(false); // Estado para erro de timeout
  useEffect(() => {
    const fetchUsuarios = async () => {
      try {
        const response = await axios.get(
          "https://jsonplaceholder.typicode.com/users",
          {
            timeout: 500, // Tempo limite de 5000 ms (5 segundos)
          }
        );
        setUsuarios(response.data);
      } catch (error) {
        if (error.code === "ECONNABORTED") {
          // Erro de timeout
          setTimeoutError(true);
        } else {
          // Outros erros
          console.error("Erro ao carregar usuários:", error);
          setError("Erro ao carregar usuários.");
        }
      } finally {
        setLoading(false); // Atualiza o estado de carregamento para false
      }
    };
    fetchUsuarios();
  }, []);
  // Mensagem de carregamento
  if (loading) return <p>Carregando...</p>;
  // Mensagem de erro de timeout
  if (timeoutError)
    return <p>O carregamento dos usuários demorou demais. Tente novamente.</p>;
  // Mensagem de erro genérico
  if (error) return <p>{error}</p>;
  // Verifica se não há usuários disponíveis
  if (usuarios.length === 0) return <p>Nenhum usuário encontrado.</p>;
  return (
    <div>
      <h1>Lista de Usuários</h1>
      <ul>
        {usuarios.map((usuario) => (
          <li key={usuario.id}>{usuario.name}</li>
        ))}
      </ul>
    </div>
  );
}
export default App;
