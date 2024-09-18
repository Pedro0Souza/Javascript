function contar(){
    var inicio = document.getElementById('inicio')
    var fim = document.getElementById('fim')
    var passo = document. getElementById('passo')
    var msg = document.getElementById('msg')

    if(inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0){
        alert('[ERRO] campos não preenchidos!')
        msg.innerHTML = 'Impossível contar'
    } else {
        msg.innerHTML = 'Contando: '
        let i = Number(inicio.value)
        let f = Number(fim.value)
        let p = Number(passo.value)
      if(p <= 0){
        alert('Passo inválido, CONSIDERANDO PASSO 1')
        p = 1
      }
      if(i < f) {
        // contagem crescente
        for(let c = 1; c <= f; c += p){
         msg.innerHTML += `${c} \u{1F449}`
        }
    } else {
        // contagem regressiva
        for(let c = i; c >= f; c -= p) {
            msg.innerHTML += `${c} \u{1F449}`
        }
    }
      msg.innerHTML += `\u{1F3C1}`
    }
}
