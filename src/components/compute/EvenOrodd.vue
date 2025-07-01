<template>
    <div class="find">
        <h3>Even Odd finder</h3>
        <input type="number" id="num" v-model="num" placeholder="enter number">
        <p>{{ answer }}</p>
    </div>
</template>

<script>
    import { ref, computed } from 'vue';

    export default{
        name:'EvenOrodd',
        setup(){
            const num = ref(0);
            const answer = computed(() => (num.value%2==0 ? "Is even" : "Is Odd"));
            return{
                num,
                answer
            }
        }
    };
</script>