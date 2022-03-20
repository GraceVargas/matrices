// Buscaminas
// Crear un programa que dado un array 2d permita ingresar una coordenada (representando los índices 
// del array), y mostrar si era una casilla vacía o tenía una mina. En caso de que tenga una casilla vacía,
// debe poder seguir jugando e ingresando casillas. Si descubre todas las casillas vacías o elige una con 
// una mina, el juego debe terminar, e indicar si perdió o ganó. Las minas y casillas vacías (ocultas y 
// descubiertas) pueden representarse con emojis, con con números o letras.

const buscaminas = (tablero) => {
    let totalVacias = 0;
    for (let fila of tablero) {
        for (let item of fila) {
            if (item ==='📦') {totalVacias++};
        }  
    } 
    let coordenada = prompt("Ingrese una coordenada");
    while (totalVacias > 0) {
        let indexI = coordenada.slice(0, 1);
        let indexJ = coordenada.slice(2);
        totalVacias--;  
        if (tablero[indexI][indexJ] === '📦') {
            coordenada = prompt("La caja está vacía! Ingrese una nueva coordenada");
        } else if (tablero[indexI][indexJ] === '💣') {
            alert("¡Oh no!¡Has encontrado una bomba! Has perdido");
            buscaminas(tablero);
        }
    }
    alert("Has descubierto todas las cajas vacías, has ganado!");
    buscaminas(tablero);
}

const tablero =
[
  ['📦', '💣', '💣'], // 0,0
  ['📦', '📦', '📦'], // 1,0 - 1,1 - 1,2
  ['💣', '📦', '📦']  // 2,1 - 2,2
]

buscaminas(tablero)



// 📦 📦 📦
// 📦 📦 📦
// 📦 📦 📦

// // Ingrese una coordenada: 0,0
// // La caja está vacía!

// 💨 📦 📦
// 📦 📦 📦
// 📦 📦 📦

// // Ingrese una coordenada: 0,1
// // ¡Oh no!¡Has encontrado una bomba!

// 💨 💥 📦
// 📦 📦 📦
// 📦 📦 📦
// BONUS: Hacer que el juego se reinicie una vez terminado.