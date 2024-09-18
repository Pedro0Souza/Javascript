var agora = new Date()
var diasem = agora.getDay()
// Dias da semana no JS
// Domingo a Sabado

console.log(diasem)
switch(diasem) {
    case 0:
        console.log('Domingo')
        break
    case 1:
        console.log('Segunda')
        break
    case 2:
        console.log('Terça')
        break
    case 3:
        console.log('Quarta-Feira')
        break
    case 4:
        console.log('Quinta-feira')
        break
    case 5:
        console.log('Sexta-feira')
        break
    case 6:
        console.log('Sábado')
        break
    default: 
        console.log('{ERRO} Dia inválido')
}