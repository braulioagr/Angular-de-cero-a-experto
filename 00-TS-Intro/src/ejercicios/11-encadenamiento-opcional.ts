/*
    ===== Código de TypeScript =====
*/


interface Pasajero{
    nombre: string;
    hijos?: string[];
}


const pasajero1: Pasajero = {
    nombre: 'Braulio'   
}

const pasajero2: Pasajero = {
    nombre: 'Lucy',
    hijos: [ 'Miguel', 'Gerardo']
}

function impimeHijos(pasajero: Pasajero): void {
    const cuantosHijos = pasajero.hijos?.length || 0;
    console.log( cuantosHijos )
}
impimeHijos(pasajero1)