// For..in Loop


let person = {
    name: "naveen",
    age: 18
}


for (let key in person){
    // console.log(`${person[key]}`)
    console.log(`${key} : ${person[key]}`)
}



let people = ["ram", "kumar", "venki"]

for (let key in people){
    console.log(`${key} : ${people[key]}`)
}