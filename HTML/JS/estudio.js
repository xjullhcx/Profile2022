/*var MiPrimerVAriable = '5';
console.log(MiPrimerVAriable);
if(MiPrimerVAriable==5)
{
    console.log("ingreso al if");
}
else 
{ 
    console.log("ingreso al else");

}


var MiSegundaVariable = new String('hola _tu')
console.log(MiSegundaVariable);

console.log(typeof MiPrimerVAriable, "__", typeof MiSegundaVariable);

var suma = '5+5';
console.log(eval(suma));

var ObjetoAndrea = { nombre:'andrea',edad:32, carro: 'mazda '}
console.log(ObjetoAndrea)*/

/* ahora se inicia el estudio de los ciclos o iteracione */
/*
let arreglo_cuadrado = [[1,2,3],[5,6,7],[8,9,10]];
console.log(arreglo_cuadrado);
console.log("Ahora la suma de la primer diagonal");
let suma1=arreglo_cuadrado[0][0]+arreglo_cuadrado[1][1]+arreglo_cuadrado[2][2];
console.log(suma1);
let suma2=arreglo_cuadrado[0][2]+arreglo_cuadrado[1][1]+arreglo_cuadrado[2][0];
console.log("Ahora la suma de la segunda diagonal");
console.log(suma2);


/*sumar las diagonales de una matriz con for*/
/*
suma1=0;
suma2=0;
for (var indice =0;indice<arreglo_cuadrado.length;indice++){
    suma1+=arreglo_cuadrado[indice][indice];
    console.log(arreglo_cuadrado.length-1-indice);
    suma2+=arreglo_cuadrado[indice][arreglo_cuadrado.length-1-indice];
    
}
console.log("Ahora la suma de la primer diagonal con for");
console.log(suma1,suma2);
*/

/*ahora vamos a crear un objeto con objetos y arreglos*/

let ProvedorCamaras={
    NombreCompania:'vivotec',
    Nit:12214521,
    Sucursal:[{
        NombreSucursal:'Chapinero',
        DireccionSucursal:'carrera 50 # 30-58',
        TelefonoSucursal:'23658965'
        },
        {
        NombreSucursal:'Centro',
        DireccionSucursal:'calle 43 # 33-458',
        TelefonoSucursal:'23658965'
        }
    ],
    AsesoresComerciales:[{
        NombreComercial:'Juan Lopez',
        TelefonoComercial:'3202222222',
        Email:'juan.lopez@gmail.com',
        Sucursal:'Chapinero'
    }]
};
console.log('Nombre de las sucursales');
console.log(ProvedorCamaras.Sucursal[0].NombreSucursal);
console.log(ProvedorCamaras.Sucursal[1].NombreSucursal);
console.log('Direccion de las sucursales');
console.log(ProvedorCamaras.Sucursal[0].DireccionSucursal);
console.log(ProvedorCamaras.Sucursal[1].DireccionSucursal);
console.log('Asesores Comerciales');
console.log(ProvedorCamaras.AsesoresComerciales[0].NombreComercial);