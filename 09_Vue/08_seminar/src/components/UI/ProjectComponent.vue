<template>
  <li @click="$router.push(`/project/${project.id}`)" class="project">
<!--    <li class="project">-->
    <div class="project__img-wrap">
      <img class="project__img"
           :src="require(`@/assets/img/${project.fileImg}`)" alt="project__img">
    </div>
    <div class="project__desc-wrap">
      <div>
        <h3 class="project__title">{{ project.title }}</h3>
        <p class="project__desc">{{ project.subTitle }}</p>
      </div>
      <img src="../../assets/img/arrow_circle.png" alt="arrow">
    </div>
  </li>
</template>

<script>
export default {
  name: "ProjectComponent",
  props: ['project'],
  computed: {},
}
</script>


<style scoped lang="scss">
@import "@/assets/scss-modules/styles.scss";


.project {
  display: flex;
  flex-direction: column;
  gap: 24px;
  break-inside: avoid;

  &__img-wrap {
    overflow: hidden;
  }

  &__img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  &__desc-wrap {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  &__title {
    color: $colorPrimary2;
    font-family: dm;
    font-size: 25px;
    font-weight: 400;
    line-height: 125%;
    text-align: left;
  }

  &__desc {
    color: $colorTextGrey2;
    font-family: Jost;
    font-size: 22px;
    font-weight: 400;
    line-height: 150%;
  }
}
</style>