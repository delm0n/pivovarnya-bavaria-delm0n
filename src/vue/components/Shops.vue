<template>
  <section id="shops">
    <div v-bind:class="'shops-bg ' + $store.state.webpSupport">
      <div class="container">
        <div class="shops-wrapper">
          <div class="shops-wrapper__img-container">
            <div
              v-bind:class="'shops-wrapper__img ' + $store.state.webpSupport"
            ></div>
          </div>

          <div class="shops-wrapper__title-container">
            <h2 class="shops-wrapper__title">
              Купить пивоварню ещё удобнее <br />
              в наших розничных магазинах «Градус&nbsp;Хаус»
            </h2>
          </div>

          <div class="shops-wrapper__text-container">
            <div class="shops-wrapper__text-title">
              <p>В наших магазинах вы сможете:</p>
            </div>

            <div class="shops-wrapper__text-list">
              <ul>
                <li>
                  купить товары для консервирования, самогоноварения, копчения
                </li>
                <!-- <li>
                  оформить заявку на самовывоз и забрать товар, купленный в
                  интернет-магазине
                </li> -->
                <li>оформить скидочную карту</li>
              </ul>

              <ul>
                <!-- <li>оформить скидочную карту</li> -->
                <li>сдать товар по гарантии</li>
                <li>получить консультацию специалиста</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="service__wrapper">
      <div class="service__map">
        <div id="shop-map"></div>
      </div>
    </div>
  </section>
</template>

<script>
import axios from "axios";

export default {
  methods: {
    //получение списка магазинов для карты внизу сайта
    async getShops() {
      await axios
        .get("https://apispn.ru/json/shops/")
        .then(function (response) {
          // handle success
          let citiesJSON = JSON.parse(response.data);

          // создание карты с метками
          let script = document.createElement("script");
          script.setAttribute("async", "");
          script.type = "text/javascript";
          script.src = "https://api-maps.yandex.ru/2.1/?lang=ru_RU";
          document.querySelector("body").appendChild(script);

          script.onload = function () {
            ymaps.ready(function () {
              let myMap = new ymaps.Map("shop-map", {
                center: [55.75222, 37.61556],
                zoom: 10,
                controls: ["zoomControl"],
              });

              citiesJSON.forEach(function (inx) {
                let city = inx.city;
                inx.shops.forEach(function (shop) {
                  let mark = new ymaps.Placemark(
                    shop.coords,
                    {
                      hasHint: true,
                      hintContent:
                        "Градус Хаус в г. " + city + ", " + shop.name,
                    },
                    {
                      // Необходимо указать данный тип макета.
                      iconLayout: "default#image",

                      // Своё изображение иконки метки.
                      iconImageHref: "build/images/placemark.svg",

                      // Размеры метки.
                      iconImageSize: [48, 65],

                      // Смещение левого верхнего угла иконки относительно
                      // её "ножки" (точки привязки).
                      iconImageOffset: [-5, -38],
                    }
                  );

                  mark.events.add("click", function (e) {
                    myMap.hint.open(
                      shop.coords,
                      " Градус Хаус в г. " + city + ", " + shop.name
                    );
                  });

                  myMap.geoObjects.add(mark);
                });
              });
            });
          };
        })
        .catch(function (error) {
          // handle error
          console.log(error);
        });
    },
  },
  created() {
    // setTimeout(() => {
    //   this.getShops();
    // }, 5000);
  },
  mounted() {
    ScrollTrigger.create({
      trigger: "#shops",
      once: true,
      onEnter: () => {
        this.getShops();
      },
    });

    if (window.innerWidth >= 993) {
      ScrollTrigger.create({
        trigger: "#shops",
        once: true,
        onEnter: () => {
          gsap.from(".shops-wrapper__img", {
            delay: 0.7,
            duration: 1,
            y: 50,
          });
        },
      });
    }
  },
};
</script>