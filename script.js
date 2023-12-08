//fetches the users from JSON and some data about the users
fetch('https://jsonplaceholder.typicode.com/users')
.then(response => response.json())
.then(data => {
const users = data.map(users => {
    return `
        <h3>${users.username} </h3>
        <p>Name: ${users.name} </p>
        <p>Email: ${users.email} </p> 
    `;
});
document.getElementById("users").innerHTML = users;
});

//fetches post 1-5
fetch('https://jsonplaceholder.typicode.com/posts')
.then(response => response.json())
.then(data => {
    for(let i = 0; i < 5; i++) {
        const post = data[i];
        console.log(post);
        document.getElementById("posts").innerHTML += post.title;
    }
    
});

