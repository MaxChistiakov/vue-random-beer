<template>
  <div class="beerCard">
    <h3>Let's try!!!</h3>
    <div class="beerInfo">
      <p v-for="beer in beersArrInfo" :key="beer">{{ beer[0] }}: {{ beer[1] }}</p>
    </div>
    <my-button 
    @click="getAnotherBeer">
    Another beer
    </my-button>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
   methods: {
     ...mapActions(['getAnotherBeer'])
   },
  computed: {
    ...mapGetters(['beerInfo', 'beersArrInfo'])
  },
  mounted() {
    this.getAnotherBeer()
  } 
}
</script>

<style scoped>
.beerCard {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

p {
   margin: auto;
}

.beerInfo {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-column-gap: 50px;
  grid-row-gap: 15px;
  margin-bottom: 20px;
}

/* .changeBeerButton {
    margin-bottom: 10px;
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
}

.changeBeerButton:hover:enabled {
    border-color: #CCCC66;
}

.changeBeerButton:active:enabled {
    background: #CCCC66;
    transition: 0.2s ease;
} */

@media (max-width: 950px) {
  .beerInfo {
    display: flex;
    flex-direction: column;
  }
}

@media (max-width: 360px) {
    
    p {
        font-size: 13px;
    }

}

</style>