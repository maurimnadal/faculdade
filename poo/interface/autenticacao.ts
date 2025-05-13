import { IUsuario } from "./IUsuario";

export class Autenticacao{
    login(usuario: IUsuario): boolean{
        if(usuario.usuario === "admin" && usuario.senha === "admin"){
            return true
        }
        return false
    }
}



