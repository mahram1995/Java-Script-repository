console.clear;
const makeRequest = (url, data) => {
    fetch(url, data)
        .then((res) => {
            if (!res.ok) {
                const message = "Error occured";
                throw new Error(message);
            }
            return res.json();
        })
        .then((res) => console.log(res))
        .catch((err) => console.log(err)) // catch error and  print
}
// get data 
const getData = () => {
    makeRequest("https://jsonplaceholder.typicode.com/posts")
}
//getData();


// send data 
const sendData = () => {
    makeRequest("https://jsonplaceholder.typicode.com/posts", {
        method: 'POST',
        headers: {
            "Content-type": "application/json; chareset=UTF-8"
        },
        body: JSON.stringify({
            title: "sent data",
            body: "bar",
            userId: 1,
        })
    })
}
//sendData();



// update data 
const updateData = () => {
    makeRequest("https://jsonplaceholder.typicode.com/posts/1", {
        method: 'PUT',
        headers: {
            "Content-type": "application/json; chareset=UTF-8"
        },
        body: JSON.stringify({
            id: 1,
            title: "Update Data",
            body: "bar",
            userId: 1,
        })
    })
}
//updateData();

// update data 
const deletData = () => {
    makeRequest("https://jsonplaceholder.typicode.com/posts/1", {
        method: 'delete',
        headers: {
            "Content-type": "application/json; chareset=UTF-8"
        }
    })
}
//deletData();


//async await method to call api

const makeRequest1 = async (url, data) => {
    const res = await fetch(url, data);  // get data in readableformate
    if (!res.ok) {
        var message = `Error : ${res.status}`;
        throw new Error(message);
    }
    const data1 = await res.json();  //get data in json formate
    return data1;
};

// get data
const getData1 = () => {
    makeRequest("https://jsonplaceholder.typicode.com/posts") // return a promise
        .then((res) => console.log(res))
        .then((err) => console.length(err))
}
//getData1();


// send data
const sendData1 = () => {
    makeRequest("https://jsonplaceholder.typicode.com/posts", {
        method: 'POST',
        headers: {
            "Content-type": "application/json; chareset=UTF-8"
        },
        body: JSON.stringify({     // data to be update into database 
            title: "sent data",
            body: "bar",
            userId: 1,
        })
    }) // return a promise
        .then((res) => console.log(res))
        .then((err) => console.length(err))
}
//sendData1();


