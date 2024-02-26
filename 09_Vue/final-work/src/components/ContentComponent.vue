<template>
  <component :articles="articles" :is="componentType"/>
</template>
<script>
import Page1Component from '@/components/Page1Component.vue'
import Page2Component from '@/components/Page2Component.vue'
import Page3Component from '@/components/Page3Component.vue'

export default {
  name: 'ContentComponent',
  props: ['componentType', 'articles'],
  components: {
    Page1Component,
    Page2Component,
    Page3Component
  }
}
</script>


<style scoped lang="scss">

</style>