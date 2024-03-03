<template>
  <button class="btn" @click="chooseRoom" :class="{btn_black: isActiveBlack, btn_white: isActiveWhite}">{{ textBtn }}</button>
</template>

<script>
export default {
  name: "BtnComponent",
  props: ['textBtn', 'colorBtn'],
  data() {
    return {
      isActiveBlack: true,
      isActiveWhite: false,
    }
  },
  mounted() {
    this.colorBtn === 'black' ? this.changeClass(true) : this.changeClass(false);
    console.log(this.colorBtn === 'black' ? this.changeClass(true) : this.changeClass(false))
  },
  methods: {
    changeClass(bool) {
      this.isActiveBlack = bool;
      this.isActiveWhite = !bool;
    },
    chooseRoom() {
      this.$emit('select-room', this.textBtn)
    }
  }
}
</script>

<style scoped lang="scss">
@import "@/assets/scss-modules/styles";

</style>