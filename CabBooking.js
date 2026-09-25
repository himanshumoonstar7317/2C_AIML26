class Vehicle {
  constructor(vehicleNo, driverName, distance) {
    this.vehicleNo = vehicleNo;
    this.driverName = driverName;
    this.distance = distance;
  }

  calculateFare() {
    return 0; 
  }

  static displayPlatform() {
    console.log("Welcome to FastCab Booking");
  }
}

class Car extends Vehicle {
  constructor(vehicleNo, driverName, distance) {
    super(vehicleNo, driverName, distance);
  }

  calculateFare() {
    return this.distance * 15;
  }
}

class Bike extends Vehicle {
  constructor(vehicleNo, driverName, distance) {
    super(vehicleNo, driverName, distance);
  }

  calculateFare() {
    return this.distance * 8;
  }
}

Vehicle.displayPlatform();

const myCar = new Car("UP14-1234", "Ravi", 10);
const myBike = new Bike("UP14-9876", "Amit", 5);

console.log(`Car Fare: Rs. ${myCar.calculateFare()}`);
console.log(`Bike Fare: Rs. ${myBike.calculateFare()}`);