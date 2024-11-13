<template>
  <div class="home">
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
      <iframe class="iframe"
        src="https://docs.google.com/spreadsheets/d/e/2PACX-1vSFtQ6Ytc3gbChR6Mf_UXYeCPdZKlc3vtN5Lse6UV3d43h9Jd9LnG89AP96lUqSxA/pubhtml?gid=1682800448&amp;single=true&amp;widget=true&amp;headers=false"></iframe>
    </main>

    <footer>
      <div class="footer-inside">
        <ul class="contacts-list list">
          <li class="contacts-list__item" v-for="contact in contacts" :key="contact.id">
            <a class="contact-link" :href="contact.href"  :class="contact.name">
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
  }
}
</script>
