function carregar(){
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var data = new Date()
    // var hora = data.getHours()
    var hora = 22
    msg.innerHTML = `Agora são ${hora} horas.`

    if(hora >= 0 && hora < 12 ){
        // Bom Dia!
        img.src = 'manha.png'
        document.body.style.background = '#bba05b'
    }else if (hora >= 12 && hora <= 18) {
        // Boa tarde !
        img.src = 'tarde.png'
        document.body.style.background = '#4f4d58'
    } else {
        // Boa noite
        img.src = 'noite.png'
        document.body.style.background = '#1e1a1b'
        z
    }
}

