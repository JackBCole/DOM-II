// Your code goes here

//document.querySelector('.content-section .img-content').classList = 'map-picture'
const anImage = document.querySelector('.img-content')

anImage.addEventListener('mouseenter', function(){
    anImage.style= 'width: 45%'
})
anImage.addEventListener('mouseleave', function(){
    anImage.style= ''
})

const aLink = document.querySelector('a')

aLink.addEventListener('drag', () => {
    aLink.textContent = 'hey, put me down!',
    aLink.style.color = 'red'
})

aLink.addEventListener('dragend', () => {
    aLink.textContent = 'Home'
    aLink.style.color = ''
})

const funBus = document.querySelector('h1')

document.addEventListener('keydown', (eventObj) => {
    if (eventObj.key === 'Escape')   {
        funBus.style.color = 'red'
        //console.log('espape!')
        }
})
document.addEventListener('keyup', (eventObj) => {
    if (eventObj.key === 'Escape')   {
        funBus.style.color = ''
        //console.log('espape!')
        }
})


 let scale = 1;

 anImage.addEventListener('wheel', function(event){
    event.preventDefault()
    scale += event.deltaY * -0.01
    // Restrict scale
    scale = Math.min(Math.max(.45, scale), 1.22)
    // Apply scale transform
    anImage.style.transform = `scale(${scale})`
})

 

  
var funBusWelcome = document.querySelector('.container.home .intro h2')
//funBusWelcome.textContent = 'Hello1'
funBusWelcome.addEventListener('select', function (){
  funBusWelcome.textContent = 'welcome';
})
 
const busImage =  document.querySelector('.container.home .intro img')
busImage.addEventListener('dblclick', function(){
    busImage.style = 'height: 100%'

})
busImage.addEventListener('click', function(){
    busImage.style = 'height: 200%'

})