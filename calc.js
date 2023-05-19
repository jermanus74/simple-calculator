 const num1Input = document.getElementById("num1");
 const num2Input = document.getElementById("num2");
 const addBtn = document.getElementById("add");
 const minusBtn = document.getElementById("minus");
const timesBtn= document.getElementById("times");
const relBtn= document.getElementById("rel");
const divideBtn = document.getElementById("divide");
 const resultDiv = document.getElementById("result");
 
 addBtn.addEventListener("click", function() {
    const num1 = Number(num1Input.value);
    const num2 = Number(num2Input.value);
  
    const result = num1 + num2;
    resultDiv.textContent = result;
  },true);

  minusBtn.addEventListener("click", function() {
    const num1 = Number(num1Input.value);
    const num2 = Number(num2Input.value);
  
    const result = num1 - num2;
    resultDiv.textContent = result;
  });

  timesBtn.addEventListener("click", function() {
    const num1 = Number(num1Input.value);
    const num2 = Number(num2Input.value);
  
    const result = num1 * num2;
    resultDiv.textContent = result;
  });

  divideBtn.addEventListener("click", function() {
    const num1 = Number(num1Input.value);
    const num2 = Number(num2Input.value);
  
    const result = num1 / num2;
    resultDiv.textContent = result;
  });
 /* const btn=document.querySelector(".btn")
  function color(){
    btn.style.backgroundColor="red"
  }
  newColor=btn.addEventListener("mouseover",color)*/
 
  
    