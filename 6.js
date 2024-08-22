// Strategy is a design pattern that allows defining different algorithms and enables switching them during program execution.

// The Basket class represents a shopping basket with a specific discount strategy.
class Basket {
  constructor(discountPlan) {
    this.discountPlan = discountPlan;
    this.goods = [];
  }
  addGood(good) {
    this.goods.push(good);
  }
  calculateTotalPrice() {
    const price = this.goods.reduce((acc, product) => acc + product.price, 0);
    return this.discountPlan.applyDiscount(price);
  }
}

// RegularDiscountPlan class: a discount strategy for regular customers.
class RegularDiscountPlan {
  applyDiscount(price) {
    return price * 0.9;
  }
}

// VIPDiscountPlan class: a discount strategy for VIP customers.
class VIPDiscountPlan {
  applyDiscount(price) {
    return price * 0.8;
  }
}

// NewClientDiscountPlan class: a discount strategy for new customers.
class NewClientDiscountPlan {
  applyDiscount(price) {
    return price * 0.95;
  }
}

console.log("Task 6 ====================================");

// Creating a new instance of Basket with a discount strategy for new clients.
const basket1 = new Basket(new NewClientDiscountPlan());

// Adding goods to the basket.
basket1.addGood({ name: "Product 1", price: 100 });
basket1.addGood({ name: "Product 2", price: 50 });

// Calculating and displaying the total price of the goods with the discount applied.
console.log(basket1.calculateTotalPrice());
