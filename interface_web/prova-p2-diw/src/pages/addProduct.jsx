import React, { useState } from 'react';
import axios from 'axios';
import Header from '../components/header';
import Footer from '../components/footer';

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
        <div >
            < Header />
            <main>
                <h2>Insira as informações do produto</h2>
                <form onSubmit={handleSubmit} >
                    <input className='form_item_add' name="title" placeholder="Título" value={product.title} onChange={handleChange} required />
                    <input className='form_item_add' name="price" placeholder="Preço" value={product.price} onChange={handleChange} required />
                    <textarea className='form_item_add' name="description" placeholder="Descrição" value={product.description} onChange={handleChange} required />
                    <input className='form_item_add' name="image" placeholder="URL da Imagem" value={product.image} onChange={handleChange} required />
                    <input className='form_item_add' name="category" placeholder="Categoria" value={product.category} onChange={handleChange} required />
                    <button type="submit">Adicionar Produto</button>
                </form>
            </main>
            < Footer />
        </div>
    );
}

export default AddProduct