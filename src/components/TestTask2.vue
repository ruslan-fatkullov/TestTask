<template>
  <div class="task2">
    <nav-bar/>
    <h1>Тестовое задание №2</h1>
    <div class="container">
      <div class="row">
        <div class="col">
          <p>Наведите курсор</p>
          <!-- функции обработчики действий мыши -->
          <div
            class="frame first_frame"
            v-on:mousemove="updateCounter()"
            v-on:mouseout="clearCounter()"
          >
            {{ count }}
          </div>
        </div>
        <div class="col">
          <p>Нажмите</p>
          <!-- функции обработчики действий мыши -->
          <div
            class="frame second_frame"
            v-on:mousedown="change_text()"
            v-on:mouseout="change_text1()"
            v-on:mouseup="change_text1()"
          >
            {{ second_frame_text }}
          </div>
        </div>
        <div class="col">
          <p>Наведите курсор</p>
          <!-- функции обработчики действий мыши -->
          <div
            class="frame"
            v-on:mouseover="fds()"
            v-on:mouseout="fds()"
            v-bind:class="{ third_frame: mouse_under_frame }"
          ></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import NavBar from '../components/NavigationPage.vue'
export default {
  name: "TestTask2",
  data() {
    return {
      count: 0,
      second_frame_text: "Клавиша не зажата",
      mouse_under_frame: false,
    };
  },
  components: {
    NavBar,
  },
  methods: {
    updateCounter() {
      this.count += 1;
    },
    clearCounter() {
      this.count = 0;
    },
    change_text() {
      this.second_frame_text = "Клавиша зажата";
    },
    change_text1() {
      this.second_frame_text = "Клавиша не зажата";
    },
    fds() {
      this.mouse_under_frame = !this.mouse_under_frame;
    },
  },
};
</script>

<style scoped>
.col {
  padding: 20px;
  background-color: aqua;
  border-radius: 50px;
  margin: 10px;
}
.frame {
  transition-property: background-color;
  transition-duration: 0.4s;
  background-color: lightblue;
  height: 300px;
  border-radius: 50px;
  width: auto;
}
.first_frame {
  background-color: lightblue;
  align-content: center;
  vertical-align: middle;
  text-align: center;
  font-size: 72px;
}
.second_frame {
  background-color: lightblue;
  align-content: center;
  vertical-align: middle;
  text-align: center;
  font-size: 24px;
  -moz-user-select: -moz-none;
-o-user-select: none;
-khtml-user-select: none;
-webkit-user-select: none;
user-select: none;
}
.third_frame {
  transition-property: background-color;
  transition-duration: 0.4s;
  background-color: blue;
}
</style>