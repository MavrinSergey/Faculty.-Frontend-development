<template>
  <div class="wrapper">
    <div class="carousel" :style="{ 'margin-left': '-' + (100 * currentSlideIndex) + '%'}">
      <CarouselItem
          v-for="item in sliderItems"
          :key="item.id"
          :item_data="item"
      />
    </div>
    <div class="wrap__btn">
      <button class="btn" @click="prevSlide">Prev</button>
      <button class="btn" @click="nextSlide">Next</button>
    </div>
  </div>
</template>

<script>

import CarouselItem from "@/components/UI/CarouselItem.vue";


export default {
  name: "SwiperSlider",
  components: {
    CarouselItem,
  },
  data() {
    return {
      currentSlideIndex: 0,
      sliderItems: [
        {id: 1, name: 'project_1', img: 'project_1.png'},
        {id: 2, name: 'project_2', img: 'project_2.png'},
        {id: 3, name: 'project_3', img: 'project_3.png'},
      ]
    }
  },
  methods: {
    prevSlide() {
      if (this.currentSlideIndex > 0) {
        this.currentSlideIndex--
      }
    },
    nextSlide() {
      if (this.currentSlideIndex === this.sliderItems.length - 1) {
        this.currentSlideIndex = 0
      } else {
        this.currentSlideIndex++
      }
    }
  }
}
</script>


<style scoped lang="scss">
@import "@/assets/scss-modules/styles.scss";
.wrapper {
  margin: 0 auto 200px;
  max-width: 585px;
  overflow: hidden;
}

.carousel {
  display: flex;
  transition: all ease 0.5s;
}

</style>