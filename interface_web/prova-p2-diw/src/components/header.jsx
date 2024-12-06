import React from "react";

function Header() {
    return (
        <header >
            <h1>Admin Store</h1>
            <nav>
                <a className="link_header" href="/">Home</a> | <a className="link_header" href="/products">Produtos</a> | <a className="link_header" href="/add-product">Adicionar Produtos</a>
            </nav>
        </header>
    );
};

export default Header