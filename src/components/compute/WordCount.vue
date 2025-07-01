<template>
    <div class="count">
        <h3>Word Counter</h3>
        <input type="text" id="word" v-model="word" placeholder="Enter a string">
        <p>{{ count }}</p>
    </div>
</template>

<script>
    import { ref, computed } from 'vue';
    export default{
        name:'WordCount',
        setup(){
            const word = ref('');
            const count = computed(() => word.value.trim().split(/\s+/).filter(w => w.length > 0).length);
            return{
                word,
                count
            }
        }
    }
</script>