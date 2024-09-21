
const sliderImagesNames3 = [
    "AlloFlixShow.png",
    "AlloFlixFavoris.png",
    "AlloFlixAdd.png",
];

const slider3 = document.querySelector('section.slider3');

let isFirstPass3 = true;

for (const imgName3 of sliderImagesNames3) {
    const newImg3 = document.createElement('img');
    newImg3.src = 'assets/images/' + imgName3;
    newImg3.classList.add('slider__img'); 
    if (isFirstPass3 === true) {
        newImg3.classList.add('slider__img--current');
    }
    slider3.append(newImg3);
    isFirstPass3 = false;
}

imagesElements3: [],
currentPosition3 = 0;


imagesElements3 = document.querySelectorAll('.slider3 .slider__img');

const sliderButtons3 = document.querySelectorAll('.slider3__btn');

const previousSliderButton3 = sliderButtons3[0];
previousSliderButton3.addEventListener('click', handleClickPreviousSlide3);


const nextSliderButton3 = sliderButtons3[1];
nextSliderButton3.addEventListener('click', handleClickNextSlide3);



function handleClickPreviousSlide3(event){
   


    goToSlide3(currentPosition3 - 1);
}

function handleClickNextSlide3(event){

    goToSlide3(currentPosition3 + 1);
}

 function goToSlide3(newPosition3) {

    imagesElements3[currentPosition3].classList.remove('slider__img--current');

   currentPosition3 = newPosition3;


    if (currentPosition3 < 0) {
    currentPosition3 = imagesElements3.length - 1;
    }

    if (currentPosition3 > imagesElements3.length - 1) {
        currentPosition3 = 0;
    }

   imagesElements3[currentPosition3].classList.add('slider__img--current');
}
