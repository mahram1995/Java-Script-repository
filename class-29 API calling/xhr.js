
const makeRequest = (method, url, data) => {

    const xhr = new XMLHttpRequest();
    xhr.open(method, url);
    xhr.setRequestHeader('Content-type', 'application/json')
    xhr.onload = () => {
        var data = xhr.response;
        console.log(JSON.parse(data));


    }
    xhr.onerror = () => {
        console.log("something error")
    }
    xhr.send(JSON.stringify(data));

}
const getData = () => {
    makeRequest("GET", "https://jsonplaceholder.typicode.com/users")
}
//getData()

const sendData = () => {
    makeRequest("POST", "https://jsonplaceholder.typicode.com/users", {
        id: 1,
        title: 'foo',
        body: 'bar',
        userId: 1,
    })
}
//sendData();

const updatData = () => {
    makeRequest("put", "https://jsonplaceholder.typicode.com/users/1", {
        id: 1,
        title: 'Mahram',
        body: 'hello mahram',
        userId: 1,
    })
}
//updatData();

const updatSingleData = () => {
    makeRequest("put", "https://jsonplaceholder.typicode.com/users/1", {
        body: 'hello Java Script'

    })
}
//updatSingleData();


const deleteleData = () => {
    makeRequest("put", "https://jsonplaceholder.typicode.com/users/1")
}
deleteleData();




