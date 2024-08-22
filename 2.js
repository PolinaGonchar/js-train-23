// Flyweight is a programming pattern whose main idea is to reuse a singleton object
// instead of creating separate unique objects for each use case.

class Group {
    static #groups = {};
    constructor(name) {
        this.name = name;
    }
    static create(name) {
        if (!this.#groups[name]) {
            this.#groups[name] = new Group(name);
        }
        return this.#groups[name];
    }
}

class Product extends Group {
    constructor(name, group) {
        super(name);
        this.group = group;
    }
    display() {
        console.log(`Product: ${this.name}, Group: ${this.group.name}`);
    }
}

// The Group class. It uses the "Singleton" pattern and is responsible for creating product groups.

// The Product class is responsible for creating products.
// We create a constructor for the class, which accepts the product name and the group as arguments, and initializes the corresponding fields.

// We create the display method, which outputs information about the product to the console: Product: ${this.name}, Group: ${this.group.name}.

console.log("Task 2 ====================================");
// After executing, uncomment the code below

// Creating groups using the Group.create method. This method ensures that each group with a unique name is created only once.
const electronics = Group.create("Electronics");
const books = Group.create("Books");
const electronics2 = Group.create("Electronics");

// Outputting the groups to the console. We can see that electronics and electronics2 are the same object.
console.log(electronics, books, electronics2);
console.log(electronics === electronics2); // true

// Creating products. Each product belongs to a specific group.
const product1 = new Product("Laptop", electronics);
const product2 = new Product("Headphones", electronics);
const product3 = new Product("It", books);
const product4 = new Product("Smartphone", Group.create("Electronics")); // here a new group is created or an existing one is used

// Outputting products to the console.
product1.display();
product2.display();
product3.display();
product4.display();

// Checking if two products belong to the same group.
console.log(product1.group === product4.group); // true

// Filtering products by group. In this case, only products from the "Electronics" group are displayed.
const list = [product1, product2, product3, product4].filter(
  (product) => product.group === Group.create("Electronics")
);

console.log(list); // outputs a list of products that belong to the "Electronics" group
