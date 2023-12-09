//fetches the users from JSON and some data about the users
fetch('https://jsonplaceholder.typicode.com/users')
.then(response => response.json())
.then(data => {
const users = data.map(users => {
    return `
        <div>
            <h3>${users.username} </h3>
            <p>Name: ${users.name} </p>
            <p>Email: ${users.email} </p> 
        </div>
    `;
});
document.getElementById("users").innerHTML += users;
});

//fetches post 1
fetch('https://jsonplaceholder.typicode.com/posts')
.then(response => response.json())
.then(data => {
    const post = data[0];
    document.getElementById("title").innerHTML += post.title;   
    const post1 = data[1];
    document.getElementById("title1").innerHTML += post1.title;    
});

//fetches a photo
fetch('https://jsonplaceholder.typicode.com/photos')
.then(response => response.json())
.then(data => {
    const photo = data[0];
    document.getElementById("photo").src = photo.url;
    const photo1 = data[1];
    document.getElementById("photo1").src = photo1.url;        
});

