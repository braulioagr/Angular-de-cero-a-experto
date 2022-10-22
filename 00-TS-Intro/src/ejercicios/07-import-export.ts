import { Producto, calculaISV } from "./06-desestructuracion-funcion";
/*
    ===== Código de TypeScript =====
*/

const carritoCompras: Producto[] = [
    {
        desc: 'Telefno 1',
        precio: 100
    },
    {
        desc: 'Telefno 2',
        precio: 150
    }
];


const [total, isv] = calculaISV( carritoCompras );

console.log('Total', total);
console.log('ISV', isv);