"user strict";
window.addEventListener("DOMContentLoaded", (event) => {

    // data
    const BMIData = [
        { name: "Maigreur", color: "midnightblue", range: [0, 18.5] },
        { name: "Bonne santé", color: "green", range: [18.5, 25] },
        { name: "Surpoids", color: "lightcoral", range: [25, 30] },
        { name: "Obésité modérée", color: "orange", range: [30, 35] },
        { name: "Obésité sévère", color: "crimson", range: [35, 40] },
        { name: "Obésité morbide", color: "purple", range: 40 },
    ];

    // DOM
    const inputs = document.querySelectorAll("input");
    const submit = document.querySelector(".submit");
    const displayBmi = document.querySelector(".displayBmi");
    const result = document.querySelector(".result");
    const reset = document.querySelector(".reset");
    
    // wrong number
    function error() {
        result.textContent = "❌ Oops, Enter a valid number ";
    }
    
    function calcualteBmi() {
        const height = inputs[0].value;
        const weight = inputs[1].value;

        if (!height || !weight || height <= 0 || weight <= 0) {
            error();
            return;
        }         
        const bmi = (weight / Math.pow(height / 100, 2)).toFixed(1);
        return bmi;        
    }

    // find data in BMI table
    // function showResult(bmi){
    //     const rank = BMIData.find(data => {
    //         if(bmi >= data.range[0] && bmi < data.range[1]) return data;
    //         else if (typeof data.range === "number" && bmi >= data.range) return data;
    //     });
    //     displayBmi.textContent = bim;
    //     displayBmi.style.color = `${rank.color}`;
    //     result.textContent = `Résultat : ${rank.name}`;
    //     return;
    // }


    submit.addEventListener("click", function (e) {
        e.preventDefault();
        calcualteBmi();
        displayBmi.textContent = calcualteBmi();
        // showResult(bmi)
        
    });


    // reset the calculator
    reset.addEventListener("click", function () {       
        displayBmi.textContent = '0';        
        const height = document.getElementById('size');
        const weight = document.getElementById('weight');
        height.value = '';
        weight.value = '';
        result.textContent = '';

    });

});
