document.querySelector('.stock-info').innerHTML = localStorage.getItem('stock-info');

var brandSelector = document.querySelector('.brand');
var sizeSelector = document.querySelector('.size');
var colorSelector = document.querySelector('.color');

var adidas = document.querySelector('.adidas');
var mizuno = document.querySelector('.mizuno');
var newBlnc = document.querySelector('.nb');
var nike = document.querySelector('.nike');
var underA = document.querySelector('.underA');

var size6 = document.querySelector('.size6');
var size7 = document.querySelector('.size7');
var size8 = document.querySelector('.size8');
var size9 = document.querySelector('.size9');
var size10 = document.querySelector('.size10');

var black = document.querySelector('.black');
var blue = document.querySelector('.blue');
var red = document.querySelector('.red');
var white = document.querySelector('.white');

//alert(adidas.textContent);
//alert(size6.textContent);
//alert(black.textContent);

var slideIndex = 0;
slide();

//alert(Handlebars);

function slide() {
    'use strict';
    var x = document.getElementsByClassName('cleats');
    for (var i = 0; i < x.length; i++) {
        x[i].style.display = 'none';
    }
    slideIndex++
    if (slideIndex > x.length) {slideIndex = 1}
    x[slideIndex-1].style.display = 'inline-block';
    setTimeout(slide, 2000);
}

document.querySelector('.check-btn').addEventListener('click', function () {
    'use strict';
    var myTemplate = document.querySelector('.template').innerHTML;
    
    var template = Handlebars.compile(myTemplate);
    
    var redAdidas = template({brand: 'Adidas', stock: '28', price: 'R2 000', color:'Red', size: 'US/7'});
    var whiteAdidas = template({brand: 'Adidas', stock: '50', price: 'R2 500', color: 'White', size: 'US/10'});
    var blackMizuno = template({brand: 'Mizuno', stock: '32', price: 'R3 000', color: 'Black', size: 'US/7'});
    var blueMizuno = template({brand: 'Mizuno', stock: '50', price: 'R3 500', color: 'Blue', size: 'US/9'});
    var blueNewBalance = template({brand: 'New Balance', stock: '90', price: 'R1 000', color: 'Blue', size: 'US/6'});
    var whiteNewBalance = template({brand: 'New Balance', stock: '76', price: 'R1 500', color: 'White', size: 'US/8'});
    var blackNike = template({brand: 'Nike', stock: '35', price: 'R3 900', color: 'Black', size: 'US/10'});
    var redNike = template({brand: 'Nike', stock: '76', price: 'R3 900', color: 'Red', size: 'US/10'});
    var whiteUnderA = template({brand: 'Under Armor', stock: '58', price: 'R5 000', color: 'White', size: 'US/6'});
    var blueUnderA = template({brand: 'Under Armor', stock: '67', price: 'R5 700', color: 'Blue', size: 'US/7'});
    
    if (brandSelector.value === adidas.textContent && sizeSelector.value === size7.textContent && colorSelector.value === red.textContent) {
        
        document.querySelector('.stock-info').innerHTML = redAdidas;
        
    } else if (brandSelector.value === adidas.textContent && sizeSelector.value === size10.textContent && colorSelector.value === white.textContent) {
        
        document.querySelector('.stock-info').innerHTML = whiteAdidas;
        
    } else if (brandSelector.value === mizuno.textContent && sizeSelector.value === size9.value && colorSelector.value === blue.textContent) {
        
        document.querySelector('.stock-info').innerHTML = blueMizuno;
        
    } else if (brandSelector.value === mizuno.textContent && sizeSelector.value === size7.value && colorSelector.value === black.textContent) {
        
        document.querySelector('.stock-info').innerHTML = blackMizuno;
        
    } else if (brandSelector.value === newBlnc.textContent && sizeSelector.value === size6.textContent && colorSelector.value === blue.textContent) {
        
        document.querySelector('.stock-info').innerHTML = blueNewBalance;
        
    } else if (brandSelector.value === newBlnc.textContent && sizeSelector.value == size8.textContent && colorSelector.value === white.textContent) {
        
        document.querySelector('.stock-info').innerHTML = whiteNewBalance;
        
    } else if (brandSelector.value === nike.textContent && sizeSelector.value === size10.textContent && colorSelector.value === black.textContent) {
        
        document.querySelector('.stock-info').innerHTML = blackNike;
        
    } else if (brandSelector.value === nike.textContent && sizeSelector.value === size10.textContent && colorSelector.value === red.textContent) {
        
        document.querySelector('.stock-info').innerHTML = redNike;
        
    } else if (brandSelector.value === underA.textContent && sizeSelector.value === size6.textContent && colorSelector.value === white.textContent) {
        
        document.querySelector('.stock-info').innerHTML = whiteUnderA;
    } else if (brandSelector.value === underA.textContent && sizeSelector.value === size7.textContent && colorSelector.value === blue.textContent) {
        
        document.querySelector('.stock-info').innerHTML = blueUnderA;
    } else {
        document.querySelector('.stock-info').innerHTML = '<h3>Sorry, we currently do not have those in storage!</h3>'
    }
    
    localStorage.setItem('stock-info', document.querySelector('.stock-info').innerHTML);
});

document.querySelector('.show-all-stock-btn').addEventListener('click', function () {
    var myTemplate = document.querySelector('.myTemplate').innerHTML;
    
    var template = Handlebars.compile(myTemplate);
    
    var data = template({
        cleatsList: [
            {brand: 'Adidas', stock: '28', price: 'R2 000', color:'Red', size: 'US/7'},
            {brand: 'Adidas', stock: '50', price: 'R2 500', color: 'White', size: 'US/10'},
            {brand: 'Mizuno', stock: '32', price: 'R3 000', color: 'Black', size: 'US/7'},
            {brand: 'Mizuno', stock: '50', price: 'R3 500', color: 'Blue', size: 'US/9'},
            {brand: 'New Balance', stock: '90', price: 'R1 000', color: 'Blue', size: 'US/6'},
            {brand: 'New Balance', stock: '76', price: 'R1 500', color: 'White', size: 'US/8'},
            {brand: 'Nike', stock: '35', price: 'R3 900', color: 'Black', size: 'US/10'},
            {brand: 'Nike', stock: '76', price: 'R3 900', color: 'Red', size: 'US/10'},
            {brand: 'Under Armor', stock: '58', price: 'R5 700', color: 'White', size: 'US/6'},
            {brand: 'Under Armor', stock: '67', price: 'R5 000', color: 'Blue', size: 'US/7'}
        ]
    });
    
    document.querySelector('.all-cleats-in-stock').innerHTML = data;
});

document.querySelector('.hide-all-stock-btn').addEventListener('click', function () {
   document.querySelector('.all-cleats-in-stock').style.display = 'none'; 
});