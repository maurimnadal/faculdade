import { Usuario } from "./usuario";
import { SistemaLogin } from "./sistemaLogin";
import { Admin } from "./admin";

const usuario = new Usuario()
usuario.setNome("Lucas")
usuario.setEmail("lucas@email.com")
usuario.setSenha("123456")
usuario.verificarLogin(usuario.getEmail(), usuario.getSenha())
usuario.validarEmail(usuario.getEmail())
usuario.recuperarSenha(usuario.getEmail())

const admin = new Admin(2)
admin.setNome("Mauricio")
admin.setEmail("mauricio@email.com")
admin.setSenha("654321")
console.log(admin.getNivelAcesso())
admin.setNivelAcesso(1)
console.log(admin.getNivelAcesso())
admin.verificarLogin(admin.getEmail(), admin.getSenha())
admin.recuperarSenha(admin.getEmail())

const sistemaLogin = new SistemaLogin()
sistemaLogin.criarUsuario(usuario.getNome(), usuario.getEmail(), usuario.getSenha())
sistemaLogin.criarUsuario(admin.getNome(), admin.getEmail(), admin.getSenha())
console.log(sistemaLogin.login(usuario.getEmail(), usuario.getSenha()))
console.log(sistemaLogin.login(admin.getEmail(), admin.getSenha()))
sistemaLogin.recuperarSenha(usuario.getEmail())
sistemaLogin.recuperarSenha(admin.getEmail())
