let a = 2;
let b = "Hello";
a = "Sun";
console.log(a);
if (a == 1) {
  console.log(a);
}
let c = (r) => 3.14 * r * r; //arrow function
console.log(a);
console.log(b);
console.log(c(19));
//template literals
console.log(`${b} Sunanth,
How are you?
`);

class Person {
  constructor(Name, Age, Weight) {
    this.name = Name;
    this.Age = Age;
    this.weight = Weight;
  }

  displayweight() {
    console.log(this.weight);
  }

  displayname() {
    console.log(this.name);
  }

  displayage() {
    console.log(this.Age);
  }
}

class programmer extends Person {
  constructor(Name, Age, Weight, Language) {
    super(Name, Age, Weight);
    this.Language = Language;
  }
}

var John = new Person("John", 25, 70);
var Sam = new Person("Sam", 28, 80);
John.displayname();
Sam.displayname();

var Siva = new programmer("Siva", 23, 90, c);
Siva.displayage();
console.log("------------------------------------------");

const num = [10, 20, 30.4, 50];
const s = num.find(f);

function f(value, index, array) {
  return value == 20;
}
console.log(s);

function add(x = 10, y = 20) {
  console.log(x + y);
}
add();
let arr = [1, 2, 4, 5, 6];
console.log(arr);

let obj1 = {
  country: "India",
};
let obj2 = {
  country: "US",
};
let w = new WeakSet();
w.add(obj1);
w.add(obj2);
console.log(w);
