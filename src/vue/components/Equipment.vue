<template>
  <section id="equipment">
    <div v-bind:class="'equipment-bg ' + $store.state.webpSupport">
      <div class="container">
        <h2 class="title">Создано пивоваром-экспертом</h2>
        <h3 class="subtitle">Для истинных ценителей пенной культуры</h3>

        <div class="equipment-wrapper">
          <div class="equipment-wrapper__controls">
            <div class="control-item">
              <div class="control-item__img control-item__img-anim">
                <picture>
                  <source
                    srcset="build/images/equipment-lid.webp"
                    type="image/webp"
                  />
                  <img
                    v-lazy="{
                      src: 'src/images/equipment-lid.png',
                      loading: '',
                      error: '',
                    }"
                    alt="Крышка"
                  />
                </picture>
              </div>

              <a
                v-on:click="equipmentChange($event, 1)"
                href="#modal-equipment"
                draggable="false"
                data-fancybox
                class="control-item__row-container"
              >
                <EquipmentArrow
                  titleDesktop="Крышка"
                  titleMobile="1"
                  class="control-item__row control-item__row-one"
                  v-bind:class="{
                    'control-item__row_active': equipmentCheck(1),
                  }"
                >
                  <div class="area-img area-img-1"></div>
                </EquipmentArrow>
              </a>
            </div>

            <div class="control-item">
              <div class="control-item__img control-item__img-anim">
                <picture>
                  <source
                    srcset="build/images/equipment-plank.webp"
                    type="image/webp"
                  />
                  <img
                    v-lazy="{
                      src: 'src/images/equipment-plank.png',
                      loading: '',
                      error: '',
                    }"
                    alt="Прижимная планка"
                  />
                </picture>
              </div>
              <a
                v-on:click="equipmentChange($event, 2)"
                href="#modal-equipment"
                draggable="false"
                data-fancybox
                class="control-item__row-container"
              >
                <EquipmentArrow
                  titleDesktop="Прижимная планка"
                  titleMobile="2"
                  class="control-item__row control-item__row-one"
                  v-bind:class="{
                    'control-item__row_active': equipmentCheck(2),
                  }"
                >
                  <div class="area-img area-img-2"></div>
                </EquipmentArrow>
              </a>
            </div>

            <div class="control-item">
              <div class="control-item__img control-item__img-anim">
                <picture>
                  <source
                    srcset="build/images/equipment-sieve-1.webp"
                    type="image/webp"
                  />
                  <img
                    v-lazy="{
                      src: 'src/images/equipment-sieve-1.png',
                      loading: '',
                      error: '',
                    }"
                    alt="Cито"
                  />
                </picture>
                <picture>
                  <source
                    srcset="build/images/equipment-sieve-2.webp"
                    type="image/webp"
                  />
                  <img
                    v-lazy="{
                      src: 'src/images/equipment-sieve-2.png',
                      loading: '',
                      error: '',
                    }"
                    alt="Сетка"
                  />
                </picture>
                <picture>
                  <source
                    srcset="build/images/equipment-sieve-3.webp"
                    type="image/webp"
                  />
                  <img
                    v-lazy="{
                      src: 'src/images/equipment-sieve-3.png',
                      loading: '',
                      error: '',
                    }"
                    alt="Cито"
                  />
                </picture>
              </div>

              <a
                v-on:click="equipmentChange($event, 3)"
                href="#modal-equipment"
                draggable="false"
                data-fancybox
                class="control-item__row-container"
              >
                <div
                  class="control-item__row"
                  v-bind:class="{
                    'control-item__row_active': equipmentCheck(3),
                  }"
                >
                  <div class="area-img area-img-3-1"></div>
                  <div class="area-img area-img-3-2"></div>
                  <div class="area-img area-img-3-3"></div>

                  <div class="control-item__arrow">
                    <div class="sup-arow sup-arow__top">
                      <svg
                        class="arrow"
                        xmlns="http://www.w3.org/2000/svg"
                        width="10"
                        height="16"
                        viewBox="0 0 10 16"
                        fill="none"
                      >
                        <path
                          d="M8.5 1.5L2 8L8.5 14.5"
                          stroke-width="2"
                          stroke-linecap="round"
                        />
                      </svg>

                      <div class="line-container">
                        <svg
                          class="line"
                          xmlns="http://www.w3.org/2000/svg"
                          width="332"
                          height="2"
                          viewBox="0 0 332 2"
                          fill="none"
                        >
                          <path
                            d="M0 1H332"
                            stroke-width="2"
                            stroke-dasharray="4 4"
                          />
                        </svg>
                      </div>
                    </div>

                    <div class="sup-arow sup-arow__center">
                      <svg
                        class="arrow"
                        xmlns="http://www.w3.org/2000/svg"
                        width="10"
                        height="16"
                        viewBox="0 0 10 16"
                        fill="none"
                      >
                        <path
                          d="M8.5 1.5L2 8L8.5 14.5"
                          stroke-width="2"
                          stroke-linecap="round"
                        />
                      </svg>

                      <div class="line-container">
                        <svg
                          class="line"
                          xmlns="http://www.w3.org/2000/svg"
                          width="332"
                          height="2"
                          viewBox="0 0 332 2"
                          fill="none"
                        >
                          <path
                            d="M0 1H332"
                            stroke-width="2"
                            stroke-dasharray="4 4"
                          />
                        </svg>
                      </div>

                      <svg
                        class="rhomb"
                        xmlns="http://www.w3.org/2000/svg"
                        width="13"
                        height="13"
                        viewBox="0 0 13 13"
                        fill="none"
                      >
                        <rect
                          y="6.01562"
                          width="8.5"
                          height="8.5"
                          transform="rotate(-45 0 6.01562)"
                        />
                      </svg>

                      <div class="line-container sup-arow__vertical">
                        <svg
                          class="line"
                          xmlns="http://www.w3.org/2000/svg"
                          width="332"
                          height="2"
                          viewBox="0 0 332 2"
                          fill="none"
                        >
                          <path
                            d="M0 1H332"
                            stroke-width="2"
                            stroke-dasharray="4 4"
                          />
                        </svg>
                      </div>
                    </div>

                    <div class="sup-arow sup-arow__bottom">
                      <svg
                        class="arrow"
                        xmlns="http://www.w3.org/2000/svg"
                        width="10"
                        height="16"
                        viewBox="0 0 10 16"
                        fill="none"
                      >
                        <path
                          d="M8.5 1.5L2 8L8.5 14.5"
                          stroke-width="2"
                          stroke-linecap="round"
                        />
                      </svg>

                      <div class="line-container">
                        <svg
                          class="line"
                          xmlns="http://www.w3.org/2000/svg"
                          width="332"
                          height="2"
                          viewBox="0 0 332 2"
                          fill="none"
                        >
                          <path
                            d="M0 1H332"
                            stroke-width="2"
                            stroke-dasharray="4 4"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>
                  <div class="control-item__name">
                    <h4 class="title-desktop">
                      Два фильтрующих сита <br />
                      и сетка
                    </h4>
                    <h4 class="title-mobile">3</h4>
                  </div>
                </div>
              </a>
            </div>

            <div class="control-item control-item-kettle">
              <div class="control-item__img">
                <picture>
                  <source
                    srcset="build/images/equipment-kettle.webp"
                    type="image/webp"
                  />
                  <img
                    v-lazy="{
                      src: 'src/images/equipment-kettle.png',
                      loading: '',
                      error: '',
                    }"
                    alt="Котёл"
                  />
                </picture>
              </div>

              <a
                v-on:click="equipmentChange($event, 4)"
                href="#modal-equipment"
                draggable="false"
                data-fancybox
                class="control-item__row-container control-item__row-container-4"
              >
                <EquipmentArrow
                  titleDesktop="Заторный бак"
                  titleMobile="4"
                  class="control-item__row control-item__row-one"
                  v-bind:class="{
                    'control-item__row_active': equipmentCheck(4),
                  }"
                >
                  <div class="area-img area-img-4"></div>
                </EquipmentArrow>
              </a>

              <a
                v-on:click="equipmentChange($event, 5)"
                href="#modal-equipment"
                draggable="false"
                data-fancybox
                class="control-item__row-container control-item__row-container-5"
              >
                <EquipmentArrow
                  titleDesktop="Сусловарочный котел"
                  titleMobile="5"
                  class="control-item__row control-item__row-one"
                  v-bind:class="{
                    'control-item__row_active': equipmentCheck(5),
                  }"
                >
                  <div class="area-img area-img-5"></div>
                </EquipmentArrow>
              </a>

              <a
                v-on:click="equipmentChange($event, 6)"
                href="#modal-equipment"
                draggable="false"
                data-fancybox
                class="control-item__row-container control-item__row-container-6"
              >
                <EquipmentArrow
                  titleDesktop="Кран для слива сусла"
                  titleMobile="6"
                  class="control-item__row control-item__row-one"
                  v-bind:class="{
                    'control-item__row_active': equipmentCheck(6),
                  }"
                >
                  <div class="area-img area-img-6"></div>
                </EquipmentArrow>
              </a>

              <a
                v-on:click="equipmentChange($event, 7)"
                href="#modal-equipment"
                draggable="false"
                data-fancybox
                class="control-item__row-container control-item__row-container-7"
              >
                <EquipmentArrow
                  titleDesktop="Блок управления"
                  titleMobile="7"
                  class="control-item__row control-item__row-one"
                  v-bind:class="{
                    'control-item__row_active': equipmentCheck(7),
                  }"
                >
                  <div class="area-img area-img-7"></div>
                </EquipmentArrow>
              </a>
            </div>
          </div>

          <div
            id="equipment-window"
            class="equipment-wrapper__content equipment-animation"
            v-bind:class="{ 'equipment-animation-hide': !equipmentShow }"
          >
            <div>
              <div class="equipment-wrapper__content-title">
                <h4>
                  {{ equipment.title }}
                </h4>
              </div>

              <div class="equipment-wrapper__content-decr">
                <p v-html="equipment.decr"></p>
              </div>

              <a
                draggable="false"
                href="#modal-equipment"
                data-fancybox
                class="button"
                >Характеристики</a
              >
            </div>
            <div class="equipment-wrapper__content-img">
              <picture>
                <source
                  :srcset="
                    'build/images/equipment-window-' + equipment.img + '.webp'
                  "
                  type="image/webp"
                />
                <img
                  :onload="onloadImg"
                  :src="'src/images/equipment-window-' + equipment.img + '.png'"
                  alt="Комплектация"
                />
              </picture>
            </div>
          </div>
        </div>

        <div class="equipment-footer">
          <div class="equipment-footer__item">
            <div class="equipment-footer__item-img">
              <picture>
                <source
                  srcset="build/images/equipment-ten.webp"
                  type="image/webp"
                />
                <img
                  v-lazy="{
                    src: 'src/images/equipment-ten.png',
                    loading: '',
                    error: '',
                  }"
                  alt="ТЭН"
                />
              </picture>
            </div>

            <div class="equipment-footer__item-text">
              <h4>ТЭН</h4>
              <p>
                Поддерживает «правильную» температуру на протяжении всего
                процесса варки. Имеет надёжную защиту от перегорания.
              </p>
              <p>
                <span> Характеристики: <br /></span>
                Мощность: <br />
                30 л —1, 5 кВт <br />
                50 л — 2,8 кВт <br />
                70 л — 3,2 кВт
              </p>
              <p>
                <span> Материал — AISI 304 </span>
              </p>
            </div>
          </div>

          <div class="equipment-footer__item">
            <div class="equipment-footer__item-img">
              <picture>
                <source
                  srcset="build/images/equipment-nasos.webp"
                  type="image/webp"
                />
                <img
                  v-lazy="{
                    src: 'src/images/equipment-nasos.png',
                    loading: '',
                    error: '',
                  }"
                  alt="Насос"
                />
              </picture>
            </div>

            <div class="equipment-footer__item-text">
              <h4>Насос</h4>
              <p>
                Обеспечивает суслу непрерывную циркуляцию, позволяет варить
                плотные и тягучие сорта пива без риска поломки.
              </p>
              <p>
                <span> Характеристики: <br /></span>
                Мощность — 9 Вт <br />
                Производительность — 0,65 м³/ч <br />
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div
      id="modal-equipment"
      style="display: none"
      v-bind:style="{ maxWidth: equipment.maxWidthModal + 'px' }"
    >
      <div v-bind:class="'modal-container ' + $store.state.webpSupport">
        <h3 class="modal-title">
          <span class="title-mobile">{{ equipment.key }}.</span>
          {{ equipment.title }}
        </h3>

        <div class="modal-mobile-img">
          <picture>
            <source
              :srcset="
                'build/images/equipment-window-' + equipment.img + '.webp'
              "
              type="image/webp"
            />
            <img
              :onload="onloadImg"
              :src="'src/images/equipment-window-' + equipment.img + '.png'"
              alt="Комплектация"
            />
          </picture>
        </div>

        <div class="modal-mobile-decr">
          <p v-html="equipment.decr"></p>
        </div>

        <div class="modal-desktop">
          <div
            v-for="(equipRow, indexRow) in equipment.modalItems"
            v-bind:key="indexRow"
            class="modal-equipment-row"
            v-bind:class="{ 'modal-equipment-row__title': indexRow == 0 }"
          >
            <div
              v-for="(equipCol, indexCol) in equipRow"
              v-bind:key="indexCol"
              class="modal-equipment-col"
              v-bind:class="{ 'modal-equipment-col__title': indexCol == 0 }"
            >
              <p v-html="equipCol"></p>
            </div>
          </div>
        </div>

        <div class="modal-mobile">
          <p class="modal-mobile-subtitle">Характеристика</p>
          <div
            v-for="(volume, index) in ['30 л', '50 л', '70 л']"
            v-bind:key="index"
            class="modal-equipment-row__mobile"
          >
            <p class="modal-equipment-col__mobile-title">{{ volume }}</p>
            <div
              v-for="(title, indexTitle) in equipment.modalMobileTitle"
              v-bind:key="indexTitle"
              class="modal-equipment-col__mobile"
            >
              <p v-html="title"></p>
              <p v-html="equipment.modalMobileItems[index][indexTitle]"></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import EquipmentArrow from "../helpers/EquipmentArrow.vue";

