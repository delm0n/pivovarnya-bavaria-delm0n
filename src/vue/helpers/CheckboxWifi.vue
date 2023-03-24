<template>
  <div :class="inputType + '-input'">
    <div :class="inputType">
      <input
        aria-label="Покупка пивоварни c Wifi"
        v-bind:class="[
          { 'checkbox__input-check': $store.state.user.wifi },
          inputType + '__input',
        ]"
        v-model="$store.state.user.wifi"
        :type="inputType"
      />
      <label v-on:click="setWifi()" :class="inputType + '__label'">
        Блок управления c Wifi <br />
        <span> +&nbsp; 10 000 &nbsp;руб.</span>
      </label>
    </div>
  </div>
</template>

<script>
import store from "../store";

export default {
  store,
  props: {
    inputType: String,
  },

  methods: {
    setWifi() {
      store.commit("updateUserWifi", !store.state.user.wifi);
      if (store.state.model.wifi) {
        store.commit("chooseModel", store.state.model.relations);
      } else {
        store.commit("chooseModel", store.state.model.id);
      }
    },
  },
};
</script>