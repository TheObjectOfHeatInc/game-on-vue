<template>
  <div class="game-window" @touchstart.prevent>
    <h1>{{ counter }}</h1>
    <img
      :src="appleImage"
      alt="Apple"
      class="apple-image"
      @click="incrementCounter"
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
      setTimeout(() => {
        isClicked.value = false
      }, 200)

      if (counter.value % 10 === 0) {
        showCongrats.value = true
        setTimeout(() => {
          showCongrats.value = false
        }, 3000)

        flyingApples.value = Array.from({ length: 300 }, () => ({
          x: Math.random() * window.innerWidth - window.innerWidth / 2,
          y: Math.random() * window.innerHeight - window.innerHeight / 2,
        }))
        setTimeout(() => {
          flyingApples.value = []
        }, 3000) // Увеличиваем время до исчезновения яблок
      }
    }

    onMounted(() => {
      document.addEventListener(
        'touchstart',
        function (event) {
          if (event.touches.length > 1) {
            event.preventDefault()
          }
        },
        { passive: false }
      )

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
  position: relative;
  z-index: 10; /* Начальное яблоко выше остальных */
  max-width: 100px;
  max-height: 100px;
  user-select: none;
  -webkit-user-drag: none;
  cursor: pointer;
  transition: transform 0.2s ease-in-out; /* Добавляем плавный переход для анимации клика */
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

.congrats-message {
  position: absolute;
  bottom: 20px; /* Располагаем сообщение внизу */
  padding: 10px 20px;
  background-color: #4caf50;
  color: #fff;
  border-radius: 5px;
  animation: fade-in-out 3s ease-in-out;
}

@keyframes fade-in-out {
  0% {
    opacity: 0;
  }
  10% {
    opacity: 1;
  }
  90% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}

.flying-apple {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 40px; /* Уменьшаем размер вылетающих яблок */
  height: 40px;
  z-index: 5; /* Вылетающие яблоки ниже начального яблока */
  animation: fly 3s ease-in-out; /* Уменьшаем скорость анимации */
}

.small-apple {
  width: 40px; /* Уменьшаем размер вылетающих яблок */
  height: 40px;
}

@keyframes fly {
  0% {
    transform: translate(-50%, -50%) scale(1);
    opacity: 1;
  }
  100% {
    transform: translate(
        calc(-50% + var(--random-x)),
        calc(-50% + var(--random-y))
      )
      scale(0.5);
    opacity: 0;
  }
}

@media (max-width: 600px) {
  .game-window {
    padding: 10px;
  }
}
</style>
