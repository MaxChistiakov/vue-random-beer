import { createStore } from 'vuex'

import beers from './modules/beers'
import user from './modules/user'

const store = createStore({
    modules: {
        beers,
        user
    }  
})

export default store 