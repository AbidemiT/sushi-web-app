<template>
  <div class="landing">
    <div class="mobile-toggle">
      <div class="hamburger" @click="toggleMenu">
        <div class="line" :class="[toggleState ? 'toggled' : '']"></div>
        <div class="line" :class="[toggleState ? 'toggled' : '']"></div>
        <div class="line" :class="[toggleState ? 'toggled' : '']"></div>
      </div>
    </div>
    <transition name="slide-fade">
        <mobile-nav v-if="toggleState"></mobile-nav>
    </transition>
    <nav class="my-nav">
      <ul class="menu">
        <li class="menu-list">
          <a class="menu-link" href="/">Welcome</a>
        </li>
        <li class="menu-list">
          <a class="menu-link" href="#" v-scroll-to="'#cook'">Who We Are</a>
        </li>
        <li class="menu-list">
          <a class="menu-link" href="#" v-scroll-to="'#gallery'">Menu</a>
        </li>
        
        <li class="menu-list">
          <a class="menu-link" href="#" v-scroll-to="'#contact'">Contacts</a>
        </li>
      </ul>
    </nav>

    <div class="right-container">
      <div class="logo-container" data-aos="fade-right">
        <img src="../assets/img/sushilogo.png" alt="Sushi Logo" />
      </div>
      <div class="details" data-aos="zoom-in-up">
        <h2 class="new-opening">NEW OPENING</h2>
        <h2 class="date">23RD SEPT</h2>
      </div>
      <a class="cta" href="#" v-scroll-to="'#cook'">LEARN MORE</a>
    </div>
  </div>
</template>


<script>
import { mapGetters } from "vuex";
import MobileNav from "./MobileNav";

export default {
  components: {
    MobileNav
  },
  data() {
    return {};
  },
  computed: {
    ...mapGetters({
      toggleState: "toggleState"
    })
  },
  methods: {
    toggleMenu() {
      this.$store.dispatch("toggleClicked");
    }
  }
};
</script>