//Esta línea importa dos funciones (blue y disable) del módulo "colors". La función blue se utiliza para cambiar el color del texto a azul, y disable se utiliza para desactivar la coloración del texto en la consola
        const { blue, disable } = require("colors");
//se declara un objeto vacío llamado functions. Es común que las funciones se agreguen como métodos a este objeto 
        const functions = {};
//Esta es una función llamada signo que toma un parámetro llamado numero. La función verifica si el número es mayor o igual a cero. Si es mayor o igual a cero, devuelve la cadena "positivo" en azul, y si no, devuelve la cadena "negativo" en azul
        const signo = (numero) => {
            if (numero >=0) {
            return 'positivo'.blue
        }else{
            return 'negativo'.blue
        }
    }
//es una función que toma un parámetro caracter y verifica si ese carácter se encuentra en un arreglo llamado datos. 
        const encontrocaracter = (caracter) => {
    const datos  = ['A','B','C','D','E'];
    if (datos.includes(caracter)){
        return 'se encuentra'.yellow;
    }else{
        return 'no se encuentra';
    }

    }
//esta función toma un número como parámetro. Esta función imprime un encabezado con caracteres especiales en colores, luego llama a la función 
        const interfazsigno = (numero) => {
            console.clear
            console.log('##############################'.yellow);
            console.log('#       funcion signo        #'.blue);
            console.log('##############################\n'.red);

            console.log('##############################'.yellow)
            console.log(`# el numero ${numero} es `.blue+
            
            functions.signo(numero)+'   #'.blue);
            console.log('##############################\n'.red);
    }
// es una función que toma un carácter como parámetro. Esta función imprime un encabezado similar al anterior y llama a la función
        const interfazEncontrarcaracter = (caracter) =>{
            console.log('################################'.yellow)
            console.log('# funcion encontro el caracter #'.blue)
            console.log('################################'.red)
            console.log(`#  el caracter ${caracter.toUpperCase()} `.yellow
            +functions.encontrocaracter(caracter.toUpperCase())+`##`.yellow)
            console.log('###############################\n'.red)
    }
// es una función que toma un parámetro llamado bebida. La función verifica si ese valor se encuentra en un arreglo llamado informacion. Si el valor está presente en el arreglo, devuelve la cadena 'ir a la barra' lo que retorna varia de acuerdo ala opcion que elija por eso el if con las dos opciones 
        const busqueda = (bebida) => {
        const informacion = ['vino','cerveza','gaseosa','agua'];
            if (informacion.includes(bebida)){
            return 'ir a la barra'.blue
        }else{
            return 'ir a la tienda  '.blue
        }
    }
//es una función que toma un parámetro bebida.y luego llama a la función busqueda con el valor de bebida y muestra si la bebida se encuentra en el arreglo informacion o no. Nuevamente, se utiliza la función .blue para dar formato al texto en color azul.
        const interfazbusqueda = (bebida) =>{
            console.log('##########################################'.yellow)
            console.log('#         funcion buscar bebida          #'.blue)
            console.log('##########################################'.red)
            console.log('###############################################'.yellow)
            console.log(`# para beber ${bebida} tiene que `.blue
            +functions.busqueda(bebida)+`###`.blue )
            console.log('##############################################\n'.red)
    
    }
//Se define una función flecha llamada mediosdetransport que toma un argumento llamado medio.
        const  mediosdetransport = (medio) => {
//Se crea una matriz medios que contiene cuatro cadenas de texto: 'avion', 'flota', 'carro', 'bicicleta'.
        const medios = ['avion','flota','carro','bicicleta']
//Se utiliza un switch statement para evaluar el valor de medio en relación a los elementos de la matriz medios
            switch (medios.find((element) => element === medio)){
                case 'avion':
                    return 'recuerde tener dinero para el pasaje '.blue
                break;
            case'flota':
                return 'recuerde tener dinero para el pasaje '.blue
                break;
            case 'carro':
                return  'recuerde llevar ropa comoda '.blue
                break;
                case 'bicicleta':
                return 'recuerde llevar ropa comoda '.blue
                break;
            default:
                'este medio no esta disponible '.blue
                break;            
                
        }
    }
