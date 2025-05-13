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