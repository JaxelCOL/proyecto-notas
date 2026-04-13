// DATOS BASE
const aprendices = [
    { nombre: "Ana", nota: 4.5, programa: "ADSO" },
    { nombre: "Luis", nota: 2.8, programa: "ADSO" },
    { nombre: "Marta", nota: 3.7, programa: "Diseno Web" },
    { nombre: "Pedro", nota: 1.9, programa: "ADSO" },
    { nombre: "Sofia", nota: 5.0, programa: "Diseno Web" }
];

// MOSTRAR EN PANTALLA
function mostrarEnPantalla(texto) {
    const div = document.getElementById("resultado");
    div.innerHTML = texto;
}

// FUNCIONES

function mostrarAprendices(lista) {
    let salida = "";
    lista.forEach(a => {
        salida += `Nombre: ${a.nombre} - Nota: ${a.nota} - Programa: ${a.programa}<br>`;
    });
    mostrarEnPantalla(salida);
}

function aprobados(lista) {
    let datos = lista.filter(a => a.nota >= 3.0);
    let salida = "";

    datos.forEach(a => {
        salida += `${a.nombre} - ${a.nota}<br>`;
    });

    mostrarEnPantalla(salida);
}

function reprobados(lista) {
    let datos = lista.filter(a => a.nota < 3.0);
    let salida = "";

    datos.forEach(a => {
        salida += `${a.nombre} - ${a.nota}<br>`;
    });

    mostrarEnPantalla(salida);
}

function promedio(lista) {
    let total = lista.reduce((acc, a) => acc + a.nota, 0);
    let prom = total / lista.length;

    mostrarEnPantalla("Promedio: " + prom.toFixed(2));
}

function nombresMayus(lista) {
    let datos = lista.map(a => ({
        ...a,
        nombre: a.nombre.toUpperCase()
    }));

    let salida = "";

    datos.forEach(a => {
        salida += `${a.nombre} - ${a.nota}<br>`;
    });

    mostrarEnPantalla(salida);
}

function ordenarNotas(lista) {
    let ordenados = lista.sort((a, b) => b.nota - a.nota);
    let salida = "";

    ordenados.forEach(a => {
        salida += `${a.nombre} - ${a.nota}<br>`;
    });

    mostrarEnPantalla(salida);
}

function clasificar(nota) {
    let nivel = "";

    switch (true) {
        case nota < 3: nivel = "Bajo"; break;
        case nota < 4: nivel = "Basico"; break;
        case nota < 4.5: nivel = "Alto"; break;
        default: nivel = "Superior";
    }

    mostrarEnPantalla("Nivel: " + nivel);
}

// MENÚ MEJORADO 
function menu() {
    let opcion = "";

    while (opcion !== "0") {
        opcion = prompt(
            "1. Ver todos\n" +
            "2. Aprobados\n" +
            "3. Reprobados\n" +
            "4. Promedio\n" +
            "5. Ordenar\n" +
            "6. Mayúsculas\n" +
            "7. Clasificar nota\n" +
            "0. Salir"
        );

        if (opcion === null) {
            mostrarEnPantalla("Menú cancelado");
            break;
        }

        switch (opcion) {
            case "1":
                mostrarAprendices(aprendices);
                return;

            case "2":
                aprobados(aprendices);
                return;

            case "3":
                reprobados(aprendices);
                return;

            case "4":
                promedio(aprendices);
                return;

            case "5":
                ordenarNotas([...aprendices]);
                return;

            case "6":
                nombresMayus(aprendices);
                return;

            case "7":
                let nota = parseFloat(prompt("Ingrese una nota:"));
                clasificar(nota);
                return;

            case "0":
                mostrarEnPantalla("Saliendo...");
                return;

            default:
                mostrarEnPantalla("Opción inválida");
                return;
        }
    }
}