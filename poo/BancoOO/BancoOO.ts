// class Agencia{
//     private _numero: string

//     public get numero(): string{
//         return this._numero
//     }

//     public set numero(value:string){
//         this._numero = value
//     }

//     constructor(numero: string){
//         this._numero  = numero
//     }
// }


// class CartaoDeCredito{
//     private _numero: number;

//     public get numero(): number{
//         return this._numero
//     }

//     public set numero(value:number){
//         this._numero = value
//     }
//     private _data_validade: string

//     public get data_validade(): string{
//         return this._data_validade
//     }

//     private _cliente: Cliente

//     public get cliente(): Cliente{
//         return this._cliente
//     }


//     constructor(numero: number){
//         this._numero = numero
//     }
// }

// class Cliente{
//     private _nome: string;

//     public get nome(): string{
//         return this._nome
//     }

//     public set nome(value:string){
//         this._nome = value
//     }

//     private _codigo: number

//     public get codigo(): number{
//         return this._codigo
//     }

// }


// class Conta{
//     private _numero: number

//     public get numero(): number{
//         return this._numero
//     }

//     public set numero(value:number){
//         this._numero = value
//     }

//     private _saldo: number

//     public get saldo(): number{
//         return this._saldo
//     }

//     private _limite: number 

//     public get limite(): number{
//         return this._limite
//     }

//     private _extrato: string

//     public get extrato(): string{
//         return this._extrato
//     }

//     private _agencia: Agencia

//     public get agencia(): Agencia{
//         return this._agencia
//     }

//     public set agencia(value:Agencia){
//         this._agencia = value
//     }

//     constructor(agencia: Agencia){
//         this._limite = 100  //7
//         this._extrato = ""
//         this._agencia = agencia
//     }

//     depositar(valor: number):void{
//         if (valor > 0){
//             this._saldo += valor
//             this._extrato += `Depósito: ${valor}\n`
//         }
//     }

//     sacar(valor: number): boolean{
//         if (valor <= this._saldo + this._limite && valor > 0){
//             this._saldo -= valor
//             this._extrato += `Saque: ${valor}\n`
//             return true
//         }
//         return false
//     }

//     exibirExtrato(){
//         return this._extrato
//     }

//     consultarSaldo(): number{
//         return this._saldo + this._limite
//     }

//     transferir(conta_destino: Conta, valor: number): boolean{
//         if (valor <= this._saldo + this._limite && valor > 0){
//             this._saldo -= valor
//             conta_destino._saldo += valor
//             return true
//         }
//         return false

//     }
// }

// class Funcionario{
//     private _nome: string

//     public get nome(): string{
//         return this._nome
//     }

//     public set nome(value:string){
//         this._nome = value
//     }

//     private _salario: number

//     public get salario(): number{
//         return this._salario
//     }

//     public set salario(value:number){
//         this._salario = value
//     }

//     aumentarSalario(porcentagem: number){
//         this._salario += this._salario * porcentagem / 100
//     }

//     consultarDados(){
//         return `Nome: ${this._nome} - Salário: ${this._salario} R$`
//     }
// }


// class Gerente{
//     private _nome: string

//     public get nome(): string{
//         return this._nome
//     }

//     public set nome(value:string){
//         this._nome = value
//     }

//     private _salario: number

//     public get salario(): number{
//         return this._salario
//     }

//     public set salario(value:number){
//         this._salario = value
//     }

//     aumentarSalarioTaxaFixa(){
//         this.aumentarSalarioTaxaVariavel(10)
//     }

//     aumentarSalarioTaxaVariavel(porcentagem: number){
//         this._salario += this._salario * porcentagem / 100
//     }
// }

// let cliente: Cliente = new Cliente
// cliente.nome = "Cláudio"


// let cliente2: Cliente = new Cliente
// cliente2.nome = "Ana"



// //3
// let nubank: CartaoDeCredito = new CartaoDeCredito(1900)


// let itau: CartaoDeCredito = new CartaoDeCredito(3000)




// //4
// let agencia1: Agencia = new Agencia("0001")


// let agencia2: Agencia = new Agencia("0002")



// //5
// let conta1: Conta = new Conta(agencia1)
// conta1.numero = 200


// let conta2: Conta = new Conta(agencia2)
// conta2.numero = 100
