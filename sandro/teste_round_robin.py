from cpu import CPU

escalonador = CPU(quantum=2)

# TODO junta tudo no msm

# TODO automatiza a quantidade de processos necessários

# TODO ele quer saber o runtime de cada processo

# TODO quer o tempo médio 

# TODO gerar automaticamente o numero de processos
escalonador.adicionar_processo("P1", 10)
escalonador.adicionar_processo("P2", 4)
escalonador.adicionar_processo("P3", 7)

escalonador.executar()