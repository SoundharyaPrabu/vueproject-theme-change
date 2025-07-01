<template>
  <div class="student-grades">
    <h2>Enter Student Details</h2>


    <ul>
      <li v-for="(student, index) in students" :key="index">
        <strong>{{ student.name }}</strong> - 
        Mark: {{ student.mark }} - 
        Grade: {{ getGrade(student.mark).icon }} {{ getGrade(student.mark).grade }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'StudentGrades',
  data() {
    return {
      students: [
        { name:'abi', mark: 90},
        { name: 'kavi', mark: 60 },
        { name: 'sam', mark:70 },
        { name: 'som', mark: 30 }
      ]
    };
  },
  methods: {
    getGrade(mark) {
      if (mark >= 90) {
        return { grade: 'A+', icon: '🌟' };
      } else if (mark >= 80) {
        return { grade: 'A', icon: '✅' };
      } else if (mark >= 70) {
        return { grade: 'B', icon: '👍' };
      } else if (mark >= 60) {
        return { grade: 'C', icon: '👌' };
      } else {
        return { grade: 'F', icon: '❌' };
      }
    }
  }
};
</script>

<style scoped>
    .student-grades {
  border: 2px solid #323030;
  background-color: #d9d4d4;
  padding: 20px;
  border-radius: 10px;
  width: 300px;
  text-align: center;
  font-family: sans-serif;
}
</style>