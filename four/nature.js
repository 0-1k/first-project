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





let nonClick = document.getElementsByClassName('none-click');

      function handleClick(event) {

        if (event.target.classList[1] === "clicked") {
          event.target.classList.remove("clicked");
        } else {
          for (var i = 0; i < nonClick.length; i++) {
            nonClick[i].classList.remove("clicked");
          }

          event.target.classList.add("clicked");
        }
      }

      function init() {
        for (var i = 0; i < nonClick.length; i++) {
          nonClick[i].addEventListener("click", handleClick);
        }
      }

      init();



      var box = document.getElementById('box');
      var kbox = document.querySelector('.k');
      var textbox = document.querySelector('.textbox');
      
      
      box.addEventListener('click',function() {
      
      box.style.transform = 'translateY(-150px)';
      
      setTimeout(() => 
      box.style.height = '250px',
      1000);
      
      setTimeout(() => 
      box.style.alignItems = 'start',
      box.style.padding = '20px 30px',
      box.style.top = '300px',
      1000);
      
      setTimeout(() => 
      kbox.style.opacity = '0',
      textbox.style.zIndex = '1',
      1200);
      
      setTimeout(() => 
      textbox.style.opacity = '1',
      1300);
      });
      
      
      
      textbox.addEventListener('click',function() {
      
      box.style.height = '30px',
      
      setTimeout(() => 
      
      box.style.alignItems = 'center',
      box.style.padding = '10px 30px',
      textbox.style.zIndex = '-1',
      textbox.style.opacity = '0',
      1500);
      
      setTimeout(() => 
      box.style.transform = 'translateY(0px)',
      box.style.top = '337px',
      kbox.style.opacity = '1',
      3000);
      
      });


var view = document.querySelector('.view');
var imgbox = document.querySelector('.imgbox');
var imgbox2 = document.querySelector('.imgbox2');
var imgbox3 = document.querySelector('.imgbox3');
var imgbox4 = document.querySelector('.imgbox4');
var imgbox5 = document.querySelector('.imgbox5');
var mainc = document.querySelector('.main_choice');
var k = document.querySelector('.k');
var boxbox = document.querySelector('.box');


var viewbox = document.querySelectorAll('.viewbox .n_arrange a');

var boxhide = document.getElementById('mains');
var icon = document.querySelector('.icon');

view.addEventListener('click',function(){


  javascript:window.scrollTo(0,0)
icon.style.opacity= '1';
view.style.display = 'none';
imgbox.style.display = 'none';
imgbox2.style.display = 'none';
imgbox3.style.display = 'none';
imgbox4.style.display = 'none';
imgbox5.style.display = 'none';
mainc.style.display = 'none';
k.style.display = 'none';
boxbox.style.display = 'none';



for (var i = 0; i < viewbox.length; i++)
{

viewbox[i].style.transform ='translate(0px,0px)';
}



});




var icon1 =document.getElementById('icon1');
var icon2 =document.getElementById('icon2');
var n_arr = document.querySelector('.n_arrange');
var arr = document.querySelector('.arrange');


icon.addEventListener('click',function(){

  if(icon1.style.display == 'block'){



    icon1.style.display = 'none';
  icon2.style.display = 'block';


  arr.style.opacity ='0';
  n_arr.style.opacity ='1';


 
  arr.style.pointerEvents = 'none';
  backimg.style.pointerEvents = 'none';

 

  
}
  else {

    icon1.style.display = 'block';
    icon2.style.display = 'none';


    arr.style.pointerEvents = 'auto';
    backimg.style.pointerEvents = 'auto';
    arr.style.opacity ='1';
    n_arr.style.opacity ='0';

 
}});
let arrli = document.querySelectorAll('.arrange li img');
let ibox = document.querySelector('.imgsbox');
let iboxx = document.querySelector('.imgboxx');
let backimg = document.querySelector('.backimg');
let exbox = document.querySelector('.exbox');

for(let i = 0; i < arrli.length; i++){
arrli[i].addEventListener('click',function(event){
  

  console.log(arrli[i].src);
  arr.style.opacity = '0';
  arr.classList.add('.arrangehide');
  ibox.style.opacity = '1';

  setTimeout(() => {
  arr.style.display = 'none';
 
}, 100);

 iboxx.style.width = '85%';
 iboxx.style.height = '400px';
 iboxx.style.transition = 'all 0.5s';

 backimg.style.backgroundImage = "url('" + arrli[i].src +"')";
 iboxx.style.backgroundImage = "url('" + arrli[i].src +"')";


 icon1.style.display = 'none';
 icon2.style.display = 'none';

 setTimeout(() => {
  exbox.style.transform ='translateY(0px)';
  exbox.style.transition = 'all 0.5s';
 
}, 500);


});

}

backimg.addEventListener('click',function(){

  icon1.style.display = 'block';
  icon2.style.display = 'none';

  arr.style.display = 'flex';
  arr.classList.remove('.arrangehide');
  iboxx.style.width = '0%';
  iboxx.style.height = '0px';
  iboxx.style.transition = 'all 0.5s';

  ibox.style.opacity = '0';

  exbox.style.transform ='translateY(300px)';


  setTimeout(() => {
    arr.style.opacity = '1';

    
  }, 100);
});



// var btnss = document.querySelector('.btn1');
// var atest = document.querySelector('.arrtest');
// var atest2 = document.querySelectorAll('.viewbox .n_arrange a');

//   btnss.addEventListener('click',function(){
 
//       // atest.style.transform ='translate(0px,0px)';

//       for (var i = 0; i < atest2.length; i++)
//       {
    
//       atest2[i].style.transform ='translate(0px,0px)';
//     }
// });