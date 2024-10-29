import { useState } from "react";
function IMC() {
    const [peso, setPeso] = useState('');
    const [altura, setAltura] = useState('');
    const [imc, setImc] = useState(null)

    const calcularImc = () => {
        if (peso > 0 && altura > 0) {
            const alturaMetros = altura / 100;
            const imcCalculado = peso / (alturaMetros * alturaMetros);
            setImc(imcCalculado.toFixed(2));
        } else {
            alert('Por favor, insira valores válidos para peso e altura')
        }
    };

    const classificarIMC = (imc) => {
        if (imc < 18.5) return "Abaixo do peso";
        if (imc >= 18.5 && imc <= 24.9) return "Peso normal";
        if (imc >= 25 && imc <= 29.9) return "Sobrepeso";
        if (imc >= 30) return "Obesidade";
    };


    return (
        <div>
            <h1>Cálculo do IMC</h1>
            <div>
                <label>
                    Peso (kg):
                    <input
                        type="number"
                        value={peso}
                        onChange={(e) => setPeso(e.target.value)}
                        placeholder="Digite seu Peso"
                    />
                </label>
            </div>
            <div>
                <label>
                    Altura (cm):
                    <input
                        type="number"
                        value={altura}
                        onChange={(e) => setAltura(e.target.value)}
                        placeholder="Digite Sua Altura"
                    />
                </label>
            </div>
            <button onClick={calcularImc}>Calcular IMC</button>
            {imc && (
                <div>
                    <h2>Seu IMC: {imc}</h2>
                    <p>{classificarIMC(imc)}</p>
                </div>
            )}
        </div>
    );
}
export default IMC;