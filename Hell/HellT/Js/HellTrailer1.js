let bot = document.querySelector('.botao1H')
let botB = document.querySelector('.botaoB1')

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
    
    caixa1.classList.toggle('caixa1H-inicio')
    botao.classList.toggle('botaoH-inicio')
    botao1.classList.toggle('botao1H-inicio')
}, 1200)



bot.addEventListener('click', () => {

    foto.classList.add('fotoH-clique') 
    botao.classList.add('botaoH-clique')
    botao1.classList.add('botao1H-clique')
    caixa1.classList.add('caixa1H-clique')

  
        
    
    setTimeout(() => {
        video.innerHTML = `
        <iframe class="videoH" 
                src="https://www.youtube.com/embed/OnaIgCIDOWM?autoplay=1&rel=0&loop=1&playlist=OnaIgCIDOWM" 
                title="YouTube video player" 
                frameborder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                referrerpolicy="strict-origin-when-cross-origin" 
                allowfullscreen>
        </iframe>`;
    }, 1200)

   
})





botB.addEventListener('click', () => {
    
    fotoB.classList.add('fotoB-clique')
    caixaB1.classList.add('caixaB1-clique')
    botaoB.classList.add('botaoB-clique')
    botaoB1.classList.add('botaoB1-clique')
   
 

  setTimeout(() => {
    videoB.innerHTML = `
    <iframe class="videoB" 
            src="https://www.youtube.com/embed/3VYGOkMnGCE?autoplay=1&rel=0" 
            title="YouTube video player" 
            frameborder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            referrerpolicy="strict-origin-when-cross-origin" 
            allowfullscreen>
    </iframe>`;

}, 1200)

})




//Comando do botão que fica na parte de cima, mas que ao clicar nele, a tela vai para baixo.
let setcimaH  = document.querySelector('.setcimaH')
let subir  = document.querySelector('.setcimaH')
setcimaH.addEventListener('click', () => {
    /* Parte de cima */
    caixa.classList.add('caixaH-desce')
    botao1.classList.toggle('botao1H-desce')

    subir.style.display = 'none'
    desce.style.display = 'block'
     

    /* Parte de baixo */
    
    caixaB.classList.add('caixaB-desce')
    caixaB1.classList.add('caixaB1-desce')
    botaoB1.classList.add('botaoB1-desce')
    logoB1.classList.add('logoB1-desce')
    
   
   
      //Video

      if(subir.style.display == 'none') {
       
        setTimeout(() => {
    
        foto.classList.remove('fotoH-clique') 
        botao.classList.remove('botaoH-clique')
        botao1.classList.remove('botao1H-clique')
        caixa1.classList.remove('caixa1H-clique')
        video.innerHTML = ``;
        }, 1200)
        
    } 
  
})


let des = document.querySelector('.Setbaixo')
let desce = document.querySelector('.Setbaixo')
des.addEventListener('click', () => {
    /* Parte de cima */
    caixa.classList.remove('caixaH-desce')
    subir.style.display = 'block'
    desce.style.display = 'none'
    /* Parte de baixo */

    caixaB.classList.remove('caixaB-desce')
    caixaB1.classList.remove('caixaB1-desce')
    logoB1.classList.remove('logoB1-desce')
    botaoB1.classList.remove('botaoB1-desce')
    //Video
    if(desce.style.display == 'none') {
        setTimeout(() => {
            fotoB.classList.remove('fotoB-clique')
            caixaB1.classList.remove('caixaB1-clique')
            botaoB.classList.remove('botaoB-clique')
            botaoB1.classList.remove('botaoB1-clique')
            videoB.innerHTML = ``;
        }, 1200)
       
    }
})




