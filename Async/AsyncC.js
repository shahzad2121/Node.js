// //promise

// const driver = new Promise((resolve, reject) => {
//   if (true) {
//     resolve("working");
//   } else {
//     reject("not working");
//   }
// });

// driver.then((result) => console.log(result));

//using fetch and promise
// const fetch = require('fetch')
const urls = [
  "https://jsonplaceholder.typicode.com/posts",
  "https://jsonplaceholder.typicode.com/comments",
  "https://jsonplaceholder.typicode.com/comments",

  "https://jsonplaceholder.typicode.com/users",
];

//this is the old syntax to write promises

// Promise.all(
//   urls.map((url) => {
//     return fetch(url).then((resp) => resp.json());
//   })
// )
//   .then((results) => {
//     console.log(results[0]);
//     console.log(results[1]);
//     console.log(results[2]);
//   })
//   .catch(() => {
//     console.log("error");
//   });


//this is the new syntax to write with async/await

const data = async () => {
  try {
    const [posts, comments,  users] = await Promise.all(
      urls.map((url) => {
        return fetch(url).then((resp) => resp.json());
      })
    ) 
      
        console.log(posts);
        console.log(comments);
        console.log(users);
      
      
  } catch (error) {
    console.log('error');
    
  }
};
data()