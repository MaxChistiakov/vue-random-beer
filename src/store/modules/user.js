//import noImage from '../assets/No_image_available.png'

const user = {
    actions: {
        async fetchUser(ctx) {
            const res = await fetch('https://random-data-api.com/api/users/random_user')
            const user = await res.json()

            ctx.commit('updateUser', user)  
            ctx.commit('updateAge', user)      
            ctx.commit('updatePosition', user)    
            ctx.commit('updateAvatar', user) 
        }
},
    state:() =>  ({
        info: {},
        age: '',
        position: '',
        avatar: ''
    }),
    mutations: {
        updateUser(state, user) {
            state.info = user
        },
        updateAge(state, info) {
            let str = info.date_of_birth;
            let date = new Date();
            let year = date.getFullYear();
            state.age = year - Number(str.slice(0, 4))     
        },
        updatePosition(state, info) {
               const data = Object.assign(info.employment)
               state.position = data.title
        },
        updateAvatar(state, info) {
            state.avatar = info.avatar
        }
    },
    getters: {
        userInfo(state) {
            return state.info
        },
        userAge(state) {
            return state.age
        },
        userPosition(state) {
            return state.position
        },
        userAvatar(state) {
            return state.avatar
        }
    }
}

export default user