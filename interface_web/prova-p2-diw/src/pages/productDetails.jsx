import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

function ProductDetails() {
    const { id } = useParams();
    const [product, setProduct] = useState(null);

    useEffect(() => {
        axios.get(`https://fakestoreapi.com/products/${id}`)
            .then(response => setProduct(response.data))
    }, [id]);

    return (
        <div>
            <h2>{product.title}</h2>
            <img src={product.image} alt={product.title} />
            <p>Descrição: {product.description}</p>
            <p>Categoria: {product.category}</p>
            <p>Preço: R$ {product.price}</p>
        </div>
    );
};

export default ProductDetails;