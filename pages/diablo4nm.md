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
  #diablo4nm .output-box {
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

  #diablo4nm .output-box {
    color: #ffffff;
    background-color: #262a3e;
    border: 2px solid #141824;
    padding: 10px;
    appearance: textfield;
    -moz-appearance: textfield;
    -webkit-appearance: textfield;
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
  <p>This calculator helps you to determine the Tier Level and Enemy Level in the Diablo 4 <br>Nightmare Dungeon based on your character level. Given that the optimal farming<br>method for exp is to kill enemies that are 3 levels above you.<br>Pushing higher will grant greater EXP, but take longer to clear, making it less optimal.<br>Though if you can keep up speed it is better to push higher. This should be the minimum.<br><br>Keep in mind that this calculation is for World Tier 4. If you are still doing World Tier 3,<br>you will need to do one Tier higher than the result below.<br><br></p>
  
  <div class="output-section">
    <label for="inputNum">Character Level</label>
    <input type="number" id="inputNum" name="inputNum">
  </div>

  <div class="output-section">
    <label for="outputNum1">Tier Level</label>
    <input type="text" id="outputNum1" class="output-box" readonly>
  </div>

  <div class="output-section">
    <label for="outputNum2">Enemy Level</label>
    <input type="text" id="outputNum2" class="output-box" readonly>
  </div>
</div>

<script>
  document.getElementById('inputNum').addEventListener('input', function (e) {
    const inputValue = Number(e.target.value);
    const tempValue = inputValue + 3;

    const firstOutput = tempValue < 54 ? "Invalid level" : tempValue - 54;
    const secondOutput = tempValue;
    
    document.getElementById('outputNum1').value = firstOutput;
    document.getElementById('outputNum2').value = secondOutput;
  });
</script>
