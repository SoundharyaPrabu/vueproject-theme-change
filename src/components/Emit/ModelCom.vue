<template>
  <div class="modal">
    <div class="modal-content">
      <slot></slot>
      <button @click="closeModal">Close</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ModelCom',
  methods: {
    closeModal() {
      this.$emit('close');
    }
  }
}
</script>

<style>
.modal {
  background-color: blue;
  position: fixed;
  top: 0; left: 0;
  width: 100%; height: 100%;
  background: rgba(0, 0, 0, 0.5);
}
.modal-content {
margin: 15% auto;
padding: 20px;
background: white;
width: 300px;
} 
</style>
