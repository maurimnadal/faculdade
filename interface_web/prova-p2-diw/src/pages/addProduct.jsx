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
                    <input className='add_product_form_item' name="title" placeholder="Título" value={product.title} onChange={handleChange} required /><br />
                    <input className='add_product_form_item' name="price" placeholder="Preço" value={product.price} onChange={handleChange} required /><br />
                    <textarea className='add_product_form_item' name="description" placeholder="Descrição" value={product.description} onChange={handleChange} required /><br />
                    <input className='add_product_form_item' name="image" placeholder="URL da Imagem" value={product.image} onChange={handleChange} required /><br />
                    <input className='add_product_form_item' name="category" placeholder="Categoria" value={product.category} onChange={handleChange} required /><br />
                    <button className="botao" type="submit">Adicionar Produto</button>
                </form>
            </main>
            < Footer />
        </div>
    );
}

export default AddProduct