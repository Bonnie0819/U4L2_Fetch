//fetches the users from JSON and some data about the users
fetch('https://jsonplaceholder.typicode.com/users')
.then(response => response.json())
.then(data => {
console.log(data);
const users = data.map(users => {
    return `
        <h3>${users.username} </h3>
        <p>Name: ${users.name} </p>
        <p>Email: ${users.email} </p> 
    `;
});
document.getElementById("users").innerHTML = users;
});

//fetches post 1-2
fetch('https://jsonplaceholder.typicode.com/posts')

//fetches comments based on the different posts

