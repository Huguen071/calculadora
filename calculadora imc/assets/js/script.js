const form = document.getElementById('form');

form.addEventListener('submit', function(event){
    event.preventDefault();

    const weight = parseFloat(document.getElementById('weight').value);
    const height = parseFloat (document.getElementById('height').value);

    const bmi = (weight / (height * height)).toFixed(2);

    if (!isNaN(bmi)) {}
    const value = document.getElementById('value');
    let description = '';

    value.classList.add('attention');

    document.getElementById('infos').classList.remove('hidden');

    if (bmi < 18.5) {
        description = 'Cuidado! Você está abaixo do peso!'
    } else if (bmi >= 18.5 && bmi <= 25) {
        description = "Você está no peso ideal!";
    } else if (bmi > 25 && bmi <= 30) {
        description = "Cuidado! Você está com sobrepeso!";
    } else if (bmi > 30 && bmi <= 35) {
        description = "Cuidado! Você esta com obresidade moderada!";
    } else {
        description = "Cuidado! Você está com obesidade morbida!";
    }

    value.textContent = bmi.replace('.',',');
    document.getElementById('description').textContent = description;
});