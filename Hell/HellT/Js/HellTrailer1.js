let bot = document.querySelector('.botao1H')
bot.addEventListener('click', veri)
let foto = document.querySelector('.fotoH')
let botao = document.querySelector('.botaoH')
let botao1 = document.querySelector('.botao1H')
let video = document.querySelector('.videoH')
let caixa = document.querySelector('.caixaH')
let caixa1 = document.querySelector('.caixa1H')
let logo = document.querySelector('.logoH')

//Parte debaixo
let caixaB = document.querySelector('.caixaB')
let caixaB1 = document.querySelector('.caixaB1')
let fotoB = document.querySelector('.fotoB')
let logoB = document.querySelector('.logoB')
let logoB1 = document.querySelector('.logoB1')
let botaoB = document.querySelector('.botaoB')
let botaoB1 = document.querySelector('.botaoB1')
let videoB = document.querySelector('.videoB')




setTimeout(() => {

    caixa1.style.transition = '1.5s'
    caixa1.style.minWidth = '320px'
    caixa1.style.maxWidth = '500px'
    botao.style.width = '90px'

}, 1000)


function veri() {


    foto.style.minHeight = '0px'
    foto.style.maxHeight = '0px'
    foto.style.transition = '0.6s'
    foto.style.position = 'absolute'

    botao.style.height = '0px'
    botao1.style.height = '0px'

    caixa1.style.minHeight = '400px'
    caixa1.style.maxHeight = '800px'


    video.style.height = '100%'

    video.style.visibility = 'visible'
    
    /*video.innerHTML = `
  <iframe class="videoH" 
          src="https://www.youtube.com/embed/OnaIgCIDOWM?autoplay=1&rel=0" 
          title="YouTube video player" 
          frameborder="0" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
          referrerpolicy="strict-origin-when-cross-origin" 
          allowfullscreen>
  </iframe>`;
  */
 
  video.innerHTML = `
  <iframe class="videoH" 
          src="https://www.youtube.com/embed/OnaIgCIDOWM?autoplay=1&rel=0&loop=1&playlist=OnaIgCIDOWM" 
          title="YouTube video player" 
          frameborder="0" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
          referrerpolicy="strict-origin-when-cross-origin" 
          allowfullscreen>
  </iframe>`;

 

   
}


let botB = document.querySelector('.botaoB1')
botB.addEventListener('click', veriB)

function veriB() {
    fotoB.style.minHeight = '0px'
    fotoB.style.maxHeight = '0px'
    fotoB.style.position = 'absolute'

    botaoB.style.width = '0px'
    botaoB1.style.width = '0px'

    caixaB1.style.minHeight = '400px'
    caixaB1.style.maxHeight = '800px'

    videoB.style.height = '100%'
    videoB.style.visibility = 'visible'
    videoB.innerHTML = `
  <iframe class="videoB" 
          src="https://www.youtube.com/embed/3VYGOkMnGCE?autoplay=1&rel=0" 
          title="YouTube video player" 
          frameborder="0" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
          referrerpolicy="strict-origin-when-cross-origin" 
          allowfullscreen>
  </iframe>`;

}


let sc = document.querySelector('.setcimaH')
sc.addEventListener('click', sbaixo)
let setcima = document.querySelector('.setcimaH')



function sbaixo() { //Parte de cima que vai fechar

    //                                CIMA
    caixa.style.height = '0vh'
    //Os 2 codigo abaixo são para dar uma animação ao quadrado da parte de cima na hora de desce ou subir.
    caixa1.style.minWidth = '130px'
    caixa1.style.maxWidth = '0px'
    //
    logo.style.height = '0px'
    botao1.style.height = '0px'
    //Esses 2 com inicio de 'set' são para não fica feio na hora da animação
    setcima.style.display = 'none'
    setbaixo.style.display = 'block'




    video.style.display = 'none'


    video.style.height = '0%'


    setTimeout(function () {
        video.innerHTML = '<iframe class="videoH"></iframe>'
    }, 1000)


    if (videoB.style.display == 'none') {
        videoB.style.display = 'block'

        fotoB.style.minHeight = '320px'
        fotoB.style.maxHeight = '300px'
        fotoB.style.position = 'initial'

        videoB.style.position = 'absolute'
        videoB.style.height = '0%'
        videoB.style.visibility = 'hidden'


        botaoB.style.width = '90px'
        botaoB1.style.width = '100%'

    }

    //                                  FIM DO CIMA

    //                                  BAIXO
    caixaB.style.height = '100vh'
    caixaB1.style.minHeight = '320px'
    caixaB1.style.maxHeight = '800px'

    fotoB.style.minHeight = '320px'
    fotoB.style.maxHeight = '300px'

    logoB.style.height = '15vh'


    botaoB.style.width = '90px'
    botaoB1.style.width = '100%'
    //                                  FIM DO BAIXO

}


let des = document.querySelector('.Setbaixo')
des.addEventListener('click', scima)
let setbaixo = document.querySelector('.Setbaixo')

function scima() { //Parte de baixo que vai fechar

    //                                CIMA
    //Esses 2 com inicio de 'set' são para não fica feio na hora da animação
    setcima.style.display = 'block'
    setbaixo.style.display = 'none'


    caixa.style.height = '100vh'
    //Os 2 codigo abaixo e para animação da 'caixa1' quando subir a tela
    caixa1.style.minWidth = '320px'
    caixa1.style.maxWidth = '500px'
    //
    caixa1.style.minHeight = '320px'
    caixa1.style.maxHeight = '800px'



    logo.style.height = '18vh'
    botao1.style.height = '86px'


    //videosBB
    videoB.style.display = 'none'

    videoB.style.height = '0%'

    setTimeout(function () {
        videoB.innerHTML = '<iframe class="videoB"></iframe>'
    }, 1000)


    if (video.style.display == 'none') { //Video de da parte de cima

        video.style.display = 'block'



        video.style.height = '0%'
        video.style.visibility = 'hidden'
        video.style.position = 'absolute'
        foto.style.minHeight = '320px'
        foto.style.maxHeight = '300px'
        foto.style.transition = '0s'
        foto.style.position = 'initial'

        botao.style.height = '100%'
        botao1.style.height = '86px'

    }



    //                                  FIM DO CIMA

    //                                  BAIXO
    caixaB.style.height = '0vh'
    caixaB1.style.minHeight = '0px'
    caixaB1.style.maxHeight = '0px'

    fotoB.style.minHeight = '0px'
    fotoB.style.maxHeight = '0px'

    logoB.style.height = '0px'


    botaoB.style.width = '0px'
    botaoB1.style.width = '0%'


    //                                  FIM DO BAIXO
}


