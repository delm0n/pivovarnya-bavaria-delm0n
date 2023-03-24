<template>
  <div id="header-top" class="header-top">
    <div class="container header-top__wrapper">
      <div
        class="header-top__logo"
        v-on:click="scrollToSection('#header-main')"
      >
        <picture>
          <source srcset="build/images/logo.webp" media="(min-width: 993px)" />
          <source srcset="src/images/logo.png" media="(min-width: 993px)" />
          <source srcset="build/images/logo-mobile.webp" />
          <img
            class="logo-img"
            src="src/images/logo-mobile.png"
            alt="helicon"
          />
        </picture>
      </div>

      <div class="menu-container">
        <div
          class="menu-toggler"
          v-bind:class="{ 'menu-toggler_open': burger }"
          v-on:click="burger = !burger"
        >
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <ul
          class="menu header-top__menu"
          v-bind:class="{ 'header-top__menu_open': burger }"
        >
          <li>
            <p
              v-on:click="
                scrollToSection('#destiny');
                burger = !burger;
              "
            >
              О Bavaria
            </p>
          </li>
          <li>
            <p
              v-on:click="
                scrollToSection('#equipment');
                burger = !burger;
              "
            >
              Комплектация
            </p>
          </li>
          <li>
            <p
              v-on:click="
                scrollToSection('#everything');
                burger = !burger;
              "
            >
              Модели
            </p>
          </li>
          <li>
            <p
              v-on:click="
                scrollToSection('#wifi');
                burger = !burger;
              "
            >
              Блок с WIFI
            </p>
          </li>

          <div class="mobile-li">
            <a
              draggable="false"
              href="tel:88002505932"
              class="mobile-li__phone-number"
              >8 800 250 59 32</a
            >
            <p>Звонок по России бесплатный</p>
            <a
              draggable="false"
              href="#modal-call"
              data-fancybox
              class="header-top__phone-button"
            >
              <span class="deckstop-text"> Заказать обратный звонок</span>
            </a>
          </div>
        </ul>
      </div>

      <div class="header-top__phone">
        <p>Звонок по России бесплатный</p>
        <a
          draggable="false"
          href="tel:88002505932"
          class="header-top__phone-number"
          >8 800 250 59 32</a
        >

        <a
          draggable="false"
          href="#modal-call"
          data-fancybox
          class="header-top__phone-button"
        >
          <span class="deckstop-text"> Заказать обратный звонок</span>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      burger: false,
    };
  },
  methods: {
    // плавный скролл к selector
    scrollToSection(selector) {
      gsap.to(window, {
        duration: 1.5,
        scrollTo: selector,
      });
      document.getElementById("header-top").classList.add("header-scroll");
      setTimeout(() => {
        document.getElementById("header-top").classList.remove("header-scroll");
      }, 6000);
    },
  },

  mounted() {
    //сокрытие-появление шапки при скролле страницы
    if (window.innerWidth >= 993) {
      const showAnim = gsap
        .from("#header-top", {
          yPercent: -100,
          paused: true,
          // duration: 0.7,
        })
        .progress(1);

      ScrollTrigger.create({
        start: "100px top",
        end: 99999,
        onUpdate: (self) => {
          self.direction === -1 ? showAnim.play() : showAnim.reverse();
        },
      });
    }
  },
};
</script>