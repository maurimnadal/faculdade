import React, { useState } from 'react';
import axios from 'axios';

function AddProduct() {
    const [product, setProduct] = useState({
        title: '',
        price: '',
        description: '',
        image: '',
        category: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setProduct({ ...product, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('https://fakestoreapi.com/products', product)
            .then(response => {
                alert('Produto adicionado com sucesso!');
                console.log(response.data);
            })
    };

    return (
        <div>
            <h2>Adicionar Produto</h2>
            <form onSubmit={handleSubmit} >
                <input name="title" placeholder="Título" value={product.title} onChange={handleChange} required />
                <input name="price" placeholder="Preço" value={product.price} onChange={handleChange} required />
                <textarea name="description" placeholder="Descrição" value={product.description} onChange={handleChange} required />
                <input name="image" placeholder="URL da Imagem" value={product.image} onChange={handleChange} required />
                <input name="category" placeholder="Categoria" value={product.category} onChange={handleChange} required />
                <button type="submit">Adicionar Produto</button>
            </form>
        </div>
    );
}

export default AddProduct