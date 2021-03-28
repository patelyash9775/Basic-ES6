
//Example-1
let incomes = [62000, 67000, 75000];
let total = 0;

for (const income of incomes) {
    console.log(income);
    total += income;
}

console.log("Total incoome =" + total);




//Example-2
let fullName = "Web Developer";


for (const char of fullName) {
    console.log(char);
}


//Example-3
const students = [ 
    { name: "John", city: "New York" },
    { name: "Peter", city: "Paris"},
    { name: "Kate", city: "Sidney" }
];


for( const student of students ) {
    console.log( student.name + " lives in " + student.city );
}