//Se define una función flecha llamada interfazmediosdetrasport que toma un argumento llamado medio.
        const interfazmediosdetrasport = (medio) =>{
//La función imprime una serie de mensajes en la consola, 
            console.log('#################################'.yellow)
            console.log('#        funcion medios      `  #'.blue)
            console.log('#################################'.red)
            console.log('###############################################'.yellow)
            console.log(`#${medio}: `.blue +mediosdetransport(medio)+'##'.blue)
            console.log('###############################################\n'.red)
//Luego, la función llama a functions.mediosdetransport(medio)
    }
//Esta línea define una función llamada calcularPrecioConDescuento que toma dos parámetros: precioBase (el precio sin descuento) y descuentoPorcentaje (el porcentaje de descuento a aplicar)
        function calcularPrecioConDescuento(precioBase, descuentoPorcentaje) {
//Esta línea verifica si el descuentoPorcentaje está fuera del rango válido. El descuento debe estar entre 0 y 100. Si el porcentaje está fuera de ese rango, se ejecutará el siguiente bloque de código.
            if (descuentoPorcentaje < 0 || descuentoPorcentaje > 100) {
// Si el porcentaje de descuento no está en el rango válido, la función devuelve un mensaje de error que indica que el descuento debe estar entre 0 y 100.
                return "El descuento debe estar entre 0 y 100.";
            }
        
// Aquí se calcula el valor del descuentoDecimal al dividir el descuentoPorcentaje por 100. Esto convierte el porcentaje en un valor decimal para su cálculo.
        const descuentoDecimal = descuentoPorcentaje / 100;
// Se calcula el monto del descuento tomando el precioBase y multiplicándolo por descuentoDecimal. Esto da como resultado la cantidad de descuento en términos de la moneda utilizada
        const descuentoAmount = precioBase * descuentoDecimal;
    
// Se calcula el precio con el descuento aplicado restando el monto del descuento (descuentoAmount) del precioBase.
        const precioConDescuento = precioBase - descuentoAmount;
            
//Finalmente, se devuelve el precioConDescuento, que es el precio después de aplicar el descuento.
            return precioConDescuento;
        }

        //estas funciones se utilizan para recomendar una bebida basada en el tipo de plato que se le pasa como argumento a la función recomendarBebida. Luego, la función interfazrecomendarbebida se encarga de imprimir esta recomendación en la consola de una manera visualmente atractiva. Las recomendaciones de bebida están coloreadas en azul en el texto impreso
        const recomendarBebida = (plato) => {
        const platos = ['carne', 'pescado', 'verdura'];
            switch (platos.find((element) => element === plato)) {
                case "carne":
                return "Te recomiendo acompañar la carne con vino tinto.".blue;
            case "pescado":
                return "Te recomiendo acompañar el pescado con vino blanco.".blue;
            case "verdura":
                return "Te recomiendo acompañar las verduras con agua.".blue;
            default:
                return "No tengo una recomendación para ese plato.".blue;
            }
        };
    
        const interfazrecomendarbebida = (plato) => {
            console.log('#################################'.yellow)
            console.log('#       funcion recomendar   `  #'.blue)
            console.log('#################################'.red)
            console.log('###############################################'.yellow)
            console.log(`# ${plato}: `.blue + recomendarBebida(plato) + '##'.blue)
            console.log('###############################################\n'.red)
    };

    //En resumen, estas funciones se utilizan para proporcionar información sobre los juegos a los que una persona tiene acceso en función del monto que está dispuesta a pagar. La función interfazsalajuegos es principalmente para mostrar un mensaje formateado en la consola.
        const salajuegos = (pago) => {
    if (pago > 4000) {
        return "tienes acceso a todos los juegos";
    }else if(pago === 4000) {
        return "tienes acceso a todos los juegos:consola,2D,3D y realidad Virtual".blue;
    }else if(pago === 3000) {
        return "tienes acceso a los siguientes juegos:consola,2D,3D".blue;
    }else if(pago === 2000) {
        return "tienes acceso a los siguientes juegos:consola,2D".blue;
    }else if(pago === 1000){
        return "tienes acceso a los siguientes juegos:consola".blue;
    }else {
        return " insuficiente deposite mas money";
    }
    }

        const interfazsalajuegos = (pago) =>{
            console.log('#################################'.yellow)
            console.log('#        funcion juegos      `  #'.blue)
            console.log('#################################'.red)
            console.log('###############################################'.yellow)
            console.log(`#${pago}: `.blue + salajuegos(pago)+'##'.blue)
            console.log('###############################################\n'.red)
}

