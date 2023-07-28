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
    justify-content: center;
    width: 100%;
    margin: auto;
  }
</style>

<h1>Diablo 4 Nightmare Dungeon Calculator</h1>
<div id="diablo4nm" class="container">
  <p>This calculator helps you to determine the Bonus Percentage and Dungeon Tier based on your character level.<br>Keep in mind that this calculation is for Post-Season of the Malignant.<br><br></p>
  
  <div class="output-section">
    <label for="inputNum">Character Level</label>
    <input type="number" id="inputNum" name="inputNum">
  </div>

  <!-- Add this new section for bonus percentage and tier level -->
  <div id="bonusSection"></div>
</div>

<script>
  document.getElementById('inputNum').addEventListener('input', function (e) {
    const inputValue = Number(e.target.value);

    const bonusSection = document.getElementById('bonusSection');

    // clear previous output
    bonusSection.innerHTML = '';

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

      bonusSection.appendChild(bonusField);
    }
  });
</script>
