//variables for the elements made in html
const list = document.getElementById("list");
const barcode = document.getElementById("inputCode");
const quantity = document.getElementById("inputNum");
const addItem = document.getElementById("addItem");
const checkout = document.getElementById("checkout");
const total = document.getElementById("total");
const final = document.getElementById("final");

//objects for different scannable items
allObjects = {

    "689145740844": {
        name: "JavaScript Textbook",
        price: 34.95
    },

    "4549292070248": {
        name: "Xerox Paper",
        price: 10.99
    },

    "092265222983": {
        name: "First Aid Kit",
        price: 20.99
    },

    "X002ELVL3J": {
        name: "Box of Pencils (50ct.)",
        price: 15.99
    },

    "686024002468": {
        name: "Sanitizing Wipes",
        price: 10.99
    },

    "860004186236": {
        name: "N95 Face Masks",
        price: 15.99
    },

    "036000214000": {
        name: "Kleenex",
        price: 3.99
    },

    "8809693254156": {
        name: "Hand Sanitizer",
        price: 7.99
    },

    "036500060480": {
        name: "Printer Paper",
        price: 9.99
    },

    "085014561877": {
        name: "Brush Pens",
        price: 10.99
    },

    "X0032YGP2T": {
        name: "Multiport Adapter",
        price: 25.99
    },

    "B07G6JT1XS": {
        name: "Scissors (20ct.)",
        price: 23.99
    },

    "9780134682334": {
        name: "iOS Programming Textbook",
        price: 119.99
    },

    "718103230759": {
        name: "Spiral Notebook",
        price: 1.99
    },
    "00806657": {
        name: "Trader Joe's Freeze Dried Strawberries",
        price: 3.99
    }
}

//variable for storing the working total
var totalAmt = 0;

//function for adding an item to the guests cart
function addToCart(){
    var itemBox = document.createElement("div");
    var itemName = document.createElement("p");
    var itemPrice = document.createElement("p");
    var itemNum = document.createElement("p");

    itemName.innerText = allObjects[barcode.value].name;
    itemPrice.innerText = "$" + allObjects[barcode.value].price;
    itemNum.innerText = quantity.value;

    itemBox.appendChild(itemName);
    itemBox.appendChild(itemPrice);
    itemBox.appendChild(itemNum);

    list.appendChild(itemBox);

    calculate();
}

//function for calculating the total
function calculate(){
    totalAmt += allObjects[barcode.value].price * quantity.value;
    total.innerText = "Total: $" + totalAmt.toFixed(2);
}

//function for displaying the grand total
function finish(){
    var grandTotal = totalAmt * 1.0925;
    final.innerText = "Your grand total (including tax, 9.25%) is $" + grandTotal.toFixed(2);

}

//checks for if the user to clicked on the add to cart button and displays the item and total without tax
addItem.addEventListener("click", addToCart);

//checks for if the user clicked on the checkout button and displays the grand total
checkout.addEventListener("click", finish);