<template>
  <section id="everything">
    <div v-bind:class="'everything-bg ' + $store.state.webpSupport">
      <div class="container">
        <h2 class="title">BAVARIA для каждого</h2>
        <h3 class="subtitle">От хобби до производственных масштабов</h3>

        <div class="toggle-container">
          <div
            class="toggle-area"
            v-bind:class="{ 'toggle-area-wifi': wifiTab }"
          >
            <div
              v-on:click="wifiTab = false"
              class="toggle-tab nowifi"
              v-bind:class="{ 'toggle-tab-active': !wifiTab }"
            >
              без WiFi
            </div>
            <div
              v-on:click="wifiTab = true"
              class="toggle-tab wifi"
              v-bind:class="{ 'toggle-tab-active': wifiTab }"
            >
              с WiFi
            </div>
          </div>
        </div>

        <div class="everything-wrapper">
          <div class="swiper-wrapper">
            <div
              v-for="(model, index) in models"
              v-bind:key="index"
              class="swiper-slide everything-item"
            >
              <div class="everything-item__container">
                <div class="everything-item__img">
                  <div class="everything-item__img-container">
                    <picture>
                      <source
                        :srcset="
                          'build/images/' + model.imgWifi_mobile + '.webp'
                        "
                        type="image/webp"
                        media="(max-width: 992px)"
                      />
                      <source
                        :srcset="'src/images/' + model.imgWifi_mobile + '.png'"
                        media="(max-width: 992px)"
                        type="image/png"
                      />
                      <source
                        :srcset="'build/images/' + model.imgWifi + '.webp'"
                        type="image/webp"
                      />
                      <Transition name="left">
                        <img
                          class="leftimg"
                          v-show="wifiTab"
                          :src="'src/images/' + model.imgWifi + '.png'"
                          :alt="'Пивоварня' + model.value + '+ WIFI'"
                        />
                      </Transition>
                    </picture>
                  </div>

                  <div class="everything-item__img-container">
                    <picture>
                      <source
                        :srcset="
                          'build/images/' + model.imgNoWifi_mobile + '.webp'
                        "
                        media="(max-width: 992px)"
                        type="image/webp"
                      />
                      <source
                        :srcset="
                          'src/images/' + model.imgNoWifi_mobile + '.png'
                        "
                        media="(max-width: 992px)"
                        type="image/png"
                      />
                      <source
                        :srcset="'build/images/' + model.imgNoWifi + '.webp'"
                        type="image/webp"
                      />
                      <Transition name="right">
                        <img
                          class="leftimg"
                          v-show="!wifiTab"
                          :src="'src/images/' + model.imgNoWifi + '.png'"
                          :alt="'Пивоварня' + model.value"
                      /></Transition>
                    </picture>
                  </div>

                  <div class="everything-item__img-title">
                    <h4>Bavaria</h4>
                    <div>
                      <p>{{ model.nameL }}</p>
                    </div>
                  </div>
                </div>

                <div class="everything-item__content">
                  <div class="everything-item__content-decr">
                    <div class="content-decr__item">
                      <p class="content-decr__item-title">
                        Выход сусла за цикл:
                      </p>
                      <p class="content-decr__item-value">{{ model.syslo }}</p>
                    </div>
                    <div class="content-decr__item">
                      <p class="content-decr__item-title">
                        Max вес засыпи в бак:
                      </p>
                      <p class="content-decr__item-value">{{ model.volume }}</p>
                    </div>
                    <div class="content-decr__item">
                      <p class="content-decr__item-title">
                        Потребляемая мощность:
                      </p>
                      <p class="content-decr__item-value">{{ model.power }}</p>
                    </div>
                    <div class="content-decr__item">
                      <p class="content-decr__item-title">Вес:</p>
                      <p class="content-decr__item-value">{{ model.weight }}</p>
                    </div>
                  </div>

                  <div class="everything-item__content-offer">
                    <div>
                      <p v-if="!wifiTab" class="old-price">
                        {{ model.oldPrice }} ₽
                      </p>
                      <p v-else class="old-price">
                        {{ model.oldPrice_wifi }} ₽
                      </p>

                      <p v-if="!wifiTab" class="new-price">
                        {{ model.price }} ₽
                      </p>
                      <p v-else class="new-price">{{ model.price_wifi }} ₽</p>
                    </div>

                    <a
                      draggable="false"
                      v-on:click="changeModel(model.id)"
                      href="#modal-order"
                      data-fancybox
                      class="button"
                    >
                      Заказать
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="everything-swiper-pagination"></div>

          <div class="everything-swiper-button-prev"></div>
          <div class="everything-swiper-button-next"></div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { Swiper, Navigation, Pagination } from "swiper";

