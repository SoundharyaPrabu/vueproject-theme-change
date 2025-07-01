<template>
    <div class="card">
        <input v-model="userid" type="text" placeholder="Enter Your name"/>
        <p>UserID : {{ userid }}</p>

    </div>
</template>

<script>
    export default{
        name : 'ImidiateWatch',
        data(){
            return{
                userid:'1',
                userdata:''
            };
        },
        watch:{
            userid:{
                handler(newvalue){
                    this.fetchuser(newvalue);
                },
                immediate:true
            }
        },
        methods:{
            fetchuser(id){
                this.userdata=`Dats for user id ${id}`;
                console.log(`fetch data ${id}`);
            }
        }

    }
</script>