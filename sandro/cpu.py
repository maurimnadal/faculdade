import random
import argparse

class Processo:
    def __init__(self, nome, tempo_processo, tipo, prioridade):
        self.nome = nome
        self.tempo_restante = tempo_processo
        self.prioridade = prioridade
        self.tipo = tipo

    def executar(self, quantum):
        if self.tempo_restante > quantum:
            self.tempo_restante -= quantum
            return quantum, False
        else:
            tempo_gasto = self.tempo_restante
            self.tempo_restante = 0
            return tempo_gasto, True

    def __str__(self):
        return f"{self.nome} - {self.tipo} {"[PRIORIDADE]" if self.prioridade == True else "[NORMAL]"} - Tempo restante: {self.tempo_restante}"


class CPU:
    def __init__(self, quantum):
        self.quantum = quantum
        self.fila = []

    def adicionar_processo(self, nome):
        tipo = random.choice(["CPU Bound", "I/O Bound"])
        tempo_total = random.randint(4, 10) if tipo == "CPU Bound" else random.randint(2, 8)        
        prioridade = True if tempo_total < self.quantum else False
        processo = Processo(nome, tempo_total, tipo, prioridade)
        self.fila.append(processo)


    def executar(self):
        tempo_total = 0
        numero_processos = random.randint(2, 5)
        processo_atual_id = 1


        while len(self.fila) < numero_processos:
            self.adicionar_processo(f"Processo {processo_atual_id}")
            processo_atual_id += 1
            
        print("-"*60)
        print(f"\nQuantum: {self.quantum} unidades de tempo\n")
        print("-"*60)
        print("\nProcessos a serem executados:\n")

        for processo in self.fila:
             print(processo)

        print("-"*60)

        print("\nComeçando execução dos processos...\n")


        exec_processos = {processo.nome: {"tempo_final": 0, "numero_execucoes": 0} for processo in self.fila}

        while len(self.fila) > 0:
            processo = None
            indice_do_processo = -1


            for i, p in enumerate(self.fila):
                if p.prioridade:
                    indice_do_processo = i
                    break 


            if indice_do_processo != -1:
                processo = self.fila.pop(indice_do_processo)
                print(processo)
            else:
                processo = self.fila.pop(0)
                print(processo)


            runtime, finalizado = processo.executar(self.quantum)
            tempo_total += runtime

            exec_processos[processo.nome]["numero_execucoes"] += 1

            if finalizado:
                exec_processos[processo.nome]["tempo_final"] = tempo_total
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

        tempos = []
        for processo, dados in exec_processos.items():
            execucoes = dados["numero_execucoes"]
            tempo_final = dados["tempo_final"]
            tempos.append(tempo_final)
            print(f"{processo} - Execuções: {execucoes}, Tempo final: {tempo_final}")

        media = round(sum(tempos) / len(tempos), 2)
        print(f"\nTempo médio de execução: {media} unidades de tempo")


        print("-"*60)



if __name__ == "__main__":
    parser = argparse.ArgumentParser(description="Simulador de escalonamento Round Robin")
    parser.add_argument("-q", type=int, default=4)

    args = parser.parse_args()

    cpu = CPU(quantum=args.q)
    cpu.executar()