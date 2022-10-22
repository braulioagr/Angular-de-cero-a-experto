/*
    ===== Código de TypeScript =====
*/
interface Direcion {
        calle: string;
        pais: string;
        ciudad: string;
}
interface SuperHeroe{
    nombre: string;
    edad: number;
    direccion: Direcion;
    mostrarDrieccion: ()=>string;
}

const superHeroe: SuperHeroe = {
    nombre: 'Spiderman',
    edad: 30,
    direccion: {
        calle: 'Main St',
        pais: 'USA',
        ciudad: 'NY'
    },
    mostrarDrieccion():string {
        return this.nombre +   ', ' + this.direccion.ciudad +   ', ' +  this.direccion.pais;
    }
}

const direccion = superHeroe.mostrarDrieccion();
console.log( direccion );
