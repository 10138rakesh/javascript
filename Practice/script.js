// // let a=10;
// // for(let i=0; i<=10; i++) {

// //     console.log(i);
// // }
// // let a=10;
// // for(let i=0; i<=10; i++) {
// //     if(i%2==0){
// //     console.log(i);
// // }}

// let a=[10,30,20];
// let maxi=a[0]
// for(let i=1; i<a.length; i++) {
//   if(a[i]>maxi){
//     maxi=a[i];

//   }
  
// }
// console.log(maxi)


// const student=function(){
//     let name='rakesh'
//     let age=21
//     return  {name,age}

// }
// console.log(student.age)
// let studentdata=student()
// console.log(studentdata.name)



// let a=[10,20,30,40]
// for(let i=0;i<a.length;i++){
//     if(a[i]%2==0){
//         console.log(a[i])
//     }
//     else{
//         continue;
//     }
// }


const student=function(){
    let name='rakesh'
    let age=21
    return  {name,age}

}
console.log(student.age) // this is undefined beacuse this is the function no th eobject to acess the element 
let studentdata=student()
let a=studentdata.name.toUpperCase()
console.log(a)


