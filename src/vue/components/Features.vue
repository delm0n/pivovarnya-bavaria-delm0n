<template>
  <section id="features">
    <div class="container">
      <div v-bind:class="'features-bg ' + $store.state.webpSupport">
        <div class="features__wrapper">
          <div
            v-for="feature in features"
            v-bind:key="feature.title"
            class="features__wrapper-item"
          >
            <div class="features__wrapper-item-content">
              <h3
                class="features__wrapper-item__title"
                v-html="feature.title"
              ></h3>
              <p class="features__wrapper-item__decr" v-html="feature.decr"></p>
            </div>
            <div class="features__wrapper-item__line"></div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      features: [
        {
          title: "500 000",
          decr: "довольных клиентов <br> по всей России",
        },

        {
          title: "10 лет",
          decr: "успешной работы <br>  на рынке",
        },

        {
          title: "11&nbsp;магазинов",
          decr: "розничной сети <br> по всей России",
        },

        {
          title: "От 2 дней",
          decr: "срок доставки <br>  до вашего дома",
        },
      ],
    };
  },
};
</script>