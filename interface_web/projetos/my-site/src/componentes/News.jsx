// Componente News
function News({title, noticias}) {
    return (
        <section>
            <h2>{title}</h2>
            <ul>
            {noticias.map((noticia, index) => (
                <li key={index}>{noticia}</li>
            ))}
            </ul>
        </section>
    );
}

export default News;