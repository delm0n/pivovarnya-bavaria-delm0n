<template>
  <section id="tradition">
    <div v-bind:class="'tradition-bg ' + $store.state.webpSupport">
      <div class="container">
        <h2 class="title">Откройте для себя вековые традиции</h2>
        <h3 class="subtitle">Со сборником самых популярных рецептов пива</h3>

        <div class="tradition-wrapper">
          <div class="swiper-wrapper">
            <div
              v-for="(beer, index) in beers"
              v-bind:key="index"
              class="swiper-slide tradition-item__container"
            >
              <div class="tradition-item">
                <div class="tradition-item__img">
                  <picture>
                    <source
                      :srcset="'build/images/tradition-' + beer.img + '.webp'"
                    />
                    <img
                      :src="'src/images/tradition-' + beer.img + '.png'"
                      :alt="beer.title"
                    />
                  </picture>
                </div>

                <div class="tradition-item__title">
                  <h3 v-html="beer.title"></h3>
                </div>

                <div class="tradition-item__comp">
                  <div
                    v-for="(cut, cutIndex) in beer.cutComponents"
                    v-bind:key="cutIndex"
                    class="tradition-item__comp-row"
                  >
                    <p v-html="cutIndex + 1"></p>
                    <p>.</p>
                    <p v-html="cut"></p>
                  </div>
                </div>

                <div class="tradition-item__button">
                  <a
                    draggable="false"
                    v-on:click="getBeer(index)"
                    href="#modal-tradition"
                    data-fancybox
                    class="button"
                    >Открыть рецепт</a
                  >
                </div>
              </div>
            </div>
          </div>

          <div class="tradition-swiper-pagination"></div>

          <div class="tradition-swiper-button-prev"></div>
          <div class="tradition-swiper-button-next"></div>
        </div>
      </div>
    </div>

    <div id="modal-tradition" style="display: none">
      <div v-bind:class="'modal-container ' + $store.state.webpSupport">
        <div class="modal-tradition-bg">
          <div class="video-container">
            <a
              class="video-item slick-slide slick-active"
              :data-fancybox="'https://youtu.be/' + beer.video"
              :href="'https://youtu.be/' + beer.video"
            >
              <div class="video__container main-video__video-container">
                <div class="video__link">
                  <picture>
                    <source
                      class=""
                      type="image/webp"
                      :srcset="
                        'https://i.ytimg.com/vi_webp/' +
                        beer.video +
                        '/maxresdefault.webp'
                      "
                    />
                    <img
                      class="video__media"
                      :alt="beer.title"
                      :src="
                        'https://i.ytimg.com/vi/' +
                        beer.video +
                        '/maxresdefault.jpg'
                      "
                    />
                  </picture>
                  <div class="yt-btn">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      xmlns:xlink="http://www.w3.org/1999/xlink"
                      width="110"
                      height="110"
                      viewBox="0 0 110 110"
                      fill="none"
                    >
                      <path
                        d="M103.308 29.4247C102.764 27.2495 101.655 25.2565 100.094 23.647C98.5325 22.0374 96.5741 20.8684 94.4165 20.258C86.5332 18.333 54.9999 18.333 54.9999 18.333C54.9999 18.333 23.4665 18.333 15.5832 20.4413C13.4256 21.0518 11.4672 22.2208 9.90603 23.8303C8.3448 25.4398 7.23597 27.4328 6.69152 29.608C5.24875 37.6085 4.54302 45.7244 4.58319 53.8538C4.53176 62.0445 5.23754 70.2223 6.69152 78.283C7.29175 80.3906 8.42543 82.3078 9.98301 83.8494C11.5406 85.3909 13.4694 86.5047 15.5832 87.083C23.4665 89.1913 54.9999 89.1913 54.9999 89.1913C54.9999 89.1913 86.5332 89.1913 94.4165 87.083C96.5741 86.4726 98.5325 85.3036 100.094 83.6941C101.655 82.0846 102.764 80.0915 103.308 77.9163C104.74 69.9761 105.446 61.922 105.417 53.8538C105.468 45.6632 104.762 37.4854 103.308 29.4247V29.4247Z"
                        fill="white"
                      />
                      <path
                        d="M44.6875 68.8412L71.0417 53.8537L44.6875 38.8662V68.8412Z"
                        fill="#000"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </a>
          </div>
        </div>

        <div class="modal-tradition-content">
          <h3 class="modal-title">{{ beer.title }}</h3>

          <div class="modal-tradition__comp-block">
            <div
              v-for="(comp, index) in beer.components"
              v-bind:key="index"
              class="modal-tradition__comp"
            >
              <p v-html="comp[0]"></p>
              <p v-html="comp[1]"></p>
            </div>
          </div>

          <div
            v-if="beer.addish.length > 0"
            class="modal-tradition__comp-block-addish"
          >
            <p class="modal-tradition__comp" style="font-weight: 700">
              Дополнительно
            </p>
            <div
              v-for="(addish, index) in beer.addish"
              v-bind:key="index"
              class="modal-tradition__comp"
            >
              <p v-html="addish[0]"></p>
              <p v-html="addish[1]"></p>
            </div>
          </div>
          <div class="modal-tradition__steps-block">
            <div
              v-for="(step, index) in beer.steps"
              class="modal-tradition__steps"
              v-bind:key="index"
            >
              <p style="font-weight: 700">Шаг {{ index + 1 }}.</p>
              <p v-html="step"></p>
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
    return {
      // состояние модального окна
      beer: {},

      beers: [
        {
          img: "yachmennoe",
          title: "Ячменное пиво",
          cutComponents: [
            'Солод Vienna malt <span style="white-space: nowrap"> — 7 кг </span>',
            'Солод Pilsner<span style="white-space: nowrap">  malt — 7 кг </span>',
            'Вода <span style="white-space: nowrap"> — 70 л</span>',
            'Дрожжи пивные<span style="white-space: nowrap">  — 44 г </span>',
            'Хмель Hercules<span style="white-space: nowrap">  — 65 г </span>',
            'Хмель Saphir<span style="white-space: nowrap">  — 50 г </span>',
            'Таблетка ирландского мха<span style="white-space: nowrap">  — 1 шт...</span>',
          ],

          components: [
            ["Солод Vienna malt", "7 кг "],
            ["Солод Pilsner malt ", "7 кг "],
            ["Вода", "70 л"],
            ["Дрожжи пивные ", "44 г "],
            ["Хмель Hercules", "65 г "],
            ["Хмель Saphir", "50 г "],
            ["Таблетка ирландского мха", "1 шт."],
          ],
          steps: [
            "Воду нагреваем, при температуре 52° засыпаем солод. ",
            "70&nbsp;минут выдерживаем при 70°, 10&nbsp;мин — при 78°. ",
            "Процеживаем сусло.",
            "Общее время варки — 90&nbsp;минут. Вначале вносим 15&nbsp;г Hercules, на 75&nbsp;минуте добавляем ещё 50&nbsp;г, на 80&nbsp;минуте добавляем ирландский мох, на 88&nbsp;минуте — Saphir.",
            "Сусло остужаем до температуры 24–25°, вносим дрожжи, ставим гидрозатвор.",
            "Оставляем для брожения при температуре 19–20° на 14&nbsp;дней.",
          ],

          addish: [],

          video: "R9KMC-VKcT4",
        },

        {
          img: "ipa",
          title: "IPA",
          cutComponents: [
            'Солод Vienna malt <span style="white-space: nowrap"> — 7 кг </span>',
            'Солод Pilsner malt <span style="white-space: nowrap"> — 7 кг </span>',
            'Солод карамельный 50 ЕВС <span style="white-space: nowrap"> — 0,5 кг</span>',
            'Солод карамельный 150 ЕВС <span style="white-space: nowrap"> — 0,2 кг</span>',
            'Вода <span style="white-space: nowrap"> — 70 л</span>',
            'Хмель Hercules <span style="white-space: nowrap"> — 70 г...</span>',
          ],
          components: [
            ["Солод Vienna malt", "7 кг "],
            ["Солод Pilsner malt ", "7 кг "],
            ["Карамельный 50 ЕВС", "0,5 кг "],
            ["Карамельный 150 ЕВС ", "0,2 кг "],
            ["Вода", "70 л"],
            ["Хмель Hercules", "70 г "],
            ["Хмель Saphir", "75 г "],
            ["Хмель Perle", "25 г"],
            ["Дрожжи пивные ", "44 г "],
            ["Таблетка ирландского мха", "1 шт."],
          ],
          steps: [
            "Воду нагреваем, при температуре 52° засыпаем солод. ",
            "70&nbsp;минут выдерживаем при 70°, 10&nbsp;мин — при 78°. ",
            "Процеживаем сусло.",
            "Общее время варки — 90&nbsp;минут. На старте добавляем 70 г Hercules, на 75&nbsp;минуте — 50 г Saphir, на 80&nbsp;минуте — ирландский мох, за 2&nbsp;мин до конца варки — 25&nbsp;г Saphir и 25&nbsp;г Perle.",
            "Сусло остужаем до 25°, добавляем дрожжи, ставим гидрозатвор. ",
            "Оставляем для брожения при температуре 19–20° на 14&nbsp;дней.",
          ],
          addish: [],

          video: "d0byIOuQx0w",
        },

        {
          img: "pshenichnoe",
          title: "Пшеничное пиво",
          cutComponents: [
            'Солод пшеничный <span style="white-space: nowrap"> — 7 кг</span>',
            'Солод Vienna malt <span style="white-space: nowrap"> — 4 кг</span>',
            'Солод Pilsner malt <span style="white-space: nowrap"> — 3 кг</span>',
            'Вода <span style="white-space: nowrap"> — 70 л</span>',
            'Хмель Hercules <span style="white-space: nowrap"> — 10 г</span>',
            ' Хмель Saphir <span style="white-space: nowrap"> — 50 г</span>',
            'Хмель Perle <span style="white-space: nowrap"> — 50 г...</span>',
          ],

          components: [
            ["Солод пшеничный", "7 кг "],
            ["Солод Vienna malt", "4 кг "],
            ["Солод Pilsner malt ", "3 кг "],
            ["Вода", "70 л"],
            ["Хмель Hercules", "10 г "],
            ["Хмель Saphir", "50 г "],
            ["Хмель Perle", "50 г"],
            ["Дрожжи пивные ", "44 г "],
            ["Таблетка ирландского мха", "1 шт."],
          ],
          steps: [
            "Воду нагреваем, при температуре 52° засыпаем солод. ",
            "90&nbsp;минут выдерживаем при 70°, 10&nbsp;мин — при 78°. ",
            "Процеживаем сусло.",
            "Общее время варки — 90&nbsp;минут. На старте добавляем 10&nbsp;г Hercules, на 75&nbsp;минуте — 50&nbsp;г Perle, цедру и кориандр. На 80&nbsp;минуте кидаем таблетку ирландского мха, а за 2&nbsp;минуты до конца варки — 50&nbsp;г Saphir.",
            "Сусло остужаем до 25°, добавляем дрожжи, ставим гидрозатвор. ",
            "Оставляем для брожения при температуре 24–25° на 14 дней.",
          ],

          addish: [
            ["Апельсиновая цедра ", "100 г"],
            ["Кориандр ", "20 г"],
          ],

          video: "eRI1P42BPWU",
        },

        {
          img: "milk",
          title: "Молочный стаут",
          cutComponents: [
            'Солод жжёный 14000 ЕВС <span style="white-space: nowrap"> — 0,4 кг</span>',
            'Солод шоколадный 900 ЕВС <span style="white-space: nowrap"> — 0,9 кг</span>',
            'Солод карамельный 50 ЕВС <span style="white-space: nowrap"> — 1 кг</span>',
            'Солод карамельный — 150 ЕВС <span style="white-space: nowrap"> — 1 кг</span>',
            'Солод Pilsner malt <span style="white-space: nowrap"> — 13 кг</span>',
            'Вода <span style="white-space: nowrap"> — 70 л...</span>',
          ],

          components: [
            ["Солод жжёный 14000 ЕВС", "0,4 кг "],
            ["Солод шоколадный 900 ЕВС", "0,9 кг "],
            ["Солод карамельный 50 ЕВС ", "1 кг"],
            ["Солод карамельный 150 ЕВС ", "1 кг"],
            ["Солод Pilsner malt", "13 кг"],
            ["Вода", "70 л"],
            ["Хмель Hercules", "70 г "],
            ["Дрожжи пивные ", "44 г "],
          ],
          steps: [
            "Воду нагреваем, при температуре 52° засыпаем солод. ",
            "70&nbsp;минут выдерживаем при 72°, 10&nbsp;мин — при 78°. ",
            "Процеживаем сусло.",
            "Общее время варки — 90&nbsp;минут. На старте добавляем 20&nbsp;г Hercules, на 60&nbsp;минуте — 1 кг лактозы, на 75&nbsp;минуте — 50&nbsp;г Hercules, на 80&nbsp;минуте таблетку ирландского мха.",
            "Сусло остужаем, вносим дрожжи, ставим гидрозатвор. ",
            "Оставляем для брожения при температуре 20° на 14 дней.",
          ],

          addish: [["Лактоза ", "1 кг"]],

          video: "v_2QP1AUmbA",
        },
      ],
    };
  },
  components: {},
  methods: {
    // присваиваем значение в модальное окно
    getBeer(i) {
      this.beer = this.beers[i];
    },
  },
  created() {
    this.getBeer(1);
  },
  mounted() {
    const swiper = new Swiper(".tradition-wrapper", {
      spaceBetween: 30,
      slidesPerView: 2,

      slidesPerGroup: 1,
      loop: false,
      navigation: {
        nextEl: ".tradition-swiper-button-next",
        prevEl: ".tradition-swiper-button-prev",
      },
      pagination: {
        clickable: true,
        el: ".tradition-swiper-pagination",
      },

      breakpoints: {
        1366: {
          slidesPerView: 2,
          slidesPerGroup: 1,
          spaceBetween: 30,
          loop: false,
          speed: 300,
        },

        0: {
          slidesPerView: 1,
          slidesPerGroup: 1,
          spaceBetween: 0,
          loop: false,
          speed: 300,
        },
      },
      modules: [Navigation, Pagination],
    });

    // ScrollTrigger.create({
    //   trigger: "#tradition",
    //   once: true,
    //   onEnter: () => {
    //     if (window.innerWidth >= 993) {
    //       gsap.from(["#tradition" + " .title", "#tradition" + " .subtitle"], {
    //         delay: 0.6,
    //         duration: 1.4,
    //         y: 50,
    //         stagger: 0.3,
    //         opacity: 0,
    //       });
    //     }
    //   },
    // });
  },
};
</script>