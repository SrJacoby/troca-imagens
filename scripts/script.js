// Imagens
const imageList = ['img/sunrise.jpg', 'img/morning.jpg', 'img/afternoon.jpg', 'img/evening.jpg']
const currentImage = document.querySelector('img#image')

// Botões
const sunriseButton = document.querySelector('button#sunrise')
const morningButton = document.querySelector('button#morning')
const afternoonButton = document.querySelector('button#afternoon')
const eveningButton = document.querySelector('button#evening')

const componentsColor = [document.body, document.querySelector('footer')]

// Funções

sunriseButton.addEventListener('click', function(){
    currentImage.src = imageList[0]
    componentsColor[0].style.background = '#004954'
    componentsColor[1].style.background = '#004954'
})

morningButton.addEventListener('click', function(){
    currentImage.src = imageList[1]
    componentsColor[0].style.background = '#D8AB1C'
    componentsColor[1].style.background = '#D8AB1C'
    
})

afternoonButton.addEventListener('click', function(){
    currentImage.src = imageList[2]
    componentsColor[0].style.background = '#E46300'
    componentsColor[1].style.background = '#E46300'
})

eveningButton.addEventListener('click', function(){
    currentImage.src = imageList[3]
    componentsColor[0].style.background = '#001D39'
    componentsColor[1].style.background = '#001D39'
})