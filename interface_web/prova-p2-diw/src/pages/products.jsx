import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Header from '../components/header';
import Footer from '../components/footer';

function Products() {
    const [products, setProducts] = useState([]);

    const handleDelete = (id) => {
        if (window.confirm('Tem certeza que deseja excluir este produto?')) {
          axios.delete(`https://fakestoreapi.com/products/${id}`)
            .then(() => {
              alert('Produto excluído com sucesso!');
              setProducts(products.filter(product => product.id !== id));
            })
        }
      };

    useEffect(() => {
        axios.get('https://fakestoreapi.com/products')
            .then(response => setProducts(response.data))
    }, []);


    return (
        <div className='background_products'>
            < Header />
            <div>
                {products.map(product => (
                    <div key={product.id} className='product'>
                        <img src={product.image} alt={product.title} style={{ width: '100px', height: '100px' }} />
                        <h3>{product.title}</h3>
                        <p>R$ {product.price}</p>
                        <button>
                            <Link className='botao' to={`/products/${product.id}`}>Ver detalhes</Link>
                        </button>
                        <button>
                            <Link className='botao' to={`/products/${product.id}/edit`}>Editar</Link>
                        </button>
                        <button onClick={() => handleDelete(product.id)}>Excluir</button>
                    </div>
                ))}
            </div>
            <Footer />
        </div>
    );
};

export default Products;