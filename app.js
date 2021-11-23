const app = Vue.createApp({
    data() {
        return {
            showBooks: false,
            title: 'The Final Empire',
            author: 'Brandon Sanderson',
            age: 45
        }
    },
    methods: {
        changeTitle(title) {
            // this.title = 'Words of Randiance'
            this.title = title
        }
    }
})

app.mount('#app')
