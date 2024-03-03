<template>
  <div id="app">
    <HeaderPage @changeContent="changeContent"/>

    <ContentComponent :articles="articles" :projects="projects" :componentType="componentType"/>

    <FooterComponent/>
  </div>
</template>

<script>
import HeaderPage from '@/components/UI/HeaderPage.vue';
import ContentComponent from '@/components/ContentComponent.vue';
import FooterComponent from '@/components/UI/FooterComponent.vue';

export default {
  name: 'App',
  components: {
    HeaderPage,
    FooterComponent,
    ContentComponent
  },
  data() {
    return {
      componentType: 'Page1Home',
      articles: [
        {
          id: 1,
          fileImg: "article_1.png",
          title: "Let’s Get Solution For Building Construction Work",
          date: "26 December,2022 ",
          tag: ["Kitchen"]
        },
        {
          id: 2,
          fileImg: "article_2.png",
          title: "Low Cost Latest Invented Interior Designing Ideas.",
          date: "22 December,2022 ",
          tag: ["Bedroom"]
        },
        {
          id: 3,
          fileImg: "article_3.png",
          title: "Best For Any Office & Business Interior Solution",
          date: "25 December,2022 ",
          tag: ["Building"]
        },
        {
          id: 4,
          fileImg: "article_4.png",
          title: "Let’s Get Solution For Building Construction Work",
          date: "26 December,2022 ",
          tag: ["Architecture"]
        },
        {
          id: 5,
          fileImg: "article_5.png",
          title: "Low Cost Latest Invented Interior Designing Ideas.",
          date: "22 December,2022 ",
          tag: ["Kitchen Planning"]
        },
        {
          id: 6,
          fileImg: "article_6.png",
          title: "Best For Any Office & Business Interior Solution",
          date: "25 December,2022 ",
          tag: ["Bedroom"]
        }
      ],
      projects:  [
        {
          id: 1,
          fileImg: "project_1.png",
          title: "Modern Bathroom",
          subTitle: "Decor / Artchitecture",
        },
        {
          id: 2,
          fileImg: "project_2.png",
          title: "Modern Bathroom",
          subTitle: "Decor / Artchitecture",
        },
        {
          id: 3,
          fileImg: "project_3.png",
          title: "Modern Bathroom",
          subTitle: "Decor / Artchitecture",
        },
        {
          id: 4,
          fileImg: "project_4.png",
          title: "Modern Bed Room",
          subTitle: "Decor / Artchitecture",
        },
        {
          id: 5,
          fileImg: "project_5.png",
          title: "Minimal Bed Room",
          subTitle: "Decor / Artchitecture",
        },
        {
          id: 6,
          fileImg: "project_6.png",
          title: "Minimal Bed Room",
          subTitle: "Decor / Artchitecture",
        },
        {
          id: 7,
          fileImg: "project_7.png",
          title: "Classic Minimal Kitchen",
          subTitle: "Decor / Artchitecture",
        },
        {
          id: 8,
          fileImg: "project_8.png",
          title: "Modern Kitchen",
          subTitle: "Decor / Artchitecture",
        },
        {
          id: 9,
          fileImg: "project_9.png",
          title: "Minimal Kitchen table",
          subTitle: "Decor / Artchitecture",
        },
        {
          id: 10,
          fileImg: "project_10.png",
          title: "System Living Area",
          subTitle: "Decor / Artchitecture",
        },
        {
          id: 11,
          fileImg: "project_11.png",
          title: "Modern Living Area",
          subTitle: "Decor / Artchitecture",
        },
        {
          id: 12,
          fileImg: "project_12.png",
          title: "Modern Living Area",
          subTitle: "Decor / Artchitecture",
        },
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
