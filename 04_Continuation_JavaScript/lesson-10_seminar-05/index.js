function creatPosts(dataInfo) {
    const contentEl = document.querySelector('.content');
    dataInfo.forEach((item) => {
        contentEl.insertAdjacentHTML('beforeend', getCartCat(item.title, item.body))
    })
}

function getCartCat(title, body) {
return `
<div class="post">
    <div class="post__content">
        <h2>${title}</h2>
        <p>${body}</p>
    </div>
</div>`
}