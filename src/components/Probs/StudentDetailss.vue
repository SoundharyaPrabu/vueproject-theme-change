<template>
    <div class="detail">
        <h2> Student Detailss</h2>
        <input type="text" v-model="name" placeholder="Enter Name" />
        <input type="number" v-model.number="age" placeholder="Enter Age" />
        <input type="text" v-model="department" placeholder="Enter Department" />
        <input type="text" v-model="rollno" placeholder="Enter Roll No" />
        
        <p>Studnt Name : {{ name }}</p>
        <p>Student Age : {{ age }}</p>
        <p>Student Department : {{ department }}</p>
        <p>Student Rollno : {{ rollno }}</p>
    </div>
</template>

<script>
    import { ref } from 'vue';

    export default {
        name: 'StudentDetail',
        setup() {
            const name = ref('');
            const age = ref('');
            const department = ref('');
            const rollno = ref('');
            return {
                name,
                age,
                department,
                rollno
            };
        }
    };
</script>