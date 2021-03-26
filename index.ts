import * as _ from 'lodash';

console.log('ts introduction');

function hello () {
    return "world"
}

// Implicit typing
let luckyImplicit = 13; // No direct indication about typing here, just by the default value
// let luckyImplicit:any = 13; // Accepts all types
luckyImplicit = 26; // Number, as default value
// luckyImplicit = "26"; // Typing error, can't be a String
console.log({luckyImplicit});


// Explicit typing 
let luckyExplicit: number; // This variable has to be only a number
luckyExplicit = 32;
//  luckyExplicit = "32"; // Not possible to assign a String
console.log({luckyExplicit});

// Create a new Type
type Style = 'bold' | 'italic' | '23';
let myFont: Style;
myFont = 'italic';
console.log(myFont);

// Interface object typing
interface Person {
    firstname: string,
    lastname: string,
    age: number,
    admin: boolean,
    details?: string // Not required 
}

const EmployeeAdmin:Person = {
    firstname: 'Drew',
    lastname: 'Carey',
    age: 37,
    admin: true,
    details: 'Nice guy',
}

const Employee: Person = {
    firstname: 'Jerry',
    lastname: 'Seinfield',
    age: 50,
    admin: false,
}

// Functions
function pow (x:number, y:number):string {
    return Math.pow(x, y).toString();
}
const powValue = pow(2,3);
console.log({powValue});

// Functions without value returned
function printer(msg): void {
    console.log(`Hello! ${msg}`);
}
printer('TypeScript is cool !');

// Array of typed value pushed
let arr:Person [] = [];
arr.push(EmployeeAdmin);
arr.push(Employee);
// arr.push(100); // Only Person interfaced value can be pushed
console.log(arr);

// Array type
type myListMandatory = [number, string, boolean]; // Should be initialized with values
// type myListNotMandatory = [number?, string?, boolean?]; // Can be empty, then value with this types

const arrListMandatory: myListMandatory = [23, 'Jordan', true]; 
// const arrList: myListNotMandatory = [];
// arrList.push(23);
// arrList.push('Lebron');
// arrList.push(true);
