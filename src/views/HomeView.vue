<template>
  <div class="basis-div">
    <header>
      <div class="header-inside">
        <h1 class="headline">Müller BMW Autoschrott</h1>
        <h2 class="under-headline">ЗАПЧАСТИ НОВЫЕ И Б/У С НЕМЕЦКИХ РАЗБОРОК</h2>

        <div class="contacts">
          <a class="number" href="tel:+79252890328">8 (925) 289-03-28</a>
          <ul class="contacts-list list">
            <li class="contacts-list__item" v-for="contact in contacts" :key="contact.id">
              <a class="contact-link" :href="contact.href" target="_blank" :class="contact.name"></a>
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
      <iframe class="iframe"
        src="https://docs.google.com/spreadsheets/d/e/2PACX-1vRBslRgBP61tmEvA1femOE5pdgCsaHEzUgr5v7aLlBiYycLrcTnPtxmCIiafn2WIA/pubhtml?gid=2086774227&amp;single=true&amp;widget=true&amp;headers=false"></iframe>
    </main>

    <footer>
      <div class="footer-inside">
        <ul class="contacts-list list">
          <li class="contacts-list__item" v-for="contact in contacts" :key="contact.id">
            <a class="contact-link" :href="contact.href" :class="contact.name" target="_blank"></a>
          </li>
        </ul>
        <p class="time">Пишите круглосуточно, звоните с 11 до 24 ч</p>
      </div>
    </footer>

  </div>
</template>

<script>
import store from "@/store/index.js";

export default {
  name: 'HomeView',

  computed: {
    characters() {
      return store.state.characters;
    },
  },
  async mounted() {
    store.dispatch("fetchCharacters");
  },

  data() {
    return {
      es: ["e28", "e30", "е32", "е34", "е36", "e38", "e39", "e60"],

      contacts: [
        {
          name: "Telegram",
          href: "https://t.me/Egorov_Peter"
        },
        {
          name: "WhatsApp",
          href: "https://wa.me/79252890328"
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
}

</script>
