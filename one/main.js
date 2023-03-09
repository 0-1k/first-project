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



