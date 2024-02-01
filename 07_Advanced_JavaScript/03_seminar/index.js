const mockDatabase = [
    {title: "Новость 1", content: "Содержимое новости 1..."},
    {title: "Новость 2", content: "Содержимое новости 2..."},
];
const fetchNews = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (Math.random() < 0.1) {
                reject("Ошибка загрузки новостей");
            } else {
                resolve(mockDatabase);
            }
        }, 1000)
    })
}

const renderNews = (news) => {
    return (
        `<div>${news.title}</div> 
        <div>${news.content}</div>`
    );
}

const btn = document.querySelector("#addNews");
const newsDiv = document.querySelector(".news");
btn.addEventListener("click", () => {
    btn.disabled = true;
    fetchNews()
        .then(data => {
            data.forEach((news) => {
                    newsDiv.insertAdjacentHTML("beforeend", renderNews(news))
                }
            )
        })
        .catch(error => {
            alert(error)
        })
        .finally(() => {
            btn.disabled = false
        })
})
