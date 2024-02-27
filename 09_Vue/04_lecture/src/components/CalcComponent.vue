<template>
  <div>
    <div class="calc">
      <input class="input" type="text" v-model="result">
      <button @click="addButton(num)" v-for="num in nums" :key="num.id">
        {{ num }}
      </button>
      <button @click="addButton(tab)" v-for="tab in tabs" :key="tab.id">
        {{ tab }}
      </button>
      <button @click="calcResult">=</button>
      <button class="reset" @click="reset">C</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "CalcComponent",
  data() {
    return {
      result: 0,
      nums: [1, 2, 3, 4, 5, 6, 7, 8, 9, 0],
      tabs: ['-', '+', '*', '/']
    };
  },
  methods: {
    addButton(char) {
      if (this.result === 0) {
        this.result = char;
      } else {
        this.result = this.result.toString();
        this.result += char;
      }
    },
    calcResult() {
      this.result = eval(this.result);
    },
    reset() {
      this.result = 0;
    }
  },
}
</script>


<style scoped>
.calc {
  display: grid;
  grid-template-columns: repeat(3, 100px);
  justify-content: center;
  gap: 5px;
}
.input {
  grid-column: 1 / -1;
  text-align: right;
}
.reset {
  background-color: orange;
}
</style>