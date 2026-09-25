class Product {
  constructor(productId, productName, price) {
    this.productId = productId;
    this.productName = productName;
    this.price = price;
  }

  getDiscountedPrice(discountPercentage) {
    return this.price - (this.price * discountPercentage) / 100;
  }

  displayInfo() {
    console.log(`Product: ${this.productName} | Price: ${this.price}`);
  }

  static compareProducts(p1, p2) {
    if (p1.price > p2.price) {
      console.log(`${p1.productName} is costlier.`);
    } else if (p2.price > p1.price) {
      console.log(`${p2.productName} is costlier.`);
    } else {
      console.log(`Both have the same price.`);
    }
  }
}

class Electronics extends Product {
  constructor(productId, productName, price, warranty) {
    super(productId, productName, price);
    this.warranty = warranty;
  }

  displayInfo() {
    console.log(`Electronics: ${this.productName} | Price: ${this.price} | Warranty: ${this.warranty} months`);
  }
}

const p1 = new Product(101, "Chair", 150);
const e1 = new Electronics(201, "Phone", 900, 24);
const e2 = new Electronics(202, "Laptop", 1500, 36);

p1.displayInfo();
e1.displayInfo();

console.log(`Discounted Price: ${e1.getDiscountedPrice(10)}`);

Product.compareProducts(e1, e2);