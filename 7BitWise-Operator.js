// BitWise-Operator 



// BitWise-Operator OR - |

//ASSUMTION |  BINARY   | NUMBER
// write    - 00000100 -> 4 
// read     - 00000010 -> 2 
// EDIT     - 00000010 -> 2 

const w = 4;
const r = 2;
const e = 1;

let permission = 0;

permission = permission | w | e;   // 0 | 1 -> 1

let access1 = (permission & w) ? "Write Permission : YES" : "write Permission : NO";
let access2 = (permission & r) ? "Read Permission : YES" : "Read Permission : NO";
let access3 = (permission & e) ? "Edit Permission : YES" : "Edit Permission : NO";


console.log(access1);  // Write Permission : YES
console.log(access2);  // Read Permission : NO
console.log(access3);  // Edit Permission : YES