// Aquí se define una función flecha  llamada numero que toma un argumento llamado valor
        const numero = (valor) => {
//Esta línea verifica si el valor pasado como argumento es positivo. La función Math.sign() devuelve 1 si el número es positivo, -1 si es negativo y 0 si es cero
            if (Math.sign(valor) === 1) {
            return "El número es positivo.";
//Esta línea verifica si el valor pasado como argumento es negativo
        } else if (Math.sign(valor) === -1) {
            return "El número es negativo.";
        } else {
            return "El número es cero o no es un número válido.";
        }
    }
//Aquí se define otra función llamada interfaznumero que también toma un argumento valor
        const interfaznumero = (valor) => {
            console.log('#################################'.yellow);
            console.log('# funcion contar numero positivo   ` #'.blue);
            console.log('#################################'.red);
            console.log('#################################'.yellow);
            console.log(`#${valor}: `.blue + numero(valor) + '##'.blue);
            console.log('##################################\n'.red);
//este código define dos funciones en JavaScript La primera, numero, determina si un número es positivo o negativo o cero, y la segunda interfaznumero, muestra esta información en la consola junto con un formato decorativo
    }

//Esto define una función llamada mostrarNumerosPares que toma un argumento numeru.
        function mostrarNumerosPares(numeru) {
//Esto inicia un bucle for que va desde i = 1 hasta i sea menor o igual a numeru.
            for (let i = 1; i <= numeru; i++) {
//Esto verifica si i es un número par La expresión i % 2 calcula el residuo de la división de i entre 2, y si ese residuo es igual a 0, significa que i es un número par
                if (i % 2 === 0) {
                console.log(i);
            }
        }
//El propósito de la función mostrarNumerosPares es mostrar todos los números pares desde 1 hasta numeru en la consola
    }
    
    //Esto define una constante llamada interfazmostrarNumerospares que es una función de flecha que toma un argumento numeru.
        const interfazmostrarNumerospares = (numeru) => {
            console.log('#################################'.yellow);
            console.log('# funcion mostrar números pares #'.blue);
            console.log('#################################'.red);
            console.log('#################################'.yellow);
            console.log(`#${numeru}: `.blue);
            mostrarNumerosPares(numeru); 
            console.log('##################################\n'.red);    
    }
    //Esto define una constante llamada tablademultiplicar que es una función de flecha  que toma un argumento nur
        const tablademultiplicar = (nur) => {
//Esto inicia un bucle for que va desde i = 1 hasta i sea menor o igual a 10
//El bucle incrementa i en cada iteración (i++)
            for (let i = 1; i <= 10; i++) {
//Calcula el resultado de la multiplicación de nur por i y lo almacena en la variable resultado
            const resultado = nur * i;
            console.log(`${nur} x ${i} = ${resultado}`);
        }
    }
