<template>
  <component :articles="articles" :projects="projects" :is="componentType"/>
</template>
<script>
import Page1Home from '@/components/Page1Home.vue'
import Page2Blog from '@/components/Page2Blog.vue'
import Page3Project from '@/components/Page3Project.vue'


export default {
  name: 'ContentComponent',
  props: ['componentType', 'articles', 'projects'],
  components: {
    Page1Home,
    Page2Blog,
    Page3Project,
  }
}
</script>


<style scoped lang="scss">

</style>