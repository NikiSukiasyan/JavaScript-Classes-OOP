// 1. კლასი მანქანა (Class Car)

// class Car {
//     constructor(brand, model, year) {
//         this.brand = brand;
//         this.model = model;
//         this.year = year;
//     }

//     getInfo() {
//         return `მანქანა: ${this.brand} - ${this.model}, წელი: ${this.year}`;
//     }
// }

// // ობიექტის შექმნა და მეთოდის გამოძახება
// const myCar = new Car('Toyota', 'Corolla', 2020);
// console.log(myCar.getInfo());

// 2. კლასი სტუდენტი (Class Student)
// class Student {
//     constructor(name, age, course) {
//         this.name = name;
//         this.age = age;
//         this.course = course;
//     }

//     introduce() {
//         console.log(`გამარჯობა, მე ვარ ${this.name}, ვსწავლობ ${this.course} კურსზე.`);
//     }
// }

// // ობიექტების შექმნა და მეთოდის გამოძახება
// const student1 = new Student('ნინო', 20, 'პროგრამირება');
// const student2 = new Student('გიორგი', 22, 'ვებსაიტების შექმნა');

// student1.introduce();
// student2.introduce();
// 3. მემკვიდრეობა (Inheritance)
// class Animal {
//     constructor(name) {
//         this.name = name;
//     }

//     speak() {
//         console.log(`${this.name} რაღაც ხმას გამოსცემს.`);
//     }
// }

// class Dog extends Animal {
//     constructor(name, breed) {
//         super(name);
//         this.breed = breed;
//     }

//     bark() {
//         console.log(`${this.name} ყეფს!`);
//     }
// }

// // ობიექტის შექმნა და მეთოდების გამოძახება
// const myDog = new Dog('ბობი', 'ლაბრადორი');
// myDog.speak();
// myDog.bark();
