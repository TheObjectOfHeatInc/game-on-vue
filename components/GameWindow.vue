<template>
  <div class="game-window">
    <p>Это игровое окно</p>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'GameWindow',
})
</script>

<style scoped>
.game-window {
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #000;
  color: #fff;
  box-sizing: border-box;
}

@media (max-width: 600px) {
  .game-window {
    height: 100vh;
    padding: 10px;
  }
}
</style>
