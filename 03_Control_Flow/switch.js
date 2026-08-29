// ==========================================
// switch Statement in JavaScript
// ==========================================

// Syntax:
//
// switch (expression) {
//     case value1:
//         // Code to execute if expression === value1
//         break;
//
//     case value2:
//         // Code to execute if expression === value2
//         break;
//
//     default:
//         // Executes if no case matches
//         break;
// }

// ------------------------------------------
// Example
// ------------------------------------------

const month = "march";

switch (month) {

    case "jan":
        console.log("January");
        break; // Exit the switch statement

    case "feb":
        console.log("February");
        break;

    case "march":
        console.log("March");
        break;

    case "april":
        console.log("April");
        break;

    // Runs when none of the above cases match
    default:
        console.log("No matching month found.");
        break;
}