<template>
    <div class="Status_card">
        <h2>Project Status</h2>
        <input id=" status" type="text" v-model="Statusinput" placeholder="enter your project status" >
        <p v-if="status === 'completed'">Project Completed Sucessfully ✅!</p>
        <p v-else-if="status === 'inprogress'">Project In-Progress 🔧!</p>
        <p v-else-if="status === 'pending'">Project is Pending 🕒!</p>
        <p v-else>Unknown Project Status❓.</p>
        <button @click="ProjectStatus">show Status</button>
    </div>
</template>

<script>
    export default{
        name:'ProjectStatus',
        data(){
            return{
                status:'completed',
                Statusinput:''
            };
        },
        methods:{
            ProjectStatus(){
                const input = this.Statusinput.trim().toLowerCase();
                if(input === 'completed'){
                    this.status ='completed';
                }else if(input === 'inprogress'){
                    this.status='inprogress';
                }else if(input === 'pending'){
                    this.status='pending';
                }else{
                    this.status='unknown';
                }
            }
        }
    }
</script>

<style scoped>
    .Status_card {
        border: 2px solid #323030;
        background-color: #d9d4d4;
        padding: 20px;
        border-radius: 10px;
        width: 250px;
        text-align: center;
        font-family: sans-serif;
    }
    button {
        margin-top: 10px;
        padding: 5px 10px;
        cursor: pointer;
    }
</style>