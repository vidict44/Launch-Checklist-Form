// Write your JavaScript code here!


window.addEventListener("load", function() {
      let form = document.querySelector("form");
      form.addEventListener("submit", function(event) {
         let pilotInput = document.querySelector("input[name=pilotName]");
         let copilotInput = document.querySelector("input[name=copilotName]");
         let fuelLevelInput = document.querySelector("input[name=fuelLevel]");
         let cargoMassInput = document.querySelector("input[name=cargoMass]");
          
      let pilotStatusInput = document.getElementById("pilotStatus");      
      pilotStatusInput.innerHTML=`${pilotInput.value} is ready for Launch`;
      let copilotStatusInput = document.getElementById("copilotStatus");      
      copilotStatusInput.innerHTML=`${copilotInput.value} is ready for Launch`;
      let fuelStatusInput = document.getElementById("fuelStatus");      
      let cargoStatusInput = document.getElementById("cargoStatus");      
      let launchStatusInput = document.getElementById("launchStatus"); 
          
         // alert the current value found in the username input
          if(pilotInput.value ==="" || copilotInput.value==="" || fuelLevelInput.value===""||cargoMassInput.value===""){
              alert("all fields are required!");
              event.preventDefault();
          }else if(!(isNaN(pilotInput.value))||!(isNaN(copilotInput.value))||isNaN(fuelLevelInput.value)||isNaN(cargoMassInput.value)){
              alert("Make sure to enter valid information for each field!");
              event.preventDefault();
          }else if(fuelLevelInput.value<10000){
              let faultyList = document.getElementById("faultyItems").style.visibility = "visible";
              fuelStatusInput.innerHTML=`There is not enough fuel for the journey`;
              launchStatusInput.innerHTML=`Shuttle not ready for launch`;
            launchStatusInput.style.color = "red";
              event.preventDefault();
          }else if(cargoMassInput.value>10000){
            let faultyList = document.getElementById("faultyItems").style.visibility = "visible";
            cargoStatusInput.innerHTML=`There is too much mass for the shuttle to take off`;
            launchStatusInput.innerHTML=`Shuttle not ready for launch`;
            launchStatusInput.style.color = "red";
              event.preventDefault();
          }else{
              let faultyList = document.getElementById("faultyItems").style.visibility = "hidden";
              launchStatusInput.innerHTML=`Shuttle is ready for launch`;
              launchStatusInput.style.color = "green";
              event.preventDefault();
          }
      }); 

   });


//This block of code shows how to format the HTML once you fetch some planetary JSON!
window.addEventListener("load", function() {
            fetch("https://handlers.education.launchcode.org/static/planets.json").then( function(response) {
               response.json().then( function(json) {
                  const div = document.getElementById("missionTarget");
                  // Add HTML that includes the JSON data
                  div.innerHTML = `
                    <h2>Mission Destination</h2>
                     <ol>
                        <li>Name: ${json[0].name}</li>
                        <li>Diameter: ${json[0].diameter}</li>
                        <li>Star: ${json[0].star}</li>
                        <li>Distance from Earth: ${json[0].distance}</li>
                        <li>Number of Moons: ${json[0].moons}</li>
                     </ol>
                        <img src="${json[0].image}">
                  `;
               });
            });
         });