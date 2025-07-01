<template>
  <div class="card">
    <h3>Card Header</h3>
    <slot name="left"></slot> <!-- First child goes here -->
    <slot name="right"></slot> <!-- Second child goes here -->
    <p>Card Footer</p>
  </div>
</template>

<script>
export default {
  name: 'CardWrapper'
};
</script>

<style scoped>
.card {
  border: 2px solid #ccc;
  padding: 10px;
  margin-bottom: 20px;
}
</style>