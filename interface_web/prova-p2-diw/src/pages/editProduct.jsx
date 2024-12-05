import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

function EditProduct() {
    const { id } = useParams();
    const [product, setProduct] = useState(null);

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
            <h2>Editar Produto</h2>
            <form onSubmit={handleSubmit} >
                <input name="title" value={product.title} onChange={handleChange} required />
                <input name="price" value={product.price} onChange={handleChange} required />
                <textarea name="description" value={product.description} onChange={handleChange} required />
                <input name="image" value={product.image} onChange={handleChange} required />
                <input name="category" value={product.category} onChange={handleChange} required />
                <button type="submit">Salvar Alterações</button>
            </form>
        </div>
    );
}

export default EditProduct