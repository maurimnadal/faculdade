function calcularImposto(salario) {
    let aliquota = 0;
    let deducao = 0;

    if (salario <= 2259.20) {
        aliquota = 0;
        deducao = 0;
    } else if (salario <= 2826.65) {
        aliquota = 7.5;
        deducao = 169.44;
    } else if (salario <= 3751.05) {
        aliquota = 15;
        deducao = 381.44;
    } else if (salario <= 4664.68) {
        aliquota = 22.5;
        deducao = 662.77;
    } else {
        aliquota = 27.5;
        deducao = 896.00;
    }

    let imposto = (salario * (aliquota / 100)) - deducao;
    return imposto > 0 ? imposto : 0;
}

module.exports = calcularImposto;