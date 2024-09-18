function calc(){
    var ic= document.getElementById('ic')
    var fc= document.getElementById('fc')
    var ps = document.getElementById('ps')
    var res= document.getElementById('res')

    if (ic.value.length ==0 || fc.value.length == 0 || ps.value.length == 0){
       alert('Insira um valor para começar a contagem') 
    } else {
        res.innerHTML = 'Contando :' 
        let i = Number(ic.value)
        let f = Number(fc.value)
        let p = Number(ps.value)

        if(p <= 0){
            alert('Número de passos não inseridos, considerando 1 de passo a partir de agora.')
            p = 1
        }
        if(i < f){
            for(let c = i; c <= f; c += p){
                res.innerHTML += `${c} `
            }
        } else {
            for(c = i; c >= f; c -= p){
                res.innerHTML += `${c} `
            }
        }
      
    } 
    
}