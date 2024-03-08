<template>
  <header class="header">
    <LogoComponent/>
    <NavPages/>
  </header>
</template>

<script>

import NavPages from "@/components/UI/NavPages.vue";
import LogoComponent from "@/components/UI/LogoComponent.vue";

export default {
  name: "HeaderPage",
  components: {LogoComponent, NavPages},
  props: [],
  data() {
    return {}
  },
  methods: {
    changeContent(componentType) {
      this.$emit('changeContent', componentType)
    }
  }

}
</script>


<style scoped lang="scss">
@import "@/assets/scss-modules/styles.scss";

.header {
  margin: 44px auto 57px;
  max-width: 1200px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

</style>