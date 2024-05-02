
const sliderImagesNames4 = [
    "trip.png",
    "trip2.png",
    "trip3.png",
];


const slider4 = document.querySelector('section.slider4');

let isFirstPass4 = true;

for (const imgName4 of sliderImagesNames4) {
    const newImg4 = document.createElement('img');
    newImg4.src = '/Job/portfolio/assets/images/' + imgName4;
    newImg4.classList.add('slider__img'); 
    if (isFirstPass4 === true) {
        newImg4.classList.add('slider__img--current');
    }
    slider4.append(newImg4);
    isFirstPass4 = false;
}

imagesElements4: [],
currentPosition4 = 0;


imagesElements4 = document.querySelectorAll('.slider4 .slider__img');

const sliderButtons4 = document.querySelectorAll('.slider4__btn');

const previousSliderButton4 = sliderButtons4[0];
previousSliderButton4.addEventListener('click', handleClickPreviousSlide4);


const nextSliderButton4 = sliderButtons4[1];
nextSliderButton4.addEventListener('click', handleClickNextSlide4);



function handleClickPreviousSlide4(event){
   
    goToSlide4(currentPosition4 - 1);
}

function handleClickNextSlide4(event){

    goToSlide4(currentPosition4 + 1);
}

 function goToSlide4(newPosition4) {

    imagesElements4[currentPosition4].classList.remove('slider__img--current');

   currentPosition4 = newPosition4;


    if (currentPosition4 < 0) {
    currentPosition4 = imagesElements4.length - 1;
    }

    if (currentPosition4 > imagesElements4.length - 1) {
        currentPosition4 = 0;
    }

   imagesElements4[currentPosition4].classList.add('slider__img--current');
}
