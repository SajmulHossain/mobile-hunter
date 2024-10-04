fetch('https://openapi.programming-hero.com/api/phones?search=apple')
.then(res => res.json())
.then(data => showInfo(data.data))

function x() {
  const btn = document.querySelectorAll('nav button');
  
  btn.forEach(elem => {
    
    elem.addEventListener('click', function() {
      elem.classList.add('text-white', 'btn-success');
      
      
    })
    elem.classList.remove('text-white', 'btn-success');
  })
}

x();

function showInfo(data) {
  const mobileContainer = document.getElementById('mobileContainer');
  data.forEach(elem => {
    const div = document.createElement('div');

    div.innerHTML = `
      <div class="card bg-base-100 shadow-xl">
        <figure class='w-[250px]'>
          <img class='w-full h-full object-cover'
            src=${elem.image} />
        </figure>
        <div class="card-body">
          <h2 class="card-title">${elem.brand}</h2>
          <p class='text-clip'>Model: <span class='font-bold'>${elem.phone_name}</span></p>
          <div class="card-actions justify-end">
            <button class="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>
    `;

    mobileContainer.appendChild(div);
  });
} 