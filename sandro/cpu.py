import random
import argparse

class Processo:
    def __init__(self, nome, tempo_processo):
        self.nome = nome
        self.tempo_restante = tempo_processo

    def executar(self, quantum):
        if self.tempo_restante > quantum:
            self.tempo_restante -= quantum
            return quantum, False  
        else:
            tempo_gasto = self.tempo_restante
            self.tempo_restante = 0
            return tempo_gasto, True  
        
    def __str__(self):
        return f"{self.nome} - Execução completa ocupa {self.tempo_restante} unidades de tempo"



class CPU:
    def __init__(self, quantum):
        self.quantum = quantum
        self.fila = []

    def adicionar_processo(self, nome, tempo_total):
        processo = Processo(nome, tempo_total)
        self.fila.append(processo)

    def executar(self):
        tempo_total = 0
        numero_processos = random.randint(2, 5)
        processo_atual = 1


        while len(self.fila) != numero_processos:
            self.adicionar_processo(f"Processo {processo_atual}", random.randint(4, 10))
            processo_atual += 1
        print("-"*60)
        print("\nProcessos a serem executados:\n")
        [print(processo) for processo in self.fila]
        
        print("-"*60)

        print("\nComeçando execução dos processos...\n")


        exec_processos = {processo.nome: {"runtime": 0, "numero_execucoes": 0} for processo in self.fila}

        while len(self.fila) != 0:
            processo = self.fila.pop(0)
            print(f"\nTempo {tempo_total}: {processo}")

            runtime, finalizado = processo.executar(self.quantum)
            tempo_total += runtime

            exec_processos[processo.nome]["runtime"] += runtime
            exec_processos[processo.nome]["numero_execucoes"] += 1

            if finalizado:
                print(f"Status: {processo.nome} finalizado.")
                print(f"Runtime: {runtime}\n")
                print("-"*60)
            else:
                print(f"Status: {processo.nome} não terminou, resta {processo.tempo_restante} unidades de tempo.")
                print(f"Runtime: {self.quantum}\n")
                print("-"*60)
                self.fila.append(processo)

        print(f"\nTodos os processos foram executados em {tempo_total} unidades de tempo.\n")
        print("-"*60)
        print("\nRelatório:\n")

        for processo, dados in exec_processos.items():
            total_runtime = dados["runtime"]
            execucoes = dados["numero_execucoes"]
            media = round(total_runtime / execucoes, 2)
            print(f"{processo} - Execuções: {execucoes}, Tempo médio por execução: {media}")
            
        print("-"*60)
        

if __name__ == "__main__":
    parser = argparse.ArgumentParser(description="Simulador de escalonamento Round Robin")
    parser.add_argument("-q", type=int, default=4)

    args = parser.parse_args()

    cpu = CPU(quantum=args.q)
    cpu.executar()
    
# TODO IO bound e cpu bound

# TODO botar o tempo final em que cada processo foi executado e fazer a média

# TODO prioridade do jack