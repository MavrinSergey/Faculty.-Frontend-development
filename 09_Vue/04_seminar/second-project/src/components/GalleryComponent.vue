<template>
  <div>
    <h1>GalleryComponent</h1>
    <div>
      <img :src="currentImage" alt="Большое изображение" />
      <div>
        <img v-for="(image, index) in images" :key="index" :src="image" @click="changeImage(index)">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "GalleryComponent",
  data() {
    return {
      images: [
        'https://i.7fon.org/150/f55644279.jpg',
        'https://i.7fon.org/150/u438149.jpg',
        'https://i.7fon.org/150/g860911.jpg'
      ],
      currentIndex: 0
    };
  },
  computed: {
    currentImage() {
      return this.images[this.currentIndex];
    }
  },
  methods: {
    changeImage(index) {
      this.currentIndex = index;
    }
  }
}
</script>


<style scoped lang="css">

</style>