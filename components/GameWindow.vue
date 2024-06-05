<template>
  <div class="game-window">
    <h1>{{ counter }}</h1>
    <img
      :src="appleImage"
      alt="Apple"
      class="apple-image"
      @mouseover="enlarge"
      @mouseleave="shrink"
      @click="incrementCounter"
      :class="{ enlarged: isEnlarged, clicked: isClicked }"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'

export default defineComponent({
  name: 'GameWindow',
  setup() {
    const appleImage = ref('/apple.png')
    const isEnlarged = ref(false)
    const isClicked = ref(false)
    const counter = ref(0)

    const enlarge = () => {
      isEnlarged.value = true
    }

    const shrink = () => {
      isEnlarged.value = false
    }

    const incrementCounter = () => {
      counter.value += 1
      isClicked.value = true
      setTimeout(() => {
        isClicked.value = false
      }, 200) // Длительность анимации клика
    }

    return {
      appleImage,
      isEnlarged,
      isClicked,
      counter,
      enlarge,
      shrink,
      incrementCounter,
    }
  },
})
</script>

<style scoped>
.game-window {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #000;
  color: #fff;
  box-sizing: border-box;
}

.apple-image {
  max-width: 100px;
  max-height: 100px;
  user-select: none;
  -webkit-user-drag: none;
  transition: transform 0.2s ease-in-out;
  cursor: pointer;
}

.apple-image.enlarged {
  transform: scale(1.2);
}

.apple-image.clicked {
  animation: click-animation 0.2s ease-in-out;
}

@keyframes click-animation {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.3);
  }
  100% {
    transform: scale(1);
  }
}

@media (max-width: 600px) {
  .game-window {
    padding: 10px;
  }
}
</style>
