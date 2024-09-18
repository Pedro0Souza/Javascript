let num = document.querySelector('input#num')
let list = document.querySelector('Select#list')
let res = document.querySelector('div#res')
let valores = []

function isnumero(n){
    if(Number(n) >= 1 && Number(n) <= 100){
        return true
    } else{
        return false
    }
}

function inlista(n,l){
    if(l.indexOf(Number(n)) != -1) {
        return true
    } else{
        return false
    }
}

function adicionar(){
    if(isnumero(num.value) && !inlista(num.value, valores) ){
     
    }else{
        alert('Valor inválido ou já encontrado na lista')
    }
}