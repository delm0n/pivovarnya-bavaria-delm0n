<template>
  <div>
    <div :class="inputType + '-input'">
      <div :class="inputType">
        <input
          aria-label="Покупка в рассрочку"
          v-bind:class="[
            { 'checkbox__input-check': $store.state.user.credit },
            inputType + '__input',
          ]"
          v-model="$store.state.user.credit"
          :type="inputType"
        />
        <label
          v-on:click="setCredit(!$store.state.user.credit)"
          :class="inputType + '__label'"
          >Покупка в рассрочку</label
        >
      </div>
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
    setCredit(val) {
      store.commit("updateUserCredit", val);
    },
  },
};
</script>