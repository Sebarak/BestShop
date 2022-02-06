'use strict';

const productQuantity = document.querySelector('#products');
const estimatedOrder = document.querySelector('#orders');
const choosePackage = document.querySelector('.select__input');
const dropdown = document.querySelector('.select__dropdown');
const selectDropdown = dropdown.querySelectorAll('li');
const accounting = document.querySelector('#accounting');
const terminal = document.querySelector('#terminal');
const listSummary = document.querySelectorAll('.list__item');
const totalSummary = document.querySelector('#total-price');
let accountingPrice = 35;
let terminalPrice = 5;
let total = 0;

productQuantity.addEventListener('change', function (event){

    listSummary.forEach(function (element){
        if (productQuantity.value >= 1) {
            const calc = element.querySelector('.item__calc');
            const price = element.querySelector('.item__price');
            if (element.dataset.id === productQuantity.id) {
                calc.textContent = `${event.currentTarget.value} * $0.5`;
                price.textContent = `$${event.currentTarget.value * 0.5}`;
                element.classList.add('open');

            }
        }else{
            if (element.dataset.id === productQuantity.id){
                element.classList.remove('open');
            }
        }
    });
});

estimatedOrder.addEventListener('change', function (event){

    listSummary.forEach(function (element){
        if (estimatedOrder.value >= 1) {
            const calc = element.querySelector('.item__calc');
            const price = element.querySelector('.item__price');
            if (element.dataset.id === estimatedOrder.id) {
                calc.textContent = `${event.currentTarget.value} * $0.5`;
                price.textContent = `$${event.currentTarget.value * 0.5}`;
                element.classList.add('open');
            }
        }else{
            if (element.dataset.id === estimatedOrder.id){
                element.classList.remove('open');
            }
        }
    });
});

choosePackage.addEventListener('click', function (){

    dropdown.style.display = 'block';
    dropdown.classList.add('open');

    selectDropdown.forEach(function (listElement){
        listElement.addEventListener('click',function(event){
            choosePackage.textContent = this.textContent;
            dropdown.style.display = 'none';
            listSummary.forEach(function (element){
                const calc = element.querySelector('.item__calc');
                const price = element.querySelector('.item__price');
                if (element.dataset.id === choosePackage.parentElement.id){
                    calc.textContent = `${event.currentTarget.dataset.value.charAt(0).toUpperCase() + event.currentTarget.dataset.value.slice(1)}`;
                    price.textContent = `$${event.currentTarget.dataset.price}`;
                    element.classList.add('open');
                }
            });
        });
    });
});

accounting.addEventListener('change',function (){
    listSummary.forEach(function (element){
        const price = element.querySelector('.item__price');
        if (element.dataset.id === accounting.id) {
            element.classList.toggle('open');
            price.textContent = `$${accountingPrice}`;
        }
    });
});

terminal.addEventListener('change',function (){
    listSummary.forEach(function (element){
        const price = element.querySelector('.item__price');
        if (element.dataset.id === terminal.id) {
            element.classList.toggle('open');
            price.textContent = `$${terminalPrice}`;
        }
    });
});

const totalPricePrint = totalSummary.querySelector('.total__price');
totalSummary.classList.add('open');

totalPricePrint.textContent = `$${0}`;
