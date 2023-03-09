let young = document.getElementById('long');
let hi = document.getElementById('hi');


young.addEventListener('click',function(){
  young.style.opacity = '0';
  young.style.zIndex = '0';

  setTimeout(() => {
    hi.style.opacity = '1';
    dynamic(randomString());
  }, 500);
 
});


hi.addEventListener('click',function(){
  hi.style.opacity = '0';
  young.style.zIndex = '1';

  setTimeout(() => {
    young.style.opacity = '1';
  }, 500);
 
});


let targett = document.querySelector('#hi');


function randomString(){
  let strringArr = ["안녕 :)","Hello :D","こんにちは o0o"];
  let selectString = strringArr[Math.floor(Math.random() * strringArr.length)];
  let selectStringArr = selectString.split("");

  return selectStringArr ;
}

function resetTyping(){
  targett.textContent = "";

  dynamic(randomString());
}
function dynamic(randomArr){
 if(randomArr.length > 0){
  targett.textContent += randomArr.shift();
  setTimeout(function(){
    dynamic(randomArr);
  },300);
 }else{
  setTimeout(resetTyping, 2000);
 }
}




function blick(){
  targett.classList.toggle("active");
}
setInterval(blick, 500);








var bar = document.getElementById('on');
var count = 0;

function openbar(){

count ++;

if(count % 2 === 1){
    bar.style.marginTop = '0%';
}
else{
    bar.style.marginTop = '-5%';
}

   
    }



$(document).ready(function() {
	$('img[usemap]').rwdImageMaps();
});




function over1(){
  document.getElementById('alka').style.opacity = "1";
}
function out1(){
  document.getElementById('alka').style.opacity = "0";
}


function over2(){
  document.getElementById('miza').style.opacity = "1";
}
function out2(){
  document.getElementById('miza').style.opacity = "0";
}

function over3(){
  document.getElementById('alio').style.opacity = "1";
}
function out3(){
  document.getElementById('alio').style.opacity = "0";
}

function over4(){
  document.getElementById('megr').style.opacity = "1";
}
function out4(){
  document.getElementById('megr').style.opacity = "0";
}


function over5(){
  document.getElementById('phad').style.opacity = "1";
}
function out5(){
  document.getElementById('phad').style.opacity = "0";
}


function over6(){
  document.getElementById('mera').style.opacity = "1";
}
function out6(){
  document.getElementById('mera').style.opacity = "0";
}

function over7(){
  document.getElementById('dubh').style.opacity = "1";
}
function out7(){
  document.getElementById('dubh').style.opacity = "0";
}



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

/**left */
var tslides = document.querySelector('.tslides');
var tslide = document.querySelectorAll('.tslides li');
var tcurrentIdx = 0;
var tslideCount = tslide.length;
var tslideHeight = 25;






prevBtn = document.querySelector('.lslides');
nextBtn = document.querySelector('.rslides');

/**center */
makeClone();
/**right */
rmakeClone();
/**left */
lmakeClone();
/**text */
tmakeClone();

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

