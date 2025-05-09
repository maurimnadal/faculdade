class Processo:
    def __init__(self, nome, tempo_total):
        self.nome = nome
        self.tempo_restante = tempo_total

    def executar(self, quantum):
        if self.tempo_restante > quantum:
            self.tempo_restante -= quantum
            return quantum, False  
        else:
            tempo_gasto = self.tempo_restante
            self.tempo_restante = 0
            return tempo_gasto, True  



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


escalonador = CPU(quantum=2)
# TODO ele quer que de para botar o quantum na linha de comando

# TODO junta tudo no msm

# TODO automatiza a quantidade de processos necessários

# TODO ele quer saber o runtime de cada processo

# TODO quer o tempo médio 

# TODO gerar automaticamente o numero de processos
escalonador.adicionar_processo("P1", 10)
escalonador.adicionar_processo("P2", 4)
escalonador.adicionar_processo("P3", 7)

escalonador.executar()