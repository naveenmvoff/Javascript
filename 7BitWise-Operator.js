// BitWise-Operator 



// BitWise-Operator OR - |

//ASSUMTION |  BINARY   | NUMBER
// write    - 00000100 -> 4 
// read     - 00000010 -> 2 
// EDIT     - 00000010 -> 2 


const w = 4;
console.log("W: ",(w).toString(2).padStart(4, "0"));

const r = 2;
console.log("R: ",(r).toString(2).padStart(4, "0"));

const e = 1;
console.log("E: ",(e).toString(2).padStart(4, "0"));



let permission = 0;

permission = permission | w | e;   
console.log("Permission: ",(permission).toString(2).padStart(4, "0"));

let access1 = (permission & w) ? "Write Permission : YES" : "write Permission : NO";
console.log("access1: ",(permission & w).toString(2).padStart(4, "0"));

let access2 = (permission & r) ? "Read Permission : YES" : "Read Permission : NO";
console.log("access2: ",(permission & r).toString(2).padStart(4, "0"));
let access3 = (permission & e) ? "Edit Permission : YES" : "Edit Permission : NO";
console.log("access3: ",(permission & e).toString(2).padStart(4, "0"));


console.log(access1);  // Write Permission : YES
console.log(access2);  // Read Permission : NO
console.log(access3);  // Edit Permission : YES




    
// const a = 1;
// const b = 2;
// const result = a | b;

// console.log(`${a.toString(2).padStart(4, "0")} (1 in binary)`);
// console.log(`${b.toString(2).padStart(4, "0")} (2 in binary)`);
// console.log("------------ OR");
// console.log(`${result.toString(2).padStart(4, "0")} (Result in binary)`);
// console.log(`Decimal result: ${result}`);


// // // console.log((10).toString(10)); // "10"  (default base-10)
// // // console.log((10).toString(2));  // "1010" (binary)
// // // console.log((10).toString(8));  // "12"   (octal)
// // // console.log((10).toString(16)); // "a"    (hexadecimal)

