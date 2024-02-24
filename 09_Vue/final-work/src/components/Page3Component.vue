<template>
  <section class="page3">
    <div class="page3__left">
      <h2 class="page3__title">Let’s Get Solution for Building Construction Work</h2>
      <img class="page3__img" src="@/assets/img/page3_Image.png">
      <div class="page3__subtitle">
        <div class="page3__date">26 December,2022</div>
        <div class="liks">
          <a>Interior</a><span> / </span>
          <a>Home</a><span> / </span>
          <a>Decore</a>
        </div>
      </div>
      <p class="page3__text">Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary
        to popular
        belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration
        in some form, by injecthumour, or randomised words which don't look even slightly believable.
      </p>
      <p class="page3__text">Embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet
        tend to repeat
        predefined chunks as necessary.</p>
      <div class="page3__intermediate">
        <p>,,</p>
        <p>The details are not the details.
          They make the design.</p>
      </div>
      <h2 class="page3__title">Design sprints are great</h2>
      <p class="page3__text">Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary
        to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have
        suffered.
      </p>
      <ol>
        <li><p class="page3__text">Contrary to popular belief.There are many variations of passages of Lorem Ipsum
          available, but the majority
          have suffered.</p>
        </li>
        <li><p class="page3__text">Contrary to popular belief.There are many variations of passages of Lorem Ipsum
          available, but the majority
          have suffered.</p>
        </li>
        <li><p class="page3__text">Contrary to popular belief.There are many variations of passages of Lorem Ipsum
          available, but the majority
          have suffered.</p>
        </li>
      </ol>
      <img class="page3__img" src="@/assets/img/page3_Image2.png">
      <p class="page3__text">Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary
        to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have
        suffered.
      </p>
    </div>
    <div class="page3__right">
      <h3 class="page3__tags">Tags</h3>
      <div class="tags__wrap">
        <button class="tag" v-for="(tag, index) in tags" :key="index" @click="addFilterTag(index)">{{
            tag.name
          }}
        </button>
      </div>
      <ArticlesComponent v-for="article in articlesFilter" :key="article.id" :article="article"/>
    </div>

  </section>
</template>

<script>
import ArticlesComponent from '@/components/ArticlesComponent.vue';


export default {
  name: "page3Component",
  components: {
    ArticlesComponent,
  },
  data() {
    return {
      filterTag: [],
      tags: [
        {name: 'Kitchen'},
        {name: 'Bedroom'},
        {name: 'Building'},
        {name: 'Architecture'},
        {name: 'Kitchen Planning'},
        {name: 'Bedroom'},
      ],
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
    addFilterTag(index) {
      if (!this.filterTag.includes(this.tags[index].name)) {
        this.filterTag.push(this.tags[index].name);
      } else {
        this.filterTag = this.filterTag.filter(item => item !== this.tags[index].name)
      }
    },
    contains(where, what) {
      for (let i = 0; i < what.length; i++) {
        if (where.includes(what[i])) {
          return true;
        } else {
          return false;
        }
      }
    }
  },
  computed: {
    articlesFilter() {
      if (this.filterTag.length === 0) {
        return this.articles
      }
      return this.articles.filter(article => this.contains(article.tag, this.filterTag))
    },
  }
}
</script>


<style scoped lang="scss">
.page3 {
  margin: 0 auto 60px;
  display: flex;
  gap: 57px;
  max-width: 1200px;
}

.page3__left {
  max-width: 799px;
}

.page3__tags {
  margin-bottom: 24px;
  //color: $colorPrimary2;
  font-family: dm, sans-serif;
  font-size: 25px;
  font-style: normal;
  font-weight: 400;
  line-height: 125%;
}

.tags__wrap {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}

.tag {
  padding: 9px 30px;
  border-radius: 10px;
  border: none;
  //background-color: $colorPrimary2;
  font-family: jost;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 125%;
}

.page3__title {
  margin-bottom: 21px;
  //color: $colorPrimary2;
  font-family: dm;
  font-size: 50px;
  font-style: normal;
  font-weight: 400;
  line-height: 125%;
}

.page3__img {
  margin-bottom: 46px;
}

.page3__subtitle {
  margin-right: 60px;
  margin-bottom: 48px;
  display: flex;
  justify-content: space-between;
  //color: $colorTextGrey2;
  font-family: Jost;
  font-size: 16px;
  font-weight: 400;
  line-height: 150%;
}

.page3__text {
  margin-bottom: 35px;
  width: 100%;
  //color: $colorTextGrey2;
  font-family: Jost;
  font-size: 22px;
  font-weight: 400;
  line-height: 150%;
}

.page3__intermediate {
  position: relative;
  margin-bottom: 27px;
  padding-top: 144px;
  width: 100%;
  height: 267px;
  text-align: center;
  border-radius: 50px;
  background-color: #F4F0EC;

  p {
    margin: 0 auto;
    //color: $colorPrimary;
    font-family: dm;
    font-size: 25px;
    font-weight: 400;
    line-height: 150%;
    max-width: 345px;
  }

  p:first-child {
    position: absolute;
    left: 390px;
    top: -60px;
    font-size: 200px;
    line-height: 100%;
    letter-spacing: -17px;
  }
}

ol {
  list-style-type: none;
  counter-reset: my-counter;
}

li {
  max-width: 713px;

  p {
    margin-left: 20px;
  }
}

li::before {
  position: absolute;
  content: counter(my-counter);
  counter-increment: my-counter;
  //color: $colorPrimary;
  font-family: dm;
  font-size: 20px;
  font-weight: 400;
  line-height: 125%;
}
</style>