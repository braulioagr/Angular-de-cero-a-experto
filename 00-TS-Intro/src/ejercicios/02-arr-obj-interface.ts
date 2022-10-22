/*
    ===== Código de TypeScript =====
*/
let habilidades: string[] = ['Bash','Counter','Healing'];

interface Personaje{
    nombre: string;
    hp: number;
    habilidades: string[];
    pubebloNatal?: string;
}

const personaje:Personaje = {
    nombre: 'Strider',
    hp:100,
    habilidades:['Bash','Counter','Healing']
}
personaje.pubebloNatal = 'Pueblo Paleta'

console.table(personaje)