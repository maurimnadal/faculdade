import { useEffect, useState } from 'react'

const data = [
    { nome: 'João', nota: 8 },
    { nome: 'Maria', nota: 9 },
    { nome: 'Carlos', nota: 7 },
    { nome: 'Ana', nota: 10 }
] 

function StudentList() {
    const [alunos, setData] = useState([]);

    useEffect(() => {
        setData(data);
    }, []);

    const AdicionaPedro = () => {
        setData((prevAluno) =>
            prevAluno.map(aluno => ({
                ...aluno,
                nomep: "Pedro", notap: 3
            })));
    };
    return (
        <>
            <div>
                <h1>Lista de Estudantes</h1>
                <ul>
                    {alunos.map(aluno => (
                        <li>
                            {aluno.nome} - Nota: {aluno.nota}


                        </li>
                    ))}
                    {alunos.map(aluno => (
                    <li>
                        {aluno.nomep} - Nota: {aluno.notap}
                    </li>
                    ))}
                </ul>
                <button onClick={AdicionaPedro}>Adicionar Estudante Pedro</button>
            </div>
        </>
    )
};

export default StudentList

