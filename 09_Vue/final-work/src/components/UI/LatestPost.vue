<template>
  <div class="latest-post">
    <div class="latest-post__title">Latest Post</div>
    <figure class="post">
      <img src="@/assets/img/Image.png" alt="kitchen"/>
      <figcaption>
        <div class="post__title">Low Cost Latest Invented Interior Designing Ideas</div>
        <div class="post__content">Lorem ipsum dolor sit amet, disciplining Aliquot eu sem vitae turps dissimilar
          maximus.exposure in.Contrary to popular belief.
          Lorem Ipsum is not simply random text. It has roots in a piece of classic.
        </div>
        <div class="post__date-wrap">
          <p class="post__date">26 December,2022</p>
          <img class="post__arrow" src="@/assets/img/arrow_circle.png" alt="arrow_circle">
        </div>
      </figcaption>
    </figure>
  </div>
</template>
<script>
export default {
  name: "LatestPost"
}
</script>


<style scoped lang="scss">
@import "@/assets/scss-modules/styles.scss";
.latest-post {
  margin: 0 auto 150px;
  width: 1200px;

  &__title {
    margin-bottom: 27px;
    font-family: dm;
    font-size: 50px;
    font-weight: 400;
    line-height: 125%;
    color: $colorPrimary2;
  }
  .post {
    padding: 22px;
    display: flex;
    align-items: center;
    gap: 65px;
    border: 1px solid rgb(231, 231, 231);
    border-radius: 62px;
    box-shadow: 0 10px 30px 0 rgba(255, 255, 255, 0.25);

    figcaption {
      margin-right: 34px;
    }

    &__title {
      margin-bottom: 22px;
      font-family: dm;
      font-size: 25px;
      font-weight: 400;
      line-height: 125%;
      color: $colorPrimary2;
    }

    &__content {
      margin-bottom: 41px;
      font-family: Jost;
      font-size: 22px;
      font-weight: 400;
      line-height: 150%;
      color: $colorTextGrey2;
    }

    &__date-wrap {
      display: flex;
      justify-content: space-between;
      align-items: center;

    }
  }
}

</style>