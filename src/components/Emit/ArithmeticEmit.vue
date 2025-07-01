<template>
    <div>
        <p>Num1: {{ num1 }}</p>
        <p>Num2: {{ num2 }}</p>

        <button @click="add">Add</button>
        <button @click="sub">Subtract</button>
        <button @click="pro">Multiply</button>
        <button @click="div">Divide</button>
    </div>
</template>

<script>
    export default{
        props:['num1','num2'],
        methods:{
            add(){
                this.$emit('result',`${this.num1} + ${this.num2} = ${this.num1+this.num2}`);
            },
            sub(){
               this.$emit('result',`${this.num1} - ${this.num2} = ${this.num1-this.num2}`); 
            },
            pro(){
                this.$emit('result',`${this.num1} * ${this.num2} = ${this.num1*this.num2}`);
            },
            div(){
                if(this.num2!==0){
                    this.$emit('result',`${this.num1} / ${this.num2} = 
                    ${this.num1/this.num2}`);
                }else{
                    this.$emit('result',`Cannot divided by 0`);
                }
            }
        }
    };
</script>