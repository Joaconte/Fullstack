function listas(){
    const t = [1, 2, 3, 4, 5]
    
    //CONCAT PARA AGREGAR VALOR CREANDO NUEVO ARRAY
    const t2 = t.concat(5) 
    
    //MAP BASICO
    const m1 = t.map(value => value * 2)
    
    //MAP A HTML
    const m2 = t.map(value => '<li>' + value + '</li>')
    
    //ASIGNACION MULTIPLE CON LISTAS
    const [first, second, ...rest] = t
    
    m1.forEach(value => {
      console.log(value)  // se imprimen los números 1, -1, 3, 5 cada uno en su propia línea
    })  
}

function clases(){
    const object1 = {
        name: 'Arto Hellas',
        age: 35,
        education: 'PhD',
    }
    
    const object2 = {
        name: 'Full Stack web application development',
        level: 'intermediate studies',
        size: 5,
    }
    
    const object3 = {
        name: {
            first: 'Dan',
            last: 'Abramov',
        },
        grades: [2, 3, 5, 3],
        department: 'Stanford University',
    }

    console.log(object1.name)
    const fieldName = 'age'
    console.log(object1[fieldName])    // [] cuando el nombre del atributo es una variable

    object1.address = 'Helsinki'
    object1['secret number'] = 12341  // si o si [] por el espacio
}

function funciones(){
    const sum = (p1, p2) => { 
        console.log (p1) 
        console.log (p2) 
        return p1 + p2 
    } 

    const result = sum(1, 5)
    console.log (result)

    //Si hay un solo parámetro, podemos excluir los paréntesis de la definición:

    const square = p => {
        console.log(p)
        return p * p
    }

    //Si la función solo contiene una expresión, entonces las llaves no son necesarias.
    const square_v2 = p => p * p

    //Esta forma es particularmente útil cuando se manipulan arrays, por ejemplo, cuando se usa el método map:

    const t = [1, 2, 3]
    const tSquared = t.map(p => p * p)
}