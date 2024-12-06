import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Header from '../components/header';
import Footer from '../components/footer';

function EditProduct() {
    const { id } = useParams();
    const [product, setProduct] = useState("");

    useEffect(() => {
        axios.get(`https://fakestoreapi.com/products/${id}`)
            .then(response => setProduct(response.data))
    }, [id]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setProduct({ ...product, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.put(`https://fakestoreapi.com/products/${id}`, product)
            .then(response => {
                alert('Produto atualizado com sucesso!');
                console.log(response.data);
            })
    };

    return (
        <div>
            < Header />
            <main>
            <h2>Editar Produto</h2>
            <form onSubmit={handleSubmit} >
                <label>Nome</label>
                <input className="form_item_edit" name="title" value={product.title} onChange={handleChange} required /><br />
                <label htmlFor="">Preço</label>
                <input className="form_item_edit" name="price" value={product.price} onChange={handleChange} required /><br />
                <label htmlFor="">Descrição</label>
                <textarea className="form_item_edit" name="description" value={product.description} onChange={handleChange} required /><br />
                <label htmlFor="">URL da imagem</label>
                <input className="form_item_edit" name="image" value={product.image} onChange={handleChange} required /><br />
                <label htmlFor="">Categoria</label>
                <input className="form_item_edit" name="category" value={product.category} onChange={handleChange} required /><br />
                <button className="botao" type="submit">Salvar Alterações</button>
            </form>
            </main>
            < Footer />
        </div>
    );
}

export default EditProduct