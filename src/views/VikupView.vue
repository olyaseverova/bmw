<template>
  <div class="basis-div">
    <header>
      <div class="header-inside">
        <h1 class="headline">Müller BMW Autoschrott</h1>
        <h2 class="under-headline">ЗАПЧАСТИ НОВЫЕ И Б/У С НЕМЕЦКИХ РАЗБОРОК</h2>

        <div class="contacts">
          <a class="number" href="tel:+79772805434">8 (977) 280-54-34</a>
          <ul class="contacts-list list">
            <li class="contacts-list__item" v-for="contact in contacts" :key="contact.id">
              <a class="contact-link" :href="contact.href" target="_blank" :class="contact.name">
                <span>
                  {{ contact.name }}
                </span>
              </a>
            </li>
          </ul>
        </div>

      </div>
      <ul class="pages-list list">
        <li class="pages-list__item" v-for="page in pages" :key="page.id">
          <router-link class="router" :to="page.to">{{ page.name }}</router-link>
        </li>
      </ul>
    </header>

    <main>
      <p class="description desc-big center">
        Наше реставрационное ателье специализируется на восстановлении старых автомобилей BMW и продаже запчастей к ним.
      </p>
      <p class="description justify">
        Выкупим <b>BMW
          <button type="button" class="e-button" v-on:touchstart="onTapItem" v-on:touchend="offTapItem">e28</button>
          <img class="e28-img none" src="@/img/бум1ж.png" width="300" height="86" alt="Бумер 1" />
          <!-- <a class="e-link">e28</a> <a class="e-link">e30</a> <a class="e-link">e32</a> <a class="e-link">e34</a> <a
            class="e-link">e36</a> <a class="e-link">e38</a> <a class="e-link">e39</a> <a class="e-link">e60</a> -->
        </b> в любом состоянии, в том числе целые, исправные, на ходу, а также битые,
        разукомплектованные, разобранные, нерастаможенные, с запретом регистрации, арестованные, армянские, грузинские,
        белорусские, литовские, украинские, любые другие иностранные, без документов. Кроме криминала. Заберем своим
        эвакуатором максимально быстро, по возможности в день обращения. Заплатим по рыночной стоимости. Возьмем на себя
        хлопоты с оформлением. Мы выезжаем по всей Москве и Московской области, а также в прилегающих областях в радиусе
        500км от Москвы. В отдельных случаях выезжаем по всей России.</p>

      <!-- <h1 class="big">8 (925) 289-03-28</h1> -->

      <div class="bumer">
        <img class="bumerclose" src="@/img/бум1ж.png" width="300" height="86" alt="Бумер 1" />
      </div>

      <p class="description justify">Допустим, у вас есть старая пятерка BMW e34 или семерка е32 и вы решили её продать.
        Можно,
        конечно, подать объявление в Авито или куда-нибудь ещё и ждать, пока кто-то откликнется. Ждать, однако, можно
        долго, ведь машина очень старая и покупатель на неё весьма специфичен.</p>

      <div class="bumer bum-2">
        <img class="bumerclose" src="@/img/бум2г.png" width="300" height="121" alt="Бумер 2" />
      </div>

      <p class="description justify">
        А можно не терять время и деньги, позвонить или написать нам на WhatsApp или Telegram по телефону 8 (925)
        289-03-28, отправить фото или видео вашего авто и получить от нас предварительную оценку вашего автомобиля. Если
        стоимость вас устраивает, то мы отправляем к вам нашего представителя с эвакуатором и деньгами. Он на месте
        оформит договор купли-продажи, передаст вам деньги и заберет ваш старый BMW e34 или e32.</p>
    </main>

    <footer>
      <div class="footer-inside">
        <ul class="contacts-list list">
          <li class="contacts-list__item" v-for="contact in contacts" :key="contact.id">
            <a class="contact-link" :href="contact.href" :class="contact.name">
              <span>
                {{ contact.name }}
              </span>
            </a>
          </li>
        </ul>
        <p class="time">Пишите круглосуточно, звоните с 11 до 24 ч</p>
      </div>
    </footer>

  </div>
</template>


<script>

export default {
  name: 'HomeView',

  data() {
    return {
      contacts: [
        {
          name: "Telegram",
          href: "https://t.me/mullerbmw"
        },
        {
          name: "WhatsApp",
          href: "https://wa.me/79772805434"
        },
      ],

      pages: [
        {
          name: "В ПРОДАЖЕ",
          to: "/"
        },
        {
          name: "ВЫКУП",
          to: "/vikup"
        },
        {
          name: "БАЗА ЗНАНИЙ",
          to: "/base"
        },
        {
          name: "КОНТАКТЫ",
          to: "/contacts"
        },
      ],
    }
  },

  methods: {
    onTapItem() { // you can remove the `mouseEvent` argument
      console.log("Tapped!");
      let eimgs = document.querySelectorAll(".e28-img");
      // eimg.classList.toggle("none")

      eimgs.forEach(function (eimg) {
        eimg.classList.remove("none")
      });
    },
    offTapItem() { // you can remove the `mouseEvent` argument
      console.log("offf!");

      let eimgs = document.querySelectorAll(".e28-img");
      // eimg.classList.toggle("none")

      eimgs.forEach(function (eimg) {
        eimg.classList.add("none")
      });
    },
  }
}
</script>
