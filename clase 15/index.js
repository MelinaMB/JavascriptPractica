
fetch('https://jsonplaceholder.typicode.com/posts')
.then(response => response.json())
.then(data => {
    console.log(data[0].title);
    console.log(data[0].body);
} )
.catch(error => console.log(error));
