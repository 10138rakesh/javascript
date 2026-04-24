const company={
    name:"Google",
    location:"Mountain View",
    employees:100000,
}
//one way accessing the element is 
//console.log(company.name);]


//mostly used method
const {name, location, employees:emp} = company; // this is called object destructuring,  // we can change the name of the variable 
//  which is a way to extract values from an object and assign them to variables.
console.log(name);
console.log(emp);