var shopcart = [];
var Item = function (name, price, count) {
    this.name = name
    this.price = price
    this.count = count
};

function addItem(name, price, count) {
    for (var i in shopcart) {
        if (shopcart[i].name === name) {
            shopcart[i].count++;
            return;
        }
    }
    var item = new Item(name, price, count);
    shopcart.push(item);
}



//function removeItem(name) {
//    for (var i in shopcart) {
//        if (shopcart[i].name === name) {
//            shopcart[i].count--;
//        if (shopcart[i].count === 0) {
//            shopcart.splice(i, 1);
//        }
//        } break;
//    }
//}


//removes one item

function removeAll(name) {
    for (var i in shopcart) {
        if (shopcart[i].name === name) {
            shopcart.splice(i, 1);
            break;
        }
    }

}



//remove all of an item name

function emptyShopCart() {
    shopcart = [];
}

function countShopCart() {
    var totalCount = 0;
    for (var i in this.shopcart) {
        totalCount += this.shopcart[i].count;
    }
    return totalCount;
}
console.log(countShopCart());
function totalShopCart() {
    var totalCost = 0;
    for (var i in shopcart) {
        totalCost += shopcart[i].price * shopcart[i].count;
    }
    return totalCost.toFixed(2);
}
console.log(totalShopCart());

function listShopCart() {
    var shopCartCopy = [];
    for (var i in shopcart) {
        var item = shopcart[i];
        var itemCopy = {};
        for (var p in item) {
            itemCopy[p] = item[p];
        }
        itemCopy.total = (item.price * item.count).toFixed(2);
        shopCartCopy.push(itemCopy);
    }
    return shopCartCopy;
}

displayCart();
