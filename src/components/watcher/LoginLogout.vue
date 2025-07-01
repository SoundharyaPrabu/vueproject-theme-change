<template>
    <div class="Login-status">
        <h3>Login Status</h3>
        <p v-if="adminlogin && !userlogin ">Admin is granted !! </p>
        <p v-else-if="adminlogin && userlogin">Login Sucessfully!!</p>
        <p v-else-if = "!adminlogin && userlogin">User Logined Sucessfully!!</p>
        <p v-else>Login Pending</p>
    </div>
</template>

<script>
    export default{
        name:'LoginStatus',
        data()
        {
            return{
                adminlogin:true,
                userlogin:false
            }
        }
    }
</script>

<style scoped>
.Login-status {
  border: 2px solid #323030;
  background-color: #d9d4d4;
  padding: 20px;
  border-radius: 10px;
  width: 250px;
  text-align: center;
  font-family: sans-serif;
}
</style>