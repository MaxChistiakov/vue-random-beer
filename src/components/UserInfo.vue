<template>
    <div class="userWrapper">
        <div class="avatar">
            <img :src="userAvatar" loading="lazy" alt="avatar" @error="setDefaultImg">
        </div>
        <div class="userInfo">
            <p> {{ userInfo.first_name }} </p>
            <p>Age: {{ userAge }}</p>
            <p>Position: {{ userPosition }}</p>
        </div>
    </div>
    <button class="changeUserButton" @click="fetchUser">Change User</button>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import noImage from '../assets/No_image_available.png'

export default {
    methods: {
        ...mapActions(['fetchUser']),
        setDefaultImg(e) {
            e.target.src = noImage
        }
    }, 
    computed: {
        ...mapGetters(['userInfo', 'userAge', 'userPosition', 'userAvatar']),
    },
    mounted() {
        this.fetchUser()
    }
}
</script>

<style scoped>
.userWrapper {
    display: flex;
    flex-direction: row-reverse;
    justify-content: space-between;
}

img {
    width: 150px;
    height: 150px;
    border-radius: 50%;
    border: 1px solid black;
}

.avatar {
    width: 150px;
    height: 150px;
    border-radius: 50%;
}
.changeUserButton {
    all: unset;
    border-radius: 5px;
    border: 2px solid transparent;
    background: cadetblue;
    color: azure;
    padding: 8px 16px;
    font-size: 16px;
    min-width: 150px;
    padding: 8px 16px;
    font-size: 1rem;
    cursor: pointer;
    text-align: center;
    transition: 0.6s ease;
    margin-top: 20px;
    margin-bottom: 10px;
}

.changeUserButton:hover:enabled {
    border-color: #CCCC66;
}

.changeUserButton:active:enabled {
    background: #CCCC66;
    transition: 0.2s ease;
}

p {
    font-size: 20px;
}

@media (max-width: 950px) {
  p {
    font-size: 18px;
  }
}

@media (max-width: 360px) {
    img {
        width: 100px;
        height: 100px;
    }
    p {
        font-size: 16px;
    }
}

</style>
