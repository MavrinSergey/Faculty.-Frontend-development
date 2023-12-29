const url = "https://dog.ceo/api/breeds/image/random";

async function getDog() {
    let response = await fetch(url);
    let data = await response.json();
    const dogsEl = document.querySelector(".dogs");
    dogsEl.insertAdjacentHTML("beforeend", createDogFigure(data));
}

let timerId = setInterval(getDog, 3000);

// остановить вывод через 5 секунд
setTimeout(() => { clearInterval(timerId); alert('stop'); }, 31500);

function createDogFigure(obj) {
    return `<figure>
              <img src="${obj.message}" alt="Dog" />
              <figcaption>${obj.status}</figcaption>
           </figure>`;
}