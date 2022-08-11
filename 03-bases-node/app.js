
var colors = require ('colors');
//const Multiplica = require('./helpers/multiplica');
const {getTablaMultiplicar} = require('./helpers/multiplica');
const argv = require('./config/yargs');


console.clear();
console.log('Inicio del programa'.rainbow);

getTablaMultiplicar(argv.M,argv.L,argv.I,argv.O,argv.A)
.then (nombrearchivo => console.log(`\ntabla-${argv.M}.txt`.underline.random,'creado\n fin del programa'.green))
.catch(err => console.log(err));




//console.log (`\nFin del programa`);
//const [ , , arg3='Multiplicador=5'] = process.argv;
//const [, multiplicador=1]= arg3.split('=');









