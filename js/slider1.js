
const sliderImagesNames1 = [
    "Legaloa.png",
    "legaloa2.png",
];

const slider1 = document.querySelector('section.slider1');

let isFirstPass1 = true;

for (const imgName1 of sliderImagesNames1) {
    const newImg1 = document.createElement('img');
    newImg1.src = 'assets/images/' + imgName1;
    newImg1.classList.add('slider__img'); 
    if (isFirstPass1 === true) {
        newImg1.classList.add('slider__img--current');
    }
    slider1.append(newImg1);
    isFirstPass1 = false;
}

imagesElements1: [],
currentPosition1 = 0;


imagesElements1 = document.querySelectorAll('.slider1 .slider__img');

const sliderButtons1 = document.querySelectorAll('.slider1__btn');

const previousSliderButton1 = sliderButtons1[0];
previousSliderButton1.addEventListener('click', handleClickPreviousSlide1);


const nextSliderButton1 = sliderButtons1[1];
nextSliderButton1.addEventListener('click', handleClickNextSlide1);



function handleClickPreviousSlide1(event){
   


    goToSlide1(currentPosition1 - 1);
}

function handleClickNextSlide1(event){

    goToSlide1(currentPosition1 + 1);
}

 function goToSlide1(newPosition1) {

    imagesElements1[currentPosition1].classList.remove('slider__img--current');

   currentPosition1 = newPosition1;


    if (currentPosition1 < 0) {
    currentPosition1 = imagesElements1.length - 1;
    }

    if (currentPosition1 > imagesElements1.length - 1) {
        currentPosition1 = 0;
    }

   imagesElements1[currentPosition1].classList.add('slider__img--current');
}
