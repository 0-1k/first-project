let gridbtn = document.querySelectorAll('.grid img');
let gridbtnAll = document.querySelector('.grid img');
let grid = document.querySelector('.grids');
let gridHome = document.querySelector('.gridHome');
let gridBg = document.querySelector('.gridbg');
let gridcount = 0;


let imgbtn1 = document.querySelector('.imgbtn1');
let imgbtn2 = document.querySelector('.imgbtn2');
let imgbtn3 = document.querySelector('.imgbtn3');
let imgbtn4 = document.querySelector('.imgbtn4');
let imgbtn5 = document.querySelector('.imgbtn5');
let imgbtn6 = document.querySelector('.imgbtn6');
let imgbtn7 = document.querySelector('.imgbtn7');

for(let i =0; i < gridbtn.length; i++){
gridbtn[i].addEventListener('click',function(){
  gridbtn[i].style.opacity = '1';
  gridcount ++;
  
  if(gridcount %2 == 1){

if(gridbtn[i] === gridbtn[0]){
  grid.style.gridGap = '5px';
  imgbtn1.style.opacity = '1';
  grid.style.gridTemplateColumns =' 150px 150px 150px';
  grid.style.gridTemplateRows = '300px 100px 100px 100px';
}
else if(gridbtn[i] === gridbtn[1]){
  grid.style.gridGap = '5px';
  imgbtn2.style.opacity = '1';
  grid.style.gridTemplateColumns =' 300px 75px 75px';
  grid.style.gridTemplateRows = '150px 150px 150px 150px';
}
else if(gridbtn[i] === gridbtn[2]){
  grid.style.gridGap = '5px';
  imgbtn3.style.opacity = '1';
  grid.style.gridTemplateColumns =' 150px 150px 150px';
  grid.style.gridTemplateRows = '150px 300px 0px 150px';
}
else if(gridbtn[i] === gridbtn[3]){
  grid.style.gridGap = '5px';
  imgbtn4.style.opacity = '1';
  grid.style.gridTemplateColumns =' 150px 310px 0px';
  grid.style.gridTemplateRows = '150px 0px 300px 150px';
}
else if(gridbtn[i] === gridbtn[4]){
  grid.style.gridGap = '5px';
  imgbtn5.style.opacity = '1';
  grid.style.gridTemplateColumns =' 150px 0px 300px';
  grid.style.gridTemplateRows = '150px 150px 150px 150px';
}
else if(gridbtn[i] === gridbtn[5]){
  grid.style.gridGap = '5px';
  imgbtn6.style.opacity = '1';
  grid.style.gridTemplateColumns =' 300px 0px 150px';
  grid.style.gridTemplateRows = '150px 150px 0px 300px';
}
else if(gridbtn[i] === gridbtn[6]){
  grid.style.gridGap = '5px';
  imgbtn7.style.opacity = '1';
  grid.style.gridTemplateColumns =' 150px 300px 0px';
  grid.style.gridTemplateRows = '150px 150px 0px 300px';
}
} else {
  gridbtn[i].style.opacity = '0.5';
  grid.style.gridGap = '10px';
  grid.style.gridTemplateColumns =' 150px 150px 150px';
  grid.style.gridTemplateRows = '150px 150px 150px 150px';


  imgbtn1.style.opacity = '0';
  imgbtn2.style.opacity = '0';
  imgbtn3.style.opacity = '0';
  imgbtn4.style.opacity = '0';
  imgbtn5.style.opacity = '0';
  imgbtn6.style.opacity = '0';
  imgbtn7.style.opacity = '0';
}

});



}

let imgbtnAll =  document.querySelectorAll('.imgbtn');

let gridImg = document.querySelector('.gridImg');

let gridImgBg = document.querySelector('.gridImg img');

for(let j =0; j < imgbtnAll.length; j++){
imgbtnAll[j].addEventListener('click',function(){
  // gridImgBg.src = '';


  if(imgbtnAll[j] === imgbtnAll[0]){
    gridImg.style.width = '90%';
    gridImg.style.height = 'auto';
    gridImgBg.src = gridbtn[0].src;
  }
  else if(imgbtnAll[j] === imgbtnAll[1]){
    gridImg.style.width = '90%';
    gridImg.style.height = 'auto';
    gridImgBg.src = gridbtn[1].src;
  }
  else if(imgbtnAll[j] === imgbtnAll[2]){
    gridImg.style.width = '30%';
    gridImg.style.height = '90%';
    gridImgBg.src = gridbtn[2].src;
  }
  else if(imgbtnAll[j] === imgbtnAll[3]){
    gridImg.style.width = '30%';
    gridImg.style.height = '90%';
    gridImgBg.src = gridbtn[3].src;
  }
  else if(imgbtnAll[j] === imgbtnAll[4]){
    gridImg.style.width = '30%';
    gridImg.style.height = '90%';
    gridImgBg.src = gridbtn[4].src;
  }
  else if(imgbtnAll[j] === imgbtnAll[5]){
    gridImg.style.width = '30%';
    gridImg.style.height = '90%';
    gridImgBg.src = gridbtn[5].src;
  }
  else if(imgbtnAll[j] === imgbtnAll[6]){
    gridImg.style.width = '30%';
    gridImg.style.height = '90%';
    gridImgBg.src = gridbtn[6].src;
  }

  grid.style.opacity = '0.2';
  gridImg.style.zIndex = '5';
  gridImg.style.opacity = '1';
});
}

gridImg.addEventListener('click',function(){
  grid.style.opacity = '1';
  gridImg.style.opacity = '0';


  setTimeout(()=>{
    gridImg.style.zIndex = '-1';

  },300);


});



