class EscalonamentoRoundRobin:
    def __init__(self, quantum):
        self.quantum = quantum
        self.fila = []
    

    def adicionar_processo(self, nome, tempo):
        processo = {"nome": nome, "tempo_restante": tempo}
        self.fila.append(processo)


    def executar(self):
        tempo_atual = 0
        while self.fila:
            processo = self.fila.pop(0)
            print(f"Tempo {tempo_atual}: Executando {processo['nome']}")

            if processo["tempo_restante"] > self.quantum:
                processo["tempo_restante"] -= self.quantum
                tempo_atual += self.quantum
                self.fila.append(processo)
                print(f"{processo['nome']} não terminou, resta {processo['tempo_restante']} unidades de tempo.")
            else:
                tempo_atual += processo["tempo_restante"]
                print(f"{processo['nome']} finalizado.")

        print(f"Todos os processos foram executados em {tempo_atual} unidades de tempo.")


escalonador = EscalonamentoRoundRobin(quantum=3)
escalonador.adicionar_processo("P1", 10)
escalonador.adicionar_processo("P2", 4)
escalonador.adicionar_processo("P3", 7)

escalonador.executar()