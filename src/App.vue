<template>
  <div id="app">
    <Head />
    <WhatWeCook></WhatWeCook>
    <food-gallery></food-gallery>
    <div class="simple-container">
      <div class="simple">
        <div class="content">
          <h2>We like to keep things simple</h2>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sit ab culpa nihil non reprehenderit, vitae inventore! Sunt voluptatem quae quo.</p>
          <div class="img-container">
            <img src="./assets/img/potatoicon.png" alt="Potato Icon" />
            <img src="./assets/img/potatoicon.png" alt="Potato Icon" />
            <img src="./assets/img/potatoicon.png" alt="Potato Icon" />
          </div>
        </div>
      </div>
    </div>
    <Booking></Booking>
    <Foot></Foot>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import Head from "@/components/Header";
import Foot from "@/components/Footer";
import WhatWeCook from "@/components/WhatWeCook";
import FoodGallery from "@/components/FoodGallery";
import Booking from "@/components/Booking";


export default {
  name: "App",
  components: {
    Head,
    Foot,
    WhatWeCook,
    FoodGallery,
    Booking
  },
  computed: {
    ...mapGetters({
      toggleState: "toggleState"
    })
  },
  watch: {
    toggleState() {
      if (this.toggleState) {
        document.querySelector("body").classList.add("noScroll");
      } else {
        document.querySelector("body").classList.remove("noScroll");
      }
    }
  }
};
</script>

<style lang="scss">
$primary-color: #afc67b;
$white-color: #fff;
$transparent-primary-color: #afc67b7a;
$background-color: #212121;
$icon-background-color: #e7e7e7;
</style>
