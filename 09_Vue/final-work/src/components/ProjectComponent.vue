<script>
export default {
  name: "ProjectComponent"
}
</script>

<template>
  <li class="project">
    <div class="project__img-wrap">
      <img class="project__img" src="@/assets/img/project_1.png">
    </div>
    <div class="project__desc-wrap">
      <div>
        <h3 class="project__title">Modern Kitchan</h3>
        <p class="project__desc">Decor / Artchitecture</p>
      </div>
      <img src="@/assets/img/arrow_circle.png">
    </div>
  </li>
</template>

<style scoped lang="scss">
@import "@/assets/scss-modules/variables";
.project {
  display: flex;
  flex-direction: column;
  gap: 24px;
  &__img-wrap {
    max-height: 525px;
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