// get data 
const fecthData = async() => {
    try {
        const res = await axios.get("https://jsonplaceholder.typicode.com/posts")
        return res.data;
    } catch (error) {
        throw Error("data is not fretch")
    }
}





// selection
const postsElement = document.querySelector(".posts");

const loadAllData = async() => {
    const posts = await fecthData();
    posts.map((post) => {
        const postElement = document.createElement("div"); // crate div element
        postElement.classList.add("post");
        postElement.innerHTML = `
        <h4 class="psot-title"> ${post.title}</h4>
            <p class="psot-body">${post.body}</p>
        `;
        postsElement.appendChild(postElement);

    });
}
loadAllData();