
/**center */
var slides = document.querySelector('.slides');
var slide = document.querySelectorAll('.slides li');
var currentIdx = 0;
var slideCount = slide.length;
var slideWidth = 200;
var slideMargin = 50;

/**right */
var rslides = document.querySelector('.rslides');
var rslide = document.querySelectorAll('.rslides li');
var rcurrentIdx = 0;
var rslideCount = rslide.length;
var rslideWidth = 100;
var rslideMargin = 30;

/**left */
var lslides = document.querySelector('.lslides');
var lslide = document.querySelectorAll('.lslides li');
var lcurrentIdx = 0;
var lslideCount = lslide.length;
var lslideWidth = 100;
var lslideMargin = 30;


prevBtn = document.querySelector('.lslides');
nextBtn = document.querySelector('.rslides');

/**center */
makeClone();
/**right */
rmakeClone();
/**left */
lmakeClone();


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

/**right */
function rmakeClone(){
  for(var i = 0; i<rslideCount; i++){
    //a.cloneNode(), acloneNode(true)
    var rcloneSlide = rslide[i].cloneNode(true);
    rcloneSlide.classList.add('rclone');
    rslides.appendChild(rcloneSlide);
  }
  for(var i = rslideCount-1; i>= 0; i--){
    var rcloneSlide = rslide[i].cloneNode(true);
    rcloneSlide.classList.add('rclone');
    rslides.prepend(rcloneSlide);
  }
  rupdateWidth();
  rsetInitalPos();

  setTimeout(function(){
    rslides.classList.add('ranimated');
  },100);
  
}

/**left */
function lmakeClone(){
  for(var i = 0; i<lslideCount; i++){
    //a.cloneNode(), acloneNode(true)
    var lcloneSlide = lslide[i].cloneNode(true);
    lcloneSlide.classList.add('lclone');
    lslides.appendChild(lcloneSlide);
  }
  for(var i = lslideCount-1; i>= 0; i--){
    var lcloneSlide = lslide[i].cloneNode(true);
    lcloneSlide.classList.add('lclone');
    lslides.prepend(lcloneSlide);
  }
  lupdateWidth();
  lsetInitalPos();

  setTimeout(function(){
    lslides.classList.add('lanimated');
  },100);
  
}


/**center */
function updateWidth(){
  var currentSlides = document.querySelectorAll('.slides li');
  var newSideCount = currentSlides.length;

  var newWidth = (slideWidth + slideMargin) * newSideCount - slideMargin +'px';
  slides.style.width = newWidth;

}

/**right */
function rupdateWidth(){
  var rcurrentSlides = document.querySelectorAll('.rslides li');
  var rnewSideCount = rcurrentSlides.length;

  var rnewWidth = (rslideWidth + rslideMargin) * rnewSideCount - rslideMargin +'px';
  rslides.style.width = rnewWidth;

}

/**left */
function lupdateWidth(){
  var lcurrentSlides = document.querySelectorAll('.lslides li');
  var lnewSideCount = lcurrentSlides.length;

  var lnewWidth = (lslideWidth + lslideMargin) * lnewSideCount - lslideMargin +'px';
  lslides.style.width = lnewWidth;

}


/**center */
function setInitalPos(){
  var initialTranslateValue = -(slideWidth + slideMargin) * slideCount;
  slides.style.transform = 'translateX(' + initialTranslateValue +'px)';
}

/**right */
function rsetInitalPos(){
  var rinitialTranslateValue = -(rslideWidth + rslideMargin) * rslideCount;
  rslides.style.transform = 'translateX(' + rinitialTranslateValue +'px)';
}
/**left */
function lsetInitalPos(){
  var linitialTranslateValue = -(lslideWidth + lslideMargin) * lslideCount;
  lslides.style.transform = 'translateX(' + linitialTranslateValue +'px)';
}


nextBtn.addEventListener('click',function(){
  /**center */
  moveSlide(currentIdx + 1);
   /**right */
   rmoveSlide(rcurrentIdx + 1);
    /**left */
    lmoveSlide(lcurrentIdx + 1);

});

prevBtn.addEventListener('click',function(){
  /**center */
  moveSlide(currentIdx - 1);
    /**right */
    rmoveSlide(rcurrentIdx - 1);
     /**left */
     lmoveSlide(lcurrentIdx - 1);
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

/**right */
function rmoveSlide(num){
  rslides.style.left = -num * (rslideWidth + rslideMargin) + 'px';
  rcurrentIdx = num;
 
  if(rcurrentIdx == rslideCount || rcurrentIdx == -rslideCount ){

    setTimeout(function(){
      rslides.classList.remove('ranimated');
      rslides.style.left = '0px'
      rcurrentIdx = 0;
    },500);
    setTimeout(function(){
      rslides.classList.add('ranimated');
      
    },600);
  }
}

/**left */
function lmoveSlide(num){
  lslides.style.left = -num * (lslideWidth + lslideMargin) + 'px';
  lcurrentIdx = num;
  
  if(lcurrentIdx == lslideCount || lcurrentIdx == -lslideCount ){

    setTimeout(function(){
      lslides.classList.remove('lanimated');
      lslides.style.left = '0px'
      lcurrentIdx = 0;
    },500);
    setTimeout(function(){
      lslides.classList.add('lanimated');
      
    },600);
  }
}


