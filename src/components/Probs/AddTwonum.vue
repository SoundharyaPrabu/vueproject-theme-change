<template>
    <div class="add">
        <h3>Adding Two Numbers</h3>
        <p>{{ num1+num2 }}</p>
    </div>
</template>

<script>
    export default{
        props:['num1','num2']
    }
</script>   