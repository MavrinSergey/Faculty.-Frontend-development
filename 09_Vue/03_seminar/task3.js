Vue.component('liEl', {
    props: [],
    data() {
        return {

        }
    },
    methods: {
        delEl() {
            this.counter++
        },

    },

    template:
        `<div>
            <li>Элемент<button @click="delEl">Удалить</button></li>
        </div>
        `
})