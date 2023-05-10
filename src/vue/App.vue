<template>
  <div>
    <!-- header-style.sccs -->
    <Header />
    <Features />
    <!-- header-style.sccs -->

    <!-- main-style.sccs -->
    <Destiny />
    <Result />
    <Production />
    <Equipment />
    <Control />
    <Wifi />
    <Stages />
    <Video />
    <Patent />
    <Tradition />
    <Everything />
    <Quality />
    <Order />
    <Delivery />
    <Feedback />
    <Credit />
    <Made />
    <Photo />
    <Consultation />
    <Shops />
    <!-- main-style.sccs -->

    <!-- modals  -->
    <ModalOrder />
    <ModalCall />
    <!-- modals -->
  </div>
</template>

<script>
import { defineAsyncComponent } from "vue"; //НЕ ПОДГРУЖАТЬ БЛОКИ С ФОРМАМИ АСИНХРОННО!!!!!

import Header from "./components/Header.vue";
import Features from "./components/Features.vue";

import ModalCall from "./components/ModalCall.vue";
import ModalOrder from "./components/ModalOrder.vue";
import Delivery from "./components/Delivery.vue";
import Order from "./components/Order.vue";

export default {
  components: {
    Header,
    Features,
    ModalCall,
    ModalOrder,
    Delivery,
    Order,

    Destiny: defineAsyncComponent(() => import("./components/Destiny.vue")),
    Result: defineAsyncComponent(() => import("./components/Result.vue")),
    Production: defineAsyncComponent(() =>
      import("./components/Production.vue")
    ),
    Equipment: defineAsyncComponent(() => import("./components/Equipment.vue")),
    Control: defineAsyncComponent(() => import("./components/Control.vue")),
    Wifi: defineAsyncComponent(() => import("./components/Wifi.vue")),
    Stages: defineAsyncComponent(() => import("./components/Stages.vue")),
    Video: defineAsyncComponent(() => import("./components/Video.vue")),
    Patent: defineAsyncComponent(() => import("./components/Patent.vue")),
    Tradition: defineAsyncComponent(() => import("./components/Tradition.vue")),
    Everything: defineAsyncComponent(() =>
      import("./components/Everything.vue")
    ),
    Quality: defineAsyncComponent(() => import("./components/Quality.vue")),
    Feedback: defineAsyncComponent(() => import("./components/Feedback.vue")),
    Credit: defineAsyncComponent(() => import("./components/Credit.vue")),
    Made: defineAsyncComponent(() => import("./components/Made.vue")),
    Photo: defineAsyncComponent(() => import("./components/Photo.vue")),
    Consultation: defineAsyncComponent(() =>
      import("./components/Consultation.vue")
    ),
    Shops: defineAsyncComponent(() => import("./components/Shops.vue")),
  },
};
</script>
