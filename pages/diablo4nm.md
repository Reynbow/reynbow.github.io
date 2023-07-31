---
layout: page
permalink: /diablo4nm
---

<style>
  @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');

  #diablo4nm {
    font-family: 'Roboto', sans-serif;
    color: #ffffff;
    background-color: #262a3e;
  }

  #diablo4nm input[type="number"], 

  #diablo4nm .bonus-output {
  width: 200px;
  background-color: #141824;
  color: #ffffff;
  border: none;
  padding: 10px;
  appearance: textfield;
  -moz-appearance: textfield;
  -webkit-appearance: textfield;
  margin-bottom: 8px;
}

  #diablo4nm label, #diablo4nm p {
    color: #ffffff;
    display: block;
    margin-bottom: 5px;
  }

  #diablo4nm .output-section {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin: 2%;
  }

#diablo4nm .container {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 80%;
  margin: auto;
  margin-left: 198px;
  overflow: auto;
}


  #diablo4nm .columns {
    display: flex;
    justify-content: flex-start;
    width: 100%;
  }

  #diablo4nm .column {
    width: 30%;
    margin: 0 25px;
    box-sizing: border-box;
  }

  #diablo4nm .bonus-output::after {
  content: "";
  display: table;
  clear: both;
}

</style>

<h1>Diablo 4 Nightmare Dungeon Calculator</h1>
<div id="diablo4nm" class="container">
  <p>This calculator helps you to determine the Bonus Percentage and Dungeon Tier based<br>on your character level.<br><br></p>
  
  <div class="output-section">
    <label for="inputNum">Character Level</label>
    <input type="number" id="inputNum" name="inputNum">
  </div>

  <div id="bonusSection" class="columns">
  <div id="bonusColumn1" class="column"></div>
  <div id="bonusColumn2" class="column"></div>
  </div>
</div>

<script>
document.getElementById('inputNum').addEventListener('input', function (e) {
  const inputValue = Number(e.target.value);

  const bonusColumn1 = document.getElementById('bonusColumn1');
  const bonusColumn2 = document.getElementById('bonusColumn2');

  // clear previous output
  bonusColumn1.innerHTML = '';
  bonusColumn2.innerHTML = '';

  for (let i = 1; i <= 10; i++) {
    const tempValue = inputValue + i;

    let bonusPercentage = i * 1.5;
    let tierLevel = tempValue - 54;
    let monsterLevel = tempValue;

    const bonusOutput = tempValue > 0 ? `<span class="category">Bonus</span><span class="number"><b>${bonusPercentage}%</b></span>` : "Invalid level";
    
    let tierOutput;
    if (tempValue > 54) {
      if (tierLevel < 21) {
        monsterLevel--; // Adjust monster level to be one lower
        tierLevel = tierLevel < 1 ? "NA" : tierLevel;
      } else {
        tierLevel = tierLevel < 1 ? "NA" : tierLevel;
      }
    } else {
      tierLevel = "NA";
      monsterLevel = "NA";
    }

    const bonusField = document.createElement('div');
    bonusField.className = 'bonus-output';

    bonusField.innerHTML = `Level +${i}: ${bonusOutput}<br><span class="category">Tier Level:</span> <span class="number"><b>${tierLevel}</b></span> <span class="category">Monster Level:</span> <span class="number"><b>${monsterLevel}</b></span>`;

    if (i <= 5) {
      bonusColumn1.appendChild(bonusField);
    } else {
      bonusColumn2.appendChild(bonusField);
    }
  }
});
</script>

<style>
.category {
  float: left;
}
.number {
  float: right;
  clear: right;
}
.bonus-output {
  clear: both;
}
</style>
