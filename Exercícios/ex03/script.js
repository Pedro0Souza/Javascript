function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')

    if (fano.value.lenght == 0 || Number(fano.value) > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var gender = ''
        var img = document.createElement('img')
        img.setAttribute('id','foto')
        if(fsex[0].checked) {
            gender = 'Homem'
            if(idade >= 0 && idade < 10){
                // criança
                img.setAttribute('src','crianca-h.png')
            } else if(idade < 21){
                // jovem
                img.setAttribute('src','jovem-h.png')

            }else if(idade < 50){
                // adulto
                img.setAttribute('src','homem.png')

            }else {
                // idoso
                img.setAttribute('src','idoso.png')

            }

                
        } else if (fsex[1].checked){
            gender = 'Mulher'
            if(idade >= 0 && idade <= 10){
                // criança
                img.setAttribute('src','crianca-mu.png')

            } else if(idade < 21){
                // jovem
                img.setAttribute('src','jovem-m.png')

            }else if(idade < 50){
                // adulto
                img.setAttribute('src','mulher.png')

            }else {
                // idoso
                img.setAttribute('src','idosa.png')

            }
        }
        res.style.textAlign = 'center'
        res.innerHTML =`Detectamos ${gender} com ${idade} anos`
        res.appendChild(img)
    }
}