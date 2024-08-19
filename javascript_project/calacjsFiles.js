const inputValue = document.getElementById("userInput");
// Add click event listeners to all operand elements
document.querySelectorAll(".operand").forEach(function (item) {
    item.addEventListener("click", function (e) {
      const clickedValue=e.target.innerHTML.trim();
      if (inputValue.innerText==="NaN" || inputValue.innerText==="0") {
        inputValue.innerText = "";
      }
      inputValue.innerText+=clickedValue;
    });
  });
  // Add click event listeners to all operator elements
document.querySelectorAll(".operators").forEach(function (item) {
    item.addEventListener("click", function (e) {
      const operator=e.target.innerHTML.trim();
      if (operator==="=") {
        try {
          // Evaluate the expression and handle errors
          inputValue.innerText=eval(inputValue.innerText) || "0";
        } catch {
          inputValue.innerText="NaN";
        }
    } else if (operator==="AC") {
        inputValue.innerText="0";
    } else if (operator==="DEL") {
        inputValue.innerText=inputValue.innerText.slice(0, -1) || "0";
    } else {
        //add operators only if last charater is an number
        const lastChar=inputValue.innerText.slice(-1);
        if (!isNaN(lastChar) || lastChar==="") {
          inputValue.innerText+=operator;
        }
      }
    });
  });