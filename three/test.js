
/**center */
var slides = document.querySelector('.slides');
var slide = document.querySelectorAll('.slides li');
var currentIdx = 0;
var slideCount = slide.length;
var slideWidth = 200;
var slideMargin = 50;


prevBtn = document.querySelector('.prev');
nextBtn = document.querySelector('.next');

/**center */
makeClone();



/**center */
function makeClone(){
  for(var i = 0; i<slideCount; i++){
    //a.cloneNode(), acloneNode(true)
    var cloneSlide = slide[i].cloneNode(true);
    cloneSlide.classList.add('clone');
    slides.appendChild(cloneSlide);
  }
  for(var i = slideCount-1; i>= 0; i--){
    var cloneSlide = slide[i].cloneNode(true);
    cloneSlide.classList.add('clone');
    slides.prepend(cloneSlide);
  }
  updateWidth();
  setInitalPos();

  setTimeout(function(){
    slides.classList.add('animated');
  
  },100);
  
}



/**center */
function updateWidth(){
  var currentSlides = document.querySelectorAll('.slides li');
  var newSideCount = currentSlides.length;

  var newWidth = (slideWidth + slideMargin) * newSideCount - slideMargin +'px';
  slides.style.width = newWidth;

}



/**center */
function setInitalPos(){
  var initialTranslateValue = -(slideWidth + slideMargin) * slideCount;
  slides.style.transform = 'translateX(' + initialTranslateValue +'px)';
}


nextBtn.addEventListener('click',function(){
  /**center */
  moveSlide(currentIdx + 1);


});

prevBtn.addEventListener('click',function(){
  /**center */
  moveSlide(currentIdx - 1);

});

/**center */
function moveSlide(num){
  slides.style.left = -num * (slideWidth + slideMargin) + 'px';
  
  currentIdx = num;
  
  if(currentIdx == slideCount || currentIdx == -slideCount ){

    setTimeout(function(){
      slides.classList.remove('animated');
      slides.style.left = '0px'
      currentIdx = 0;
    },500);
    setTimeout(function(){
      slides.classList.add('animated');
      
    },600);
  }
  console.log(currentIdx);
}


