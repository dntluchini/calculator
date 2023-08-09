const buttonsCalc = document.querySelectorAll ('.buttonCalc');
const display = document.getElementById('display')



buttonsCalc.forEach(button => {
     button.addEventListener('click',()=>{
        const actKey = button.textContent;
            if (button.id === 'deleteNum') {
            if (display.textContent.length === 1 || display.textContent === 'Error!'){
                display.textContent = "0";
            } else {
                display.textContent = display.textContent.slice(0,-1)
            }
            return;
         }
          
         if (button.id === 'equal'){
            try {
            display.textContent = math.evaluate(display.textContent);
            
         } catch  {
            display.textContent = 'Error!'
         }
         return;
        }

        if (button.id === 'clear') {
            display.textContent = 0;
            return;
        }

        if (display.textContent === '0') {
            display.textContent = actKey; 

        } else{
            display.textContent += actKey;
        }
       
     })    
});


document.addEventListener('keydown', event => {
    const key = event.key;
  
    if (!isNaN(key) || key === '.') {
      addToExpression(key);
    } else if (key === 'Backspace') {
      actualNum = actualNum.slice(0, -1);
      display.textContent = actualNum;
    } else if (key === 'Escape') {
      clearExpression();
    } else if (key === '+' || key === '-' || key === '*' || key === '/') {
      addToExpression(' ' + key + ' ');
      operator = key;
    } else if (key === 'Enter' || key === '=') {
      calculate();
    }
  });







