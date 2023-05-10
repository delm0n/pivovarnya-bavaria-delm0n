<template>
  <section id="patent">
    <div class="container">
      <div v-bind:class="'patent-bg ' + $store.state.webpSupport">
        <div class="patent-wrapper">
          <div class="patent-wrapper__img">
            <picture>
              <source srcset="build/images/patent-img.webp" type="image/webp" />
              <img
                src="src/images/patent-img.png"
                class="preview"
                alt="пивоварня Bavaria"
              />
            </picture>
          </div>
          <div class="patent-wrapper__text">
            <h2>Декларация о соответствии и патент</h2>
            <p>
              подтверждают высокое качество <br />
              и безопасность эксплуатации <br />
              пивоварни Bavaria
            </p>
          </div>

          <div class="patent-wrapper__container">
            <div class="patent-wrapper__block">
              <div class="slider-wrapper">
                <div class="swiper-wrapper">
                  <a
                    href="build/images/patent-item1-modal.png"
                    data-fancybox
                    class="swiper-slide slider-wrapper__img"
                  >
                    <div class="zoom">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="33"
                        height="33"
                        viewBox="0 0 33 33"
                        fill="none"
                      >
                        <rect width="33" height="33" rx="16.5" fill="#FFB800" />
                        <path
                          d="M16 24C20.4183 24 24 20.4183 24 16C24 11.5817 20.4183 8 16 8C11.5817 8 8 11.5817 8 16C8 20.4183 11.5817 24 16 24Z"
                          stroke="black"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M26 26L22 22"
                          stroke="black"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M12 16C12 15.4477 12.4477 15 13 15H19C19.5523 15 20 15.4477 20 16C20 16.5523 19.5523 17 19 17H13C12.4477 17 12 16.5523 12 16Z"
                          fill="black"
                        />
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M16 20C15.4477 20 15 19.5523 15 19L15 13C15 12.4477 15.4477 12 16 12C16.5523 12 17 12.4477 17 13L17 19C17 19.5523 16.5523 20 16 20Z"
                          fill="black"
                        />
                      </svg>
                    </div>

                    <picture>
                      <source
                        srcset="build/images/patent-item1.webp"
                        type="image/webp"
                      />
                      <img
                        src="src/images/patent-item1.png"
                        class="preview"
                        alt="Патент на пивоварню"
                      />
                    </picture>
                  </a>

                  <a
                    href="build/images/patent-item2-modal.png"
                    data-fancybox
                    class="swiper-slide slider-wrapper__img"
                  >
                    <div class="zoom">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="33"
                        height="33"
                        viewBox="0 0 33 33"
                        fill="none"
                      >
                        <rect width="33" height="33" rx="16.5" fill="#FFB800" />
                        <path
                          d="M16 24C20.4183 24 24 20.4183 24 16C24 11.5817 20.4183 8 16 8C11.5817 8 8 11.5817 8 16C8 20.4183 11.5817 24 16 24Z"
                          stroke="black"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M26 26L22 22"
                          stroke="black"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M12 16C12 15.4477 12.4477 15 13 15H19C19.5523 15 20 15.4477 20 16C20 16.5523 19.5523 17 19 17H13C12.4477 17 12 16.5523 12 16Z"
                          fill="black"
                        />
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M16 20C15.4477 20 15 19.5523 15 19L15 13C15 12.4477 15.4477 12 16 12C16.5523 12 17 12.4477 17 13L17 19C17 19.5523 16.5523 20 16 20Z"
                          fill="black"
                        />
                      </svg>
                    </div>

                    <picture>
                      <source
                        srcset="build/images/patent-item2.webp"
                        type="image/webp"
                      />
                      <img
                        v-lazy="{
                          src: 'src/images/patent-item2.png',
                          loading: '',
                          error: '',
                        }"
                        class="preview"
                        alt="Евразийский экономический союз декларации о
                  соответствии"
                      />
                    </picture>
                  </a>
                </div>

                <div class="patent-swiper-pagination"></div>

                <div
                  class="patent-swiper-button-prev patent-swiper-button"
                ></div>
                <div
                  class="patent-swiper-button-next patent-swiper-button"
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { Swiper, Navigation, Pagination } from "swiper";

export default {
  data() {
    return {};
  },

  mounted() {
    const breakpoint = window.matchMedia("(min-width:769px)");
    let mySwiper;

    const breakpointChecker = function () {
      if (breakpoint.matches === true) {
        if (mySwiper !== undefined) {
          mySwiper.destroy(true, true);
        }
        return;
      } else if (breakpoint.matches === false) {
        return enableSwiper();
      }
    };

    const enableSwiper = function () {
      mySwiper = new Swiper(".slider-wrapper", {
        slidesPerView: 1,
        slidesPerGroup: 1,
        spaceBetween: 0,
        loop: false,
        navigation: {
          nextEl: ".patent-swiper-button-next",
          prevEl: ".patent-swiper-button-prev",
        },
        pagination: {
          clickable: true,
          el: ".patent-swiper-pagination",
        },

        modules: [Navigation, Pagination],
      });
    };

    breakpoint.addListener(breakpointChecker);

    breakpointChecker();
    if (window.innerWidth >= 993) {
      ScrollTrigger.create({
        trigger: "#patent",
        once: true,
        onEnter: () => {
          gsap.from(".patent-wrapper__container", {
            delay: 0.5,
            duration: 1,
            opacity: 0,
            x: 70,
          });
        },
      });
    }
  },
};
</script>
