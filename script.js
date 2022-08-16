"user strict";
window.addEventListener("DOMContentLoaded", (event) => {
    const BMIData = [
        { name: "Maigreur", color: "midnightblue", range: [0, 18.5] },
        { name: "Bonne santé", color: "green", range: [18.5, 25] },
        { name: "Surpoids", color: "lightcoral", range: [25, 30] },
        { name: "Obésité modérée", color: "orange", range: [30, 35] },
        { name: "Obésité sévère", color: "crimson", range: [35, 40] },
        { name: "Obésité morbide", color: "purple", range: 40 },
    ];
    const inputs = document.querySelectorAll("input");
    const submit = document.querySelector(".submit");
    const displayBmi = document.querySelector(".displayBmi");
    const result = document.querySelector(".result");
    const reset = document.querySelector(".reset");

    function calcualteBmi() {
        const height = inputs[0].value;
        const weight = inputs[1].value;

        if (!height || !weight || height <= 0 || weight <= 0) {
            error();
            return;
        } else {
            const bmi = Math.floor(weight / Math.pow(height / 100, 2).toFixed(1));
            return bmi;
        }
    }

    function error() {
        result.textContent = "❌ Oops, Enter a valid number ";
    }

    function rebootInputs(){
        document.querySelectorAll('input').value = '';
    }

    submit.addEventListener("click", function (e) {
        e.preventDefault();
        calcualteBmi();
        displayBmi.textContent = calcualteBmi();
    });

    reset.addEventListener("click", function () {
        // event.preventDefault();        
        result.textContent = '';        
        const height = document.getElementById('size');
        const weight = document.getElementById('weight');
        height.value = '';
        weight.value = '';
        console.log('here');
    });
});
