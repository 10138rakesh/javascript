

//--------------------------------------------
// 1. BASIC FETCH (GET REQUEST)
//--------------------------------------------

fetch("https://jsonplaceholder.typicode.com/posts")
.then(response => response.json())
.then(data => console.log("GET DATA:", data))
.catch(error => console.log("ERROR:", error));

// Roman: Fetch server se data laata hai aur promise return karta hai.

//--------------------------------------------
// 2. FETCH WITH ERROR HANDLING
//--------------------------------------------

fetch("https://jsonplaceholder.typicode.com/posts")
.then(response => {
if (!response.ok) {
throw new Error("HTTP Error");
}
return response.json();
})
.then(data => console.log("SAFE DATA:", data))
.catch(error => console.log("ERROR:", error));

// Roman: Fetch HTTP error automatically detect nahi karta, manually check karna padta hai.

//--------------------------------------------
// 3. ASYNC / AWAIT (BEST METHOD)
//--------------------------------------------

async function getData() {
try {
let response = await fetch("https://jsonplaceholder.typicode.com/posts");

```
if (!response.ok) {
  throw new Error("HTTP Error");
}

let data = await response.json();
console.log("ASYNC DATA:", data);
```

} catch (error) {
console.log("ERROR:", error);
}
}

getData();

// Roman: Async/await fetch ko readable aur easy bana deta hai.

//--------------------------------------------
// 4. POST REQUEST
//--------------------------------------------

async function postData() {
try {
let response = await fetch("https://jsonplaceholder.typicode.com/posts", {
method: "POST",
headers: {
"Content-Type": "application/json"
},
body: JSON.stringify({
title: "Hello",
body: "This is a post",
userId: 1
})
});

```
let data = await response.json();
console.log("POST RESPONSE:", data);
```

} catch (error) {
console.log("ERROR:", error);
}
}

postData();

// Roman: POST request server ko data bhejne ke liye use hota hai.

//--------------------------------------------
// 5. PUT REQUEST (UPDATE DATA)
//--------------------------------------------

async function updateData() {
try {
let response = await fetch("https://jsonplaceholder.typicode.com/posts/1", {
method: "PUT",
headers: {
"Content-Type": "application/json"
},
body: JSON.stringify({
title: "Updated Title"
})
});

```
let data = await response.json();
console.log("UPDATED DATA:", data);
```

} catch (error) {
console.log("ERROR:", error);
}
}

updateData();

// Roman: PUT existing data ko update karne ke liye use hota hai.

//--------------------------------------------
// 6. DELETE REQUEST
//--------------------------------------------

async function deleteData() {
try {
let response = await fetch("https://jsonplaceholder.typicode.com/posts/1", {
method: "DELETE"
});

```
console.log("DELETE STATUS:", response.status);
```

} catch (error) {
console.log("ERROR:", error);
}
}

deleteData();

// Roman: DELETE server se data remove karta hai.

//--------------------------------------------
// 7. KEY POINTS (REVISION)
//--------------------------------------------

// ✔ fetch returns Promise
// ✔ response.json() also returns Promise
// ✔ async/await is best practice
// ✔ always check response.ok
// ✔ used in APIs, React, backend

// Roman: Fetch async tarike se data handle karta hai aur modern JavaScript ka core concept hai.
