import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Header from '../components/header';
import Footer from '../components/footer';


function ProductDetails() {
    const { id } = useParams();
    const [product, setProduct] = useState("");
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true);
        axios.get(`https://fakestoreapi.com/products/${id}`)
            .then(response => setProduct(response.data))
            .finally(() => setLoading(false));
    }, [id]);

    if (loading) {
        return (
            <div className='loading_div'>
                <p className='loading_text'>Carregando...</p>
            </div>
        );
    }

    return (
        <div>
            <Header />
            <main>
                <h2 className='product_info'>{product.title}</h2>
                <img className='image_product' src={product.image} alt={product.title} />
                <table className="product_table">
                    <tbody>
                        <tr>
                            <th>Descrição</th>
                            <td>{product.description}</td>
                        </tr>
                        <tr>
                            <th>Categoria</th>
                            <td>{product.category}</td>
                        </tr>
                        <tr>
                            <th>Preço</th>
                            <td>R$ {product.price}</td>
                        </tr>
                    </tbody>
                </table>
            </main>
            < Footer />
        </div>
    );
};

export default ProductDetails;