<template>
  <button
    aria-label="Наверх"
    ref="up"
    type="button"
    class="button-up hide"
    v-on:click="srollToTop"
  ></button>
</template>

<script>
export default {
  methods: {
    srollToTop() {
      gsap.to(window, {
        duration: 2,
        scrollTo: 0,
      });
    },
  },
  mounted() {
    window.addEventListener("scroll", () => {
      if (window.pageYOffset > 1000) {
        this.$refs.up.classList.replace("hide", "show");
      } else {
        this.$refs.up.classList.replace("show", "hide");
      }
    });
  },
};
</script>