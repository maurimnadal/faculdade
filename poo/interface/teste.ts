import { Autenticacao} from "./autenticacao"
import { Gerente } from "./gerente"
import { Funcionario } from "./funcionario"
import { IUsuario } from "./IUsuario"

let funcionario: IUsuario = new Funcionario("admin", "admin")
let gerente: IUsuario = new Gerente("admin", "admin")

let autenticacao: Autenticacao = new Autenticacao()


console.log(autenticacao.login(funcionario))
console.log(autenticacao.login(gerente))