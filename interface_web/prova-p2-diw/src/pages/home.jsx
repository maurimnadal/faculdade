import React from 'react';
import Header from '../components/header';
import Footer from '../components/footer';

function Home() {
    return (
        <>
            <Header />
            <main>
                <h2>Bem-vindo à Admin Store!</h2>
                <p>Gerencie seus produtos de maneira fácil e prática.</p>
            </main>
            <Footer />
        </>
    );
};

export default Home;

