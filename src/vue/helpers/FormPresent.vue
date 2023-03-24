<template>
  <div>
    <input type="hidden" class="url" name="url" />
    <input type="hidden" class="gmt" name="gmt" />

    <!-- csrf -->
    <input type="hidden" name="csrf" :value="$store.state.csrf" />
    <input
      type="text"
      name="tel"
      style="
        height: 0px !important;
        width: 0px !important;
        margin: 0px !important;
        padding: 0px !important;
        line-height: 0 !important;
        position: absolute;
        left: -10000px;
      "
      tabindex="0"
    />
    <!-- csrf -->

    <!-- кредит -->
    <input
      v-if="$store.state.user.credit"
      type="hidden"
      class="comment"
      name="comment"
      value="Покупка в рассрочку. "
    />
    <input v-else type="hidden" class="comment" name="comment" value="" />
    <!-- кредит -->

    <!-- в подарок -->
    <template v-if="ids != 0">
      <div v-for="(id, index) in ids" v-bind:key="index">
        <input type="hidden" :name="'quantity[' + id + ']'" value="3" />
        <input
          type="hidden"
          class="costs"
          :name="'cost[' + id + ']'"
          value="0"
        />
        <input type="hidden" name="id[]" :value="id" />
      </div>
    </template>
    <!-- в подарок -->

    <!-- модель -->
    <input type="hidden" name="id[]" :value="$store.state.model.id" />
    <input
      type="hidden"
      :name="'quantity[' + $store.state.model.id + ']'"
      value="1"
    />
    <!-- модель -->
  </div>
</template>

<script>
export default {
  props: {
    ids: {
      type: [Array, Number],
      default: 0,
    },
  },
};
</script>