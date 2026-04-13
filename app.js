function mostrarAprendices(lista) { 
    lista.forEach(a => { 
        console.log(a.nombre, a.nota, a.programa); 
    }); 
} 

function aprobados(lista) { 
    return lista.filter(a => a.nota >= 3.0); 
} 

function reprobados(lista) { 
    return lista.filter(a => a.nota < 3.0); 
} 

function promedio(lista) { 
    let total = lista.reduce((acc, a) => acc + a.nota, 0); 
    return total / lista.length; 
} 

