<template>
  <section class="project-details">
    <h1>{{ $route.params.id }}</h1>
    <img class="banner" src="@/assets/img/page3_Banner.jpeg" alt="banner">
    <div class="project-details__descriptions">
      <h1>{{ id }}</h1>
      <h2 class="project-details__title">Minimal Look Bedrooms</h2>
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
  </section>
</template>

<script>


export default {
  name: "Page5ProjectDetails",
  components: {},
  props: ['id'],
}
</script>


<style scoped lang="scss">
.banner {
  margin-bottom: 200px;
}
.project-details {
  &__descriptions {

  }
  &__title {

  }
  &__text {

  }
}
</style>