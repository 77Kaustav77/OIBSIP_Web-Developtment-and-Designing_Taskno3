document.getElementById("convertBtn").addEventListener("click",function() {

const input = parseFloat(document.getElementById("temperature").value);


      const fromUnit = document.getElementById("fromUnit").value;

const toUnit = document.getElementById("toUnit").value;

      const resultBox = document.getElementById("result");

  
      if (isNaN(input)) {
        resultBox.textContent = "Please enter a valid number!";

      resultBox.style.display = "block";

        return;
      }

      let tempInCelsius;

if(fromUnit==='celsius'){

  tempInCelsius=input
} 
else if (fromUnit === "fahrenheit") {

        tempInCelsius = (input - 32) * 5/9;

      } 
      else if (fromUnit === "kelvin") {

        tempInCelsius = input - 273.15;
      }
      let result;

         if (toUnit === "celsius") {
        result = tempInCelsius;
      } 
      else if (toUnit === "fahrenheit") {
        result = (tempInCelsius * 9/5) + 32;
      } 
    else if (toUnit === "kelvin") {
        result = tempInCelsius + 273.15;
      }
   let label='';
   if(toUnit==='celsius'){
    label='c';
   }
   else if(toUnit==='Farenheit'){
    label='F';
}
else if(toUnit==='Kelvin'){
   label='k';
}

resultBox.textContent = `Converted: ${result.toFixed(2)}° ${label}`;

  resultBox.style.display = "block";

});




