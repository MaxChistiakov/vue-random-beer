<template>
  <div class="mainWrapper">
    <UserInfo />
    <BeerInfo />
  </div>
</template>

<script>
import BeerInfo from './components/BeerInfo.vue'
import UserInfo from './components/UserInfo.vue'

export default {
  name: 'App',
  components: {
    BeerInfo,
    UserInfo
  }
}
</script>

<style>
.mainWrapper {
  max-width: 1260px;
  margin: auto;
  display: flex;
  flex-direction: column;
}

@media (max-width: 950px) {
  .mainWrapper {
    margin: 30px;
  }
}
</style>
