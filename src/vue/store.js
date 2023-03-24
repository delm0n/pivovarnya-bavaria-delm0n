import { createStore } from "vuex";
export default createStore({
  state() {
    return {
      models: {
        [goods.l30]: {
          id: goods.l30,
          price: goodsJson[goods.l30].price,
          oldPrice: goodsJson[goods.l30].oldPrice,
          value: "BAVARIA 30 л",
          valueDecription: "",
          wifi: false,
          relations: goods.l30_w,
        },

        [goods.l50]: {
          id: goods.l50,
          price: goodsJson[goods.l50].price,
          oldPrice: goodsJson[goods.l50].oldPrice,
          value: "BAVARIA 50 л",
          valueDecription: "",
          wifi: false,
          relations: goods.l50_w,
        },

        [goods.l70]: {
          id: goods.l70,
          price: goodsJson[goods.l70].price,
          oldPrice: goodsJson[goods.l70].oldPrice,
          value: "BAVARIA 70 л",
          valueDecription: "",
          wifi: false,
          relations: goods.l70_w,
        },

        [goods.l30_w]: {
          id: goods.l30_w,
          price: goodsJson[goods.l30_w].price,
          oldPrice: goodsJson[goods.l30_w].oldPrice,
          value: "BAVARIA 30 л",
          valueDecription: "+ WIFI",
          wifi: true,
          relations: goods.l30,
        },

        [goods.l50_w]: {
          id: goods.l50_w,
          price: goodsJson[goods.l50_w].price,
          oldPrice: goodsJson[goods.l50_w].oldPrice,
          value: "BAVARIA 50 л",
          valueDecription: "+ WIFI",
          wifi: true,
          relations: goods.l50,
        },

        [goods.l70_w]: {
          id: goods.l70_w,
          price: goodsJson[goods.l70_w].price,
          oldPrice: goodsJson[goods.l70_w].oldPrice,
          value: "BAVARIA 70 л",
          valueDecription: "+ WIFI",
          wifi: true,
          relations: goods.l70,
        },
      },

      webpSupport: webpSup,
      test: testVersion,

      user: {
        name: "",
        phone: "",
        credit: false,
        wifi: false,
      },

      model: {
        id: goods.l30,
        price: goodsJson[goods.l30].price,
        oldPrice: goodsJson[goods.l30].oldPrice,
        value: "BAVARIA 30 л",
        valueDecription: "",
        wifi: false,
        relations: goods.l30_w,
      },

      csrf: csrf,
      tomorrow: tomorrow,

      // true может быть только у одного!!!
      presents: {
        default: {
          active: false,
          img: "order-bar--default",
          id: 0,
          orderItem: {},
        },

        droji: {
          active: true,
          img: "order-bar--droji",
          ids: [2483],
          orderItem: {
            title: "Дрожжи М10 (х3)",
            price: "<span>1050 руб.</span>0 руб.",
          },
        },
      },
    };
  },

  getters: {
    isTomorrow(state) {
      return state.tomorrow;
    },

    modelsWifi(state) {
      return Object.values(state.models).filter(
        (model) => model.wifi == true && model.id != state.model.id
      );
    },

    modelsNoWifi(state) {
      return Object.values(state.models).filter(
        (model) => model.wifi == false && model.id != state.model.id
      );
    },

    modelsNoWifi__OrderModal(state) {
      return Object.values(state.models).filter(
        (model) => model.wifi == false && model.value != state.model.value
      );
    },

    findPresent(state) {
      return Object.values(state.presents).find(
        (present) => present.active == true
      );
    },
  },

  mutations: {
    updateUserPhone(state, phone) {
      state.user.phone = phone;
    },

    updateUserName(state, name) {
      state.user.name = name;
    },

    updateUserCredit(state, credit) {
      state.user.credit = credit;
    },

    chooseModel(state, id) {
      state.model = state.user.wifi
        ? Object.values(state.models).find(
            (model) => model.id == state.models[id].relations
          )
        : Object.values(state.models).find((model) => model.id == id);
    },

    updateUserWifi(state, wifi) {
      state.user.wifi = wifi;
    },
  },
});
