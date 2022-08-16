'user strict'
window.addEventListener('DOMContentLoaded', (event) => {

    const inputs = document.querySelectorAll('input');
    const submit = document.querySelector('.submit');
    const displayBmi = document.querySelector('.displayBmi');
    const result = document.querySelector('.result');
    

    // console.log(inputs);

    const prevent = submit.addEventListener('click', function (e){
    e.preventDefault()

        function calcualteBmi(){
            const height = inputs[0].value;
            const weight = inputs[1].value;

            if(!height || !weight || height <=0 || weight <= 0 ){                
                result.textContent = '❌ Oops, Enter a valid number '
            } else {                     
                const bmi = Math.floor(weight / (Math.pow(height / 100, 2).toFixed (1)))
                return bmi;     
            }
        }
        
        calcualteBmi();
        displayBmi.textContent = calcualteBmi();
    });

});


// mettre en place les secuirte 
//  nb negatif, limite de poids taille

// recupere le resultat est le mettre dans l endroit prevu 

// en fcontion du resultat affiché l'image