import store from "../store";

export default {
  data() {
    return {
      equipments: [
        {
          key: 1,
          title: "Крышка",
          decr: "Изолирует процесс пивоварения <br> от внешней среды.",
          img: "lid",

          modalItems: [
            ["Характеристика", "30 л", "50 л", "70 л"],
            ["Диаметр", "350 мм", "400 мм", "450 мм"],
            ["Материал", "AISI 304", "AISI 304", "AISI 304"],
          ],

          modalMobileTitle: ["Диаметр", "Материал"],
          modalMobileItems: [
            ["350 мм", "AISI 304"],
            ["450 мм", "AISI 304"],
            ["450 мм", "AISI 304"],
          ],

          maxWidthModal: 768,
        },

        {
          key: 2,
          title: "Прижимная планка",
          decr: "Обеспечивает надёжную <br> фиксацию бака.",
          img: "plank",

          modalItems: [
            ["Характеристика", "30 л", "50 л", "70 л"],
            ["Диаметр", "20 мм", "20 мм", "20 мм"],
            ["Материал", "AISI 304", "AISI 304", "AISI 304"],
          ],

          modalMobileTitle: ["Диаметр", "Материал"],
          modalMobileItems: [
            ["20 мм", "AISI 304"],
            ["20 мм", "AISI 304"],
            ["20 мм", "AISI 304"],
          ],

          maxWidthModal: 768,
        },

        {
          key: 3,
          title: "Два фильтрующих сита и сетка",
          decr: "2 сита и сетка необходимы для того, <br> чтобы качественно фильтровать солод.",
          img: "sieve",

          modalItems: [
            ["Характеристика", "30 л", "50 л", "70 л"],
            ["Диаметр", "228 мм", "290 мм", "330 мм"],
            [
              "Толщина материала",
              "Нижнее сито — 1 мм <br> Верхнее сито — 2 мм",
              "Нижнее сито — 1 мм <br> Верхнее сито — 2 мм",
              "Оба сита — 2 мм",
            ],
            ["Материал", "AISI 304", "AISI 304", "AISI 304"],
          ],

          modalMobileTitle: ["Диаметр", "Толщина материала", "Материал"],
          modalMobileItems: [
            [
              "228 мм",
              "Нижнее сито — 1 мм <br> Верхнее сито —&nbsp;2 мм",
              "AISI 304",
            ],
            [
              "290 мм",
              "Нижнее сито — 1 мм <br> Верхнее сито — 2&nbsp;мм",
              "AISI 304",
            ],
            ["290 мм", "Оба сита — 2 мм", "AISI 304"],
          ],

          maxWidthModal: 1230,
        },

        {
          key: 4,
          title: "Заторный бак",
          decr: "Необходим для затирания <br> солода.",
          img: "tanker",

          modalItems: [
            ["Характеристика", "30 л", "50 л", "70 л"],
            ["Высота", "275 мм", "355 мм", "380 мм"],
            ["Диаметр", "230 мм", "290 мм", "330 мм"],
            ["Материал", "AISI 304", "AISI 304", "AISI 304"],
          ],

          modalMobileTitle: ["Высота", "Диаметр", "Материал"],

          modalMobileItems: [
            ["275 мм", "230 мм", "AISI 304"],
            ["355 мм", "290 мм", "AISI 304"],
            ["380 мм", "330 мм", "AISI 304"],
          ],

          maxWidthModal: 768,
        },

        {
          key: 5,
          title: "Сусловарочный котел",
          decr: "Используется для кипячения <br> сусла вместе с хмелем.",
          img: "kettle",

          modalItems: [
            ["Характеристика", "30 л", "50 л", "70 л"],
            ["Высота", "350 мм", "400 мм", "450 мм"],
            ["Диаметр", "350 мм", "400 мм", "450 мм"],
            ["Материал", "AISI 304", "AISI 304", "AISI 304"],
            ["Высота ножек", "160 мм", "160 мм", "174 мм"],
          ],

          modalMobileTitle: ["Высота", "Диаметр", "Материал", "Высота ножек"],

          modalMobileItems: [
            ["350 мм", "350 мм", "AISI 304", "160 мм"],
            ["400 мм", "400 мм", "AISI 304", "160 мм"],
            ["450 мм", "450 мм", "AISI 304", "174 мм"],
          ],

          maxWidthModal: 768,
        },

        {
          key: 6,
          title: "Кран для слива сусла",
          decr: "Кран на ½ дюйма расположен у подножья бака. <br> Сусло быстро и точно сливается в ёмкость",
          img: "tap",

          modalItems: [
            ["Характеристика", "30 л", "50 л", "70 л"],
            ["Диаметр", "350 мм", "350 мм", "350 мм"],
            ["Материал", "AISI 304", "AISI 304", "AISI 304"],
          ],

          modalMobileTitle: ["Диаметр", "Материал"],
          modalMobileItems: [
            ["350 мм", "AISI 304"],
            ["350 мм", "AISI 304"],
            ["350 мм", "AISI 304"],
          ],

          maxWidthModal: 768,
        },

        {
          key: 7,
          title: "Блок управления",
          decr: "Необходим для контроля процесса <br> пивоварения.",
          img: "panel",

          modalItems: [
            ["Характеристика", "30 л", "50 л", "70 л"],
            [
              "Модификация",
              `
                <ul>
                    <li> С WiFi</li>
                    <li>Без WiFi</li>
                </ul>
              `,
              `
                <ul>
                    <li> С WiFi</li>
                    <li>Без WiFi</li>
                </ul>
              `,
              `
                <ul>
                    <li> С WiFi</li>
                    <li>Без WiFi</li>
                </ul>
               `,
            ],
            [
              "Режимы",
              `
                <ul>
                  <li>Ручной</li>
                  <li class="desktop">Автоматический</li>
                  <li class="mobile">Автомат</li>
                </ul>
              `,
              `
                <ul>
                    <li>Ручной</li>
                    <li class="desktop">Автоматический</li>
                    <li class="mobile">Автомат</li>
                </ul>
              `,
              `
                <ul>
                    <li>Ручной</li>
                    <li class="desktop">Автоматический</li>
                    <li class="mobile">Автомат</li>
                </ul>
              `,
            ],
          ],

          modalMobileTitle: ["Модификация", "Режимы"],
          modalMobileItems: [
            [
              `
                <ul>
                    <li> С WiFi</li>
                    <li>Без WiFi</li>
                </ul>
              `,
              `
                <ul>
                    <li>Ручной</li>
                    <li>Автомат</li>
                </ul>
              `,
            ],

            [
              `
                <ul>
                    <li> С WiFi</li>
                    <li>Без WiFi</li>
                </ul>
              `,
              `
                <ul>
                    <li>Ручной</li>
                    <li>Автомат</li>
                </ul>
              `,
            ],

            [
              `
                <ul>
                    <li> С WiFi</li>
                    <li>Без WiFi</li>
                </ul>
              `,
              `
                <ul>
                    <li>Ручной</li>
                    <li>Автомат</li>
                </ul>
              `,
            ],
          ],

          maxWidthModal: 1155,
        },
      ],
      //1 - Крышка
      //2 - Прижимная планка
      //3 - Два фильтрующих сита
      //4 - Заторный бак
      //5 - Сусловарочный котел
      //6 - Кран для слива сусла
      //7 - Блок управления

      equipmentActive: 1,
      equipmentShow: true,
      equipment: {},
    };
  },
  components: {
    EquipmentArrow,
  },
  methods: {
    onloadImg() {
      setTimeout(() => (this.equipmentShow = true), 600);
    },
    //приверка активного состояния equipment
    equipmentCheck(numb) {
      if (numb == this.equipmentActive) {
        if (document.documentElement.clientWidth > 768) {
          return true;
        } else {
          return false;
        }
      } else {
        return false;
      }
    },

    //замена изображения с fade-анимацией
    equipmentChange(e, numb) {
      //  без модального окна на устрйствах больше 768
      if (document.documentElement.clientWidth > 768) {
        e.preventDefault();

        if (this.equipmentActive != numb) {
          this.equipmentActive = numb;
          this.equipmentShow = false;
          document.querySelector(".equipment-wrapper__content-img").innerHTML =
            "";

          this.equipment = this.equipments.find((eq) => eq.key == numb);

          var img = new Image();
          document
            .querySelector(".equipment-wrapper__content-img")
            .appendChild(img);
          if (store.state.webpSupport) {
            img.src =
              "build/images/equipment-window-" + this.equipment.img + ".webp";
          } else {
            img.src =
              "build/images/equipment-window-" + this.equipment.img + ".png";
          }
        }

        // скролл к блоку на планшетах
        if (document.documentElement.clientWidth < 1281) {
          setTimeout(() => {
            this.scrollToSection("#equipment-window");

            document
              .querySelector(".equipment-wrapper__content .button")
              .classList.add("equipment-pulse");

            setTimeout(() => {
              document
                .querySelector(".equipment-wrapper__content .button")
                .classList.remove("equipment-pulse");
            }, 6000);
          }, 400);
        }
      } else {
        // модальное окно

        if (this.equipmentActive != numb) {
          this.equipmentActive = numb;
          this.equipment = this.equipments.find((eq) => eq.key == numb);
        }
      }
    },

    //скролл до блока с характеристиками на планшетах
    scrollToSection(selector) {
      gsap.to(window, {
        duration: 1.3,
        scrollTo:
          document.querySelector(selector).offsetTop -
          document.querySelector(selector).offsetHeight,
      });
    },
  },
  created() {
    this.equipment = this.equipments.find((e) => e.key == 1);
  },
  mounted() {
    if (window.innerWidth >= 993) {
      ScrollTrigger.create({
        trigger: "#equipment",
        once: true,
        onEnter: () => {
          gsap.from([".control-item__img-anim img"], {
            delay: 0.3,
            duration: 1.3,
            y: 50,
            stagger: 0.1,
          });
        },
      });
    }
  },
};
</script>
