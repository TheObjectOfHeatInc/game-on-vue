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
      const preventDefault = (e: Event) => e.preventDefault()

      // Отключение прокрутки
      document.addEventListener('touchmove', preventDefault, { passive: false })
      document.addEventListener('touchstart', preventDefault, {
        passive: false,
      })

      // Отключение жестов масштабирования
      document.addEventListener('gesturestart', preventDefault)

      // Отключение стандартного поведения двойного клика
      document.addEventListener('dblclick', preventDefault)

      // Отключение увеличения при быстром двойном тапе
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
body,
html {
  height: 100%;
  margin: 0;
  overflow: hidden; /* Отключаем прокрутку страницы */
}

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
  overflow: hidden; /* Отключаем прокрутку внутри контейнера */
}

.apple-image {
  position: relative;
  z-index: 10;
  max-width: 100px;
  max-height: 100px;
  user-select: none;
  -webkit-user-drag: none;
  cursor: pointer;
  transition: transform 0.2s ease-in-out;
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
  bottom: 20px;
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
  width: 40px;
  height: 40px;
  z-index: 5;
  animation: fly 3s ease-in-out;
}

.small-apple {
  width: 40px;
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
