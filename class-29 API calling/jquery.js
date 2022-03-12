console.log;


const makeRequest = async (url, method, data) => {
    try {
        const result = await $.ajax({
            url: url,
            method: method,
            data:data
        })
        return result;
    } catch (error) {
        console.log(error);
    }
}

//get data
const getData = () => {
    makeRequest("https://jsonplaceholder.typicode.com/users", "GET")
        .then((res) => console.log(res))
};
getData();

//create  data
const createData = () => {
    makeRequest("https://jsonplaceholder.typicode.com/users", "POST",{
        id: 1,
        title: 'Mahram',
        body: 'hello mahram',
        userId: 1,
    })
        .then((res) => console.log(res))
};
//createData();

//update  data
const updateData = () => {
    makeRequest("https://jsonplaceholder.typicode.com/users/1", "PUT",{
        id: 1,
        title: 'Mahram',
        body: 'update mahram',
        userId: 1,
    })
        .then((res) => console.log(res))
};
//updateData();


//delete Data
const deleteData = () => {
    makeRequest("https://jsonplaceholder.typicode.com/users/1", "DELETE")
        .then((res) => console.log(res))
};
//deleteData();