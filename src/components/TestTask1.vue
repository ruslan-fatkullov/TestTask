<template>
  <div class="hello">
    <nav-bar />
    <div class="header_block">
      <h1>{{ start_header }}</h1>
    </div>
    <div class="container content_block">
      <div class="row">
        <div class="col-md-8 train_container">
          <div class="container">
            <div class="lamps row">
              <div class="col">
                <div v-bind:class="{ lampON: L_1, lampOFF: !L_1 }"></div>
              </div>
              <div class="col">
                <div v-bind:class="{ lampON: L_2, lampOFF: !L_2 }"></div>
              </div>
              <div class="col">
                <div v-bind:class="{ lampON: L_3, lampOFF: !L_3 }"></div>
              </div>
            </div>
          </div>

          <div class="container thumbler_block">
            <div class="row">
              <div class="col">
                <p>Переключатель №1</p>
                <div
                  class="thumbler"
                  v-bind:class="{ thumblerON: P_1, thumblerOFF: !P_1 }"
                  @click="updateThumler(1)"
                ></div>
              </div>
              <div class="col">
                <p>Переключатель №2</p>
                <div
                  class="thumbler"
                  v-bind:class="{ thumblerON: P_2, thumblerOFF: !P_2 }"
                  @click="updateThumler(2)"
                ></div>
              </div>
              <div class="col">
                <p>Питание</p>
                <div
                  class="thumbler"
                  v-bind:class="{ thumblerON: POWER, thumblerOFF: !POWER }"
                  @click="updateThumler(0)"
                ></div>
              </div>
              <div class="col">
                <p>Контроль ламп</p>
                <div
                  class="thumbler"
                  v-bind:class="{
                    thumblerON: LAMP_TEST,
                    thumblerOFF: !LAMP_TEST,
                  }"
                  @click="updateThumler(-1)"
                ></div>
              </div>
            </div>
          </div>
        </div>
        <!-- список параметров тренажера -->
        <div class="col-md-4">
          <div class="paramert_list">
            Список параметров:
            <div class="dg row">
              <p>Питание</p>
              <div
                @click="updateThumler(0)"
                v-bind:class="{ switch_on: POWER, switch_btn: !POWER }"
              ></div>
            </div>

            <div class="dg row">
              <p>Контроль ламп</p>
              <div
                @click="updateThumler(-1)"
                v-bind:class="{ switch_on: LAMP_TEST, switch_btn: !LAMP_TEST }"
              ></div>
            </div>

            <p class="L_1">Лампа №1 {{ L_1 ? "1" : "0" }}</p>
            <p class="L_2">Лампа №2 {{ L_2 ? "1" : "0" }}</p>
            <p class="L_3">Лампа №3 {{ L_3 ? "1" : "0" }}</p>
            <div class="dg row">
              <p>Переключатель №1</p>
              <div
                @click="updateThumler(1)"
                v-bind:class="{ switch_on: P_1, switch_btn: !P_1 }"
              ></div>
            </div>
            <div class="dg row">
              <p>Переключатель №2</p>
              <div
                @click="updateThumler(2)"
                v-bind:class="{ switch_on: P_2, switch_btn: !P_2 }"
              ></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import NavBar from "../components/NavigationPage.vue";
export default {
  name: "TestTask1",
  data() {
    return {
      start_header: "Тестовое задание №1",
      // переменные параметров тренажера
      POWER: false,
      LAMP_TEST: false,
      L_1: false,
      L_2: false,
      L_3: false,
      P_1: false,
      P_2: false,
    };
  },
  props: {
    msg: String,
  },
  components: {
    NavBar,
  },
  methods: {
    // изменение состояний тумблеров
    updateThumler(choosen_thumler) {
      switch (choosen_thumler) {
        case 1:
          this.P_1 = !this.P_1;
          break;
        case 2:
          this.P_2 = !this.P_2;
          break;
        case 0:
          this.POWER = !this.POWER;
          break;
        case -1:
          this.LAMP_TEST = !this.LAMP_TEST;
          break;
      }
      // вызов функции для изменения состояния ламп после каждого переключения тумблера
      this.updateLamp();
    },
    // изменение состояний ламп
    updateLamp() {
      this.L_1 = (this.P_1 || this.LAMP_TEST) & this.POWER;
      this.L_2 = (this.P_2 || this.LAMP_TEST) & this.POWER;
      this.L_3 = (this.P_1 & this.P_2 || this.LAMP_TEST) & this.POWER;
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.hello {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #4593a0;
}
.lamps {
  display: flex;
}
.paramert_list {
  background-color: aqua;
  text-align: left;
  padding-left: 15px;
}
.lampON {
  background-color: orange;
  height: 45px;
  width: 44px;
  margin: 10px;
  padding: 10px;
  background-image: url("../assets/lampon.png");
  background-repeat: no-repeat;
}
.lampOFF {
  background-color: black;
  margin: 10px;
  padding: 10px;
  height: 45px;
  width: 44px;
  background-image: url("../assets/lampoff.png");
  background-repeat: no-repeat;
}
.thumbler {
  height: 86px;
  width: 37px;
  margin: 10px;
  cursor: pointer;
  align-content: center;
}
.thumblerON {
  background-image: url("../assets/321.png");
  background-repeat: no-repeat;
  display: block;
  margin: 0 auto;
}
.thumblerOFF {
  background-image: url("../assets/123.png");
  background-repeat: no-repeat;
  display: block;
  margin: 0 auto;
}
.train_container {
  background-color: #4593a0;
}
.thumbler_block {
  margin-top: 50px;
}
.content_block {
  margin-top: 30px;
}
.dg {
  width: auto;
}
.dg p {
  margin: 5px;
  padding: 0px;
  width: auto;
}

/* дизайн toggle */
.switch_btn {
  display: inline-block;
  width: 45px; /* ширина */
  height: 25px; /* высота */
  border-radius: 19px; /* радиус скругления */
  background: #bfbfbf; /* цвет фона */
  z-index: 0;
  margin: 0;
  padding: 0;
  border: none;
  cursor: pointer;
  position: relative;
  transition-duration: 300ms; /* анимация */
}
.switch_btn::after {
  content: "";
  height: 19px; /* высота кнопки */
  width: 19px; /* ширина кнопки */
  border-radius: 17px;
  background: #fff; /* цвет кнопки */
  top: 3px; /* положение кнопки по вертикали относительно основы */
  left: 3px; /* положение кнопки по горизонтали относительно основы */
  transition-duration: 300ms; /* анимация */
  position: absolute;
  z-index: 1;
}
.switch_on {
  display: inline-block;
  width: 45px; /* ширина */
  height: 25px; /* высота */
  border-radius: 19px; /* радиус скругления */
  z-index: 0;
  margin: 0;
  padding: 0;
  border: none;
  cursor: pointer;
  position: relative;
  transition-duration: 300ms; /* анимация */
  background: #118c4e;
}
.switch_on::after {
  content: "";
  height: 19px; /* высота кнопки */
  width: 19px; /* ширина кнопки */
  border-radius: 17px;
  background: #fff; /* цвет кнопки */
  top: 3px; /* положение кнопки по вертикали относительно основы */
  transition-duration: 300ms; /* анимация */
  position: absolute;
  z-index: 1;
  left: 22px;
}
</style>
