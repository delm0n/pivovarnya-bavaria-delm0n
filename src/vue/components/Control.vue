<template>
  <section id="controlPanel">
    <div v-bind:class="'control-bg ' + $store.state.webpSupport">
      <div class="container">
        <h2 class="title">Продвинутый блок управления</h2>
        <h3 class="subtitle">
          Соединивший в себе все пожелания <br />
          профессиональных пивоваров
        </h3>

        <div class="control-wrapper">
          <div class="swiper-wrapper">
            <div
              v-for="control in controls"
              v-bind:key="control.title"
              class="swiper-slide control-item"
            >
              <div class="control-item__container">
                <div class="control-item__img">
                  <picture>
                    <source
                      :srcset="
                        'build/images/control-' + control.imgName + '.webp'
                      "
                      type="image/webp"
                    />
                    <img
                      :src="'src/images/control-' + control.imgName + '.png'"
                      alt="Блок управления пивоварней Bavaria"
                    />
                  </picture>
                </div>

                <p class="control-item__title" v-html="control.title"></p>
                <p class="control-item__text" v-html="control.text"></p>

                <p
                  v-for="(li, index) in control.list"
                  v-bind:key="index"
                  class="control-item__li"
                  style="font-weight: 300"
                  v-html="li"
                ></p>

                <p class="control-item__decr" v-html="control.decr"></p>
              </div>
            </div>
          </div>
          <div class="control-swiper-pagination"></div>

          <div class="control-swiper-button-prev"></div>
          <div class="control-swiper-button-next"></div>
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
      controls: [
        {
          title: "Защита <br> от сбоев",
          text: "В случае отключения от источника электроэнергии пивоварня «запоминает» место, на котором прервалась варка.",
          imgName: "power",
          list: [],
          decr: "",
        },

        {
          title: "2 режима  <br> управления",
          text: "Доверьте процесс программе или регулируйте его самостоятельно.",
          imgName: "modes",
          list: [],
          decr: "При необходимости вы всегда сможете проконтролировать конкретный этап вручную, а затем снова переключиться в автоматический режим.",
        },

        {
          title: "Полная <br> автоматизация",
          text: "Выставьте на пивоварне нужные <br> вам настройки:",
          imgName: "auto",
          list: ["-  Температуру", "-  Необходимые паузы", "-  Время варки"],
          decr: "Всё остальное программа <br> сделает сама.",
        },

        {
          title: "Тонкая настройка <br> температурных пауз",
          text: "Выбирайте именно то, что нужно:",
          imgName: "settings",
          list: [
            "-  4 классических паузы",
            "-  6 температурных режимов <br> для отработки ферментов",
            "-  До 10 засыпей хмеля.    ",
          ],
          decr: "",
        },
      ],
    };
  },
  mounted() {
    const swiper = new Swiper(".control-wrapper", {
      spaceBetween: 30,
      slidesPerView: 2,
      slidesPerGroup: 1,
      loop: true,
      navigation: {
        nextEl: ".control-swiper-button-next",
        prevEl: ".control-swiper-button-prev",
      },
      pagination: {
        clickable: true,
        el: ".control-swiper-pagination",
      },

      breakpoints: {
        1536: {
          slidesPerView: 4,
          slidesPerGroup: 1,
          spaceBetween: 30,
          loop: true,
        },

        1200: {
          slidesPerView: 3,
          slidesPerGroup: 1,
          spaceBetween: 30,
          loop: true,
        },

        922: {
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

    // ScrollTrigger.create({
    //   trigger: "#controlPanel",
    //   once: true,
    //   onEnter: () => {
    //     if (window.innerWidth >= 993) {
    //       gsap.from(
    //         ["#controlPanel" + " .title", "#controlPanel" + " .subtitle"],
    //         {
    //           delay: 0.4,
    //           duration: 1.4,
    //           y: 50,
    //           stagger: 0.3,
    //           opacity: 0,
    //         }
    //       );
    //     }
    //   },
    // });
  },
};
</script>
