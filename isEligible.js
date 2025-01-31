//write a function that checks whether the person in eligible to vote or not.
function isEligible(person) {
    return person>=18 ? "Eligible" : "Not Eligible";
}

console.log(isEligible(22));