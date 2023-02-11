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
const btnclr = document.querySelector('.btnClrL')
const btnclrA = document.querySelector('.btnClrA')

var newResult=0;
var lastResult=0;
var sum=0;
var counter =0;
var tabBase=[];

const checkHistory2 = (e) =>{
let object = e.target
let smt = object.getAttribute('value')
wResult.innerText=`Waga równa ${tabBase[smt][1]};`
hResult.innerText=`Wzrost równy ${tabBase[smt][2]};`
bmiResult.innerText=`BMI wynosi ${tabBase[smt][3]}`
bmiChange.innerText=''
alert.innerText=''
}

const clearHistoryL = () =>{
        var toRemove = document.querySelector('li')
    toRemove.remove()
    }

const clearHistoryA = () =>{
     var toRemoveAll = document.querySelectorAll('li')
     toRemoveAll.forEach( tra => tra.remove())
    
    }

const bmiCalculate3 = ()=>{
    if((weightinput.value<40 || weightinput.value>200) && (heightinput.value<120 || heightinput>240)) alert.innerText="zła waga i zły wzrost"
    else if(weightinput.value<40 || weightinput.value>200) alert.innerText="zła waga"
    else if (heightinput.value<120 || heightinput>240) alert.innerText="zły wzrost"
else{
    var date= new Date;
      var dateCorrect = `${date.getDay()}/${date.getMonth()+1}/${date.getFullYear()} ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`
    let bmi = Number(weightinput.value/(heightinput.value*heightinput.value))
   bmi= bmi.toFixed(4)
   let weightNew=weightinput.value
   let heightNew=heightinput.value
wResult.innerText=`Waga: ${weightNew}`
hResult.innerText=`Wzrost: ${heightNew}`
bmiResult.innerText=`BMI: ${bmi}`

tabBase[counter]=[counter,weightNew,heightNew,bmi,dateCorrect]

const line = document.createElement('li')
line.innerText=`Pomiar z ${tabBase[counter][4]} Wzrost: ${tabBase[counter][1]} Waga: ${tabBase[counter][2]} BMI: ${tabBase[counter][3]}`
ulList.prepend(line)
lastResult=newResult;
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
}

checkBtn.addEventListener('click', bmiCalculate3)
ulList.addEventListener('click',checkHistory2)
btnclr.addEventListener('click',clearHistoryL)
btnclrA.addEventListener('click',clearHistoryA)