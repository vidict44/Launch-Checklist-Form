// Write your JavaScript code here!
window.addEventListener("load", function() {
      let form = document.querySelector("form");
      form.addEventListener("submit", function(event) {
         let pilotInput = document.querySelector("input[name=pilotName]");
          let copilotInput = document.querySelector("input[name=copilotName]");
          let fuelLevelInput = document.querySelector("input[name=fuelLevel]");
          let cargoMassInput = document.querySelector("input[name=cargoMass]");
         // alert the current value found in the username input
          if(pilotInput.value ==="" || copilotInput.value==="" || fuelLevelInput.value===""||cargoMassInput.value===""){
              alert("all fields are required!");
              event.preventDefault();
          }else if(!(isNaN(pilotInput.value))||!(isNaN(copilotInput.value))||isNaN(fuelLevelInput.value)||isNaN(cargoMassInput.value)){
              alert("Make sure to enter valid information for each field!");
              event.preventDefault();
          }
      });
   });
/* This block of code shows how to format the HTML once you fetch some planetary JSON!
<h2>Mission Destination</h2>
<ol>
   <li>Name: ${}</li>
   <li>Diameter: ${}</li>
   <li>Star: ${}</li>
   <li>Distance from Earth: ${}</li>
   <li>Number of Moons: ${}</li>
</ol>
<img src="${}">
*/
