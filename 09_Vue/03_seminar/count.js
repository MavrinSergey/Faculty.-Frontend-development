Vue.component('counter', {
    props: [],
    data() {
        return {
            counter: 0,
        }
    },
    methods: {
        increase() {
            this.counter++
        },
        decrease() {
            this.counter--
        },
    },

    template:
        `
        <div>
            <h3>{{counter}}</h3>
            <button @click="increase">+1</button>
            <button @click="decrease">-1</button>
        </div>
        `
})
