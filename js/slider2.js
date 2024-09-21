
        const sliderImagesNames2 = [
            "oboulot.png",
            "profiloboulot.png",
            "bord.png",
            "classe.png",
            "btp.png",
            "exo.png",
            "addQuestion.png",
            "eleve.png",
            "reponse.png",
            "correction.png",
            "oboulotBack.png",
            "oboulotBack2.png",

        ];
  
        const slider2 = document.querySelector('section.slider2');
  
        let isFirstPass2 = true;
  
        for (const imgName2 of sliderImagesNames2) {
            const newImg2 = document.createElement('img');
            newImg2.src = 'assets/images/' + imgName2;
            newImg2.classList.add('slider__img'); 
  
            if (isFirstPass2 === true) {
                newImg2.classList.add('slider__img--current');
            }
            slider2.append(newImg2);
            isFirstPass2 = false;
        }

        imagesElements2: [],
        currentPosition2 = 0;
        imagesElements2 = document.querySelectorAll('.slider2 .slider__img');
    
        const sliderButtons2 = document.querySelectorAll('.slider2__btn');
  

        const previousSliderButton2 = sliderButtons2[0];
        previousSliderButton2.addEventListener('click', handleClickPreviousSlide2);
  
 
        const nextSliderButton2 = sliderButtons2[1];
        nextSliderButton2.addEventListener('click', handleClickNextSlide2);

   function handleClickPreviousSlide2(event) {
       goToSlide2(currentPosition2 - 1);
    }
  
   function handleClickNextSlide2(event) {
        goToSlide2(currentPosition2 + 1);
    }
  
   function goToSlide2(newPosition2) {
     imagesElements2[currentPosition2].classList.remove('slider__img--current');
  
       currentPosition2 = newPosition2;
  
    
        if (currentPosition2 < 0) {
            currentPosition2 = imagesElements2.length - 1;
        }
  
 
        if (currentPosition2 > imagesElements2.length - 1) {
           currentPosition2 = 0;
        }
  
        imagesElements2[currentPosition2].classList.add('slider__img--current');
    }




