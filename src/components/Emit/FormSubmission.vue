<template>
  <form @submit.prevent="submitForm">
    <input v-model="name" type="text" placeholder="Enter name" />
    <input v-model="age" type="num" placeholder="Enter age" />
    <input v-model="department" type="text" placeholder="Enter department" />
    <button type="submit">Submit</button>
  </form>
</template>

<script>
export default {
  data() {
    return {
      name: '',
      age: '',
      department: '',
    }
  },
  methods: {
    submitForm() {
      this.$emit('formSubmission', {
        name: this.name,
        age: this.age,
        department: this.department
      });
    }
  }
}
</script>
