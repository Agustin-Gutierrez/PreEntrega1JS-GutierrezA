let menuItem1 = 0;

function menuOK(){
    return menuItem1!==1 || menuItem1!==2 || menuItem1!==3
}



let nombreUsuario = prompt("Bienvenido a CórdobaClimbs, por favor ingresa tu nombre:")
alert("Hola " + nombreUsuario + "! Los pies de gato son un tipo de calzado especializado utilizado en la escalada en roca. Son zapatos ajustados y flexibles diseñados específicamente para proporcionar un mayor agarre y sensibilidad en la superficie de la roca. Es por esto que elegir el modelo correcto es tan importante. (Presiona \"OK\")")

menuItem1 = 0;

for (; menuItem1 !== 1 || menuItem1 !== 2 || menuItem1 !== 3;) {

    let menuItem1 = prompt( " Para elegir los pies de gato correctos, se deben considerar tres factores principales: \n1)- La morfología de su pie: el ancho del pie es el primer elemento en el que nos debemos focalizar para elegir pie de gatos más adecuado. \n2)- El uso que harás del pie de gato: la elección está fuertemente relacionada con el tipo de escalada y con el uso. \n3)- Tu nivel de experiencia: para los pies novatos, es necesario elegir con cuidado."+ menuItem1)
}




const MIN_POWER = 10;
const MAX_POWER = 30;
 
let energiaGoku = 100;
let energiaSuperman = 100;

let round = 0;

function calcularGolpe(){
    return Math.ceil(Math.random()*(MAX_POWER - MIN_POWER) + MIN_POWER);
}

function siguenVivos(){
    return energiaGoku>0 && energiaSuperman>0 
}

function gokuSigueVivo(){
    return energiaGoku > 0;
}


while(siguenVivos()){
    round +=1;   
    let golpeGoku = calcularGolpe()
    let golpeSuperman = calcularGolpe()

    if(golpeGoku === golpeSuperman){
        energiaSuperman -= golpeGoku;
        energiaGoku -= golpeSuperman;
    }else if(golpeGoku>golpeSuperman){
        energiaSuperman -= golpeGoku;
        document.write('<div class="card"><img src="images/golpeGoku.jpeg" alt="Golpe Goku" /></div>');

    }else {
        energiaGoku -= golpeSuperman;
        document.write('<div class="card"><img src="images/golpeSuperman.jpeg" alt="Golpe Superman" /></div>')
    }
    console.log("-------------------");
    console.log("------ Round "+ round + "-------");

    console.log("Energia Goku " + energiaGoku);
    console.log("Energia Superman " + energiaSuperman);

}

console.log("-------------------");

if(gokuSigueVivo()){
    console.log("GANADOR GOKU");

    document.write('<div class="ganador"><img src="images/wingoku.jpeg" alt="Gano Goku" /></div>')
}else {
    console.log("GANADOR SUPERMAN");
    document.write('<div class="ganador"> <img src="images/winsuperman.jpg" alt="Gano Superman" /></div>')
}
console.log("-------------------");

let nombreUsuario = prompt("Bienvenido a CórdobaClimbs, por favor ingresa tu nombre:")
alert("Hola " + nombreUsuario + "! Los pies de gato son un tipo de calzado especializado utilizado en la escalada en roca. Son zapatos ajustados y flexibles diseñados específicamente para proporcionar un mayor agarre y sensibilidad en la superficie de la roca. Es por esto que elegir el modelo correcto es tan importante. (Presiona \"OK\")")


var menuItem1 = 0;


while ( menuItem1 !== 1 || menuItem1 !== 2 || menuItem1 !== 3) {
  // Código a ejecutar en cada iteración
  // ...

  if (i === 5) {
    var miVariable = "Valor de la variable";
    declarada = true;
  }

  i++;
}

let menuItem1 = prompt( " Para elegir los pies de gato correctos, se deben considerar tres factores principales: \n1)- La morfología de su pie: el ancho del pie es el primer elemento en el que nos debemos focalizar para elegir pie de gatos más adecuado. \n2)- El uso que harás del pie de gato: la elección está fuertemente relacionada con el tipo de escalada y con el uso. \n3)- Tu nivel de experiencia: para los pies novatos, es necesario elegir con cuidado."+ menuItem1)
}

var condicion1 = false;
var condicion2 = true;
var contador = 0;

while (condicion1 || condicion2) {
  // Código a ejecutar en cada iteración
  // ...

  contador++;

  // Actualizar las condiciones en cada iteración
  condicion1 = contador < 5;
  condicion2 = contador % 2 === 0;
}