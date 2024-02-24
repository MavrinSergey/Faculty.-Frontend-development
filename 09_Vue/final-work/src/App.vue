<template>
  <div id="app">
    <HeaderComponent/>
    <img class="banner" src="@/assets/img/page3_Banner.jpeg" alt="banner">
    <Page3Component/>
    <FooterComponent/>
  </div>
</template>

<script>
import HeaderComponent from '@/components/HeaderComponent.vue';
import Page3Component from '@/components/Page3Component.vue';
import FooterComponent from '@/components/FooterComponent.vue';

export default {
  name: 'App',
  components: {
    HeaderComponent,
    Page3Component,
    FooterComponent,
  }
}
</script>

<style lang="scss">
@font-face {
  font-family: 'dm';
  font-weight: 400;
  font-style: normal;
  font-display: auto;
  src: local('dm'), url('assets/fonts/dm.woff2') format('woff2'),
  url('assets/fonts/dm.woff') format('woff');
}

@font-face {
  font-family: 'jost';
  src: url('assets/fonts/jost.woff2') format('woff2'),
  url('assets/fonts/jost.woff') format('woff');
  font-weight: normal;
  font-style: normal;
}

@font-face {
  font-family: 'jost_italic';
  src: url('assets/fonts/jost-italic.woff2') format('woff2'),
  url('assets/fonts/jost-italic.woff') format('woff');
  font-weight: normal;
  font-style: normal;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

//:root {
//  $colorPrimary: #CDA274;
//  $colorPrimary2: #292F36;
//  $colorPrimary3: #F4F0EC;
//  $colorText: #1B2534;
//  $colorTextGrey: #606060;
//  $colorTextGrey2: #4D5053;
//  $width: 1200px;
//}
.banner {
  margin-bottom: 200px;
}
</style>
