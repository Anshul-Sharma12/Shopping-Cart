// let decodedCookie = "0" + decodeURIComponent(document.cookie);
// console.log(decodedCookie.split(","));

function setcookie(input) {
    var a = "product-id";
    var cookie_value = document.cookie;
    document.cookie = cookie_value + "," + input;
    var prod_id = document.cookie ;
    console.log("product_ids" + "=" + document.cookie);
    return document.cookie;
}
let prod_arr;
function removeduplicates(data) {
    prod_arr = [...new Set(data)];
    return prod_arr;
}
console.log(removeduplicates(document.cookie));

let product_array = [];
product_array[1] = ["./prod1.jpg, OnePlus Nord CE4 Lite 5G"];
product_array[2] = ["./prod2.jpg, Samsung Galaxy M35 5G"];
product_array[3] = ["./prod3.jpg, iQOO Z9x 5G"];
product_array[4] = ["./prod4.jpg, realme NARZO 70 5G"];
product_array[5] = ["./prod5.jpg, Redmi 12 5G"];
product_array[6] = ["./prod6.jpg, Samsung Galaxy S24 Ultra 5G"];
product_array[7] = ["./prod7.jpg, OnePlus 12R"];
product_array[8] = ["./prod8.jpg, iQOO Z9 5G"];
product_array[9] = ["./prod9.jpg, Samsung Galaxy S23 Ultra 5G"];
// // console.log(product_array);

// function getcookie() {
//     for (i = 0; i < product_array.length ; i++);
//     if (document.cookie = i) {
//         document.getElementById("demo").innerHTML = product_array[i];
//     }
// }

function getcookie() {
    // Split the cookie string and extract the product IDs
    let cookies = document.cookie.split('; ').find(row => row.startsWith('product-id='));
    if (cookies) {
        let productIDs = cookies.split('=')[1].split(','); // Get the IDs from the cookie
        let uniqueIDs = removeduplicates(productIDs);
        
        // Display the product information based on the IDs
        let productDisplay = uniqueIDs.map(id => {
            let index = parseInt(id); // Convert string ID to integer index
            if (product_array[index]) {
                return `<img src="${product_array[index][0]}" alt="${product_array[index][1]}"> ${product_array[index][1]}`;
            }
            return ''; // Return an empty string for non-existing indices
        }).join('<br/>'); // Join the results with line breaks
        demo.innerHTML = productDisplay; // Display products in demo element
    } else {
        demo.innerHTML = "No products selected.";
    }
}


function removecookie() {
    document.cookie = "username=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;"; 
    console.log(document.cookie)
}