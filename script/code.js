function calculateBMI() {
    var weight = parseFloat(document.getElementById('weight').value);
    var height = parseFloat(document.getElementById('height').value);
    
    if (isNaN(weight) || isNaN(height) || weight <= 0 || height <= 0) {
      document.getElementById('result').innerText = 'Please enter valid values for weight and height.';
    } else {
      var bmi = weight / (height * height);
      document.getElementById('result').innerText = 'Your BMI is: ' + bmi.toFixed(2) + '\n' + interpretBMI(bmi);
    }
  }

  function interpretBMI(bmi) {
    if (bmi < 18.5) {
      return 'Underweight';
    } else if (bmi < 24.9) {
      return 'Healthy';
    } else if (bmi < 29.9) {
      return 'Overweight';
    } else if (bmi < 39.9) {
      return 'Obesity'; }
      else if (bmi > 40) {
      return 'Severe Obesity';
    }
  }