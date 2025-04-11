class Vendedor:
    def __init__(self, nome, nro_carros_vendidos, valor_total_vendas, salario_fixo, valor_por_carro_vendido):
        self.nome = nome
        self.nro_carros_vendidos = nro_carros_vendidos
        self.valor_total_vendas = valor_total_vendas
        self.salario_fixo = salario_fixo
        self.valor_por_carro_vendido = valor_por_carro_vendido

    def calcularSalarioMensal(self):
        salario = self.salario_fixo + (self.nro_carros_vendidos * self.valor_por_carro_vendido) + (self.valor_total_vendas * 0.05)
        return salario

vendedor = Vendedor("João", 5, 100000, 2000, 300)
print(f"salario mensal de {vendedor.nome} é {vendedor.calcularSalarioMensal()}")

nome = "joao"
print(nome)

if type(nome) == str:
    print("é string")
else: print("batata") 


lista = [1, 2, 3]
for i in lista:
    print(i)


def soma_progressao(primeiro, ultimo, razao):
    soma = 0
    for numero in range(primeiro, ultimo + 1, razao):
        soma += numero
    return soma

print(soma_progressao(1, 10, 2))




