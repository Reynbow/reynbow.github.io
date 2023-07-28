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
</style>

<h1>Diablo 4 Nightmare Dungeon Calculator</h1>
<div id="diablo4nm" class="container">
  <p>This calculator helps you to determine the Bonus Percentage and Dungeon Tier based<br>on your character level.<br>Keep in mind that this is for Season of the Malignant and World Tier 4 only.<br><br></p>
  
  <div class="output-section">
    <label for="inputNum">Character Level</label>
    <input type="number" id="inputNum" name="inputNum">
  </div>

  <!-- Add this new section for bonus percentage and tier level -->
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
      let tierLevel = tempValue - 54 + 21;

      // this will keep outputting the bonus percentage and level with increased percentage
      const bonusOutput = tempValue > 0 ? `${bonusPercentage}%` : "Invalid level";
      const tierOutput = tempValue > 54 ? `Tier Level: ${tierLevel}, Monster Level: ${tempValue}` : "Invalid tier level";

      const bonusField = document.createElement('div');
      bonusField.className = 'bonus-output';

      bonusField.innerHTML = `Level +${i} bonus: <b>${bonusOutput}</b><br>${tierOutput}`;

      if (i <= 5) {
        bonusColumn1.appendChild(bonusField);
      } else {
        bonusColumn2.appendChild(bonusField);
      }
    }
  });
</script>