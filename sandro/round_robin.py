# class EscalonamentoRoundRobin:
#     def __init__(self, quantum):
#         self.quantum = quantum
#         self.fila = []
    

#     def adicionar_processo(self, nome, tempo):
#         processo = {"nome": nome, "tempo_restante": tempo}
#         self.fila.append(processo)


#     def executar(self):
#         tempo_atual = 0
#         while self.fila:
#             processo = self.fila.pop(0)
#             print(f"Tempo {tempo_atual}: Executando {processo['nome']}")

#             if processo["tempo_restante"] > self.quantum:
#                 processo["tempo_restante"] -= self.quantum
#                 tempo_atual += self.quantum
#                 self.fila.append(processo)
#                 print(f"{processo['nome']} não terminou, resta {processo['tempo_restante']} unidades de tempo.")
#             else:
#                 tempo_atual += processo["tempo_restante"]
#                 print(f"{processo['nome']} finalizado.")

#         print(f"Todos os processos foram executados em {tempo_atual} unidades de tempo.")


# escalonador = EscalonamentoRoundRobin(quantum=3)
# escalonador.adicionar_processo("P1", 10)
# escalonador.adicionar_processo("P2", 4)
# escalonador.adicionar_processo("P3", 7)

# escalonador.executar()

class Processo:
    def __init__(self, id, tempoNecessario):
        self.id = id
        self.tempoNecessario = tempoNecessario

    def getId(self):
        return self.id

    def setId(self, value):
        self.id = value

    def getTempoNecessario(self):
        return self.tempoNecessario

    def setTempoNecessario(self, value):
        self.tempoNecessario = value


class CPU:
    quantum = 10

    def __init__(self, fila):
        self.fila = fila

    def getFila(self):
        return self.fila

    def setFila(self, value):
        self.fila = value

    def executa(self):
        executados = []

        for processo in fila:

            if self.quantum - processo.getTempoNecessario() >= 0:
                print(f'No processo {processo.getId()} foram executados {processo.getTempoNecessario())}  de {self.quantum}')

                print(str(processo.getId()) + ' executado com sucesso!')
                executados.append(processo.getId())

            processo.setTempoNecessario(self.quantum - processo.getTempoNecessario())

        print(executados)
    