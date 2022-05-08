<template>
  <button class="btn">
      <slot></slot>
  </button>
</template>

<script>
export default {
    name: 'my-button'
}
</script>

<style>
.btn {
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

.btn:hover:enabled {
    border-color: #CCCC66;
}

.btn:active:enabled {
    background: #CCCC66;
    transition: 0.2s ease;
}
</style>