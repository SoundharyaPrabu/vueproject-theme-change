<template>
    <div class="reverse">

        <h3>String Reverser</h3>
        <input id="word" type="text" v-model="word" placeholder="Enter a String">
        <p>{{ Reversed }}</p>
    </div>
</template>

<script>
    import { ref, computed } from 'vue'

    export default{
        name:'StringReverse',
        setup(){
            const word = ref('');
            const Reversed = computed(() => word.value.split('').reverse().join(''));
            return{
                word,
                Reversed
            }
        }
    }
</script>