/**text */
function tmakeClone(){
  for(var i = 0; i<tslideCount; i++){
    //a.cloneNode(), acloneNode(true)
    var tcloneSlide = tslide[i].cloneNode(true);
    tcloneSlide.classList.add('tclone');
    tslides.appendChild(tcloneSlide);
  }
  for(var i = tslideCount-1; i>= 0; i--){
    var tcloneSlide = tslide[i].cloneNode(true);
    tcloneSlide.classList.add('tclone');
    tslides.prepend(tcloneSlide);
  }
  tupdateWidth();
  tsetInitalPos();

  setTimeout(function(){
    tslides.classList.add('tanimated');
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

/**text */
function tupdateWidth(){
  var tcurrentSlides = document.querySelectorAll('.tslides li');
  var tnewSideCount = tcurrentSlides.length;

  var tnewHeight = tslideHeight * tnewSideCount +'px';
  tslides.style.height = tnewHeight;

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
/**text */
function tsetInitalPos(){
  var tinitialTranslateValue = -tslideHeight * tslideCount;
  tslides.style.transform = 'translateY(' + tinitialTranslateValue +'px)';
}



nextBtn.addEventListener('click',function(){
  /**center */
  moveSlide(currentIdx + 1);
   /**right */
   rmoveSlide(rcurrentIdx + 1);
    /**left */
    lmoveSlide(lcurrentIdx + 1);
     /**text */
     tmoveSlide(tcurrentIdx + 1);
    
  

});

prevBtn.addEventListener('click',function(){
  /**center */
  moveSlide(currentIdx - 1);
    /**right */
    rmoveSlide(rcurrentIdx - 1);
     /**left */
     lmoveSlide(lcurrentIdx - 1);
       /**text */
       tmoveSlide(tcurrentIdx - 1);
  
    
    
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

/**text */
function tmoveSlide(num){
  tslides.style.top = -num * tslideHeight + 'px';
  tcurrentIdx = num;
  
  if(tcurrentIdx == tslideCount || tcurrentIdx == -tslideCount ){

    setTimeout(function(){
      tslides.classList.remove('tanimated');
      tslides.style.top = '0px'
      tcurrentIdx = 0;
    },500);
    setTimeout(function(){
      tslides.classList.add('tanimated');
      
    },600);
  }
}



(function(){
  const haederE1 = document.querySelector("header");
window.addEventListener("scroll",function(){
  requestAnimationFrame(scrollCheck);
})

function scrollCheck(){
  const browserScrollY = window.scrollY ? window.scrollY : window.pageXOffset;
  if(browserScrollY > 0){
    haederE1.classList.add('active');
  } else{

    haederE1.classList.remove('active');
  }

}
})();

//애니메이션 스크롤
(function(){
  const animationMove = function(selector){
    const target = document.querySelector(selector);
    const browserScrollY = window.pageYOffset;
    const targetScrollY = target.getBoundingClientRect().top + browserScrollY;
    window.scrollTo({top: targetScrollY, behavior:'smooth'});
  
  }
  
  const scrollMoveEl = document.querySelectorAll("[data-animation-scroll='true']");
   
   for(let i=0; i< scrollMoveEl.length; i++){
    scrollMoveEl[i].addEventListener("click", function(e){
  
    animationMove(this.dataset.target);
    });
   } 
  
})();

let barClr = document.querySelectorAll("header button");

window.addEventListener("scroll", (event) => {
  let scrollY = this.scrollY;

  if(scrollY >= 1502 && scrollY <= 2271){

  
    for(let c = 0; c<barClr.length; c++){
      barClr[c].style.color = 'black';
    }
  }


  else{
    for(let c = 0; c<barClr.length; c++){
      barClr[c].style.color = 'white';
    }
  }
  
});
/**2271 */



let techbox = document.querySelector('.techbox');
let imap = document.querySelector('.imgmap');
let grid = document.querySelector('.grid');

let techbtn = document.querySelector('.techbtn');
let techbtnP = document.querySelector('.techbtntitle');
let techcir = document.querySelector('.techcir');

let techbtncount = 0;

techbtn.addEventListener('click',function(){
  techbtncount ++;
  if(techbtncount % 2 != 0){
    techbox.style.transform = 'translateX(-50%)';
    techbtn.style.right = '91%';

    techbtnP.style.color = 'white';
    techcir.style.borderColor = '#adadad';
    techbtn.addEventListener('mouseover', function() {
     techcir.style.backgroundColor = 'white';
     techcir.style.borderColor = 'white';
    });
    techbtn.addEventListener('mouseout', function() {
      techcir.style.backgroundColor = 'transparent';
      techcir.style.borderColor = '#adadad';
     });


    setTimeout(() => {
      techbtnP.innerHTML= "I Map";


    }, 1000);
   
  }
  else{
    techbox.style.transform = 'translateX(0)';
    techbtn.style.right = '1%';

    techbtnP.style.color = 'black';
    techcir.style.borderColor = 'black';
    techbtn.addEventListener('mouseover', function() {
     techcir.style.backgroundColor = 'black';
     techcir.style.borderColor = 'black';
    });
    techbtn.addEventListener('mouseout', function() {
      techcir.style.backgroundColor = 'transparent';
      techcir.style.borderColor = '#adadad';
      techcir.style.borderColor = 'black';
     });

    setTimeout(() => {
      techbtnP.innerHTML= "Grid";


    }, 1000);

  }
});

