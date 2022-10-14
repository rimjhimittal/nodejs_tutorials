//spread operator and destructuring

// arr= [1,2,3]

// function avg(a, b, c){
// return (a+b+c)/3
// }
// //let a = avg(...arr)
// let a = [4, 7, ...arr, 67]
// console.log(a) 

let obj1= {
    name1: "Harry",
    class1: 6,
    Favlang: "JS"
}
//obj2.name = obj1.name;
//obj2.class = obj1.class;

// let obj2= {...obj1, Favlang: "Python"};
// console.log(obj2)

// let name1 = obj1.name1;
// let class1 = obj1.class1;
// let Favlang= obj1.Favlang;

let {name1, class1, Favlang} = obj1;//Destructuring
console.log(name1, class1, Favlang);