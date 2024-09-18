var valores = [8, 1, 3, 5, 6]
console.log(valores)

//  for(let pos=0;pos < valores.length; pos++){
//     console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
// }


for(let pos in valores){
    console.log(`A posiçãp ${pos} tem o valor ${valores[pos]}`)
}
