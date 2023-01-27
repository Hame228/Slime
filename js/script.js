let field = document.createElement('div');
document.body.appendChild(field);
field.classList.add('field');

let butt = document.createElement('div')
document.body.appendChild(butt)
butt.classList.add('butt')

function abbrNum(number) {
    // 2 decimal places => 100, 3 => 1000, etc
    decPlaces =100;

    // Enumerate number abbreviations
    let abbrev = [ "k", "m", "b", "t" ];

    // Go through the array backwards, so we do the largest first
    for (i=abbrev.length-1; i>=0; i--) {

        // Convert array index to "1000", "1000000", etc
        let size = Math.pow(10,(i+1)*3);
        //console.log(size);
        // If the number is bigger or equal do the abbreviation
        if(size <= number) {
             // Here, we multiply by decPlaces, round, and then divide by decPlaces.
             // This gives us nice rounding to a particular decimal place.
             number = Math.round(number/size*10)/10;
               //number = (number*2/size)/2;

             // Handle special case where we round up to the next abbreviation
             if((number == 1000) && (i < abbrev.length - 1)) {
                 number = 1;
                 i++;
             }

             // Add the letter for the abbreviation
             number += abbrev[i];

             // We are done... stop
             break;
        }
    }

    return number;
}


for (i=1; i<2501; i++) {

    let excel = document.createElement('div');
    field.appendChild(excel);
    excel.classList.add('excel');
}
let excel = document.getElementsByClassName('excel');

butt.addEventListener('click', yep, false);

let exp;
let strange;
let step;
//let vc = 'ac';

let clickCount = document.getElementById('clickCount');
let Up = document.getElementById('Up');
let knop = document.getElementById('knop');

//clickCount.innerText=vc;

if (localStorage.getItem('score')==null) {
    exp = 0;
    strange = 1;
    step = 10;
    localStorage.setItem('scoreUp',strange)
    localStorage.setItem('score',exp);
    localStorage.setItem('step',step);
    
    clickCount.innerText = abbrNum(exp);
    Up.innerText = strange;
    knop.innerText = step;
   //alert('dds');
}  

else {
    exp = parseInt(localStorage.getItem('score'));
    strange =parseInt(localStorage.getItem('scoreUp'));
    step = parseInt(localStorage.getItem('step'));
    console.log(exp);
    console.log(abbrNum(exp));
   
    clickCount.innerText = abbrNum(exp);
    Up.innerText = strange;
    knop.innerText = step;
    //alert('fs');
}     





//let input = document.createElement('input');
//document.body.appendChild(input);
//input.style.cssText = `
//margin: auto;
//font-size: 20px;
//display:block;
//position:absolute;
///top:50px;
//left:100px;
//width: 300px;
//` 
//let exp =localStorage.getItem('score');
//input.value = `Expirience: ${exp}`;
/*let x = 1;
let y = 50;

for (i=0;i<excel.length; i++) {
    if (x>50) {
        x = 1;
        y--;

    }
    excel[i].setAttribute('posX', x);
    excel[i].setAttribute('posY', y);
    x++;
}
*/

/*excel[0].addEventListener('click', cellClick, false);
function cellClick() {
    alert("hi")
}*/
let posix = 18; // 50;41 500kl
let posiy = 33;
let posiz = 33;
// 6 повторів
function numExcel() {
    for (m=((50-posiy)*50+(posix-1));m<((50-posiy)*50+posiz); m++) {
        excel[m].addEventListener('click', cellClick, false);

    }
}
for (i=0;i<6; i++) {
    /*for (b=((50-posiy)*50+(posix-1));b<((50-posiy)*50+posiz); b++) {
        excel[b].addEventListener('click', cellClick, false);

    }
    */
   numExcel();
    posix--;
    posiy--;
    posiz++;
}
for (n=0; n<8; n++) {
    numExcel();
    posiy--;
}
posix++;
posiz--;
for (k=0;k<2; k++) {
    numExcel();
    posix++;
    posiy--;
    posiz--;
}
function cellClick() {
   // exp++;
  //  localStorage.setItem('score',exp);
   // input.value = `Expirience: ${exp}`;
    exp=exp+strange;
    localStorage.setItem('score', exp);
    clickCount.innerText = abbrNum(exp);
}

function yep(){
    if (exp>=step){
    exp = exp-step;
   // step = parseInt(step);
  //  console.log(typeof step);
    let step2 = Math.round((step/100)*5);
   // console.log(step);
   // console.log(step2);
    step = step+step2;
  //  console.log(step);
   // console.log(step2);
    strange++;
    //localStorage.setItem('scoreUp',strange);
    //Up.innerText = strange;

    localStorage.setItem('scoreUp',strange)
    localStorage.setItem('score',exp);
    localStorage.setItem('step',step);

    clickCount.innerText = abbrNum(exp);
    Up.innerText = strange;
    knop.innerText = step;
    return;
    }
    else {
        alert('нема грошей');
        return;
    }
}


/*function abbrNum(number) {
    // 2 decimal places => 100, 3 => 1000, etc
    decPlaces =100;

    // Enumerate number abbreviations
    let abbrev = [ "k", "m", "b", "t" ];

    // Go through the array backwards, so we do the largest first
    for (i=abbrev.length-1; i>=0; i--) {

        // Convert array index to "1000", "1000000", etc
        let size = Math.pow(10,(i+1)*3);
        //console.log(size);
        // If the number is bigger or equal do the abbreviation
        if(size <= number) {
             // Here, we multiply by decPlaces, round, and then divide by decPlaces.
             // This gives us nice rounding to a particular decimal place.
             number = Math.round(number/size*10)/10;
               //number = (number*2/size)/2;

             // Handle special case where we round up to the next abbreviation
             if((number == 1000) && (i < abbrev.length - 1)) {
                 number = 1;
                 i++;
             }

             // Add the letter for the abbreviation
             number += abbrev[i];

             // We are done... stop
             break;
        }
    }

    return number;
}*/

    /* posix-- posiy-- posiz++  
 et x = localStorage.getItem('score');
console.log(localStorage.getItem('score'));
for (i=3; i<10; i++) {
    x++;
    localStorage.setItem('score',x)
}
console.log(localStorage.getItem('score')); */
