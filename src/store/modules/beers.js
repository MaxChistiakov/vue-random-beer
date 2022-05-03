const beers =  {
    actions: {
        async getAnotherBeer(ctx) {
            const res = await fetch('https://random-data-api.com/api/beer/random_beer')
            const beers = await res.json()
            
            ctx.commit('updateBeers', beers)
            ctx.commit('beerInfo', beers)
        },
    },
    state:() => ({
        info: {},
        beersArr: []
    }),
    mutations: {
        updateBeers(state, beers) {
            state.info = beers
        },
        beerInfo(state, beers) {
            const arr = Object.entries(beers)
            state.beersArr = arr.splice(2, 9)
            return state.beersArr
        }
    },
    getters: {
        beerInfo(state) {
            return state.info
        },
        beersArrInfo(state) {
            return state.beersArr
        }
    }
}

export default beers 