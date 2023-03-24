<template>
  <div>
    <div class="standart-input">
      <!-- <label for="modal" class="placeholder"> Объём </label> -->
      <div class="custom-select">
        <div
          class="selectBox"
          ref="collapseToggle"
          v-on:click="collapse = !collapse"
        >
          <div>
            {{ $store.state.model.value }} <slot name="wifiModelValue"></slot>
          </div>
          <div class="arrow" v-bind:class="{ 'arrow-rotate': collapse }">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="23"
              height="13"
              viewBox="0 0 23 13"
              fill="none"
            >
              <path
                d="M10.3432 11.7708C10.9087 12.3364 11.8257 12.3364 12.3912 11.7708L21.6075 2.55452C22.1731 1.98896 22.1731 1.07201 21.6075 0.506448C21.042 -0.0591116 20.125 -0.0591116 19.5595 0.506448L11.3672 8.69873L3.1749 0.506448C2.60934 -0.0591116 1.69239 -0.0591116 1.12683 0.506448C0.561272 1.07201 0.561272 1.98896 1.12683 2.55452L10.3432 11.7708ZM9.91898 10.0195V10.7468H12.8154V10.0195H9.91898Z"
                fill="black"
              />
            </svg>
          </div>
        </div>

        <transition
          name="accordion"
          v-on:before-enter="beforeEnter"
          v-on:enter="enter"
          v-on:before-leave="beforeLeave"
          v-on:leave="leave"
          style="transition: height 0.6s"
        >
          <ul
            v-show="collapse"
            class="dropDown"
            v-on:click="this.collapse = !this.collapse"
          >
            <li
              v-for="(item, index) in list"
              v-bind:key="index"
              v-on:click="setModel(item.id)"
            >
              {{ item.value }}
            </li>

            <slot name="wifiListSlot"></slot>
          </ul>
        </transition>
      </div>
    </div>
  </div>
</template>

<script>
import store from "../store";

export default {
  store,
  props: {
    list: Array,
    wifi: Boolean,
  },

  data() {
    return {
      collapse: false,
    };
  },

  methods: {
    beforeEnter: function (el) {
      el.style.height = "0";
    },
    enter: function (el) {
      el.style.height = el.scrollHeight + "px";
    },
    beforeLeave: function (el) {
      el.style.height = el.scrollHeight + "px";
    },
    leave: function (el) {
      el.style.height = "0";
    },

    // выбор модели из выпадающего списка в модальном окне
    setModel(id) {
      if (this.wifi) {
        this.setModelNoWifi();
      }
      store.commit("chooseModel", id);
    },

    setModelNoWifi() {
      store.commit("updateUserWifi", false);
    },
  },
};
</script>