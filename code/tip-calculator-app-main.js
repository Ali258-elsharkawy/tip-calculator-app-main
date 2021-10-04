var bill_value =document.querySelector(".billJS").value;
var NumberOfPeople = document.querySelector(".personJs").value;
var custom =document.querySelector(".percent-value").value;
let reset = document.querySelector(".reset")

var FivePersent = document.querySelector(".n5")
let TenPersent = document.querySelector(".n10")
let FifteenPersent = document.querySelector(".n15")
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
    FivePersent.setAttribute("style", "background-color: RGB(38,194,173)")
    document.querySelector(".per-person").innerHTML = ((bill_value * 0.05)/NumberOfPeople)
    document.querySelector(".pere-person").innerHTML = ((bill_value*1.05)/NumberOfPeople)
}

TenPersent.onclick = function(){
    TenPersent.setAttribute("style", "background-color: RGB(38,194,173)")
    document.querySelector(".per-person").innerHTML = ((bill_value * 0.1)/NumberOfPeople)
    document.querySelector(".pere-person").innerHTML = ((bill_value * 1.1)/NumberOfPeople)
}

FifteenPersent.onclick =function(){
    FifteenPersent.setAttribute("style", "background-color: RGB(38,194,173)")
    document.querySelector(".per-person").innerHTML = ((bill_value * 0.15)/NumberOfPeople)
    document.querySelector(".pere-person").innerHTML = ((bill_value * 1.15)/NumberOfPeople)
}

TwentyFivePersent.onclick = function(){
    TwentyFivePersent.setAttribute("style", "background-color: RGB(38,194,173)")
    document.querySelector(".per-person").innerHTML = ((bill_value * 0.25)/NumberOfPeople)
    document.querySelector(".pere-person").innerHTML = ((bill_value * 1.25)/NumberOfPeople)
}

FiftyPersent.onclick = function(){
    FiftyPersent.setAttribute("style", "background-color: RGB(38,194,173)")
    document.querySelector(".per-person").innerHTML = ((bill_value * 0.5)/NumberOfPeople)
    document.querySelector(".pere-person").innerHTML = ((bill_value * 1.5)/NumberOfPeople)
}

var acc = document.querySelector(".percent-value");

var i;

for (i = 0; i < acc.length; i++) {
acc[i].onclick = function() {
    this.classList.toggle("active");
    this.nextElementSibling.classList.toggle("show");
}
}

reset.onclick = function(){
    document.querySelector(".n5").setAttribute("style", "color: inhrit")
    TenPersent.setAttribute("style", "color: inhrit")
    FifteenPersent.setAttribute("style", "color: inhrit")
    TwentyFivePersent.setAttribute("style", "color: inhrit")
    FiftyPersent.setAttribute("style", "color: inhrit")
    document.querySelector(".pere-person").innerHTML = "$0.00"
    document.querySelector(".per-person").innerHTML = "$0.00"
}