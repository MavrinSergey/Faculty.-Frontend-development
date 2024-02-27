Vue.component('task4', {
    props: [],
    data() {
        return {
            filterText: '',
            items: [
                { id: 1, name: 'list 1', description: 'fdsfsdfsfs', price: 125 },
                { id: 2, name: 'arr 2', description: 'fdsfsdfsfs', price: 125 },
                { id: 3, name: 'list 3', description: 'fdsfsdfsfs', price: 125 }
            ]
        };
    },
    methods: {
        delEl() {
            this.counter++
        },

    },
    computed: {
        filteredList() {
            return this.items.filter(item => item.name.toLowerCase().includes(this.filterText));
        }
    },

    template:
        `
        <div>
            <input type="text" v-model="filterText" placeholder="отфильтруй меня">
            <ul>
                <li v-for="item in filteredList" :key="item.id">{{ item.name }}</li>
            </ul>
        </div>
        `
})