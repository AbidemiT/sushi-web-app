<template>
  <div class="mobile-nav">
    <ul class="menu" @click="closeMobileMenu">
      <li class="menu-list">
        <a class="menu-link" href="/">Welcome</a>
      </li>
      <li class="menu-list" >
        <a class="menu-link" href="#" v-scroll-to="'#cook'" >Who We Are</a>
      </li>
      <li class="menu-list">
        <a class="menu-link" href="#" v-scroll-to="'#gallery'">Menu</a>
      </li>

      <li class="menu-list">
        <a class="menu-link" href="#" v-scroll-to="'#contact'">Contacts</a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  methods: {
    closeMobileMenu() {
      this.$store.dispatch("toggleClicked");
    }
  }
};
</script>