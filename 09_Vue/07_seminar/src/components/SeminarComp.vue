<template>
  <div>
    <h2>Counter</h2>
    <p>Count: {{ count }}</p>
    <button @click="increment">Increment</button>
    <button @click="decrement">Decrement</button>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex';

export default {
  name: 'SeminarComp',
  computed: {
    ...mapState(['count'])
  },
  methods: {
    ...mapMutations(['INCREMENT', 'DECREMENT']),
    increment() {
      this.INCREMENT()
    },
    decrement() {
      this.DECREMENT()
    }
  },
};
</script>
