
var admin = [{usrnm: 'cale', pswd: '123'}];
var userName = document.querySelector('.usrname-text');
var passWord = document.querySelector('.pswd-text');
var stock = [
    {brand: "Adidas", size: "US/7", color: "White", stock: "20", price: "R2 500"},
    {brand: "Mizuno", size: "US/9", color: "Red", stock: "15", price: "R3 000"},
    {brand: "Nike", size: "US/4", color: "Black", stock: "5", price: "R5 000"}
];

var dropDownTemplate = document.querySelector('.drop-down-template').innerHTML;
var template = Handlebars.compile(dropDownTemplate);
var data = {list: stock};
document.querySelector('.stock-checker').innerHTML = template(data);

document.querySelector('.show-stock-btn').addEventListener('click', function () {
    'use strict';
    var showTemplate = document.querySelector('.show-stock-template').innerHTML;
    var temp = Handlebars.compile(showTemplate);
    document.querySelector('.display-all-stock').innerHTML = temp(data);
    document.querySelector('.display-all-stock').style.display = 'block';
});
document.querySelector('.hide-table-btn').addEventListener('click', function () {
    'use strict';
    document.querySelector('.display-all-stock').style.display = 'none';
});
document.querySelector('.search-btn').addEventListener('click', function () {
    'use strict';
    var searchTemplate = document.querySelector('.search-template').innerHTML;
    var temp = Handlebars.compile(searchTemplate);
    var brandOptions = document.querySelector('.brand');
    var sizeOptions = document.querySelector('.size');
    var colorOptions = document.querySelector('.color');
    var stockFound = false;
    for (var i = 0; i < stock.length; i++) {
        if (brandOptions.value === stock[i].brand && sizeOptions.value === stock[i].size && colorOptions.value === stock[i].color) {
            document.querySelector('.searched-stock-display').innerHTML = temp(stock[i]);
            stockFound = true;
        }
        if (stockFound === false) {
            document.querySelector('.searched-stock-display').innerHTML = '<h3>We currently do not have that in stock!!</h3>';
        }
    }
});
document.querySelector('.update-btn').addEventListener('click', function () {
    'use strict';
    document.querySelector('.admin-login').style.display = 'inline-block';
});
document.querySelector('.close-admin-btn').addEventListener('click', function () {
    'use strict';
    userName.style.backgroundColor = 'white';
    passWord.style.backgroundColor = 'white';
    document.querySelector('.error-msg').style.display = 'none';
    document.querySelector('.admin-login').style.display = 'none';
});
document.querySelector('.login-btn').addEventListener('click', function () {
    'use strict';
    var adminFound = false;
    for (var i = 0; i < admin.length; i++) {
        if (userName.value === admin[i].usrnm && passWord.value === admin[i].pswd) {
            document.querySelector('.stock-adder').style.display = 'inline-block';
            userName.style.backgroundColor = 'white';
            passWord.style.backgroundColor = 'white';
            document.querySelector('.error-msg').style.display = 'none';
            adminFound = true;
        }
        if (adminFound === false) {
            document.querySelector('.error-msg').innerHTML = '<p>Wrong password or username!</p>';
            userName.style.backgroundColor = 'rgba(255, 0, 0,0.5)';
            passWord.style.backgroundColor = 'rgba(255, 0, 0,0.5)';
            document.querySelector('.error-msg').style.display = 'block';
        }
    }
    userName.value = "";
    passWord.value = "";
});
document.querySelector('.add-admin-btn').addEventListener('click', function () {
    'use strict';
    var adminFound = false;
    for (var i = 0; i < admin.length; i++) {
        if (userName.value === admin[0].usrnm && passWord.value === admin[0].pswd && userName.value !== "" && passWord.value !== "") {
            document.querySelector('.add-admin').style.display = 'inline-block';
            userName.style.backgroundColor = 'white';
            passWord.style.backgroundColor = 'white';
            document.querySelector('.error-msg').style.display = 'none';
            adminFound = true;
        }
        if (adminFound === false) {
            document.querySelector('.error-msg').innerHTML = '<p>Please contact your Admin to add new Staff!</p>';
            userName.style.backgroundColor = 'rgba(255, 0, 0,0.5)';
            passWord.style.backgroundColor = 'rgba(255, 0, 0,0.5)';
            document.querySelector('.error-msg').style.display = 'block';
        }
    }
    userName.value = "";
    passWord.value = "";
});
document.querySelector('.close-staff-adder').addEventListener('click', function () {
    'use strict';
    document.querySelector('.add-admin').style.display = 'none';
});
document.querySelector('.add-staff-btn').addEventListener('click', function () {
    'use strict';
    var newUser = document.querySelector('.new-username');
    var newPswd = document.querySelector('.new-password');
    var newUsername= {usrnm: newUser.value, pswd: newPswd.value};
    if (newUser.value !== "" && newPswd.value !== "" && newPswd.value.length >= 6) {
        admin.push(newUsername);
    } else {
        alert('Please Enter a valid Username, Password must be atleast Six letter/numbers long');
    }
    newUser.value = "";
    newPswd.value = "";
});
document.querySelector('.close-btn').addEventListener('click', function () {
    'use strict';
    document.querySelector('.stock-adder').style.display = 'none';
});
document.querySelector('.add-btn').addEventListener('click', function () {
    'use strict';
    var brandAdd = document.querySelector('.brandAdd');
    var sizeAdd = document.querySelector('.sizeAdd');
    var colorAdd = document.querySelector('.colorAdd'); 
    var stockAdd = document.querySelector('.stockAdd');
    var priceAdd = document.querySelector('.priceAdd');
    if (brandAdd.value !== "" && sizeAdd.value !== "" && colorAdd.value !== "" && stockAdd.value !== "") {
        var newStock = {brand: brandAdd.value, size: sizeAdd.value, color: colorAdd.value, stock: stockAdd.value, price: priceAdd.value};
        stock.push(newStock);
    } else {
        alert('Please enter valid Stock Items');
    }
    brandAdd.value = "";
    sizeAdd.value = "";
    colorAdd.value = "";
    stockAdd.value = "";
    priceAdd.value = "";
    
    var showTemplate = document.querySelector('.show-stock-template').innerHTML;
    var temp = Handlebars.compile(showTemplate);
    document.querySelector('.display-all-stock').innerHTML = temp(data);
    
    if (document.querySelector('.display-all-stock').style.display === 'inline-block') {
        document.querySelector('.display-all-stock').style.display = 'none';
    }
    
    document.querySelector('.stock-checker').innerHTML = template(data);
});