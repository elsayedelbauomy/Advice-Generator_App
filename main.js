const identefire = document.getElementById("id")
const quote = document.getElementById("quote");
const dice = document.getElementById("dice")
async function gitQuote() {
    let response = await fetch("https://api.adviceslip.com/advice");
    let data = await response.json();
    identefire.innerHTML = data.slip.id;
    quote.innerHTML = '"' + data.slip.advice + '"'
    console.log(data.slip.advice)
}
gitQuote() ;

dice.addEventListener("click" , function () {
    location.reload()
})