
const sliderImagesNames5 = [
    "home.png",
    "search.png",
    "article_view.png",
    "doc_filter.png",
    "view_doc.png",
    "dashboard.png",
];

const slider5 = document.querySelector('section.slider5');

let isFirstPass5 = true;

for (const imgName5 of sliderImagesNames5) {
    const newImg5 = document.createElement('img');
    newImg5.src = 'assets/images/' + imgName5;
    newImg5.classList.add('slider__img'); 
    if (isFirstPass5 === true) {
        newImg5.classList.add('slider__img--current');
    }
    slider5.append(newImg5);
    isFirstPass5 = false;
}

imagesElements5: [];
currentPosition5 = 0;


imagesElements5 = document.querySelectorAll('.slider5 .slider__img');

const sliderButtons5 = document.querySelectorAll('.slider5__btn');

const previousSliderButton5 = sliderButtons5[0];
previousSliderButton5.addEventListener('click', handleClickPreviousSlide5);


const nextSliderButton5 = sliderButtons5[1];
nextSliderButton5.addEventListener('click', handleClickNextSlide5);



function handleClickPreviousSlide5(event){
   


    goToSlide5(currentPosition5 - 1);
}

function handleClickNextSlide5(event){

    goToSlide5(currentPosition5 + 1);
}

 function goToSlide5(newPosition5) {

    imagesElements5[currentPosition5].classList.remove('slider__img--current');

   currentPosition5 = newPosition5;


    if (currentPosition5 < 0) {
    currentPosition5 = imagesElements5.length - 1;
    }

    if (currentPosition5 > imagesElements5.length - 1) {
        currentPosition5 = 0;
    }

   imagesElements5[currentPosition5].classList.add('slider__img--current');
}
