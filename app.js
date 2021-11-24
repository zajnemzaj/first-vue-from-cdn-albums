const app = Vue.createApp({
    data() {
        return {
            url: 'http://bomas.hu',
            showBooks: true,
            books: [{
                    title: 'name of the wind',
                    author: 'patric rothfuss'
                },
                {
                    title: 'the way of kings',
                    author: 'brandon sanderson'
                },
                {
                    title: 'the final empire',
                    author: 'brandon sanderson'
                }
            ]
        }
    },
    methods: {
        toggleShowBooks() {
            this.showBooks = !this.showBooks
        }
    }
})

app.mount('#app')
