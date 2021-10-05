var bill_value =document.querySelector(".billJS")
var NumberOfPeople = document.querySelector(".personJs");
var custom =document.querySelector(".percent-value");
var blanked = document.querySelector(".out-put")
let reset = document.querySelector(".reset")

var FivePersent = document.querySelector(".n5")
var TenPersent = document.querySelector(".n10")
var FifteenPersent = document.querySelector(".n15")
let TwentyFivePersent = document.querySelector(".n25")
let FiftyPersent = document.querySelector(".n50")

var acc = document.querySelector(".percent-value");

var i;

for (i = 0; i < acc.length; i++) {
acc[i].onclick = function() {
    this.classList.toggle("active");
    this.nextElementSibling.classList.toggle("show");
}
}

FivePersent.onclick = function(){
    const billInput= bill_value.value
    const NumberOfPeopleInput = NumberOfPeople.value
    FivePersent.setAttribute("style", "background-color: RGB(38,194,173)")
    document.querySelector(".per-person").innerHTML ="$"+ ((billInput * 0.05)/NumberOfPeopleInput).toFixed(2)
    document.querySelector(".pere-person").innerHTML ="$"+ ((billInput * 1.05)/NumberOfPeopleInput).toFixed(2)
}

TenPersent.onclick = function (){
    const billInput= bill_value.value
    const NumberOfPeopleInput = NumberOfPeople.value
    TenPersent.setAttribute("style", "background-color: RGB(38,194,173)")
    document.querySelector(".per-person").innerHTML = "$"+ ((billInput * 0.1)/NumberOfPeopleInput).toFixed(2)
    document.querySelector(".pere-person").innerHTML = "$"+ ((billInput * 1.1)/NumberOfPeopleInput).toFixed(2)
}

FifteenPersent.onclick =function (){
    const billInput= bill_value.value
    const NumberOfPeopleInput = NumberOfPeople.value
    FifteenPersent.setAttribute("style", "background-color: RGB(38,194,173)")
    document.querySelector(".per-person").innerHTML = "$"+ ((billInput * 0.15)/NumberOfPeopleInput).toFixed(2)
    document.querySelector(".pere-person").innerHTML = "$"+ ((billInput * 1.15)/NumberOfPeopleInput).toFixed(2)
}

TwentyFivePersent.onclick = function (){
    const billInput= bill_value.value
    const NumberOfPeopleInput = NumberOfPeople.value
    TwentyFivePersent.setAttribute("style", "background-color: RGB(38,194,173)")
    document.querySelector(".per-person").innerHTML = "$"+ ((billInput * 0.25)/NumberOfPeopleInput).toFixed(2)
    document.querySelector(".pere-person").innerHTML = "$"+ ((billInput * 1.25)/NumberOfPeopleInput).toFixed(2)
}

FiftyPersent.onclick = function (){
    const billInput= bill_value.value
    const NumberOfPeopleInput = NumberOfPeople.value
    FiftyPersent.setAttribute("style", "background-color: RGB(38,194,173)")
    document.querySelector(".per-person").innerHTML = "$"+ ((billInput * 0.5)/NumberOfPeopleInput).toFixed(2)
    document.querySelector(".pere-person").innerHTML = "$"+ ((billInput * 1.5)/NumberOfPeopleInput).toFixed(2)
}

custom.onfocus =function(){
    const billInput= bill_value.value
    const NumberOfPeopleInput = NumberOfPeople.value
    const customInput = custom.value

    document.querySelector(".per-person").innerHTML = "$"+ ((billInput * (customInput/100))/NumberOfPeopleInput).toFixed(2)
    document.querySelector(".pere-person").innerHTML = "$"+ (((billInput)+(billInput*customInput/100))/NumberOfPeopleInput).toFixed(2)
}

var acc = document.querySelector(".percent-value");

var i;

for (i = 0; i < acc.length; i++) {
acc[i].onclick = function() {
    this.classList.toggle("active");
    this.nextElementSibling.classList.toggle("show");
}
}

reset.onclick = function (){
    document.querySelector(".n5").setAttribute("style", "color: inhrit")
    TenPersent.setAttribute("style", "color: inhrit")
    FifteenPersent.setAttribute("style", "color: inhrit")
    TwentyFivePersent.setAttribute("style", "color: inhrit")
    FiftyPersent.setAttribute("style", "color: inhrit")
    document.querySelector(".pere-person").innerHTML = "$0.00"
    document.querySelector(".per-person").innerHTML = "$0.00"
    bill_value.value =0
    NumberOfPeople. value =0
}