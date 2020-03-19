class Coche{
    constructor(modelo,velocidad,antiguedad){
        this.modelo=modelo
        this.velocidad=velocidad
        this.antiguedad=antiguedad
    }
    aumentarVelocidad(){
        this.velocidad+=1;

    }
    reducirVelocidad(){
        this.velocidad-=1;
    }
}
class Autobus extends Coche{
    constructor(modelo,velocidad,antiguedad){
        super(modelo,velocidad,antiguedad)
        this.altura=5
    }
    mostrarAltura(){
       return 'La altura del bus es:'+this.altura+' metros';
    }
}
var autobus1 =  new Autobus('Pegasus',200,2020);
console.log(autobus1.mostrarAltura())
var coche1=new Coche('VMW',200,2020);
var coche2=new Coche('Audi',100,2010);
var coche3=new Coche('Mercedes',230,2019);
document.write("<h1>Velocidad:"+coche1.velocidad+"</h1>");
coche1.aumentarVelocidad()
coche1.aumentarVelocidad()
coche1.aumentarVelocidad()
document.write("<h1>Velocidad:"+coche1.velocidad+"</h1>");

console.log(coche1);
console.log(coche2);

