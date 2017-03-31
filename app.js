//document.querySelector('.stock-info').innerHTML = localStorage.getItem('stock-info');

var brandSelector = document.querySelector('.brand');
var sizeSelector = document.querySelector('.size');
var colorSelector = document.querySelector('.color');

var brandList = document.getElementsByClassName('brandList');

var sizeList = document.getElementsByClassName('sizeList');

var colorList = document.getElementsByClassName('colorList');

var addBrand = document.querySelector('.add-brand');
var addSize = document.querySelector('.add-size');
var addColor = document.querySelector('.add-color');
var addStock = document.querySelector('.add-stock');
var addPrice = document.querySelector('.add-price');

var cleatsList = [
        {brand: 'Adidas', stock: '28', price: 'R2 000', color:'Red', size: 'US/7'},
        {brand: 'Adidas', stock: '50', price: 'R2 500', color: 'White', size: 'US/10'},
        {brand: 'Mizuno', stock: '50', price: 'R3 500', color: 'Blue', size: 'US/9'},
        {brand: 'Mizuno', stock: '32', price: 'R3 000', color: 'Black', size: 'US/7'},
        {brand: 'New Balance', stock: '90', price: 'R1 000', color: 'Blue', size: 'US/6'},
        {brand: 'New Balance', stock: '76', price: 'R1 500', color: 'White', size: 'US/8'},
        {brand: 'Nike', stock: '35', price: 'R3 900', color: 'Black', size: 'US/10'},
        {brand: 'Nike', stock: '76', price: 'R3 900', color: 'Red', size: 'US/10'},
        {brand: 'Under Armor', stock: '58', price: 'R5 700', color: 'White', size: 'US/6'},
        {brand: 'Under Armor', stock: '67', price: 'R5 000', color: 'Blue', size: 'US/7'}
    ]

var addedStock = [];

var slideIndex = 0;
slide();

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
    
    if (brandSelector.value === brandList[0].textContent && sizeSelector.value === sizeList[1].textContent && colorSelector.value === colorList[2].textContent) {
        
        document.querySelector('.stock-info').innerHTML = template(cleatsList[0]);
        
    } else if (brandSelector.value === brandList[0].textContent && sizeSelector.value === sizeList[4].textContent && colorSelector.value === colorList[3].textContent) {
        
        document.querySelector('.stock-info').innerHTML = template(cleatsList[1]);
        
    } else if (brandSelector.value === brandList[1].textContent&& sizeSelector.value === sizeList[3].textContent && colorSelector.value === colorList[0].textContent) {
        
        document.querySelector('.stock-info').innerHTML = template(cleatsList[2]);
        
    } else if (brandSelector.value === brandList[1].textContent && sizeSelector.value === sizeList[1].textContent && colorSelector.value === colorList[1].textContent) {
        
        document.querySelector('.stock-info').innerHTML = template(cleatsList[3]);
        
    } else if (brandSelector.value === brandList[2].textContent && sizeSelector.value === sizeList[0].textContent && colorSelector.value === colorList[0].textContent) {
        
        document.querySelector('.stock-info').innerHTML = template(cleatsList[4]);
        
    } else if (brandSelector.value === brandList[2].textContent && sizeSelector.value == sizeList[2].textContent && colorSelector.value === colorList[3].textContent) {
        
        document.querySelector('.stock-info').innerHTML = template(cleatsList[5]);
        
    } else if (brandSelector.value === brandList[3].textContent && sizeSelector.value === sizeList[4].textContent && colorSelector.value === colorList[1].textContent) {
        
        document.querySelector('.stock-info').innerHTML = template(cleatsList[6]);
        
    } else if (brandSelector.value === brandList[3].textContent && sizeSelector.value === sizeList[4].textContent && colorSelector.value === colorList[2].textContent) {
        
        document.querySelector('.stock-info').innerHTML = template(cleatsList[7]);
        
    } else if (brandSelector.value === brandList[4].textContent && sizeSelector.value === sizeList[0].textContent && colorSelector.value === colorList[3].textContent) {
        
        document.querySelector('.stock-info').innerHTML = template(cleatsList[8]);
        
    } else if (brandSelector.value === brandList[4].textContent && sizeSelector.value === sizeList[1].textContent && colorSelector.value === colorList[0].textContent) {
        
        document.querySelector('.stock-info').innerHTML = template(cleatsList[9]);
        
    } else {
        document.querySelector('.stock-info').innerHTML = '<h3>Sorry, we currently do not have those in storage!</h3>'
    }
    
//    localStorage.setItem('stock-info', document.querySelector('.stock-info').innerHTML);
});

document.querySelector('.show-all-stock-btn').addEventListener('click', function () {
    var myTemplate = document.querySelector('.myTemplate').innerHTML;
    
    var template = Handlebars.compile(myTemplate);
    
    var cleats = {list: cleatsList}
        
    document.querySelector('.all-cleats-in-stock').innerHTML = template(cleats);
    document.querySelector('.all-cleats-in-stock').style.display = 'block';
});

document.querySelector('.hide-all-stock-btn').addEventListener('click', function () {
   document.querySelector('.all-cleats-in-stock').style.display = 'none'; 
});

document.querySelector('.close-btn').addEventListener('click', function () {
//    alert('tester');
    document.querySelector('.stock-adder').style.display = 'none';
});

document.querySelector('.add-stock-btn').addEventListener('click', function () {
    document.querySelector('.stock-adder').style.display = 'block';
});

document.querySelector('.add-btn').addEventListener('click', function () {
    var newStock = {brand: addBrand.value, size: addSize.value, stock: addStock.value, price: addPrice.value, color: addColor.value};
    addedStock = newStock;
//    alert(addedStock);
    cleatsList.push(addedStock);
//    alert(JSON.stringify(cleatsList));
    newBrand = document.createElement('option');
    newSize = document.createElement('option');
    newColor = document.createElement('option');
    newStockN = document.createElement('option');
    newPrice = document.createElement('option');
    
    brandText = document.createTextNode(addBrand.value);
    sizeText = document.createTextNode(addSize.value);
    colorText = document.createTextNode(addColor.value);
    stockText = document.createTextNode(addStock.value);
    priceText = document.createTextNode(addPrice.value);
    
    newBrand.appendChild(brandText);
    newSize.appendChild(sizeText);
    newColor.appendChild(colorText);
    newStockN.appendChild(stockText);
    newPrice.appendChild(priceText);
});