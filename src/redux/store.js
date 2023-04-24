let store = {

    state: {
        dates: [],
        day: {
            task: {
                id: 1,
                name: "",
                checked: false
            },
            number: "",
            name: ""
        },
        year: [],
        month: []
    },

    fillDatesInState() {
        let date = new Date()

        let thisYear = date.getFullYear()
        store.state.year.push(thisYear)
        let thisMonth = date.getMonth()
        let nextMonth = thisMonth + 1

        let date1 = new Date(thisYear, thisMonth, 1)
        let date2 = new Date(thisYear, nextMonth, 1)
        let date3 = Math.round((date2 - date1) / 1000 / 3600 / 24);

        for (let i = 1; i <= date3; i++) {
            store.state.dates.push(i)
        }
    },

}

export default store;