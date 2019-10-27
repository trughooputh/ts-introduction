console.log('Hello World!');
async function hello() {
    return "world";
}
// Implicit typing
let luckyImplicit = 13; // No direct indication about typing here, just by the default value
// let luckyImplicit:any = 13; // Accepts all types
luckyImplicit = 26; // Number, as default value
// luckyImplicit = "26"; // Typing error, can't be a String
console.log({ luckyImplicit });
// Explicit typing 
let luckyExplicit; // This variable has to be only a number
luckyExplicit = 32;
//  luckyExplicit = "32"; // Not possible to assign a String
console.log({ luckyExplicit });
let myFont;
myFont = 'italic';
console.log(myFont);
const EmployeeAdmin = {
    firstname: 'Drew',
    lastname: 'Carey',
    age: 37,
    admin: true,
    details: 'Nice guy',
};
const Employee = {
    firstname: 'Jerry',
    lastname: 'Seinfield',
    age: 50,
    admin: false,
};
// Functions
function pow(x, y) {
    return Math.pow(x, y).toString();
}
const powValue = pow(2, 3);
console.log({ powValue });
// Functions without value returned
function printer(msg) {
    console.log(`Hello! ${msg}`);
}
printer('TypeScript is cool !');
// Array of typed value pushed
let arr = [];
arr.push(EmployeeAdmin);
arr.push(Employee);
// arr.push(100); // Only Person interfaced value can be pushed
console.log(arr);
// type myListNotMandatory = [number?, string?, boolean?]; // Can be empty, then value with this types
const arrListMandatory = [23, 'Jordan', true];
// const arrList: myListNotMandatory = [];
// arrList.push(23);
// arrList.push('Lebron');
// arrList.push(true);
