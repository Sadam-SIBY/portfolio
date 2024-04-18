// ---
const hamMenuBtn = document.querySelector('.header__main-ham-menu-cont')
const smallMenu = document.querySelector('.header__sm-menu')
const headerHamMenuBtn = document.querySelector('.header__main-ham-menu')
const headerHamMenuCloseBtn = document.querySelector(
  '.header__main-ham-menu-close'
)
const headerSmallMenuLinks = document.querySelectorAll('.header__sm-menu-link')

hamMenuBtn.addEventListener('click', () => {
  if (smallMenu.classList.contains('header__sm-menu--active')) {
    smallMenu.classList.remove('header__sm-menu--active')
  } else {
    smallMenu.classList.add('header__sm-menu--active')
  }
  if (headerHamMenuBtn.classList.contains('d-none')) {
    headerHamMenuBtn.classList.remove('d-none')
    headerHamMenuCloseBtn.classList.add('d-none')
  } else {
    headerHamMenuBtn.classList.add('d-none')
    headerHamMenuCloseBtn.classList.remove('d-none')
  }
}) 

for (let i = 0; i < headerSmallMenuLinks.length; i++) {
  headerSmallMenuLinks[i].addEventListener('click', () => {
    smallMenu.classList.remove('header__sm-menu--active')
    headerHamMenuBtn.classList.remove('d-none')
    headerHamMenuCloseBtn.classList.add('d-none')
  })
}

// ---
const headerLogoConatiner = document.querySelector('.header__logo-container')

headerLogoConatiner.addEventListener('click', () => {
  location.href = '/'
})

// -----------------------------------------------------------


var imageUrls   = [
                    [
                      'url("assets/images/oboulot.png")','url("assets/images/connexion.png")'
                    ]
                    ,
                    [
                      'url("assets/images/bord.png")','url("assets/images/classe.png")','url("assets/images/exo.png")','url("assets/images/addQuestion.png")','url("assets/images/btp.png")','url("assets/images/eleve.png")'
                    ],
                    [
                      'url("assets/images/AlloFlix.png")', 'url("assets/images/AlloFlixAdd.png")'
                    ]
]

// var imageNumber = imageUrls.length

for (var i = 0; i < imageUrls.length; i++){
  var imageNumber = imageUrls[i].length
  console.log(imageNumber);
}


function imagePop(id){

  document.getElementById('imagePopId').style.display = 'block'
  document.getElementsByTagName('body')[0].style.overflowY = 'hidden'

    var imageName = document.getElementById(id + '-image').style.backgroundImage




    // var imageIndex = 0
  
    for (var i = 0; i < imageUrls.length; i++){

      i.array.forEach(element => {
        imageIndex = element.indexOf(imageName)
 
      });

      // for (var imageNumber = 0 ;  imageNumber < imageUrls[i].length; imageNumber++){
      //   imageIndex = imageNumber.indexOf(imageName)
        
      //   console.log(imageNumber);
   
      // }
    }
    

    // imageIndex = imageUrls.indexOf(imageName)
    
    document.getElementsByClassName('imageContain')[0].style.animation = 'he 800ms forwards'

    document.getElementsByClassName('imageContain')[0].style.backgroundImage = imageUrls[i][imageIndex]
}


function imageChange(id){

    var imageName = document.getElementById(id).style.backgroundImage

    var imageIndex = 0
    imageIndex = imageUrls.indexOf(imageName)
    var imageNumber = imageUrls[imageNumber]
    
    for (var i = 0; i < imageUrls.length; i++){

      i.array.forEach(element => {
        imageIndex = element.indexOf(imageName)

        if(imageIndex >= i.length - 1)
        imageIndex = 0
        else
        imageIndex++
      });

    }
  

    // if(imageIndex >= imageNumber - 1)
    // imageIndex = 0
    // else
    // imageIndex++


    document.getElementById(id).style.backgroundImage = imageUrls[imageIndex]

}

function imageMoveLeft(){

    var imageName = document.getElementById('imageContainId').style.backgroundImage

    var imageIndex = 0
    imageIndex = imageUrls.indexOf(imageName)
    if(imageIndex <= 0 )
    imageIndex = imageNumber - 1
    else
    imageIndex--

    console.log (imageIndex);

    // for (var i = 0; i < imageUrls.length; i++){
    //   var imageIndex = 0
    //     for (var imageNumber = 0 ;  imageNumber < imageUrls[i].length; imageNumber++){
    //       imageIndex = imageUrls[imageNumber ].indexOf(imageName)
    //         var imageNumber = imageUrls[imageNumber]
    //         if(imageIndex <= 0)
    //         imageIndex = imageNumber - 1
    //         else
    //         imageIndex--
    //       }
    // }

    document.getElementById('imageContainId').style.backgroundImage = imageUrls[imageIndex]


}

function imageMoveRight(){

    var imageName = document.getElementById('imageContainId').style.backgroundImage

    // var imageIndex = 0
    // imageIndex = imageUrls.indexOf(imageName)
    // if(imageIndex >= imageNumber - 1)
    // imageIndex = 0
    // else
    // imageIndex++
    var imageIndex = 0


    for (var i = 0; i < imageUrls.length; i++){
        for (var imageNumber = 0 ;  imageNumber < imageUrls[i].length; imageNumber++){
          imageIndex = imageUrls[imageNumber].indexOf(imageName)
            var imageNumber = imageUrls[imageNumber]
            if(imageIndex >= imageNumber - 1)
            imageIndex = 0
            else
            imageIndex++
          }
    }


    document.getElementById('imageContainId').style.backgroundImage = imageUrls[i][imageIndex]


}


function imagePopNone(){

    document.getElementsByClassName('imagePop')[0].style.display = 'none'
    document.getElementsByTagName('body')[0].style.overflowY = 'scroll'

}

// --------------------------

// var imgUrls = [
//                 [
//                   'url("assets/images/oboulot.png")','url("assets/images/connexion.png")'
//                 ],
//                 [
//                   'url("assets/images/bord.png")','url("assets/images/classe.png")','url("assets/images/exo.png")','url("assets/images/addQuestion.png")','url("assets/images/btp.png")','url("assets/images/eleve.png")'
//                 ],
//                 [
//                   'url("assets/images/AlloFlix.png")', 'url("assets/images/AlloFlixAdd.png")'
//                 ]
// ]