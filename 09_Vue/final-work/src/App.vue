<template>
  <div id="app">
    <HeaderComponent @changeContent="changeContent" />

    <ContentComponent :articles="articles" :componentType="componentType"/>

    <FooterComponent/>
  </div>
</template>

<script>
import HeaderComponent from '@/components/HeaderComponent.vue';
import ContentComponent from '@/components/ContentComponent.vue';
import FooterComponent from '@/components/FooterComponent.vue';

export default {
  name: 'App',
  components: {
    HeaderComponent,
    FooterComponent,
    ContentComponent
  },
  data () {
    return {
      componentType: 'Page1Component',
      articles: [
        {
          id: 1,
          urlImg: "@/assets/img/article_1.png",
          title: "Let’s Get Solution For Building Construction Work",
          date: "26 December,2022 ",
          tag: ["Kitchen"]
        },
        {
          id: 2,
          urlImg: "@/assets/img/article_2.png",
          title: "Low Cost Latest Invented Interior Designing Ideas.",
          date: "22 December,2022 ",
          tag: ["Bedroom"]
        },
        {
          id: 3,
          urlImg: "@/assets/img/article_3.png",
          title: "Best For Any Office & Business Interior Solution",
          date: "25 December,2022 ",
          tag: ["Building"]
        },
        {
          id: 4,
          urlImg: "@/assets/img/article_4.png",
          title: "Let’s Get Solution For Building Construction Work",
          date: "26 December,2022 ",
          tag: ["Architecture"]
        },
        {
          id: 5,
          urlImg: "@/assets/img/article_5.png",
          title: "Low Cost Latest Invented Interior Designing Ideas.",
          date: "22 December,2022 ",
          tag: ["Kitchen Planning"]
        },
        {
          id: 6,
          urlImg: "@/assets/img/article_6.png",
          title: "Best For Any Office & Business Interior Solution",
          date: "25 December,2022 ",
          tag: ["Bedroom"]
        }
      ]
    }
  },
  methods: {
    changeContent(componentType) {
      this.componentType = componentType
    }
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

$colorPrimary: #CDA274;
$colorPrimary2: #292F36;
$colorPrimary3: #F4F0EC;
$colorText: #1B2534;
$colorTextGrey: #606060;
$colorTextGrey2: #4D5053;
$width: 1200px;


* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

a {
  text-decoration: none;
}
</style>
