const
container = document.querySelector (".tip-value"),
billInput = document.querySelector (".billJS"),
peopleInput = document.querySelector (".personJs"),
buttons = document.querySelectorAll (".percent-value"),
tipOutput = document.querySelector (".per-person"),
totalOutput =document.querySelector (".pere-person"),
reset = document.querySelector (".reset");

container.addEventListener ("click", click)
function click (event){
    const clickedThing = event.target; 

    for(let button of buttons){ button.classList.remove("highlight"); }

    clickedThing.classList.add("highlight");

    const
    multiplier = clickedThing.dataset.persent / 100,
    billAmount = billInput.value,
    numOfPeople = peopleInput.value,

    tipPerPerson = (multiplier * billAmount)/numOfPeople,
    totalAmount = (tipPerPerson + (billAmount/numOfPeople));

tipOutput.textContent = "$"+ tipPerPerson.toFixed(2)
totalOutput.textContent = "$" + totalAmount.toFixed(2)

}

reset.onclick = function reset (){
    // tipOutput.textContent ="$0.00";
    // totalOutput.textContent ="$0.00";
    // peopleInput.value = 0;
    // billInput. value = 0;
    // buttons.classList.remove("highlight");
    window.location.reload()
}



