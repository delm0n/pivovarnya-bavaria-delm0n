<template>
  <section id="consultation">
    <div v-bind:class="'consultation-bg ' + $store.state.webpSupport">
      <div class="container">
        <div class="consultation-block-bg">
          <div class="consultation-wrapper">
            <div class="consultation-title-wrap">
              <div class="consultation-title">
                <h2>
                  Консультируем по бесплатной <br />
                  горячей линии
                </h2>
              </div>
            </div>

            <div class="consultation-phone-wrap">
              <div class="consultation-phone">
                <p>8 800 250 59 32</p>
              </div>
            </div>

            <div class="consultation-phone-decr-wrap">
              <div class="consultation-phone-decr">
                <p>
                  Звоните прямо сейчас, задавайте&nbsp;вопросы <br />
                  и бронируйте спецпредложения.
                </p>
              </div>
            </div>

            <div class="consultation-button-wrap">
              <div class="consultation-button">
                <a href="#modal-call" data-fancybox class="button"
                  >Заказать звонок</a
                >
              </div>
            </div>

            <div class="consultation-price-wrap">
              <div class="consultation-price">
                <p>
                  Звонок по России <br />
                  бесплатный
                </p>
              </div>
            </div>

            <div class="consultation-img-wrap">
              <div
                v-bind:class="'consultation-img ' + $store.state.webpSupport"
              >
                <picture>
                  <source srcset="build/images/consultation-phone.webp" />
                  <img
                    class="phone"
                    v-lazy="{
                      src: 'src/images/consultation-phone.png',
                      loading: '',
                      error: '',
                    }"
                    alt="Консультация"
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
export default {
  mounted() {
    if (window.innerWidth >= 993) {
      ScrollTrigger.create({
        trigger: "#consultation",
        once: true,
        onEnter: () => {
          gsap.to(".consultation-img img", {
            delay: 0.4,
            duration: 1.4,
            rotationY: 0,
          });
        },
      });
    }
  },
};
</script>
