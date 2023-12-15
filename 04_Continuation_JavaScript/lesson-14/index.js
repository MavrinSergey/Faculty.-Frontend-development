// navigator.geolocation.getCurrentPosition((position) => {
//     const {latitude, longitude} = position.coords
//     console.log('координаты устройства', latitude, longitude)
//     console.log(position)
// })
// let watchId = navigator.geolocation.watchPosition(({coords}) => {
//     console.log('Устройство обновило местоположение', coords.latitude, coords.longitude)
// })

// navigator.geolocation.clearWatch(watchId)
document.addEventListener("DOMContentLoaded", (event) => {
    let dragSrcEl = null; // переменная элемента

    function handleDragStart(e) {
        this.style.opacity = '0.4';
        dragSrcEl = this; // this выбранный элемент
        console.log(dragSrcEl);
        e.dataTransfer.effectAllowed = 'move';
        e.dataTransfer.setData('text/html', this.innerHTML);
    }

    function handleDragOver(e) {
        if (e.preventDefault) {
            e.preventDefault(); // остановить обработку событий если это ссылка
        }

        e.dataTransfer.dropEffect = 'move'; // функционал DnD

        return false;
    }

    function handleDragEnter(e) {
        this.classList.add('over'); // добавляем класс при наведении на элемент
    }

    function handleDragLeave(e) {
        this.classList.remove('over'); // удаляем класс
    }

    function handleDrop(e) {
        if (e.stopPropagation) {
            e.stopPropagation(); // останавливает перенаправление браузера.
        }

        if (dragSrcEl != this) {
            dragSrcEl.innerHTML = this.innerHTML; // добаляем новый html
            this.innerHTML = e.dataTransfer.getData('text/html');
        }
        return false;
    }

    function handleDragEnd(e) {
        this.style.opacity = '1'; // прозрачность при отмене

        items.forEach(function (item) {
            item.classList.remove('over'); //очистка класса
        });
    }

    let items = document.querySelectorAll('.box');
    items.forEach(function (item) {
        item.addEventListener('dragstart', handleDragStart);
        item.addEventListener('dragenter', handleDragEnter);
        item.addEventListener('dragover', handleDragOver);
        item.addEventListener('dragleave', handleDragLeave);
        item.addEventListener('drop', handleDrop);
        item.addEventListener('dragend', handleDragEnd);
    })
})