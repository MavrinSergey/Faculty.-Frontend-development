<template>
  <section class="project-details">
    <HeaderContent/>
    <div class="project-details__descriptions">
      <h2 class="project-details__title">Minimal Look Bedrooms {{ id }}</h2>
      <p class="project-details__text">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquamsem vitae turpis dignissim maximus. Aliquam
        sollicitudin tellumassa, vbel maximus purus posuere in. Dojrices gravida dignissim. Praesent at nibh in mi
        fringilla mattis. Phasellus ut dolor odio. Aenean in the ipsum vel lectus bibendum commodo.
      </p>
      <p class="project-details__text">
        In nec sem suscipit, convallis leo vitae, lacinia nibh. Cras amet tellus lectus. Vivamus ipsum nunc, mattis quis
        nibh id, pellentesque arcu. Donec a pellentesque Cras erat enim, gravida non ante vitae,elequis convallis elit,
        in
        viverra felis. Donec ultrices tellus vitae iaculisvd porta. Proin tincidunt ligula id purus porttitor.
      </p>
    </div>
    <SwiperSlider :carousel_data="sliderItems"/>
  </section>
</template>

<script>


import HeaderContent from "@/components/HeaderContent.vue";
import SwiperSlider from "@/components/SwiperSlider.vue";

export default {
  name: "Page5ProjectDetails",
  components: {SwiperSlider, HeaderContent},
  props: ['id'],
  data() {
    return {
      sliderItems: [
        {id: 1, name: 'project_1', img: 'project_1.png'},
        {id: 2, name: 'project_2', img: 'project_2.png'},
        {id: 3, name: 'project_3', img: 'project_3.png'},
      ]
    }
  }
}
</script>


<style scoped lang="scss">
.banner {
  margin-bottom: 200px;
}

.project-details {

  &__descriptions {
    margin: 0 auto 70px;
    max-width: 658px;

  }

  &__title {
    margin-bottom: 11px;
    color: $colorPrimary2;
    font-family: dm sans-serif;
    font-size: 50px;
    font-style: normal;
    font-weight: 400;
    line-height: 125%;
    letter-spacing: 1px;
  }

  &__text {
    margin-bottom: 30px;
    color: $colorTextGrey2;
    font-family: Jost sans-serif;
    font-size: 22px;
    font-style: normal;
    font-weight: 400;
    line-height: 150%;
    letter-spacing: 0.22px;
  }
}
</style>