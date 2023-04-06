var zero = 0;
var numero = 2023;
var numeroNegativo = -250;
var numeroReal = 25.65;
var pi = 3.1415;
var realNegativo = -19.13;
var realZero = 10.0;
var frase = 'Hello'
var frase2 = 'Sou um Else'


console.log((numero * pi) - realNegativo );

var resultado = (numero * pi) - realNegativo;

if (resultado == 3400) {
    console.log(frase);

} else {
    console.log(frase2);
}

const USER_ADMIN = { name:'Gabriel Barreto ',
login:'root', cargo:'Membro: ', salario:'R$ 1000,00'
};

USER_ADMIN.login = 'admin';
console.log(USER_ADMIN.cargo + USER_ADMIN.salario);

if (USER_ADMIN == 'a') {
  console.log('Sou eu mesmo')

}else {
  console.log('Eu não sou o Gabriel')
}  