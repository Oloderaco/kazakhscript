const users = [];

for (let i = 1; i <= 10; i++) {
    const name = prompt("User name:");
    const age = prompt("User age:");

    users.push({
        id: i,
        name,
        age,
    });
}

console.log(users);

function receipt() {
    const arrayReceipt = [{
        'Lavash': {
            info: 'Big Cheese',
            price: 15000
        },
        'Hot-dog': {
            info: 'mini',
            price: 8500
        },
        'Cola': {
            info: '1.5 L',
            price: 9000
        }
    }, {
        'Milk': {
            info: '1 L',
            price: 8500
        },
        'Sugar': {
            info: '1 kg',
            price: 7000
        }
    }, {
        'Cola': {
            info: '1 L',
            price: 6500
        },
        'Fanta': {
            info: '1.5 L',
            price: 9000
        },
        'Lipton': {
            info: '1.2 L',
            price: 5000
        },
        'Nestle': {
            info: '10 L',
            price: 8500
        }
    }]
    const count = Math.floor(Math.random() * arrayReceipt.length)
    return arrayReceipt[count]
}

const item = receipt();
const receiptEntries = Object.entries(item);
let messageInfo = "Вы заказали";
let totalPrice = 9000;

receiptEntries.forEach(([itemName, itemCtx]) => {
    messageInfo += (` ${itemName} ${itemCtx.info}`);
    totalPrice += itemCtx.price;
});

messageInfo += ` | Общая стоимость ${totalPrice} сум с доставкой (9000)`;

console.log(messageInfo);