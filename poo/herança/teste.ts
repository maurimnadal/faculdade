import { Gerente } from "./gerente";
import { Secretario } from "./secretario";
import { Telefonista } from "./telefonista";
import { Funcionario } from "./funcionario";


let gerente: Gerente = new Gerente();
gerente.nome = "Artur"
gerente.salario = 10000
gerente.nomeUsuario = "artur"
gerente.senha = "123456"
console.log(gerente.toString())

let secretario: Secretario = new Secretario();
secretario.nome = "Marcio"
secretario.salario = 5000
secretario.ramal = "1234"
console.log(secretario.toString())

let telefonista: Telefonista = new Telefonista();
telefonista.nome = "Ana"
telefonista.salario = 3000
telefonista.codigoEstacaoTrabalho = "5678"
console.log(telefonista.toString())