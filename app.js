
let rates = document.querySelectorAll(".rate");

let rated =0;

rates.forEach((rate,i) => {
    rate.addEventListener("click",e => {
        e.preventDefault();
        handleClick(i)
    })
})

function handleClick(i) {
    rates.forEach((rate,j) => {
        if(i!=j) {
            rate.style.backgroundColor = "var(--darkBlue)";
            rate.style.color = "var(--lightGrey)";
        } 
    })
    rates[i].style.backgroundColor = "var(--orange)";
    rates[i].style.color = "var(--white)";
    rated = i+1;
}

document.getElementById("rateSubmit").addEventListener("click", e => {
    
    e.preventDefault();
    if(rated==0) {
        return;
    }
    let string = `You selected ${rated} out of 5`;
    document.querySelector(".firstMessage").innerHTML = string;
    document.querySelector(".rating-inner").style.transform = "rotateY(180deg)";

});

// rateBack

document.getElementById("rateBack").addEventListener("click", e => {
    
    e.preventDefault();
    rated==0;
    document.querySelector(".rating-inner").style.transform = "rotateY(0deg)";

});
