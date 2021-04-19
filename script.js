"use strict";
{
    //Vending Machine
    const limeCola = document.getElementById("button-1");
    const saltedPeanuts = document.getElementById("button-2");
    const chocolateBar = document.getElementById("button-3");
    const fruitGummies = document.getElementById("button-4");

    //const totalPrice = document.getElementById("input");


    //Make Money



    // Light Bulb
    //const onButton = document.getElementById("button-6");
    //const offButton = document.getElementById("button-7");
    //const toggleButton = document.getElementById("button-8");
    //const endButton = document.getElementById("button-9");

    /*onButton.addEventListener("click", () => {
        let switchOne = document.getElementById("light-bulb-1");
        switchOne.classList.add("light-bulb-1.switch");
    });*/

    document.getElementById("button-6").addEventListener("click", () => {
        let switchOne = document.getElementById("light");
        switchOne.classList.remove("light-bulb-1");
        switchOne.classList.add("light-bulb-1.switch");
    });

    document.getElementById("button-7").addEventListener("click", () => {
        let switchTwo = document.getElementById("light");
        switchTwo.classList.remove("light-bulb-1.switch");
        switchTwo.classList.add("light-bulb-1");
    });

    document.getElementById("button-8").addEventListener("click", () => {
        let switchThree = document.getElementById("light");
        switchThree.classList.toggle("light-bulb-1.switch");
    });

    document.getElementById("button-9").addEventListener("click", () => {
        let switchFour = document.getElementById("light");
        switchFour.classList.remove("light-bulb-1.switch");
    });
}