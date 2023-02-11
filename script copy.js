const weightinput = document.querySelector(".weight")
const heightinput = document.querySelector(".height")
const checkBtn = document.querySelector('.check')
const wResult = document.querySelector('.wresult')
const hResult = document.querySelector('.hresult')
const bmiResult = document.querySelector('.BMIresult')
const alert = document.querySelector('.alert')
const history = document.querySelector('.right')
const ulList = document.querySelector('ul')
const line = document.createElement('li')
const line2 = document.getElementsByTagName('li')
const avgBmi = document.querySelector('.avg')
const bmiChange = document.querySelector('.BMIchange')
// const btnclr = document.querySelector('.btnClrL')
const btnclrA = document.querySelector('.btnClrA')
const timer = document.querySelector('.timer')
const btnSettings = document.querySelector('.settingsBtn')
const settings = document.querySelector('.settings')
const inputs=document.querySelector('.inputs')
const btnExit=document.querySelector('.exitBtn')
const theme1=document.querySelector('.t1')
const theme2=document.querySelector('.t2')
const theme3=document.querySelector('.t3')
const body=document.querySelector('body')


var newResult=0;
var lastResult=0;
var sum=0;
var counter =window.localStorage.length/4;
var lastResult=window.localStorage.getItem(`b${counter-1}`);
var tabBase=[];

const showSettings =()=>{
    settings.classList.remove('none')
    inputs.classList.add('none')
}
const hideSettings =()=>{
    settings.classList.add('none')
    inputs.classList.remove('none')
}

const theme1design =()=>{
    body.style.backgroundColor='grey'
    body.style.color=`black`
}
const theme2design =()=>{
    body.style.backgroundColor='rgb(151, 220, 241)'
    body.style.color=`black`
}
const theme3design =()=>{
    body.style.backgroundColor='black'
    body.style.color=`lightgrey`
}


const refresh = () =>{
for(let i = 0; i<window.localStorage.length/4; i++){
    const line = document.createElement('li')
line.innerText=`Pomiar z ${window.localStorage.getItem(`d${i}`)} Wzrost: ${window.localStorage.getItem(`h${i}`)} Waga: ${window.localStorage.getItem(`w${i}`)} BMI: ${window.localStorage.getItem(`b${i}`)}`;
ulList.prepend(line)
line.setAttribute('value',i)

sum = Number(window.localStorage.getItem(`b${i}`)) + sum;
avgBmi.innerText=`Średnia BMI = ${(sum/(i+1)).toFixed(2)}`

}
}
refresh()

const checkHistory2 = (e) =>{
let object = e.target
let smt = object.getAttribute('value')
wResult.innerText=`Waga równa ${window.localStorage.getItem(`w${smt}`)};`
hResult.innerText=`Wzrost równy ${window.localStorage.getItem(`h${smt}`)};`
bmiResult.innerText=`BMI wynosi ${window.localStorage.getItem(`b${smt}`)}`
bmiChange.innerText=''
alert.innerText=''
}

// const clearHistoryL = () =>{
      
//     window.localStorage.removeItem(`w${counter-1}`)
//     window.localStorage.removeItem(`h${counter-1}`)
//     window.localStorage.removeItem(`b${counter-1}`)
//     window.localStorage.removeItem(`d${counter-1}`)
//   var toRemove = document.querySelector('li')
//     toRemove.remove()
//     counter =window.localStorage.length/4;
//     bmiChange.innerText="";
//     }

const clearHistoryA = () =>{
     var toRemoveAll = document.querySelectorAll('li')
     toRemoveAll.forEach( tra => tra.remove())
     window.localStorage.clear()
     counter =window.localStorage.length/4;
     avgBmi.innerText=`Średnia BMI`;
     lastResult=0;
     bmiChange.innerText="";
     sum=0;


    
    }

    function timing()
{
    var date = new Date;
    var day = date.getDate();
    var month = date.getMonth()+1;
    var year = date.getFullYear();
    var hour = date.getHours();
    var minute = date.getMinutes();
    var second = date.getSeconds();
    if (second<10) second="0"+second;
    if (minute<10) minute="0"+minute;

    timer.innerHTML = hour+":"+minute+":"+second+" | "+day+"/"+month+"/"+year;
    setTimeout("timing()",1000);
}
timing()
const bmiCalculate3 = ()=>{
    if((weightinput.value<40 || weightinput.value>200) && (heightinput.value<120 || heightinput>240)) alert.innerText="zła waga i zły wzrost"
    else if (heightinput.value<120 || Number(heightinput.value)>240) alert.innerText="zły wzrost"
    else if(weightinput.value<40 || weightinput.value>200) alert.innerText="zła waga"
    // else if (heightinput.value<120 || Number(heightinput.value)>240) alert.innerText="zły wzrost"
else{
    var date= new Date;
      var dateCorrect = `${date.getDay()}/${date.getMonth()+1}/${date.getFullYear()} ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`
    let bmi = Number(weightinput.value/(heightinput.value*heightinput.value)) * 10000
   bmi= bmi.toFixed(2)
   let weightNew=weightinput.value
   let heightNew=heightinput.value
wResult.innerText=`Waga: ${weightNew}`
hResult.innerText=`Wzrost: ${heightNew}`
bmiResult.innerText=`BMI: ${bmi}`

tabBase[counter]=[counter,weightNew,heightNew,bmi,dateCorrect]
window.localStorage.setItem(`w${counter}`,weightNew)
window.localStorage.setItem(`h${counter}`,heightNew)
window.localStorage.setItem(`b${counter}`,bmi)
window.localStorage.setItem(`d${counter}`,dateCorrect)

const line = document.createElement('li')
line.innerText=`Pomiar z ${window.localStorage.getItem(`d${counter}`)} Wzrost: ${window.localStorage.getItem(`h${counter}`)} Waga: ${window.localStorage.getItem(`w${counter}`)} BMI: ${window.localStorage.getItem(`b${counter}`)}`;

ulList.prepend(line)
newResult=bmi;

line.setAttribute('value',counter)
sum = Number(bmi) + sum;
avgBmi.innerText=`Średnia BMI = ${(sum/(counter+1)).toFixed(4)}`

counter++

if(newResult>lastResult && lastResult!==0) bmiChange.innerText="Twoje BMI wzrosło!"
else if (newResult<lastResult && lastResult!==0)bmiChange.innerText="Twoje BMI zmalało!"
}
weightinput.value='';
heightinput.value='';
lastResult=newResult;
}

ulList.addEventListener('click',checkHistory2)
// btnclr.addEventListener('click',clearHistoryL)
btnclrA.addEventListener('click',clearHistoryA)
checkBtn.addEventListener('click', bmiCalculate3)
btnSettings.addEventListener('click',showSettings)
btnExit.addEventListener('click',hideSettings)
theme1.addEventListener('click',theme1design)
theme2.addEventListener('click',theme2design)
theme3.addEventListener('click',theme3design)