// Function to calculate BMI
function calculateBMI(height, weight) {
    const bmi = weight / Math.pow(height / 100, 2);
    return bmi;
}

// Function to determine gender based on BMI
function determineGender(bmi) {
    if (bmi < 18.5) {
        return "Underweight";
    } else if (bmi < 25) {
        return "Normal";
    } else if (bmi < 30) {
        return "Overweight";
    } else {
        return "Obese";
    }
}

// Function to display result
function displayResult(height, weight, bmi, gender) {
    const resultDiv = document.getElementById("result");
    resultDiv.innerHTML = `
        <p>Hasil BMI: ${bmi.toFixed(2)}</p>
        <p>Gender: ${gender}</p>
    `;
}

// Event listener for form submission
document.getElementById("bmi-form").addEventListener("submit", (e) => {
    e.preventDefault();
    const height = document.getElementById("height").value;
    const weight = document.getElementById("weight").value;
    
    if (height && weight) {
        const bmi = calculateBMI(height, weight);
        const gender = determineGender(bmi);
        displayResult(height, weight, bmi, gender);
    } else {
        alert("Please enter both height and weight.");
    }
});
