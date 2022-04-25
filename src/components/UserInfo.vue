<template>
    <div class="userWrapper">
        <div class="avatar">
            <img :src="avatarImage" loading="lazy" alt="avatar" @error="setDefaultImg">
        </div>
        <div class="userInfo">
            <p> {{ info.first_name }} </p>
            <p>Age: {{ getAge }}</p>
            <p>Position: {{ getPosition }}</p>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
import noImage from '../assets/No_image_available.png'

export default {
    data() {
        return {
            info: {},
        }
    },
    methods: {
        setDefaultImg(e) {
            e.target.src = noImage
        }
    },
    computed: {
        isInfoEmpty() {
            return JSON.stringify(this.info)  !== '{}'
        },
        avatarImage() {
            if(this.isInfoEmpty) {
                return this.info.avatar
            } else {
                return this.avatarImage
             }
            
        },
        getAge() {
                let str = this.info.date_of_birth;
                let date = new Date();
                let year = date.getFullYear();
                if(str !== undefined) {
                    return year - Number(str.slice(0, 4))
                }
                return "Error"
        },
        getPosition() {
            if(this.isInfoEmpty) {
               const data = Object.assign(this.info.employment)
               const res = data.title
               return res
            }
            return 2
        }
    },
    mounted() {
        axios
            .get('https://random-data-api.com/api/users/random_user')
            .then(response => (this.info = response.data))
            .catch(error => {
            console.log(error)
          })
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
