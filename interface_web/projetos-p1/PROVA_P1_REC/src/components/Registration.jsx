import { useState } from 'react';

function Registration() {
    const [name, setName] = useState("");
    const [feedback, setFeedback] = useState("");

    function handleName(e) {
        setName(e.target.value);
    }

    function handleFeedback() {
        setFeedback(`Inscrito com sucesso! Bem-vindo(a), ${name}!`);
    }

    return (
        <>
            <h2 className="subscribe_title">Inscreva-se na Jornada Acadêmica</h2>
            <input
                type="text"
                value={name}
                onChange={handleName}
                placeholder="Digite seu nome"
            />
            <br />
            <button onClick={handleFeedback}>
                Inscrever-se
            </button>
            <p className="feedback">{feedback}</p>
        </>
    );
}

export default Registration;