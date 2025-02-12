//object

let person = {
    // key:value -----Key should be unique
    name: "Naveen",
    age: 22,
    gender: "male",
    sibling: {
        brother: "Karan",
        sister: "Kumari"
    }   
};


//Get the data out  ----------- Dot Notation & Bracked Notation


// Dot Notation 

console.log("Dot Notation: ", person.name);
    //change value 
    person.name = "Kumar";
    console.log("Dot Notation: ", person.name);

    // acces the child element
    console.log("child element: ", person.sibling)
    console.log("child element: ", person.sibling.brother)
    console.log("child element: ", person.sibling.sister)





// Bracked Notation
console.log("Bracked Notation: ", person['age']);
    //change value
    person['age'] = 33;
    console.log("Bracked Notation: ", person['age'])