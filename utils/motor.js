export function calcularMontoMinimo(tipoNomina, fechaPrimerEmpleo, genero) {
    // Calcular los meses desde el primer empleo hasta la fecha actual
    let fechaActual = new Date();
    let mesesDesdePrimerEmpleo = Math.floor((fechaActual - fechaPrimerEmpleo) / (1000 * 60 * 60 * 24 * 30));

    // Definir las tablas de montos mínimos según el género
    let tablaMinimoMasculino = {
        'A': [100, 400, 900, 100, 600],
        'B': [1000, 600, 1000, 300, 1000],
        'C': [400, 300, 500, 900, 1000],
        'D': [400, 300, 500, 900, 1000]
    };

    let tablaMinimoFemenino = {
        'A': [800, 800, 800, 600, 200],
        'B': [800, 700, 100, 600, 700],
        'C': [200, 900, 700, 800, 100],
        'D': [500, 1000, 600, 400, 700]
    };

    // Obtener el monto mínimo según el género
    let tablaMinimo = genero === 'm' ? tablaMinimoMasculino : tablaMinimoFemenino;

    // Definir los rangos de meses y buscar el monto mínimo correspondiente
    let montoMinimo = 0;
    if (mesesDesdePrimerEmpleo < 27) {
        montoMinimo = tablaMinimo[tipoNomina][0];
    } else if (mesesDesdePrimerEmpleo === 27) {
        montoMinimo = tablaMinimo[tipoNomina][1];
    } else if (mesesDesdePrimerEmpleo === 28) {
        montoMinimo = tablaMinimo[tipoNomina][2];
    } else if (mesesDesdePrimerEmpleo === 29) {
        montoMinimo = tablaMinimo[tipoNomina][3];
    } else {
        montoMinimo = tablaMinimo[tipoNomina][4];
    }

    return montoMinimo;
}

export function calcularMontoMaximo(tipoNomina, fechaPrimerEmpleo, genero) {
    // Calcular los meses desde el primer empleo hasta la fecha actual
    let fechaActual = new Date();
    let mesesDesdePrimerEmpleo = Math.floor((fechaActual - fechaPrimerEmpleo) / (1000 * 60 * 60 * 24 * 30));

    // Definir las tablas de montos máximos según el género
    let tablaMaximoMasculino = {
        'A': [4900, 4700, 4600, 4600, 4500],
        'B': [4700, 4400, 5000, 4400, 4900],
        'C': [5000, 4700, 5000, 4200, 4600],
        'D': [4400, 4700, 4300, 4900, 4300]
    };

    let tablaMaximoFemenino = {
        'A': [4000, 4200, 4100, 4200, 4500],
        'B': [4700, 4200, 4500, 4300, 4400],
        'C': [4600, 4900, 4600, 4700, 4000],
        'D': [5000, 4900, 4700, 5000, 4300]
    };

    // Obtener el monto máximo según el género
    let tablaMaximo = genero === 'm' ? tablaMaximoMasculino : tablaMaximoFemenino;

    // Definir los rangos de meses y buscar el monto máximo correspondiente
    let montoMaximo = 0;
    if (mesesDesdePrimerEmpleo < 27) {
        montoMaximo = tablaMaximo[tipoNomina][0];
    } else if (mesesDesdePrimerEmpleo === 27) {
        montoMaximo = tablaMaximo[tipoNomina][1];
    } else if (mesesDesdePrimerEmpleo === 28) {
        montoMaximo = tablaMaximo[tipoNomina][2];
    } else if (mesesDesdePrimerEmpleo === 29) {
        montoMaximo = tablaMaximo[tipoNomina][3];
    } else {
        montoMaximo = tablaMaximo[tipoNomina][4];
    }

    return montoMaximo;
}

export function calcularRecomendacionLinea(montoMinimo, montoMaximo) {
    let p1 = montoMinimo + Math.sqrt(montoMaximo - montoMinimo);
    let p2 = montoMinimo + 0.0175 * (montoMaximo - montoMinimo);
    return Math.max(p1, p2);
}

export function calculoMotor(tipoNomina, fechaPrimerEmpleo, genero) {
    let montoMinimo = calcularMontoMinimo(tipoNomina, fechaPrimerEmpleo, genero);
    let montoMaximo = calcularMontoMaximo(tipoNomina, fechaPrimerEmpleo, genero);
    let recomendacionLinea = calcularRecomendacionLinea(montoMinimo, montoMaximo);

    return {
        montoMinimo: montoMinimo,
        montoMaximo: montoMaximo,
        recomendacionLinea: recomendacionLinea
    };
}

// Ejemplo de uso con los datos proporcionados
let resultado1 = calculoMotor('A', new Date('2022-06-12'), 'f');
let resultado2 = calculoMotor('B', new Date('1993-12-30'), 'f');
let resultado3 = calculoMotor('C', new Date('2020-09-19'), 'm');
let resultado4 = calculoMotor('D', new Date('2019-01-15'), 'm');

console.log("Resultado 1:", resultado1); 
console.log("Resultado 2:", resultado2);
console.log("Resultado 3:", resultado3);
console.log("Resultado 4:", resultado4);
