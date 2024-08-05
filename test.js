let decodedCookie = decodeURIComponent(document.cookie);
console.log(decodedCookie.split(","));

function setcookie(input) { 
    var a = "product-id";
    var b = input;
    var cookie_value = document.cookie;
    document.cookie = cookie_value + "," + b;
    console.log(document.cookie);
    return document.cookie ;
}

 product_array = [["OnePlus Nord CE4 Lite 5G, ./prod1.jpg"],
    ["Samsung Galaxy M35 5G, ./prod2.jpg"],
    ["iQOO Z9x 5G, ./prod3.jpg"],
    ["realme NARZO 70 5G, ./prod4.jpg"],
    ["Redmi 12 5G, ./prod5.jpg"],
    ["Samsung Galaxy S24 Ultra 5G, ./prod6.jpg"],
    ["OnePlus 12R, ./prod7.jpg"],
    ["iQOO Z9 5G, ./prod8.jpg"],
    ["Samsung Galaxy S23 Ultra 5G, ./prod9.jpg"]];
// console.log(product_array)

function removecookie(name) {
    document.cookie = name+'=; Max-Age=-99999999;';  
    console.log(document.cookie);
    return document.cookie;
}