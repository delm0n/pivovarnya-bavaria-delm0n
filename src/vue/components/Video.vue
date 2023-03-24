<template>
  <section id="video">
    <div v-bind:class="'video-bg ' + $store.state.webpSupport">
      <div class="container">
        <h2 class="title">Мойте легко и быстро</h2>
        <h3 class="subtitle">
          Вы не потратите больше 30 минут на уход за пивоварней
        </h3>

        <a
          href="https://youtu.be/i0182AWPfgI"
          data-fancybox="video"
          class="video-item"
        >
          <div class="video-item__img">
            <picture>
              <source srcset="build/images/video-preview.webp" />
              <img
                v-lazy="{
                  src: 'src/images/video-preview.png',
                  loading: '',
                  error: '',
                }"
                class="preview"
                alt="Видео пивоварня Bavaria"
              />
            </picture>

            <div class="yt-btn">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                width="110"
                height="110"
                viewBox="0 0 110 110"
                fill="none"
              >
                <path
                  d="M103.308 29.4247C102.764 27.2495 101.655 25.2565 100.094 23.647C98.5325 22.0374 96.5741 20.8684 94.4165 20.258C86.5332 18.333 54.9999 18.333 54.9999 18.333C54.9999 18.333 23.4665 18.333 15.5832 20.4413C13.4256 21.0518 11.4672 22.2208 9.90603 23.8303C8.3448 25.4398 7.23597 27.4328 6.69152 29.608C5.24875 37.6085 4.54302 45.7244 4.58319 53.8538C4.53176 62.0445 5.23754 70.2223 6.69152 78.283C7.29175 80.3906 8.42543 82.3078 9.98301 83.8494C11.5406 85.3909 13.4694 86.5047 15.5832 87.083C23.4665 89.1913 54.9999 89.1913 54.9999 89.1913C54.9999 89.1913 86.5332 89.1913 94.4165 87.083C96.5741 86.4726 98.5325 85.3036 100.094 83.6941C101.655 82.0846 102.764 80.0915 103.308 77.9163C104.74 69.9761 105.446 61.922 105.417 53.8538C105.468 45.6632 104.762 37.4854 103.308 29.4247V29.4247Z"
                  fill="white"
                />
                <path
                  d="M44.6875 68.8412L71.0417 53.8537L44.6875 38.8662V68.8412Z"
                  fill="#000"
                />
              </svg>
            </div>

            <div class="video-item__decr">
              <div>
                <picture>
                  <source
                    srcset="build/images/video-moisture.webp"
                    media="(min-width: 861px)"
                  />
                  <source
                    srcset="src/images/video-moisture.png"
                    media="(min-width: 861px)"
                  />
                  <source srcset="build/images/video-moisture-mobile.webp" />
                  <img
                    src="src/images/video-moisture-mobile.png"
                    alt="пивоварня Bavaria влагозащита"
                  />
                </picture>
              </div>
              <p>
                С влагозащитой <br />
                IP54
              </p>
            </div>
          </div>
        </a>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  mounted() {
    // if (window.innerWidth >= 993) {
    //   ScrollTrigger.create({
    //     trigger: "#video",
    //     once: true,
    //     onEnter: () => {
    //       // var videotl = gsap.timeline();
    //       gsap.from("#video .video-item", {
    //         delay: 0.7,
    //         duration: 1,
    //         opacity: 0,
    //         x: 70,
    //       });
    //       // gsap.from(["#video .title", "#video .subtitle"], {
    //       //   opacity: 0,
    //       //   duration: 0.7,
    //       //   stagger: 0.3,
    //       //   delay: 0.6,
    //       // });
    //     },
    //   });
    // }
  },
};
</script>