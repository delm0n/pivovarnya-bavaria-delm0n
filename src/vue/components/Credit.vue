<template>
  <section id="credit">
    <div class="loader"></div>
    <div v-bind:class="'credit-bg ' + $store.state.webpSupport">
      <div class="container">
        <h2 class="title">
          Начните пользоваться <br />
          пивоварней уже сейчас
        </h2>
        <div class="credit-wrapper">
          <div class="credit-steps">
            <div
              v-for="(step, index) in steps"
              v-bind:key="index"
              class="credit-steps__item"
            >
              <div class="circle">{{ index + 1 }}</div>
              <p v-html="step.title"></p>
            </div>
          </div>

          <div class="credit-offer">
            <a
              draggable="false"
              v-on:click="setCredit(true)"
              href="#modal-order"
              data-fancybox
              class="button"
              >Купить в рассрочку</a
            >

            <div class="credit-offer__price">
              <p class="old">
                {{ oldP }}
                &#8381;
              </p>

              <p class="new">
                от {{ newP }} &#8381; <span>&nbsp;/ 4 мес.</span>
              </p>
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
      steps: [
        {
          title: "Нажмите кнопку <br /> «Купить в рассрочку»",
        },
        {
          title: "В появившемся окне выберите нужную комплектацию",
        },
        {
          title: " Нажмите<br /> «Заказать»",
        },
      ],
      oldP: store.state.models[1823].oldPrice,
      newP: Math.floor(store.state.models[1823].price / 4),
    };
  },

  methods: {
    setCredit(val) {
      store.commit("updateUserCredit", val);
    },
  },
  mounted() {
    //mixin
    this.btnAnim("#credit", ".credit-offer a.button");
  },
};
</script>