export default {
  methods: {
    btnAnim(parent, button) {
      ScrollTrigger.create({
        trigger: parent,
        onEnter: () =>
          document
            .querySelector(parent + " " + button)
            .classList.add("button-animation"),
        onLeave: () =>
          document
            .querySelector(parent + " " + button)
            .classList.remove("button-animation"),
        onEnterBack: () =>
          document
            .querySelector(parent + " " + button)
            .classList.add("button-animation"),
        onLeaveBack: () =>
          document
            .querySelector(parent + " " + button)
            .classList.remove("button-animation"),
      });
    },
  },
};
