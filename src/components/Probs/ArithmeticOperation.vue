<template>
    <h3>Arithmetic Operation</h3>
    <input type="number" v-model.number="num1" placeholder="Enter first number" />
    <input type="number" v-model.number="num2" placeholder="Enter second number" />
    <p>Add:{{ num1+num2 }}</p>
    <p>Sub:{{ num1-num2 }}</p>
    <p>Pro:{{ num1*num2 }}</p>
    <p>Div:{{ num1/num2 }}</p>
</template>

<script>
    import { ref } from 'vue';
    export default {
  name: 'ArithmeticOperation',
  setup() {
    const num1 = ref(0);
    const num2 = ref(0);

    return {
      num1,
      num2
    };
  }
};
</script>