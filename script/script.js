fetch('https://openapi.programming-hero.com/api/phones?search=apple')
.then(res => res.json())
.then(data => console.log(data))