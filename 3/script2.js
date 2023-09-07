// ""Управление списком заказов""

// Реализуйте класс Order (заказ), который имеет следующие свойства и методы:

// Свойство orderNumber (номер заказа) - число, уникальный номер заказа.
// Свойство products (продукты) - массив, содержащий список продуктов в заказе.
// Метод addProduct(product) - принимает объект product и добавляет его в список продуктов заказа.
// Метод getTotalPrice() - возвращает общую стоимость заказа, основанную на ценах продуктов.

// // Пример использования класса
// class Product {
// constructor(name, price) {
// this.name = name;
// this.price = price;
// }
// }

// const order = new Order(12345);

// const product1 = new Product(""Phone"", 500);
// order.addProduct(product1);

// const product2 = new Product(""Headphones"", 100);
// order.addProduct(product2);

// console.log(order.getTotalPrice()); // Вывод: 600

class Order {
    constructor(orderNumber) {
        this.orderNumber = orderNumber;
    }
    products = []
    addProduct(product) {
        this.products.push(product);
        console.log(this.products);
    }
    getTotalPrice() {
        let totalPrice = 0;
        for (let key of this.products) {
            if (key.price) {
                totalPrice += key.price
            }
        }
        return totalPrice;
    }
}

class Product {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }
}

const order = new Order(12345);

const product1 = new Product("Nissan", 5000);
order.addProduct(product1);

const product2 = new Product("Audi", 10000);
order.addProduct(product2);

console.log(order.getTotalPrice());