import store from "../store";

export default {
  store,
  data() {
    return {
      wifiTab: true,
      models: [
        {
          id: 1823,
          price: goodsJson["1823"].price,
          oldPrice: goodsJson["1823"].oldPrice,
          value: "BAVARIA 30 л",

          syslo: "10 л",
          volume: "3 кг",
          power: "1,5 кВт",
          weight: "13,7 кг",
          nameL: "30 L",

          imgNoWifi: "bavaria-30l-nowifi",
          imgWifi: "bavaria-30l-wifi",
          imgNoWifi_mobile: "bavaria-30l-nowifi-mobile",
          imgWifi_mobile: "bavaria-30l-wifi-mobile",

          wifi: false,
          id_wifi: 4415,
          price_wifi: goodsJson["4415"].price,
          oldPrice_wifi: goodsJson["4415"].oldPrice,
        },

        {
          id: 1824,
          price: goodsJson["1824"].price,
          oldPrice: goodsJson["1824"].oldPrice,
          value: "BAVARIA 50 л",

          syslo: "30 л",
          volume: "8 кг",
          power: "2,8 кВт",
          weight: "16,3 кг",
          nameL: "50 L",

          imgNoWifi: "bavaria-50l-nowifi",
          imgWifi: "bavaria-50l-wifi",
          imgNoWifi_mobile: "bavaria-50l-nowifi-mobile",
          imgWifi_mobile: "bavaria-50l-wifi-mobile",

          wifi: false,
          id_wifi: 4416,
          price_wifi: goodsJson["4416"].price,
          oldPrice_wifi: goodsJson["4416"].oldPrice,
        },

        {
          id: 1825,
          price: goodsJson["1825"].price,
          oldPrice: goodsJson["1825"].oldPrice,
          value: "BAVARIA 70 л",

          syslo: "50 л",
          volume: "10,5 кг",
          power: "3,2 кВт",
          weight: "25,5 кг",
          nameL: "70 L",

          imgNoWifi: "bavaria-70l-nowifi",
          imgWifi: "bavaria-70l-wifi",
          imgNoWifi_mobile: "bavaria-70l-nowifi-mobile",
          imgWifi_mobile: "bavaria-70l-wifi-mobile",

          wifi: false,
          id_wifi: 4417,
          price_wifi: goodsJson["4417"].price,
          oldPrice_wifi: goodsJson["4417"].oldPrice,
        },
      ],
    };
  },
  methods: {
    changeModel(id) {
      store.commit("updateUserWifi", this.wifiTab);
      store.commit("chooseModel", id);
    },
  },

  mounted() {
    const swiper = new Swiper(".everything-wrapper", {
      spaceBetween: 30,
      slidesPerView: 2,
      slidesPerGroup: 1,
      loop: false,
      navigation: {
        nextEl: ".everything-swiper-button-next",
        prevEl: ".everything-swiper-button-prev",
      },
      pagination: {
        clickable: true,
        el: ".everything-swiper-pagination",
      },

      breakpoints: {
        1560: {
          slidesPerView: 3,
          slidesPerGroup: 1,
          spaceBetween: 30,
        },

        1200: {
          slidesPerView: 2.2,
          slidesPerGroup: 1,
          spaceBetween: 30,
        },

        993: {
          slidesPerView: 1.7,
          slidesPerGroup: 1,
          spaceBetween: 30,
        },

        0: {
          slidesPerView: 1,
          slidesPerGroup: 1,
          spaceBetween: 0,
        },
      },
      modules: [Navigation, Pagination],
    });

    ScrollTrigger.create({
      trigger: "#everything",
      onEnter: () =>
        document
          .querySelectorAll(".everything-item__content-offer a.button")
          .forEach((button) => {
            button.classList.add("button-animation");
          }),
      onLeave: () =>
        document
          .querySelectorAll(".everything-item__content-offer a.button")
          .forEach((button) => {
            button.classList.remove("button-animation");
          }),
      onEnterBack: () =>
        document
          .querySelectorAll(".everything-item__content-offer a.button")
          .forEach((button) => {
            button.classList.add("button-animation");
          }),
      onLeaveBack: () =>
        document
          .querySelectorAll(".everything-item__content-offer a.button")
          .forEach((button) => {
            button.classList.remove("button-animation");
          }),
    });
  },
};
</script>
