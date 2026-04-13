function nombresMayus(lista) {
 return lista.map(a => ({
 ...a,
 nombre: a.nombre.toUpperCase()
 }));
}

function ordenarNotas(lista) {
 return lista.sort((a, b) => b.nota - a.nota);
}

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

        switch (opcion) {
            case "1":
                mostrarAprendices(aprendices);
                break;

            case "2":
                console.log(aprobados(aprendices));
                break;

            case "3":
                console.log(reprobados(aprendices));
                break;

            case "4":
                console.log("Promedio:", promedio(aprendices));
                break;

            case "5":
                console.log(ordenarNotas([...aprendices]));
                break;

            case "6":
                console.log(nombresMayus(aprendices));
                break;

            case "7":
                let nota = parseFloat(prompt("Ingrese una nota:"));
                console.log(clasificar(nota));
                break;

            case "0":
                console.log("Saliendo...");
                break;

            default:
                console.log("Opción inválida");
        }
    }
}

function menu() {
 let opcion;
 while (opcion !== "0") {
 opcion = prompt("1.Ver todos\n2.Aprobados\n3.Salir");
 switch (opcion) {
 case "1":
 mostrarAprendices(aprendices);
 break;
 case "2":
 console.log(aprobados(aprendices));
 break;
 case "0":
 console.log("Saliendo...");
 break;
 default:
 console.log("Opcion invalida");
 }
 }
}
