<template>
  <div class="game-window">
    <h1>{{ counter }}</h1>
    <img
      :src="appleImage"
      alt="Apple"
      class="apple-image"
      @pointerdown="incrementCounter"
      :class="{ clicked: isClicked }"
    />
    <div v-if="showCongrats" class="congrats-message">
      Поздравляем! Вы нажали на яблоко {{ counter }} раз!
    </div>
    <div
      v-for="(apple, index) in flyingApples"
      :key="index"
      class="flying-apple"
      :style="{ '--random-x': apple.x + 'px', '--random-y': apple.y + 'px' }"
    >
      <img :src="appleImage" alt="Flying Apple" class="small-apple" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from 'vue'

export default defineComponent({
  name: 'GameWindow',
  setup() {
    const appleImage = ref('/game-on-vue/apple.png')
    const isClicked = ref(false)
    const counter = ref(0)
    const showCongrats = ref(false)
    const flyingApples = ref<{ x: number; y: number }[]>([])

    const incrementCounter = () => {
      counter.value += 1
      isClicked.value = true

      requestAnimationFrame(() => {
        isClicked.value = false
      })

      if (counter.value % 10 === 0) {
        showCongrats.value = true
        setTimeout(() => {
          showCongrats.value = false
        }, 3000)

        const newApples = Array.from({ length: 30 }, () => ({
          x: Math.random() * window.innerWidth - window.innerWidth / 2,
          y: Math.random() * window.innerHeight - window.innerHeight / 2,
        }))
        flyingApples.value.push(...newApples)
        setTimeout(() => {
          flyingApples.value = flyingApples.value.filter(
            (apple) => !newApples.includes(apple)
          )
        }, 3000)
      }
    }

    onMounted(() => {
      let lastTouchEnd = 0
      document.addEventListener(
        'touchend',
        function (event) {
          const now = new Date().getTime()
          if (now - lastTouchEnd <= 300) {
            event.preventDefault()
          }
          lastTouchEnd = now
        },
        false
      )

      document.addEventListener('gesturestart', function (event) {
        event.preventDefault()
      })

      document.addEventListener('dblclick', function (event) {
        event.preventDefault()
      })
    })

    return {
      appleImage,
      isClicked,
      counter,
      showCongrats,
      flyingApples,
      incrementCounter,
    }
  },
})
</script>
