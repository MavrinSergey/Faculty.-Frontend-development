<template>
  <footer class="footer">
    <div class="footer__left">
      <a class="logo">
        <img class="logo__img" src="../assets/img/Logo-1.png" alt="logo">
      </a>
      <p class="footer__text">It is a long established fact that a reader will be distracted lookings.</p>
    <div class="footer__social">
      <img src="@/assets/img/twiter.png">
      <img src="@/assets/img/in.png">
    </div>
    </div>
    <div class="footer__center">
      <div class="footer__title">Pages</div>
      <nav class="header__nav">
        <a class="footer__text header__link">Home</a>
        <a class="footer__text header__link">Project</a>
        <a class="footer__text header__link">Blog</a>
      </nav>
    </div>
    <div class="footer_right">
      <div class="footer__title">Contact</div>
      <p class="footer__text footer__address">55 East Birchwood Ave.<br>Brooklyn, New York 11201</p>
      <p class="footer__text footer__email">contact@interno.com</p>
      <p class="footer__text footer__tel">(123) 456 - 7890</p>
    </div>
  </footer>
</template>

<script>

export default {
  name: "FooterComponent",

}
</script>


<style scoped lang="scss">
@import "@/assets/scss-modules/variables";
.footer {
  margin: 0 auto 141px;
  max-width: 1200px;
  display: flex;
  gap: 101px;


}
.footer__text {
  margin-bottom: 31px;
  max-width: 370px;
  color: $colorTextGrey2;
  font-family: jost, sans-serif;
  font-size: 22px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  white-space: pre-line;
}
.footer__title {
  margin-bottom: 35px;
  color: $colorPrimary2;
  font-family: dm, sans-serif;
  font-size: 25px;
  font-style: normal;
  font-weight: 400;
  line-height: 125%;
}
.logo__img {
  margin-bottom: 18px;
  width: 177px;
  height: 50px;
}
.footer__social {
  display: flex;
  gap: 70px;
}
.header__nav {
  display: flex;
  flex-direction: column;
}
</style>