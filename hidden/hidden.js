let hid = document.querySelector('.hid');
let imgbox = document.querySelectorAll('.hid li');
let imgbox1img1 = document.querySelector('.imgbox1 img');
let imgbox1img2 = document.querySelector('.imgbox1 img:nth-child(2)');
let imgbox2img2 = document.querySelector('.imgbox2 img:nth-child(2)');
let imgbox3img2 = document.querySelector('.imgbox3 img:nth-child(2)');
let hidden = document.querySelector('.hidden');
let hiddenbtn = document.querySelector('.btn1');
let hidbgimg =document.querySelector('.hiddenbg img:nth-child(1)');
let hidbgimg1 =document.querySelector('.hiddenbg img:nth-child(2)');
let hidbgimg2 =document.querySelector('.hiddenbg img:nth-child(3)');
let hidbgimg3 =document.querySelector('.hiddenbg img:nth-child(4)');

let hidbtncount = 0;
let hiddenbtncount = 0;
for(let i = 0; i<imgbox.length; i++){

  imgbox[i].addEventListener('click',function(){
hidbtncount ++;


    if(hidbtncount % 2 ==1){
      setTimeout(() => {
        hiddenbtn.style.display = 'block';
      }, 500);
  
    if(imgbox[i] == imgbox[0]){
      hidbgimg1.style.opacity = '0.3';

      imgbox[0].style.width = '80%';
      imgbox[1].style.width = '0%';
      imgbox[2].style.width = '0%';


      imgbox[1].style.opacity = '0';
      imgbox[2].style.opacity = '0';

      hiddenbtn.addEventListener('click',function(){
        imgbox1img2.style.opacity = '1';
 
      
      });
    }
    if(imgbox[i] == imgbox[1]){
      hidbgimg2.style.opacity = '0.3';

      imgbox[0].style.width = '0%';
      imgbox[1].style.width = '90%';
      imgbox[2].style.width = '0%';
  
      imgbox[0].style.opacity = '0';
      imgbox[2].style.opacity = '0';

      hiddenbtn.addEventListener('click',function(){
       imgbox2img2.style.opacity = '1';
    
      });
      
    }
    if(imgbox[i] == imgbox[2]){
      hidbgimg3.style.opacity = '0.3';

      imgbox[0].style.width = '0%';
      imgbox[1].style.width = '0%';
      imgbox[2].style.width = '90%';

      imgbox[0].style.opacity = '0';
      imgbox[1].style.opacity = '0';

      hiddenbtn.addEventListener('click',function(){
        imgbox3img2.style.opacity = '1';

      });
    }

  } else{

    hidbgimg1.style.opacity = '0';
    hidbgimg2.style.opacity = '0';
    hidbgimg3.style.opacity = '0';
    hidbgimg.style.opacity = '1';

    hiddenbtn.style.display = 'none';
    imgbox[0].style.opacity = '1';
    imgbox[1].style.opacity = '1';
    imgbox[2].style.opacity = '1';

    imgbox[0].style.width = '30%';
    imgbox[1].style.width = '30%';
    imgbox[2].style.width = '30%';

    imgbox1img2.style.opacity = '0';
    imgbox2img2.style.opacity = '0';
    imgbox3img2.style.opacity = '0';
    imgbox3img2.style.zIndex = '0';
  }
  });
}

