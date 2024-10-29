// Componente Sidebar
function Sidebar({title, artigos}) {
  return (
    <section>
        <h2>{title}</h2>
        <ul>
        {artigos.map((artigo, index) => (
            <li key={index}>{artigo}</li>
        ))}
        </ul>
    </section>
);
}

export default Sidebar;