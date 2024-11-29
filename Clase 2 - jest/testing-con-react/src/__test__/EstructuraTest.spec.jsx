const usuario = {
    nombre:"pepe",
    city:"Buenos aires"
}

const addFunction = (num1, num2)=>{
    return num1+num2;
};

//describe, test = it
describe("Pruebas de la vista Lista de productos",()=>{
    let arreglo;
    //beforeEach, beforeAll, afterEach, afterAll
    beforeAll(()=>{
        console.log("beforeAll, antes de todas las pruebas");
        //inicializar variables, iniciar conexion con un base de datos.
        arreglo = [1,2,3,4];
    });

    afterAll(()=>{
        //limpieza de variables, desmontar componentes, cerrar conexiones
        arreglo = [];
        console.log("afterAll, despues de todas las pruebas", arreglo);
    })

    beforeEach(()=>{
        console.log("beforeEach, antes de que comience cada prueba");
    })

    afterEach(()=>{
        console.log("afterEach, despues de finalizar cada prueba");
    });

    // describe("seccion filtros", ()=>{
    //     beforeAll(()=>{
    //         console.log("Este describe solo aplica para la seccion filtros");
    //     })
    //     test("Prueba 1 filtros",()=>{
    //         console.log("Prueba 1 filtros");
    //     });
    // });

    test("deberia listar todos los productos", ()=>{
        const copyUsuario = {...usuario};
        copyUsuario.apellido = "Perez";
        console.log("Prueba 1", arreglo);
        expect(addFunction(5,4)).toBe(9);
    });

    test("deberia listar todas las categorias",()=>{
        const copyUsuario = {...usuario};
        copyUsuario.apellido = "Perez";
        console.log("Prueba 2", arreglo);
    });

    test("deberia redireccionar a la vista de detalle al dar click en un producto",()=>{
        console.log("Prueba 3", arreglo);
    });
})