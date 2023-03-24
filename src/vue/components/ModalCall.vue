<template>
  <div id="modal-call">
    <div v-bind:class="'modal-container ' + $store.state.webpSupport">
      <h3 class="modal-title">Заказать обратный звонок</h3>
      <p class="modal-decr">
        Оставьте контактную информацию, <br />
        чтобы наш менеджер мог с вами связаться
      </p>
      <form
        id="call-modal"
        method="post"
        class="spnForm form-modal"
        action="sendCall.php"
      >
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

        <div class="user-info">
          
          <input
            aria-label="Ваше имя"
            type="text"
            
            name="name"
            placeholder="Ваше имя"
            required
          />
         
          <input
            aria-label="Ваш телефон"
            type="tel"
            name="phone"
            placeholder="Ваш телефон"
           
            required
          />
         
        </div>

        <button type="submit" class="button">Отправить</button>

        <p class="modal-disclaimer">
          Нажимая кнопку «Отправить», вы соглашаетесь на обработку персональных
          данных, а также с
          <a href="uploadupdate/confidentiality.pdf" target="_blank">
            политикой конфиденциальности
          </a>
        </p>
      </form>
    </div>
  </div>
</template>

