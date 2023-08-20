<template>
  <section id="order">
    <div v-bind:class="'order-bg ' + $store.state.webpSupport">
      <div class="container">
        <h2 class="title">
          Закажите пивоварню BAVARIA <br />
          до&nbsp;{{ isTomorrow }}
        </h2>
        <h3 class="subtitle">
          Получите скидку и {{ presentsCount }}, <br />
          которые пригодятся любому пивовару
        </h3>

        <div class="order-wrapper">
          <div class="order-wrapper__img-container">
            <div class="order-wrapper__img">
              <picture>
                <source :srcset="'build/images/' + img + '.webp'" />
                <img
                  :src="'src/images/' + img + '.png'"
                  class="bar"
                  alt="Закажите пивоварню BAVARIA"
                />
              </picture>
            </div>
          </div>

          <div class="order-wrapper__present-container">
            <div class="order-wrapper__present">
              <div
                v-for="(present, index) in presents"
                v-bind:key="index"
                class="order-wrapper__present-item"
              >
                <div class="circle">
                  {{ index + 1 }}
                </div>
                <div class="item-text">
                  <p class="item-text__title" v-html="present.title"></p>
                  <p class="item-text__price" v-html="present.price"></p>
                </div>
              </div>
            </div>
          </div>

          <div class="order-wrapper__form-container">
            <div
              v-bind:class="'order-wrapper__form ' + $store.state.webpSupport"
            >
              <form
                action=""
                v-on:submit.prevent
                method="post"
                class="spnForm order-form order-form-content"
              >
                <FormPresent :ids="ids" />

                <h4 class="order-form-content__title">
                  Закажите до {{ isTomorrow }}
                  <br />
                  и получите, помимо подарков, <span> скидку&nbsp;30%</span>
                </h4>

                <div class="order-form-offer">
                  <p class="old-price">{{ $store.state.model.oldPrice }} ₽</p>
                  <p class="new-price">за {{ $store.state.model.price }} ₽</p>
                </div>

                <CollapseList :list="modelsNoWifi" :wifi="true">
                  <template v-slot:wifiModelValue>
                    <span>{{ $store.state.model.valueDecription }}</span>
                  </template>

                  <template v-slot:wifiListSlot>
                    <li
                      v-for="(item, index) in modelsWifi"
                      v-bind:key="index"
                      v-on:click="setModelWifi(item.relations)"
                    >
                      {{ item.value }} {{ item.valueDecription }}
                    </li>
                  </template>
                </CollapseList>

                <div class="input-container">
                  <div class="standart-input">
                    <input
                      aria-label="Ваше имя"
                      type="text"
                      name="name"
                      placeholder="Ваше имя"
                      required
                    />
                  </div>

                  <div class="standart-input">
                    <input
                      aria-label="Ваш телефон"
                      type="tel"
                      name="phone"
                      placeholder="Ваш телефон"
                      required
                    />
                  </div>
                </div>

                <CheckboxCredit inputType="checkbox" />

                <div class="submit-input__button">
                  <button type="submit" disabled class="button">
                    Заказать с подарками
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import CheckboxCredit from "../helpers/CheckboxCredit.vue";
import CollapseList from "../helpers/CollapseList.vue";
import FormPresent from "../helpers/FormPresent.vue";

import store from "../store";
import { mapGetters } from "vuex";
import buttonAnimated from "../mixins/buttonAnimated";

export default {
  data() {
    return {
      presents: [
        {
          title: "Книга <br> рецептов",
          price: "",
        },
        {
          title: "Купон <br> на 1000 рублей",
          price: "",
        },
        {
          title: "Чиллер",
          price: "<span>1500 руб.</span>0 руб.",
        },
      ],

      img: "",
      ids: 0,
    };
  },
  mixins: [buttonAnimated],
  components: {
    CheckboxCredit,
    CollapseList,
    FormPresent,
  },

  methods: {
    setModelWifi(id) {
      store.commit("updateUserWifi", true);
      store.commit("chooseModel", id);
      console.log(id);
    },
  },
  computed: {
    presentsCount: function () {
      return (
        String(this.presents.length) +
        (Number(
          String(this.presents.length)[String(this.presents.length).length - 1]
        ) > 4
          ? " подарков"
          : " подарка")
      );
    },

    ...mapGetters(["modelsNoWifi", "modelsWifi", "findPresent", "isTomorrow"]),
  },

  mounted() {
    // замена картинки, количества подарков и скрытых инпутов
    let pres = this.findPresent;
    this.img = pres.img;
    if (pres.id != 0) {
      this.ids = pres.ids;
      this.presents.splice(2, 0, pres.orderItem);
    }

    //mixin
    this.btnAnim("#order", ".submit-input__button button.button");
  },
};
</script>
