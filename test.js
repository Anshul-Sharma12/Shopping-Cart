function setcookie(input) {
    var cookie_value = document.cookie;
    document.cookie = cookie_value + encodeURIComponent(input) + ", ";
    console.log("product_ids = " + (document.cookie).replace(/,$/, ''));
    return document.cookie;
}

let prod_arr = [];
function removeduplicates(data) {
    for (let i = 0; i < data.length; i++) {
        if (prod_arr.indexOf(data[i]) === -1) {
            prod_arr.push(data[i]);
        }
    }
    return prod_arr;
}
console.log(removeduplicates((document.cookie).replace(/,$/, '').split(',')));

let product_array = [];
product_array[1] = ["./prod1.jpg", "OnePlus Nord CE4 Lite 5G"];
product_array[2] = ["./prod2.jpg", "Samsung Galaxy M35 5G"];
product_array[3] = ["./prod3.jpg", "iQOO Z9x 5G"];
product_array[4] = ["./prod4.jpg", "realme NARZO 70 5G"];
product_array[5] = ["./prod5.jpg", "Redmi 12 5G"];
product_array[6] = ["./prod6.jpg", "Samsung Galaxy S24 Ultra 5G"];
product_array[7] = ["./prod7.jpg", "OnePlus 12R"];
product_array[8] = ["./prod8.jpg", "iQOO Z9 5G"];
product_array[9] = ["./prod9.jpg", "Samsung Galaxy S23 Ultra 5G"];

function getcookie() {
    for (let i = 0; i < prod_arr.length; i++) {
        const productContainer = document.getElementById('product-container');
        const prod_element = prod_arr[i];
        const main_prod = product_array[prod_element];
        const productElement = document.createElement('div');
        productElement.className = 'product';
        productElement.id = prod_element;
        productElement.innerHTML = `
                <img src="${main_prod[0]}" alt="${main_prod[1]}" />
                <p>${main_prod[1]}</p>
                <button onclick= removecookie('${productElement.id},')>Remove from Cart</button>
            `;
        productContainer.appendChild(productElement);
    }
}
getcookie();

function removecookie(input) {
    var cookie_details = document.cookie;
    let regex = new RegExp(input, 'g');
    document.cookie = cookie_details.replace(regex, "");
    console.log((document.cookie));
    return document.cookie;
}

