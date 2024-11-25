import React, { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [products, setProducts] = useState([]);

  // Função para buscar os produtos da Fake Store API
  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then((res) => res.json())
      .then((data) => setProducts(data)) // Armazena os dados no estado
      .catch((error) => console.error('Erro ao carregar os produtos:', error));
  }, []); // O array vazio garante que a requisição seja feita apenas uma vez

  return (
    <div className="App">
      <h1>Lista de Produtos</h1>
      <div className="product-list">
        {products.map((product) => (
          <div className="product" key={product.id}>
            <img src={product.image} alt={product.title} />
            <h3>{product.title}</h3>
            <p>R$ {product.price.toFixed(2)}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;