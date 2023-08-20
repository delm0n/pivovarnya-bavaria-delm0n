<template>
  <div id="modal-order">
    <div v-bind:class="'modal-container ' + $store.state.webpSupport">
      <div class="modal-order__wrapper">
        <div class="modal-order__wrapper-img">
          <picture>
            <source srcset="build/images/modal-bg.webp" type="image/webp" />
            <img
              v-lazy="{
                src: 'src/images/modal-bg.png',
                loading: '',
                error: '',
              }"
              alt="пивоварня Bavaria"
            />
          </picture>
        </div>
        <div class="modal-order__wrapper-content">
          <h3 class="modal-title">Пивоварня Bavaria</h3>

          <form
            class="spnForm form-modal"
            method="post"
            action=""
            v-on:submit.prevent
          >
            <FormPresent :ids="this.findPresent.ids" />

            <div class="input-container">
              <p class="modal-decr">Оформление заказа</p>
              <div class="standart-input">
                <input
                  aria-label="Ваше имя"
                  type="text"
                  name="name"
                  placeholder="Ваше имя"
                  required
                />
              </div>

              <div class="standart-input stint">
                <input
                  aria-label="Ваш телефон"
                  type="tel"
                  name="phone"
                  placeholder="Ваш телефон"
                  required
                />
              </div>

              <p class="modal-decr last-modal-decr">
                Выберите объём пивоварни и дополнительные опции
              </p>

              <CollapseList :list="modelsNoWifi__OrderModal" :wifi="false" />

              <CheckboxWifi inputType="checkbox" />
            </div>

            <div class="offer-container">
              <div class="submit-input__price">
                итого:
                <span>{{ $store.state.model.price }}</span>
                ₽
              </div>

              <div class="submit-input__button">
                <button type="submit" disabled class="button">Заказать</button>
              </div>

              <CheckboxCredit inputType="radio" />

              <div class="modal-disclaimer">
                <p>
                  Нажимая кнопку «Заказать», вы соглашаетесь на обработку
                  персональных данных, а также с
                  <a href="uploadupdate/confidentiality.pdf" target="_blank">
                    политикой конфиденциальности
                  </a>
                </p>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CheckboxCredit from "../helpers/CheckboxCredit.vue";
import CollapseList from "../helpers/CollapseList.vue";
import CheckboxWifi from "../helpers/CheckboxWifi.vue";
import FormPresent from "../helpers/FormPresent.vue";

import { mapGetters } from "vuex";

export default {
  data() {
    return {};
  },

  computed: {
    ...mapGetters(["modelsNoWifi__OrderModal", "findPresent"]),
  },

  components: {
    CheckboxCredit,
    CheckboxWifi,
    CollapseList,
    FormPresent,
  },
};
</script>
