const additionArea = document.querySelectorAll('.area')[0];
const subtractionArea = document.querySelectorAll('.area')[1];
const multiplicationArea = document.querySelectorAll('.area')[2];
const divisionArea = document.querySelectorAll('.area')[3];
const question = document.querySelectorAll('h2')[0];
const entryArea = document.querySelectorAll('input')[0];
const submit = document.querySelectorAll('input')[1];
let imgArea = document.querySelector('img');
const array = ['Mathmania+ appicon.svg','Add.jpg', 'Subtract.jpg','Add (1).jpg'];
let num1;
let num2;
let correctAnswer;
let x = 0;
imgArea.src = 'Mathmania+ appicon.svg';
imgArea.style.justifyContent = "center";
imgArea.style.alignItems = "center";
function submitAnswer(){
    if (entryArea.value == correctAnswer)
    alert("Correct");
    else
    alert("Incorrect");
}
/*setInterval(()=>{
if(x > 2){
    x = 0;
}
 imgArea.src =  array[x];
 x++;
},2000);
//setTimeout(()=>{alert("Hello"),5000})
*/

additionArea.style.backgroundColor = "lightcoral";
subtractionArea.style.backgroundColor = "cornflowerblue";
multiplicationArea.style.backgroundColor = "lightgreen";
divisionArea.style.backgroundColor = "lightsalmon";
additionArea.addEventListener('click',  (e)=>{
    num1 = Math.floor(Math.random() * (10 - 1) + 1); 
    num2 = Math.floor(Math.random() * (10 - 1) + 1);
    correctAnswer = num1 + num2;
    question.innerText = `${num1} + ${num2}`;
});
subtractionArea.addEventListener('click',  (e)=>{
    num1 = Math.floor(Math.random() * (10 - 1) + 1); 
    num2 = Math.floor(Math.random() * (10 - 1) + 1);
    correctAnswer = num1 - num2;
    question.innerText = `${num1} - ${num2}`;
});
multiplicationArea.addEventListener('click',  (e)=>{
    num1 = Math.floor(Math.random() * (10 - 1) + 1); 
    num2 = Math.floor(Math.random() * (10 - 1) + 1);
    correctAnswer = num1 * num2;
    question.innerText = `${num1} x ${num2}`;
});
divisionArea.addEventListener('click',  (e)=>{
    num1 = Math.floor(Math.random() * (10 - 1) + 1); 
    num2 = Math.floor(Math.random() * (10 - 1) + 1);
    correctAnswer = num1 - num2;
    question.innerText = `${num1} / ${num2}`;
});
additionArea.addEventListener('mouseenter',(e)=>
{
    e.preventDefault();
    additionArea.style.color = "lightcoral";
    additionArea.querySelector("h1").style.color = "lightcoral";
    additionArea.style.backgroundColor = "white";
});
additionArea.addEventListener('mouseleave',(e)=>
{

    additionArea.style.backgroundColor = "lightcoral";
    additionArea.querySelector("h1").style.color = "white";
    additionArea.style.color = "white"
})
subtractionArea.addEventListener('mouseenter',()=>
{
    subtractionArea.style.backgroundColor = "white"; 
    subtractionArea.querySelector("h1").style.color = "cornflowerblue";
    subtractionArea.style.color = "cornflowerblue";
});
subtractionArea.addEventListener('mouseleave',()=>{
    subtractionArea.style.backgroundColor = "cornflowerblue";
    subtractionArea.querySelector("h1").style.color = "white";
    subtractionArea.style.color = "white";

});
multiplicationArea.addEventListener('mouseenter',()=>
{
    multiplicationArea.style.backgroundColor = "white";
    multiplicationArea.querySelector("h1").style.color = "lightgreen";

    multiplicationArea.style.color = "lightgreen";
   // multiplicationArea.style.background = "white";
    
});
multiplicationArea.addEventListener('mouseleave',()=>{
    multiplicationArea.style.backgroundColor = "lightgreen";
    multiplicationArea.querySelector("h1").style.color = "white";
    multiplicationArea.style.color = "white";
});
divisionArea.addEventListener('mouseenter',()=>
{
    divisionArea.style.color = "lightsalmon";
    divisionArea.querySelector("h1").style.color = "lightsalmon";
    divisionArea.style.backgroundColor = "white";
    
});
divisionArea.addEventListener('mouseleave',()=>{
    divisionArea.style.backgroundColor = "lightsalmon";
    divisionArea.querySelector("h1").style.color = "white";
    divisionArea.style.color = "white";
});