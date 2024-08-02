function setcookie(name, input) {
    document.cookie = name + "=" + input;
    console.log(document.cookie)
    return document.cookie;
}

let product_array = [" OnePlus Nord CE4 Lite 5G, ./prod1.jpg",
    "Samsung Galaxy M35 5G, ./prod2.jpg",
    "iQOO Z9x 5G, ./prod3.jpg",
    "realme NARZO 70 5G, ./prod4.jpg",
    "Redmi 12 5G, ./prod5.jpg",
    "Samsung Galaxy S24 Ultra 5G, ./prod6.jpg",
    "OnePlus 12R, ./prod7.jpg",
    "iQOO Z9 5G, ./prod8.jpg",
    "Samsung Galaxy S23 Ultra 5G, ./prod9.jpg"];
    console.log(product_array)










    
// function getCookie(name) {
//     // Split cookie string and get all individual name=value pairs in an array

//     let cookieArr = document.cookie.split(";");
    
//     // Loop through the array elements
//     for(let i = 0; i < cookieArr.length; i++) {
//         let cookiePair = cookieArr[i].split("=");
        
//         /* Removing whitespace at the beginning of the cookie name
//         and compare it with the given string */
//         if(name == cookiePair[0].trim()) {
//             // Decode the cookie value and return
//             console.log(`Cookie name: ${cookiePair[0]}`);
//             return true;
//         }
//         console.log(`Cookie pair : ${cookiePair}`)
//     }
   
    
//     // if ounnotd f Return null
//     return null;
// }


// getCookie('anshul')

// const cname = setcookie();

// function getCookie(cname) {
//     let name = cname + "=";
//     let ca = document.cookie.split(';');
//     for(let i = 0; i < ca.length; i++) {
//       let c = ca[i];
//       while (c.charAt(0) == ' ') {
//         c = c.substring(1);
//         console.log(`C: ${c}`)
//       }
//       if (c.indexOf(name) == 0) {
//         console.log(`Value : ${c.substring(name.length, c.length)}`)
//         return c.substring(name.length, c.length);
//       }
//     }
//     return "";
//   }



