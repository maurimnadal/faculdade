from processo import Processo 

class CPU:
    def __init__(self, quantum):
        self.quantum = quantum
        self.fila = []

    def adicionar_processo(self, nome, tempo_total):
        processo = Processo(nome, tempo_total)
        self.fila.append(processo)

    def executar(self):
        tempo_total = 0
        while len(self.fila) != 0:
            processo = self.fila.pop(0)
            print(f"Tempo {tempo_total}: Executando {processo.nome}")

            tempo_gasto, finalizado = processo.executar(self.quantum)
            tempo_total += tempo_gasto

            if finalizado:
                print(f"{processo.nome} finalizado.")
            else:
                print(f"{processo.nome} não terminou, resta {processo.tempo_restante} unidades de tempo.")
                self.fila.append(processo)

        print(f"Todos os processos foram executados em {tempo_total} unidades de tempo.")