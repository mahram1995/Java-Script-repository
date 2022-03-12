// 4 qays to call api - XMLHttpRequest, fetch, axios, jquery
// axios is a js libray
// it helps to make request from browser (plain js/vue/react/ anular) , node.js

// Feature............
// very easy to use
//it supports all moder broeser including IE
//throws error brilliantly
//no need to set header cause axios is intelligent

// axios returns response objrct- data,status, statusText, heades , config


console.clear;
// get data 
// axios.get("https://jsonplaceholder.typicode.com/posts")
// .then((res)=> console.log(res.data))
// .caatch((err)=>console.log(err));


// send data 
// axios.post("https://jsonplaceholder.typicode.com/posts", {
//     body: JSON.stringify({
//         title: 'post data ',
//         body: 'bar',
//         userId: 1,
//     }),
// })
//     .then((res) => console.log(res.data))
//     .caatch((err) => console.log(err));



// update data 
// axios.put("https://jsonplaceholder.typicode.com/posts/1", {
//     body: JSON.stringify({
//         id: 1,
//         title: 'update  data ',
//         body: 'bar',
//         userId: 1,
//     }),
// })
//     .then((res) => console.log(res.data))
//     .caatch((err) => console.log(err));



// patch data 
// axios.patch("https://jsonplaceholder.typicode.com/posts/1", {
//     body: JSON.stringify({
//         title: 'fatch  data ',
//     }),
// })
//     .then((res) => console.log(res.data))
//     .caatch((err) => console.log(err));

 
// delete data 
axios.delete("https://jsonplaceholder.typicode.com/posts/1")
    .then((res) => console.log(res.data))
    .caatch((err) => console.log(err));
