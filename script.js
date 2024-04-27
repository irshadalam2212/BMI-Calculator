// let form = document.querySelector('form')

// form.addEventListener('submit',function(e){
//     e.preventDefault()

//     const height = parseInt(document.querySelector('#height').value)
//     const weight = parseInt(document.querySelector('#weight').value)
//     const results = document.querySelector('#results')

//     if (height === ''|| height < 0 || isNaN(height)) {
//         results.innerHTML = 'Please give a valid height'
//     }
//     else if (weight === ''|| weight < 0 || isNaN(weight)) {
//         results.innerHTML = 'Please give a valid weigth'
//     }
//     else{
//         const bmi = (weight/((height * height)/10000)).toFixed(2)
//         if(bmi <= 18.6){
//             results.innerHTML = `<span>${bmi} (Under Weigth)</span>`
//         }
//         else if(bmi >= 24.9){
//             results.innerHTML = `<span>${bmi} (Over Weigth)</span>`
//         }
//         else{
//             results.innerHTML = `<span>${bmi} (Normal)</span>`
//         }
        
//     }
// })


// let form = document.querySelector('form')

// form.addEventListener('submit', function(e){
//     e.preventDefault()

//     const height = parseInt(document.querySelector('#height').value)
//     const weight = parseInt(document.querySelector('#weight').value)
//     const results = document.querySelector('#results')

//     if(height ==='' || height < 0 || isNaN(height)){
//         results.innerHTML = 'Please give a valid height'
//     }
//     else if(weight ==='' || weight < 0 || isNaN(weight)){
//         results.innerHTML = 'Please give a valid weight'
//     }
//     else {
//         const bmi = (weight/((height * height)/10000)).toFixed(2)
//         if (bmi <= 18.6) {
//             results.innerHTML = `<span>${bmi} (Under Weight)</span>`
//         }
//         else if (bmi >= 24.9) {
//             results.innerHTML = `<span>${bmi} (Over Weight)</span>`
//         }
//         else {
//             results.innerHTML = `<span>${bmi} (Normal Weight)</span>`
//         }
//     }

// })

// let form = document.querySelector('form')

// form.addEventListener('submit', function(e){
//     e.preventDefault()

//     const height = parseInt(document.querySelector('#height').value)
//     const weight = parseInt(document.querySelector('#weight').value)
//     const results = document.querySelector('#results')

//     if(height ==='' || height < 0 || isNaN(height)){
//         results.innerHTML = `Please give a valid height`
//     }
//     else if(weight === '' || weight < 0 || isNaN(weight)){
//         results.innerHTML = 'Please give a valid Weight'
//     }
//     else {
//         const bmi = (weight/((height * height)/10000)).toFixed(2)
//         if(bmi <= 18.6){
//             results.innerHTML = `<span>${bmi} (Under Weight)</span>`
//         }
//         else if(bmi >= 24.9){
//             results.innerHTML = `<span>${bmi} (Over Weight)</span>`
//         }
//         else {
//             results.innerHTML = `<span>${bmi} (Normal Weight)</span>`
//         }
//     }
// })


let form = document.querySelector('form')
const button = document.querySelector('button')

form.addEventListener('submit', function(e){
    e.preventDefault()

    const height = parseInt(document.getElementById('height').value)
    const weight = parseInt(document.getElementById('weight').value)
    const results = document.getElementById('results')

    if (height === '' || height < 0 || isNaN(height)) {
        results.innerHTML = `Please enter a valid height`
    } 
    else if (weight === '' || weight < 0 || isNaN(weight)) {
        results.innerHTML = 'Please enter a valid weight'
    }
    else {
        const bmi = (weight/((height * height)/10000)).toFixed(2)
        button.innerHTML = `${bmi}`
        if(bmi <= 18.6){
            results.innerHTML = `You are under weight!!!`
        }
        else if(bmi >= 24.9) {
            results.innerHTML = `You are over weight`
        }
        else{
            results.innerHTML = 'Your weight is normal'
        }
    }
})