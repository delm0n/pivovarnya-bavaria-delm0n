<template>
  <section id="wifi">
    <div class="container">
      <h2 class="title">Контролируйте процесс</h2>
      <h3 class="subtitle">
        в мобильном приложении, благодаря блоку управления с WiFi
      </h3>

      <div class="wifi-wrapper">
        <div class="wifi-wrapper__table-wrap">
          <div class="wifi-wrapper__table">
            <div class="wifi-wrapper__table-row">
              <div class="row-function row-function-head">Функции</div>

              <div class="row-nowifi row-nowifi-head">
                Блок управления <br />
                без WiFi
              </div>

              <div class="row-wifi row-wifi-head">
                Блок управления <br />
                с WiFi
              </div>
            </div>

            <div
              v-for="row in table"
              v-bind:key="row.function"
              class="wifi-wrapper__table-row"
            >
              <div class="row-function">
                {{ row.function }}
              </div>

              <div>
                <p class="function-mobile">Без WiFi</p>
                <div class="row-nowifi" v-html="row.nowifi"></div>
              </div>

              <div>
                <p class="function-mobile">с WiFi</p>
                <div class="row-wifi" v-html="row.wifi"></div>
              </div>
            </div>
          </div>

          <div class="wifi-wrapper__buttons">
            <a
              draggable="false"
              v-on:click="setWifi(false)"
              href="#modal-order"
              data-fancybox
              class="button button-nowifi"
              >Заказать без WiFi</a
            >
            <a
              draggable="false"
              v-on:click="setWifi(true)"
              href="#modal-order"
              data-fancybox
              class="button button-wifi"
              >Заказать с WiFi</a
            >
          </div>
        </div>

        <div class="wifi-wrapper__img-wrap">
          <div class="wifi-wrapper__img">
            <div class="wifi-wrapper__img-block">
              <div class="wifi-wrapper__img-block__title">
                <p>Блок управления без WiFi</p>
              </div>
              <div class="wifi-wrapper__img-block__img">
                <picture>
                  <source srcset="build/images/wifi-blocknowifi.webp" />
                  <img
                    v-lazy="{
                      src: 'src/images/wifi-blocknowifi.png',
                      loading: '',
                      error: '',
                    }"
                    class="nowifi"
                    alt="пивоварня Bavaria без WiFi"
                  />
                </picture>
              </div>
            </div>

            <div class="wifi-wrapper__img-block">
              <div class="wifi-wrapper__img-block__title">
                <p>Блок управления с WiFi</p>
              </div>
              <div class="wifi-wrapper__img-block__img">
                <picture>
                  <source srcset="build/images/wifi-blockwifi.webp" />
                  <img
                    v-lazy="{
                      src: 'src/images/wifi-blockwifi.png',
                      loading: '',
                      error: '',
                    }"
                    class="wifi"
                    src="src/images/wifi-blockwifi.png"
                    alt="пивоварня Bavaria с WiFi"
                  />
                </picture>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import store from "../store";
import buttonAnimated from "../mixins/buttonAnimated";

export default {
  store,
  mixins: [buttonAnimated],
  data() {
    return {
      table: [
        {
          function: "Дисплей",
          nowifi: "Текстовый",
          wifi: "Графический",
        },

        {
          function: "Режим варки",
          nowifi: "Ручной и автоматический",
          wifi: "Ручной и автоматический",
        },

        {
          function: "Сохранение рецептов",
          nowifi: "10",
          wifi: "8",
        },

        {
          function: "Отложенный старт",
          nowifi: "<span style='color: #27AE60;'> ✓ </span>",
          wifi: "<span style='color: #27AE60;'> ✓ </span>",
        },

        {
          function: "Звуковая сигнализация",
          nowifi: "<span style='color: #27AE60;'> ✓ </span>",
          wifi: "<span style='color: #27AE60;'> ✓ </span>",
        },

        {
          function: "Количество температурных пауз в автоматическом режиме",
          nowifi: "6 + температура засыпи",
          wifi: "6 + температура засыпи",
        },

        {
          function: "Удалённое управление-контроль пивоварней через WiFi",
          nowifi: "<span style='color: #EB5757;'> × </span>",
          wifi: "<span style='color: #27AE60;'> ✓ </span>",
        },

        {
          function: "Работа с сервером wifi.bavaria-beer.ru  ",
          nowifi: "<span style='color: #EB5757;'> × </span>",
          wifi: "<span style='color: #27AE60;'> ✓ </span>",
        },

        {
          function: "Работа с мобильным приложением  ",
          nowifi: "<span style='color: #EB5757;'> × </span>",
          wifi: "<span style='color: #27AE60;'> ✓ </span>",
        },
      ],
    };
  },
  methods: {
    setWifi(val) {
      store.commit("updateUserWifi", val);
      if (store.state.model.wifi) {
        store.commit("chooseModel", store.state.model.relations);
      } else {
        store.commit("chooseModel", store.state.model.id);
      }
    },
  },
  mounted() {
    //mixin
    this.btnAnim("#wifi", ".wifi-wrapper__buttons a.button-wifi");
  },
};
</script>