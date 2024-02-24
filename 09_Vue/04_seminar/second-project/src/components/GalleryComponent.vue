<template>
<h1>GalleryComponent</h1>
  <div>
    <img src="">
    <div>
      <img v-for="(image, index) in images">
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
}
</script>


<style scoped lang="scss">

</style>