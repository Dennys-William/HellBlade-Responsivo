var radio = document.querySelector('manual-btn')
var cont = 1
//document.getElementById('radio1').checked = false
let variT = document.getElementById('radio1').checked = true




let fa = document.querySelector('.fa')
fa.addEventListener('click', botao)
let icon = document.querySelector('.icon')
let icon1 = document.querySelector('.icon1')






     
    
     let imgL = setInterval(() =>{
        if (variT){
            proximaImg()
        }
     } ,4000)

     function proximaImg(){

        cont++
        if(cont > 4){
            cont = 1
        }
        document.getElementById('radio'+cont).checked = true 
        
    }



  function botao(){
  
    
   if(icon.style.visibility == 'hidden') {
     icon.style.visibility = 'visible'
     icon.style.width = '100%'
     
     icon1.style.visibility = 'hidden'
     icon1.style.width = '0%'
     
     variT = true

    
    
  }
  else if (icon1.style.visibility = 'visible') {
    icon.style.visibility = 'hidden'
    icon.style.width = '0%'
    
    icon1.style.visibility = 'visible'
    icon1.style.width = '100%'
    variT = false

   
}


  }







let bot = document.querySelector('.imagens')
bot.addEventListener('click', aperte)
let menu1 = document.querySelector('.menu')
let close1 = document.querySelector('.close')
let item = document.querySelector('.item')


function aperte() {
    if(item.style.visibility == 'visible') {
       item.style.visibility = 'hidden'
        item.style.overflow = 'hidden'
       item.style.width = '0%'

        menu1.style.width = '100%'
        close1.style.width = '0%'
    }
    else {
          item.style.visibility = 'visible'
          item.style.overflow = 'visible'
          item.style.width = '100%'

          menu1.style.width = '0%'
          close1.style.width = '100%'
    }
}