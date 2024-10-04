function calculateTotal(order) {
    let total = 0;
    let index = 0;
    do {
        let item = order[index];
        switch (item) {
            case 'pizza':
                total += 200;
                break;
            case 'burger':
                total += 250;
                break;
            case 'chicken_biryani':
                total += 150;
                break;
            case 'apple_juice':
                total += 100;
                break;
            case 'idly':
                total += 80;
                break;
            default:
                console.log(`${item} is not on the menu.`);
                break;
        }

        index++; 
    } while (index < order.length);

    if (total > 500) {
        total = total - (total * 0.10); 
    }

    return total;
}


let order = ['pizza', 'burger', 'chicken_biryani'];
console.log("Total price: ₹" + calculateTotal(order)); 


// Output:
// 1.Pizza=200
// 2.Burger=250
// 3.Chicken_Briyani=150
// 4.Apple_Juice=100
// 5.Idly=80

// Total price: ₹540