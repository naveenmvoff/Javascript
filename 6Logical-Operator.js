// Logiacal Operator 
// High Income and CIBIL Score -> Loan Eligible


let highInocme = true;
let CIBILScore = true;
let Education = false;

let loanEligibility = highInocme && CIBILScore || Education ? "Eligible for Loan" : "Not Eligible for Loan"
console.log(loanEligibility);
let managerApprove = false

let applicationStatus = managerApprove && loanEligibility ? "Your loan is aproved!" : "Your loan is Not aproved!"
console.log(applicationStatus);