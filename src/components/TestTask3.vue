<template>
  <div class="thirdtest3">
    <NavBar />
    <div class="header_block"><h1>Тестовое задание №3</h1></div>
    <div class="content_block">
      <div class="container">
        <div class="row">
          <div class="col-md-6 trainer_block">
            <div class="container">
              <div class="row">
                <!-- генератор  -->
                <div class="col-md-4 label_text">
                  <p>ПРИВОД ГЕНЕР <br />ЛЕВ ОТКЛ ПРАВ</p>
                  <div class="generator_image"></div>
                </div>

                <div class="col label_text">
                  <p>АЭР ПИТ</p>
                  <div
                    class="tumbler"
                    v-bind:class="{ tumblerON: tumb1, tumblerOFF: !tumb1 }"
                    @click="updateThumler(1)"
                  ></div>
                  <div class="row block_row">
                    <p>1 АККУМУЛЯТОР 2</p>
                    <div
                      class="tumbler"
                      v-bind:class="{ tumblerON: tumb2, tumblerOFF: !tumb2 }"
                      @click="updateThumler(2)"
                    ></div>
                    <div
                      class="tumbler"
                      v-bind:class="{ tumblerON: tumb3, tumblerOFF: !tumb3 }"
                      @click="updateThumler(3)"
                    ></div>
                  </div>
                </div>
              </div>

              <div class="block_row label_text">
                <div class="row">
                  <div class="col-2">
                    <p>ПРЕОБРАЗ 1</p>
                    <div
                      class="col-4 tumbler"
                      v-bind:class="{ tumblerON: tumb4, tumblerOFF: !tumb4 }"
                      @click="updateThumler(4)"
                    ></div>
                  </div>

                  <div class="col-2"></div>
                  <div class="col-6">
                    <div class="row">
                      <p>
                        ГЕНЕР ТОКА <br />
                        ЛЕВ ПРАВ
                      </p>
                      <div
                        class="tumbler"
                        v-bind:class="{ tumblerON: tumb5, tumblerOFF: !tumb5 }"
                        @click="updateThumler(5)"
                      ></div>
                      <div
                        class="tumbler"
                        v-bind:class="{ tumblerON: tumb6, tumblerOFF: !tumb6 }"
                        @click="updateThumler(6)"
                      ></div>
                    </div>
                  </div>
                </div>
              </div>

              <div class="block_row label_text">
                <p>ПРЕОБРАЗ 2</p>
                <div
                  class="tumbler"
                  v-bind:class="{ tumblerON: tumb7, tumblerOFF: !tumb7 }"
                  @click="updateThumler(7)"
                ></div>
              </div>
            </div>
          </div>

          <div class="col-md-4 information_block">
            <div class="row check_bar" id="qwer">
              <div class="progress">
                <div
                  class="progress-bar bg-custom"
                  id="progressID"
                  role="progressbar"
                  aria-valuenow="15"
                  aria-valuemin="0"
                  aria-valuemax="100"
                >
                  <!-- {{ currentProgress }} -->
                </div>
              </div>
            </div>
            <div class="action_button">
              <button @click="clearAll()">
                {{ button_information }}
              </button>
            </div>

            <div
              class="checkStr"
              v-bind:class="{
                correctCheckStr: sequenceCorrection,
                wrongCheckStr: !sequenceCorrection,
              }"
            >
              {{ checkStr }}
            </div>

            <div class="tip_block">
              <div class="container">
                <div class="row lamps_blovk">
                  <div
                    v-bind:class="{ lampON: lampActive, lampOFF: !lampActive }"
                    class="col"
                  ></div>
                  <div
                    v-bind:class="{ lampON: lampActive, lampOFF: !lampActive }"
                    class="col"
                  ></div>
                  <div
                    v-bind:class="{ lampON: lampActive, lampOFF: !lampActive }"
                    class="col"
                  ></div>
                </div>
              </div>
              <div class="rigth_sequence">
                <p>{{ sequenceString }}</p>
              </div>
              <div class="button_show_sequence">
                <button @click="hideOrShowSequence()">
                  {{ sequenceButtonInformation }}
                </button>
              </div>
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
  components: {
    NavBar,
  },
  data() {
    return {
      //   tumb : [false,false,false,false,false,false,false],
      tumb1: false,
      tumb2: false,
      tumb3: false,
      tumb4: false,
      tumb5: false,
      tumb6: false,
      tumb7: false,
      //текущий шаг прохождения
      currentStep: 0,
      //текущее состояние
      currentState: -1,
      //строка с информацией о проверке последовательности
      checkStr: "",
      //   допустимые значения состояний в порядке последовательности
      acceptableStates: [64, 0, 32, 33, 1, 5, 4, 12, 8, 0, 16, 0, 32],
      //прогресс прохождения тренажера
      currentProgress: 0,

      button_information: "Сброс",
      sequenceString: "",
      sequenceCorrection: false,
      sequenceButtonInformation: "Показать последовательность",
      lampActive: false,
    };
  },
  methods: {
    updateThumler(choosen_thumler) {
      //обработка состояний тумблеров
      // this.tumb[choosen_thumler] = !this.tumb[choosen_thumler]
      switch (choosen_thumler) {
        case 1:
          this.tumb1 = !this.tumb1;
          break;
        case 2:
          this.tumb2 = !this.tumb2;
          break;
        case 3:
          this.tumb3 = !this.tumb3;
          break;
        case 4:
          this.tumb4 = !this.tumb4;
          break;
        case 5:
          this.tumb5 = !this.tumb5;
          break;
        case 6:
          this.tumb6 = !this.tumb6;
          break;
        case 7:
          this.tumb7 = !this.tumb7;
          break;
      }
      this.countState();
    },
    countState() {
      // преобразование положения тумблеров в единое число состояния
      var a = this.tumb7 ? 1 : 0;
      var b = this.tumb6 ? 2 : 0;
      var c = this.tumb5 ? 4 : 0;
      var d = this.tumb4 ? 8 : 0;
      var e = this.tumb3 ? 16 : 0;
      var f = this.tumb2 ? 32 : 0;
      var g = this.tumb1 ? 64 : 0;
      this.currentState = a + b + c + d + e + f + g;
      this.checkState(this.currentState);
    },
    checkState(currentState) {
      //проверка текущего состояния на соответсвие последовательности
      if (currentState == this.acceptableStates[this.currentStep]) {
        var ffasf = Math.floor(
          ((this.currentStep + 1) / this.acceptableStates.length) * 100
        );
        document.getElementById("progressID").style.width = ffasf + "%";
        if (this.currentStep == this.acceptableStates.length - 1) {
          this.checkStr = "конец";
          this.button_information = "Начать заново";
          document.getElementById("progressID").style.backgroundColor = "green";
          this.lampActive = true;
        } else {
          this.currentStep += 1;
          this.checkStr = "Последовательность действий верна";
          this.sequenceCorrection = true;
        }
      } else {
        this.checkStr = "Последовательность действий не верна";
        this.button_information = "Попробовать снова";
        this.sequenceCorrection = false;
        document.getElementById("progressID").style.backgroundColor = "red";
      }
    },
    clearAll() {
      //сброс тренажера в начальное положение
      this.tumb1 = false;
      this.tumb2 = false;
      this.tumb3 = false;
      this.tumb4 = false;
      this.tumb5 = false;
      this.tumb6 = false;
      this.tumb7 = false;
      this.currentState = -1;
      this.currentStep = 0;
      this.checkStr = "";
      this.button_information = "Сброс";
      document.getElementById("progressID").style.width = "0%";
      document.getElementById("progressID").style.backgroundColor =
        "rgb(220, 234, 18)";
      this.lampActive = false;
    },
    hideOrShowSequence() {
      if (this.sequenceString == "") {
        (this.sequenceString =
          "АЭР ПИТ -> АЭР ПИТ -> АКК1 -> ПРЕОБРАЗ 2 -> АКК1 -> ГЕН.ТОКА ЛЕВ -> ПРЕОБРАЗ 2 -> ПРЕОБРАЗ 1 -> ГЕН.ТОКА ЛЕВ -> ПРЕОБРАЗ 1 -> АКК2 -> АКК2 -> АКК1"),
          (this.sequenceButtonInformation = "Скрыть последовательность");
      } else {
        this.sequenceString = "";
        this.sequenceButtonInformation = "Показать последовательность";
      }
    },
  },
};
</script>

