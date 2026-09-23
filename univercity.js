class Student {
  static totalStudents = 0;

  constructor(rollNo, name, marks) {
    this.rollNo = rollNo;
    this.name = name;
    this.marks = marks;
    Student.totalStudents++;
  }

  displayResult() {
    console.log("Student Details");
    console.log("Roll Number: " + this.rollNo);
    console.log("Name: " + this.name);
    console.log("Marks: " + this.marks);

    if (this.marks >= 33) {
      console.log("Status: Passed\n");
    } else {
      console.log("Status: Failed\n");
    }
  }

  static displayTotalStudents() {
    console.log("Total Student objects created: " + Student.totalStudents);
    console.log("-\n");
  }
}

let student1 = new Student(101, "Himanshu", 78);
let student2 = new Student(102, "Sneha", 34);
let student3 = new Student(103, "Aman", 89);

student1.displayResult();
student2.displayResult();
student3.displayResult();

Student.displayTotalStudents();