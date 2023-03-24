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

import Header from "./Header.vue";
import Features from "./Features.vue";

import ModalCall from "./ModalCall.vue";
import ModalOrder from "./ModalOrder.vue";
import Delivery from "./Delivery.vue";
import Order from "./Order.vue";

export default {
  components: {
    Header,
    Features,
    ModalCall,
    ModalOrder,
    Delivery,
    Order,

    Destiny: defineAsyncComponent(() => import("./Destiny.vue")),
    Result: defineAsyncComponent(() => import("./Result.vue")),
    Production: defineAsyncComponent(() => import("./Production.vue")),
    Equipment: defineAsyncComponent(() => import("./Equipment.vue")),
    Control: defineAsyncComponent(() => import("./Control.vue")),
    Wifi: defineAsyncComponent(() => import("./Wifi.vue")),
    Stages: defineAsyncComponent(() => import("./Stages.vue")),
    Video: defineAsyncComponent(() => import("./Video.vue")),
    Patent: defineAsyncComponent(() => import("./Patent.vue")),
    Tradition: defineAsyncComponent(() => import("./Tradition.vue")),
    Everything: defineAsyncComponent(() => import("./Everything.vue")),
    Quality: defineAsyncComponent(() => import("./Quality.vue")),
    Feedback: defineAsyncComponent(() => import("./Feedback.vue")),
    Credit: defineAsyncComponent(() => import("./Credit.vue")),
    Made: defineAsyncComponent(() => import("./Made.vue")),
    Photo: defineAsyncComponent(() => import("./Photo.vue")),
    Consultation: defineAsyncComponent(() => import("./Consultation.vue")),
    Shops: defineAsyncComponent(() => import("./Shops.vue")),
  },
};
</script>