<style>
.content_block {
  min-height: 30px;
}
.red_background {
  background-color: red;
}
.information_block {
  background-color: lightcyan;
  position: relative;
}
.trainer_block {
  min-height: 30px;
  background-color: #47798d;
  padding: 20px;
}
.tumbler {
  height: 62px;
  width: 62px;
  cursor: pointer;
}
.tumblerON {
  background-image: url("../assets/tumbon.png");
  background-repeat: no-repeat;
}
.tumblerOFF {
  background-image: url("../assets/tumboff.png");
  background-repeat: no-repeat;
}
.generator_image {
  height: 109px;
  width: 106px;
  background-image: url("../assets/generator.png");
  background-repeat: no-repeat;
}

.label_text p {
  font-size: 12px;
  color: white;
  text-align: left;
  margin-left: 10px;
}
.check_bar {
  margin-top: 10px;
}
.action_button {
  position: relative;
}
.action_button button {
  margin-top: 10px;
  background-color: lightgray;
  border-width: 0;
  padding-left: 20px;
  padding-right: 20px;
  left: 0px;
}
.action_button button:hover {
  background-color: rgb(236, 87, 87);
}
.checkStr {
  margin-top: 10px;
}
.correctCheckStr {
  color: green;
}
.wrongCheckStr {
  color: red;
}
.tip_block {
  position: absolute;
  bottom: 0px;
  padding: 20px;
  width: 100%;
}
.tip_block p {
  font-size: 12px;
}
.tip_block button {
  float: center;
  border-width: 0px;
  background-color: lightgray;
  padding: 3px;
  padding-left: 10px;
  padding-right: 10px;
}
.tip_block button:hover {
  background-color: rgb(61, 199, 51);
}
button {
  transition-property: background-color;
  transition-duration: 0.2s;
}
.bg-custom {
  background-color: rgb(220, 234, 18);
}
.lampON {
  height: 45px;
  width: 44px;
  margin: 10px;
  padding: 10px;
  background-image: url("../assets/lampon.png");
  background-repeat: no-repeat;
}
.lampOFF {
  margin: 10px;
  padding: 10px;
  height: 45px;
  width: 44px;
  background-image: url("../assets/lampoff.png");
  background-repeat: no-repeat;
}
.lamps_blovk {
  background-color: #4593a0;
  border-radius: 25px;
}
</style>