const hotdogPrice = 3.75;
const friesPrice = 3.00;
const sodaPrice = 2.50;
const taxRate = 0.0625;

/* function to round to 2 decimal places */
function roundToTwo(num) {
    let result = Math.round(num * 100) / 100;
    
    /* convert to string */
    let str = result.toString();
    
    /* case for whole numbers */
    if (str.indexOf('.') == -1) {
        return str + '.00';
    }

    /* add trailing zero if needed */
    let parts = str.split('.');
    if (parts[1].length == 1) {
        return str + '0';
    }

    return str;
}

function placeOrder() {
    /* reading in the order for hogdogs fries and soda */
    let numDogs = parseInt(prompt("How many hotdogs do you want?"));
    let numFries = parseInt(prompt("How many fries do you want?"));
    let numSoda = parseInt(prompt("How many sodas do you want?"));

    /* calculating the pre-discount subtotal */
    let subtotal = numDogs * hotdogPrice +
                   numFries * friesPrice +
                   numSoda * sodaPrice;
    
    /* ternary for whether or not the discount is applied */
    let discount = subtotal >= 25 ? subtotal * 0.1 : 0;

    /* calculate the total after the discount and tax */
    subtotal -= discount;
    let tax = subtotal * taxRate;
    let total = subtotal + tax;

    /* getting the discount element to input if there is a nonzero discount */
    let discountElement = `<p>Discount: -$${roundToTwo(discount)}</p>
                           <p>Subtotal (after discount):
                           $${roundToTwo(subtotal)}</p>`;

    /* updating the website to display the order and calculations */
    document.getElementById('orderSummary').innerHTML = `
    
        <p>Hotdogs: ${numDogs} - Total: 
                    $${roundToTwo(numDogs * hotdogPrice)}</p>

        <p>Fries: ${numFries} - Total: $${roundToTwo(numFries * friesPrice)}</p>
        <p>Sodas: ${numSoda} - Total: $${roundToTwo(numSoda * sodaPrice)}</p>

        <p>Subtotal ${discount ? '(before discount)' : ''}
                    : $${roundToTwo(subtotal + discount)}</p>

        ${discount ? discountElement : ''}
        <p>Tax: $${roundToTwo(tax)}</p>
        <p>Total: $${roundToTwo(total)}</p>
    `;

    /* making the textbox visible after the order is made */
    document.getElementById('orderSummary').style.display = 'block';
}

