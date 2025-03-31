import { Gerente } from "./gerente";
import { Secretario } from "./secretario";
import { Telefonista } from "./telefonista";
import { Funcionario } from "./funcionario";

let funcionario: Funcionario = new Funcionario();
funcionario.nome = "João"
funcionario.salario = 2000
funcionario.toString()

let gerente: Gerente = new Gerente();
gerente.nome = "Artur"
gerente.salario = 10000
gerente.nomeUsuario = "artur"
gerente.senha = "123456"
gerente.toString()

let secretario: Secretario = new Secretario();
secretario.nome = "Marcio"
secretario.salario = 5000
secretario.ramal = "1234"
secretario.toString()

let telefonista: Telefonista = new Telefonista();
telefonista.nome = "Ana"
telefonista.salario = 3000
telefonista.codigoEstacaoTrabalho = "5678"
telefonista.toString()