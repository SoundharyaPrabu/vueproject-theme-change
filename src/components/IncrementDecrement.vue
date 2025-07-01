<template>
    <div class="main">
        <p>{{ num }}</p>
        <button id="increment" @click="incrementNum" >Increment</button>
        <button id="decrement" @click="decrementNum" >Decrement</button>
        <button id="reset" @click="resetvalue">reset</button>
    </div>
</template>

<script>
    export default{
    name:'IncrementDecrement',
    data(){
        return{
            num: 0
        };
    },
    methods: {
        incrementNum() {
            this.num++;
        },
        decrementNum() {
            this.num--;
        },
        resetvalue() {
            this.num = 0;
        }
        }
};

</script>