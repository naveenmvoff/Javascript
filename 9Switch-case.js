//Switch-case

let price = 6000;

switch(true){
    case price>=5000:  //odd - place the higest value in the first place!
        console.log("BMW Car");
        break;
    case price >= 2000:
        console.log("Maruthi Car");
        break
    case price < 2000:
        console.log("Old Car");
        break
    default:
        console.log("No Car")
}


// switch (price) {
//     case 2000:
//         console.log("Maruthi Car");
//         break;
//     case 5000:
//         console.log("BMW Car");
//         break;
//     default:
//         console.log("No Car")
// };