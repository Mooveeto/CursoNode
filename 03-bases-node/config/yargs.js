
const argv = require('yargs')
.option('M',{
    alias:'Multiplicador',
    type: 'number',
    default: 10,
    describe: 'Nº seleccionado para Multiplicar'
})
.option('L',{
    alias:'Multiplicaciones',
    type: 'number',
    default: 9,
    describe:'Nº de Multiplicaciones a realizar'
})
.option('I',{
    alias: 'inimult',
    type: 'number',
    default: 1,
    describe:'Primer operador en la serie de multiplicaciones'
})
.option (`O`,{
    alias:'listado',
    type:'boolean',
    default: false,
    describe:'Presentar resultado importado 1/0'
})
.option('A',{
alias:'incr_it',
type:'number',
default: 1,
describe:'incremento operador en cada iteración, default --> 1'
})
.argv;

module.exports = argv;