<template>
  <section id="destiny">
    <div v-bind:class="'destiny-bg ' + $store.state.webpSupport">
      <div class="container">
        <h2 class="title">Настоящая пивоварня,</h2>
        <h3 class="subtitle">которая подходит всем:</h3>

        <div class="destiny-wrapper">
          <div class="swiper-wrapper">
            <div
              v-for="destiny in destinies"
              v-bind:key="destiny.title"
              class="swiper-slide destiny-item"
            >
              <div class="destiny-item__container">
                <div class="destiny-item__title-block">
                  <picture>
                    <source
                      :srcset="
                        'build/images/destiny-' + destiny.imgName + '.webp'
                      "
                    />
                    <img
                      :src="'src/images/destiny-' + destiny.imgName + '.png'"
                      :alt="destiny.title.replace(/( |<([^>]+)>)/gi, ' ')"
                    />
                  </picture>

                  <p class="destiny-item__title" v-html="destiny.title"></p>
                </div>
                <p class="destiny-item__text">{{ destiny.text }}</p>
                <ul class="destiny-item__list">
                  <li v-for="(li, index) in destiny.list" v-bind:key="index">
                    {{ li }}
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div class="destiny-swiper-pagination"></div>

          <div class="destiny-swiper-button-prev"></div>
          <div class="destiny-swiper-button-next"></div>
        </div>
      </div>
    </div>
  </section>
</template>



<script>
import { Swiper, Navigation, Pagination } from "swiper";

export default {
  data() {
    return {
      destinies: [
        {
          title: "Новичкам-<br>энтузиастам",
          text: "Если вы только начинаете осваивать пивоварение, BAVARIA станет вашим верным спутником в мир крафта:",
          list: [
            "Полностью автоматизированный процесс",
            "Полезные советы от системы",
            "Запись своих рецептов в память устройства",
            "Простая и понятная инструкция",
          ],
          imgName: "beer",
        },

        {
          title: "Любителям<br>и профессионалам",
          text: "BAVARIA даёт возможность не ограничиваться классикой! Придумывайте уникальные рецепты сами!",
          list: [
            "Система может «запоминать» ваши рецепты",
            "100% повторяемость сохранённых алгоритмов варки",
          ],
          imgName: "profi",
        },

        {
          title: "Малым<br>предпринимателям",
          text: "Домашняя пивоварня идеально подойдёт для тех, кто собирается заняться бизнесом:",
          list: [
            "Качество пива не уступает конвейерному производству       ",
            "Объём продукта на выходе достаточен для содержания частной пивоварни (до 98 бутылок за одну варку)",
          ],
          imgName: "business",
        },
      ],
    };
  },
  mounted() {
    const swiper = new Swiper(".destiny-wrapper", {
      spaceBetween: 30,
      slidesPerView: 2,

      slidesPerGroup: 1,
      loop: true,
      //:loop-fill-group-with-blank="true"
      navigation: {
        nextEl: ".destiny-swiper-button-next",
        prevEl: ".destiny-swiper-button-prev",
      },
      pagination: {
        clickable: true,
        el: ".destiny-swiper-pagination",
      },

      breakpoints: {
        1440: {
          slidesPerView: 3,
          slidesPerGroup: 1,
          spaceBetween: 30,
          loop: true,
        },
        992: {
          slidesPerView: 2,
          slidesPerGroup: 1,
          spaceBetween: 30,
          loop: true,
        },

        0: {
          slidesPerView: 1,
          slidesPerGroup: 1,
          spaceBetween: 0,
          loop: true,
        },
      },
      modules: [Navigation, Pagination],
    });

    // if (window.innerWidth >= 993) {
    //   ScrollTrigger.create({
    //     trigger: "#destiny",
    //     once: true,
    //     onEnter: () => {
    //       gsap.from(["#destiny" + " .title", "#destiny" + " .subtitle"], {
    //         delay: 0.4,
    //         duration: 1.4,
    //         y: 50,
    //         stagger: 0.3,
    //         opacity: 0,
    //       });
    //     },
    //   });
    // }
  },
};
</script>