<template>
    <div class="vikup">
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

        <main class="contacts-main">
            <iframe class="contacts-iframe"
                src="https://yandex.ru/map-widget/v1/?um=constructor%3A7ad8cba2e0c6946b9530df0a255309d86528a9330d144bd3d93c807e5f82e727&amp;source=constructor"
                width="500" height="400" frameborder="0"></iframe>

            <div class="contacts-main__desc">
                <p>Мы находимся в <a class="location-link" target="_blank"
                        href="https://yandex.ru/maps/?ol=geo&text=%D1%81%D0%B5%D0%BB%D0%BE%20%D0%90%D0%B1%D1%80%D0%B0%D0%BC%D1%86%D0%B5%D0%B2%D0%BE&sll=37.965939%2C56.212835&sspn=0.036581%2C0.040325&si=ykye0jrqvqhcnam40t810pcwaw">
                        Московской Области, Сергиево-Посадский район, посёлок Абрамцево</a></p>
                <p>Возможна бесплатная доставка малогабаритных запчастей в район Ярославского шоссе, Проспекта Мира, ВДНХ
                </p>
                <p>Отправка в Ваш город СДЭКОМ или другой ТК</p>
                <a class="contacts-main__link contact-avito"
                    href="https://www.avito.ru/brands/4f2f85d7425518bd0a99170ba967f99f?src=sharing" target="_blank">
                    <span class="violet-avito">Müller</span><span class="blue-avito"> BMW</span><span class="green-avito">
                        Autoschrott</span><span class="red-avito"> Авито</span></a>
                <a class="contacts-main__link contact-tg" href="https://t.me/mullerbmw" target="_blank">
                    Müller BMW Autoschrott Telegram</a>
                <a class="contacts-main__link contact-wa" href="https://wa.me/79772805434" target="_blank">
                    Müller BMW Autoschrott WhatsApp</a>
            </div>
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
    }
}
</script>
  