<template>
  <section id="stages">
    <div v-bind:class="'stages-bg ' + $store.state.webpSupport">
      <div class="container">
        <h2 class="title">
          Все этапы приготовления пива <br />
          в одном аппарате!
        </h2>
        <h3 class="subtitle">Минимум лишних действий в процессе варки</h3>

        <div class="stages-container">
          <div class="stages-block">
            <div class="stages-block__video">
              <video
                preload="none"
                loop
                poster="build/images/stages-item1.png"
                muted
              >
                <source
                  src="static/video/stages-item1.mp4"
                  type='video/mp4; codecs="avc1.42E01E, mp4a.40.2"'
                />
              </video>
            </div>

            <div
              v-for="(stage, index) in stages"
              v-bind:key="index"
              class="stages-item"
            >
              <p class="stages-item__title">
                <span v-html="stage.count"></span>. {{ stage.title }}
              </p>

              <p
                v-for="(li, mark) in stage.list"
                v-bind:key="mark"
                class="stages-item__li"
              >
                {{ mark + 1 }}. <span v-html="li"></span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      stages: [
        {
          count: "&#8544;",
          title: "Затирание",
          video: "item1",
          poster: "item1",
          list: [
            "Запрограммируйте пивоварню на конкретный рецепт или выберете ручной режим.",
            "Засыпьте дроблёный солод.",
            "Запустите процесс.",
          ],
        },

        {
          count: "&#8545;",
          title: "Фильтрация",
          video: "item1",
          poster: "item2",
          list: [
            "Извлеките заторный бак и поставьте устройство на подставку.",
            "Промойте дробину водой, <br> заранее нагретой до 80–90°.",
          ],
        },

        {
          count: "&#8546;",
          title: "Варка",
          video: "item1",
          poster: "item3",
          list: [
            "Добавьте хмель для горечи <br> в самом начале варки. ",
            "Добавьте хмель для вкуса, <br> когда прошло ¾ всего процесса.",
            "Добавьте хмель для аромата <br> за 5–7 минут до конца варки.",
          ],
        },

        {
          count: "&#8547;",
          title: "Охлаждение",
          video: "item1",
          poster: "item4",
          list: [
            "Подключите чиллер <br> к водопроводу при помощи шланга.",
            "Поместите чиллер в сусло и остудите смесь до нужной для варки дрожжей температуры.",
          ],
        },
      ],
    };
  },
  mounted() {
    ScrollTrigger.create({
      trigger: "#stages",
      once: true,
      onEnter: () => {
        document.querySelector(".stages-block__video video").play();
        gsap.from(".stages-block__video video", {
          duration: 1.4,
          delay: 0.6,
          opacity: 0,
        });
      },
    });
  },
};
</script>