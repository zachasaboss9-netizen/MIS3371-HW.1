/*
Program: Hw1.html
Author: Zach Qi
Date: 2026/02/19
Version: 1.1
Description: Patient Registration Form
*/
const d = new Date();
let text = d.toLocaleDateString();
document.getElementById ("today") .innerHTML = text;

slider = document. getElementById ("range-slider");
let output = document.getElementById ("slider-output")
output.innerHTML = slider.value;
slider.oninput = function () {output.innerHTML = this.value;};
