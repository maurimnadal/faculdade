import React from 'react';

function EventList({ palestras }) {
    return (
        <div>
            <h2 className="palestra_title">Lista de Palestras</h2>
            <ul>
                {palestras.map((palestra, index) => (
                    <li key={index} className="palestra_list">
                        <h3>{palestra.titulo}</h3>
                        <p><strong>Data:</strong> {palestra.data}</p>
                        <p><strong>Horário:</strong> {palestra.horario}</p>
                        <p><strong>Local:</strong> {palestra.local}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default EventList;