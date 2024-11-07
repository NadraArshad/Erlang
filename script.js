// Function to calculate factorial
function factorial(n) {
    if (n === 0 || n === 1) return 1;
    let result = 1;
    for (let i = 2; i <= n; i++) {
        result *= i;
    }
    return result;
}

// Function to calculate Erlang B probability of blocking
function erlangB(A, N) {
    let sum = 0;
    // Sum up the terms for the formula
    for (let k = 0; k <= N; k++) {
        sum += Math.pow(A, k) / factorial(k);
    }
    // Calculate Erlang B formula
    const numerator = Math.pow(A, N) / factorial(N);
    const probability = numerator / sum;
    return probability;
}

// Event listener for form submission
document.getElementById('calculator-form').addEventListener('submit', function (e) {
    e.preventDefault(); // Prevent page reload
    
    const A = parseFloat(document.getElementById('traffic-intensity').value);
    const N = parseInt(document.getElementById('num-lines').value);

    // Validate input
    if (isNaN(A) || isNaN(N) || A <= 0 || N <= 0) {
        alert('Please enter valid values for Traffic Intensity and Number of Lines.');
        return;
    }

    // Calculate blocking probability and display result
    const blockingProbability = erlangB(A, N);
    document.getElementById('probability').textContent = blockingProbability.toFixed(4);
});

// let information = document.querySelector("#information")
// information.addEventListener("click",()=>{
//     gsap.to(".info-panel",{
//         top:0,
//         index:99,
//         duration:0.6,
//     })
    
// })

let information = document.querySelector("#information");
let cancelBtn = document.querySelector(".cancel i");

information.addEventListener("click", () => {
    gsap.to(".info-panel", {
        top: 0,
        zIndex: 99,
        duration: 0.4,
    });
});

cancelBtn.addEventListener("click", () => {
    gsap.to(".info-panel", {
        top: "-100%",
        zIndex: 0,
        duration: 0.4,
    });
});

// document.querySelector(".cancel i").addEventListener("click",()=>{
//     gsap.to(".info-panel",{
//         top:-100,
//         duration:0.6,
//     })
// })
