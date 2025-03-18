const alunos = []


function createAluno(req, res) {
    let body = "";

    req.on("data", (chunk) => {
        body += chunk.toString();
    });

    req.on("end", () => {
        try {
            const novoAluno = JSON.parse(body);
            novoAluno.id = alunos.length + 1;
            res.statusCode = 201;
            res.end(
                JSON.stringify({ message: "Aluno cadastrado com sucesso", aluno: novoAluno })
            );
            alunos.push(novoAluno)
            return alunos
        } catch (error) {

            res.statusCode = 400;
            res.end(JSON.stringify({ message: "Erro ao processar o aluno" }));
        }
    });
}


function getAlunos(req, res) {
    if (alunos.length === 0) {
        res.statusCode = 404;
        return res.end(JSON.stringify({ message: "Não há alunos cadastrados" }));
    }

    res.statusCode = 200;
    res.end(JSON.stringify(alunos));
}


function updateAluno(req, res) {
    const id = req.url.split("/")[3];
    let body = "";

    if (isNaN(id)) {
        res.statusCode = 400;
        return res.end(JSON.stringify({ message: "ID inválido na URL" }));
    }

    req.on("data", (chunk) => {
        body += chunk.toString();
    });

    req.on("end", () => {
        try {
            const alunoAtualizado = JSON.parse(body);
            alunoAtualizado.id = parseInt(id, 10);

            let aluno = alunos.findIndex(aluno => aluno.id === alunoAtualizado.id)
            if (aluno === -1) {
                res.statusCode = 404;
                res.end(JSON.stringify({ message: "Aluno não encontrado" }));
            }

            res.statusCode = 200;
            res.end(
                JSON.stringify({
                    message: "Aluno atualizado com sucesso",
                    aluno: alunoAtualizado,
                })
            );
        } catch (error) {
            res.statusCode = 400;
            res.end(JSON.stringify({ message: "Erro ao processar o aluno" }));
        }
    });
}

function deleteAluno(req, res) {
    const id = parseInt(req.url.split("/")[3], 10);

    if (isNaN(id)) {
        res.statusCode = 400;
        return res.end(JSON.stringify({ message: "ID inválido na URL" }));
    }

    let alunoIndex = alunos.findIndex(aluno => aluno.id === id);

    if (alunoIndex === -1) {
        res.statusCode = 404;
        return res.end(JSON.stringify({ message: "Aluno não encontrado" }));
    }

    alunos.splice(alunoIndex, 1);

    res.statusCode = 200;
    res.end(JSON.stringify({ message: `Aluno com ID ${id} deletado com sucesso` }));
}


module.exports = {
    getAlunos,
    createAluno,
    updateAluno,
    deleteAluno,
};
