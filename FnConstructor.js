function student(id,name,age,city){
    this.id=id;
    this.name=name;
    this.age=age;
    this.city=city;
}
let s1=new student(1,"Himanshu",20,"Delhi");
let s2=new student(2,"Shivani",18,"Delhi");
console.log(s1.name,s1.age,s1.city);
console.log(s2.name,s2.age,s2.city);