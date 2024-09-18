function tabuada(){
    let nm = document.getElementById('nm')
    let tabu = document.getElementById('tabu')

    if(nm.value.length == 0) {
         alert('Por favor, digite um número')
    }else{
        let n = Number(nm.value)
        let c = 1
        tabu.innerHTML = ''
        while (c <= 10){
            let item = document.createElement('option')
            item.text = `${n} x ${c} = ${n*c}`
            item.value = `tabu${c}`
            tabu.appendChild(item)
            c++
        }
    }
    
}