//Esto define una constante llamada interfaztablademultiplicar que es una función de flecha que toma un argumento nur
        const interfaztablademultiplicar = (nur) => {
            console.log('#################################'.yellow);
            console.log('# funcion tabla de multiplicar #'.blue);
            console.log('#################################'.red);
            console.log('#################################'.yellow);
            console.log(`#${nur}: `.blue);
            tablademultiplicar(nur);
            console.log('##################################\n'.red);
    }   

    //Esta línea declara una constante llamada claves y le asigna un array que contiene tres cadenas. Estas cadenas son claves de acceso
        const claves = ['sena69', 'sena40', 'sena13'];
    //Esta línea declara una variable llamada intentos e inicializa su valor en 0. Esta variable se utiliza para llevar un registro de la cantidad de intentos de acceso
        let intentos = 0;
    // Esta línea declara una función llamada verificarAcceso que toma un argumento llamado clave. La función se define utilizando una expresión de función flecha
        const verificarAcceso = (clave) => {
//Esto inicia una estructura condicional if. Comprueba si el número de intentos es menor que 3. Si es así, se ejecuta el código dentro de este bloque
            if (intentos < 3) {
//Dentro del bloque if, se verifica si el valor de clave se encuentra en el array claves utilizando el método includes. Si es cierto, significa que la clave es válida
                if (claves.includes(clave)) {
            console.log('####################################'.yellow);
            console.log('#       ACCESO CONCEDIDO           #'.blue);
            console.log('####################################\n'.red);
        } else {
            intentos++;
            console.log('####################################'.yellow);
            console.log('#       ACCESO DENEGADO            #'.blue);
            console.log('####################################\n'.red);
        }
    } else {
        console.log('####################################'.yellow);
        console.log('#         ALERTA INTRUSO           #'.blue);
        console.log('####################################\n'.red);
    }
    }

    //Esta línea declara una función llamada minimoMaximo que toma un argumento Dinumber, que es un array de números. La función se define utilizando una expresión de función flecha 
        const minimoMaximo = (Dinumber) => {
// Aquí se inicia una estructura condicional if para verificar si Dinumber es un array vacío o nulo. Si es así, significa que no hay datos para calcular mínimo, máximo y promedio, por lo que se retorna un objeto con todos los valores establecidos en undefined
            if (!Dinumber || Dinumber.length === 0) {
            return { minimo: undefined, maximo: undefined, promedio: undefined };
        }
//e inicializan dos variables, minimo y maximo, con el primer elemento del array Dinumber. Estas variables se utilizarán para realizar un seguimiento del valor mínimo y máximo a medida que se recorre el array
        let minimo = Dinumber[0];
        let maximo = Dinumber[0];
        let suma = 0;
//Dentro del bucle, se comparan los valores del elemento actual (dato) con minimo y maximo. Si dato es menor que minimo, se actualiza minimo con el valor de dato. Si dato es mayor que maximo, se actualiza maximo con el valor de dato
            for (const dato of Dinumber) {
            if (dato < minimo) {
                minimo = dato;
            }
            if (dato > maximo) {
                maximo = dato;
        }
            suma += dato;
    }

        const promedio = suma / Dinumber.length;

            return { minimo, maximo, promedio}
// resumen, esta función toma un array de números, encuentra el valor mínimo, el valor máximo y el promedio de esos números, y devuelve un objeto con estos valores. Si el array está vacío o nulo, devuelve un objeto con todas las propiedades establecidas en undefined
    }
//define una función llamada numerospares que toma un argumento numeros,que es un arreglo de números.
        function numerospares(numeros){
//Esta línea verifica si el arreglo numeros es falso (o nulo) o si su longitud es igual a cero
            if(!numeros || numeros.length === 0) {
            console.log("el arreglo de numeros esta vacion");
            return;

    }
// Si el arreglo de números no está vacío, se ejecuta esta línea. Aquí se utiliza el método filter() en el arreglo numeros para crear un nuevo arreglo llamado numerosparess. 
        const numerosparess = numeros.filter(numero => numero %2 === 0);
            console.log((`nuemro de numeros pares:${numerosparess.length}`.blue));
            console.log('########################################################'.green);
            console.log(('numeros pares'.green),numerosparess.join(','));
            console.log('##############################################################'.blue)
    }

//se exportan todas las funciones creadas
    functions.signo = signo;
    functions.interfazsigno = interfazsigno;
    functions.encontrocaracter = encontrocaracter;
    functions.interfazEncontrarcaracter = interfazEncontrarcaracter;
    functions.busqueda = busqueda;
    functions.interfazbusqueda = interfazbusqueda;
    functions.mediosdetransport = mediosdetransport;
    functions.interfazmediosdetrasport = interfazmediosdetrasport;
    functions.calcularPrecioConDescuento = calcularPrecioConDescuento
    functions.recomendarBebida = recomendarBebida;
    functions.interfazrecomendarbebida = interfazrecomendarbebida;
    functions. salajuegos = salajuegos;
    functions.interfazsalajuegos = interfazsalajuegos;
    functions.numero = numero;
    functions.interfaznumero = interfaznumero;
    functions.mostrarNumerosPares = mostrarNumerosPares;
    functions.interfazmostrarNumerospares =interfazmostrarNumerospares;
    functions.tablademultiplicar = tablademultiplicar;
    functions.interfaztablademultiplicar = interfaztablademultiplicar;
    functions.verificarAcceso = verificarAcceso;
    functions.minimoMaximo = minimoMaximo;
    functions.numerospares = numerospares;

    module.exports=functions;




