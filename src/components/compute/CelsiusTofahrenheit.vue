    <template>
        <div class="measure">
            <h3>CelsiusTofahrenheit</h3>
            <input id="celsius" type="number" v-model="celsius" placeholder="Enter Celsius value">
            <p>{{ fahrenheit}}</p>
        </div>
    </template>

    <script>
        import { ref, computed } from 'vue';

        export default{
            name:'CelsiusTofahrenheit',
            setup(){
                const celsius = ref(0);
                const fahrenheit = computed(() => ((celsius.value*9)/5) +32);
                return{
                    celsius,
                    fahrenheit
                };
            }
        };
    </script>
