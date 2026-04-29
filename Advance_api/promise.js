/*
========================================
        ASYNC JAVASCRIPT COMPLETE NOTES
   (Promises + Fetch + Async/Await)
========================================

----------------------------------------
1. WHY PROMISES CAME?
----------------------------------------

Problem before promises = Callback Hell

Example:
*/

setTimeout(() => {
    console.log("Task 1 completed")

    setTimeout(() => {
        console.log("Task 2 completed")

        setTimeout(() => {
            console.log("Task 3 completed")
        }, 1000)

    }, 1000)

}, 1000)

/*
Problem:
- Nested callbacks
- Hard to read
- Hard to debug
- Pyramid structure

Roman Conclusion:
Callback hell code ko messy bana deta hai.
Isi problem ko solve karne ke liye promises aaye.
*/


/*
----------------------------------------
2. WHAT IS A PROMISE?
----------------------------------------

Promise = Object that represents future completion
or failure of an async task.

Real life example:
Food order

Pending → order placed
Fulfilled → delivered
Rejected → cancelled

3 States:
1. Pending
2. Fulfilled
3. Rejected

Roman Conclusion:
Promise future ka result batata hai.
Success ya failure dono ho sakta hai.
*/


/*
----------------------------------------
3. CREATING A PROMISE
----------------------------------------
*/

const promiseOne = new Promise(function(resolve, reject) {

    setTimeout(() => {
        console.log("Async task completed")
        resolve()
    }, 2000)

})

promiseOne.then(function() {
    console.log("Promise consumed")
})

/*
Flow:
Promise created
→ async task runs
→ resolve()
→ then()

Roman Conclusion:
resolve ke baad .then() execute hota hai.
*/


/*
----------------------------------------
4. DIRECT PROMISE CREATION
----------------------------------------
*/

new Promise(function(resolve, reject) {
    setTimeout(() => {
        console.log("Task completed")
        resolve()
    }, 1000)
}).then(function() {
    console.log("Task consumed")
})

/*
Roman Conclusion:
Variable store ki zarurat nahi hamesha.
Direct promise bhi bana sakte ho.
*/


/*
----------------------------------------
5. PASSING DATA IN RESOLVE
----------------------------------------
*/

const promiseTwo = new Promise(function(resolve, reject) {

    setTimeout(() => {
        resolve({
            username: "Rakesh",
            email: "rakesh@gmail.com"
        })
    }, 1000)

})

promiseTwo.then(function(user) {
    console.log(user)
})

/*
Roman Conclusion:
resolve ke andar data bhej sakte ho.
*/


/*
----------------------------------------
6. REJECT + CATCH
----------------------------------------
*/

const promiseThree = new Promise(function(resolve, reject) {

    let error = true

    if (!error) {
        resolve({username: "Rakesh"})
    } else {
        reject("Something went wrong")
    }

})

promiseThree
.then(function(user) {
    console.log(user)
})
.catch(function(error) {
    console.log(error)
})

/*
Roman Conclusion:
Error handling ke liye .catch() use hota hai.
*/


/*
----------------------------------------
7. PROMISE CHAINING
----------------------------------------
*/

const promiseFour = new Promise(function(resolve, reject) {
    resolve({
        username: "Rakesh",
        password: "123"
    })
})

promiseFour
.then(function(user) {
    console.log(user)
    return user.username
})
.then(function(username) {
    console.log(username)
})

/*
Roman Conclusion:
Ek then ka output next then me pass hota hai.
*/


/*
----------------------------------------
8. FINALLY()
----------------------------------------
*/

promiseFour
.then(() => {
    console.log("Success")
})
.catch(() => {
    console.log("Error")
})
.finally(() => {
    console.log("Always runs")
})

/*
Roman Conclusion:
finally har case me chalega.
Success ho ya error.
*/


/*
----------------------------------------
9. WHAT IS ASYNC/AWAIT?
----------------------------------------

Modern way to handle promises.

async:
Function ko promise returning function banata hai

await:
Promise complete hone tak wait karta hai
*/


function fetchData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Data received")
        }, 2000)
    })
}

async function getData() {
    const data = await fetchData()
    console.log(data)
}

getData()

/*
Roman Conclusion:
async-await code ko clean aur readable banata hai.
*/


/*
----------------------------------------
10. ERROR HANDLING IN ASYNC/AWAIT
----------------------------------------
*/

async function getUser() {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users")
        console.log(response)
    }
    catch(error) {
        console.log(error)
    }
}

getUser()

/*
Roman Conclusion:
async-await ke saath try-catch important hai.
*/


/*
----------------------------------------
11. FETCH API
----------------------------------------

fetch() is used to call APIs.

It returns a Promise.
*/


fetch("https://jsonplaceholder.typicode.com/users")
.then((response) => {
    return response.json()
})
.then((data) => {
    console.log(data)
})
.catch((error) => {
    console.log(error)
})

/*
response.json():
Converts JSON data into JavaScript object

Roman Conclusion:
Fetch API real projects me bohot use hota hai.
*/


/*
----------------------------------------
12. FETCH USING ASYNC/AWAIT
----------------------------------------
*/

async function getUsers() {
    try {
        const response = await fetch(
            "https://jsonplaceholder.typicode.com/users"
        )

        const data = await response.json()

        console.log(data)
    }
    catch(error) {
        console.log(error)
    }
}

getUsers()

/*
Roman Conclusion:
Industry me async-await zyada preferred hai.
*/


/*
----------------------------------------
13. .then() VS async/await
----------------------------------------

.then()
- Older style
- Chain based
- Can become messy

async/await
- Cleaner
- Easier to read
- Modern approach

Roman Conclusion:
Dono seekho but real projects me async-await zyada use hota hai.
*/


/*
----------------------------------------
14. FULL API FLOW
----------------------------------------

Button click
→ API request sent
→ Promise returned
→ await/then waits
→ Response received
→ Convert JSON
→ Update UI

Roman Conclusion:
Yahi real-world frontend/backend communication flow hai.
*/


/*
----------------------------------------
15. IMPORTANT INTERVIEW QUESTIONS
----------------------------------------

1. What is Promise?
2. States of Promise?
3. Difference between resolve and reject?
4. What is callback hell?
5. What is fetch?
6. What does response.json() do?
7. Difference between .then() and async/await?
8. Why use try-catch?

Roman Conclusion:
Ye questions frequently interviews me pooche ja sakte hain.
*/


/*
========================================
FINAL SUMMARY
========================================

Callback Hell → Problem

Promise → Solution

Fetch → API request

Async/Await → Modern cleaner syntax

Try/Catch → Error handling

========================================

Final Roman Conclusion:

XHR old hai → bas basic idea lo

Promise mandatory hai

Fetch important hai

Async/Await sabse important hai

Ye strong ho gaya toh API projects easy ho jayenge.
*/