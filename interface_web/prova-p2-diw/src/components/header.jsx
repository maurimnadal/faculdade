import React from "react";

function Header() {
    return (
        <header >
            <h1>Admin Store</h1>
            <nav>
                <a href="/">Home</a> | <a href="/products">Produtos</a> | <a href="/add-product">Adicionar Produtos</a>
            </nav>
        </header>
    );
};

export default Header