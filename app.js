function menu() 
    let opcion = "" ; 

    while (opcion !== "0"){
        opcion = prompt(

            "1. ver todos/n" +
            "2. aprobado/n" +
            "3. reprobado/n" +
            "4. promedio/n" +
            "5. ordenar/n" +
            "6. mayusculas/n" +
            "7. clasificar notas/n" +
            "0. salir"

        );

        switch (opcion) {
            case "1"
                mostrarAprendices(aprendices);
                break;

            case "2"
                console.log(aprobados(aprendices));
                break; 

            case "3"
                console.log(reprobado(aprendices));
                break;

            case "4"
                console.log("Promedio:",promedio(aprendices));
                break;

            case "5"
                console.log(ordenarNotas([...aprendices]));
                break;

            case "6"
                console.log(nombreMayusculas(aprendices));
                break;

            case "7"
                let nota = parseFloat(prompt("ingresa una nota:"))
                console.log (clasificar(nota))
                break;

            case "0"
                console.log("saliendo...")
                break;

            default:
                console.log("opciones invalidas");
    
        }
    }