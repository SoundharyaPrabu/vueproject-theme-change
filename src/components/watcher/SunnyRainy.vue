<template>
    <div class="weather-card">
        <h2>Today's Weather</h2>
        <input id="weather" type="text" v-model="weatherInput" placeholder="enter today's weather" >
        <p v-if="weather === 'sunny'">Its a sunny day! ☀️</p>
        <p v-else-if="weather === 'rainy'">Its a Rainy day! 🌧️</p>
        <p v-else-if="weather ==='moderate'">Its a normal weather 🌤️</p>
        <p v-else-if="weather === 'cloudy'">Its a cloudy Weather ☁️ </p>
        <p v-else>weather is unclear.❓</p>
        <button @click="changeWeather">show Weather</button>
    </div>
</template>

<script>
    export default {
        name: 'WeatherComponent',
        data() {
            return {
            weather: 'sunny',
            weatherInput: ''
            };
        },
        methods:{
            changeWeather(){
            const input = this.weatherInput.trim().toLowerCase();

                if(input === 'sunny'){
                    this.weather='sunny';
                }else if(input === 'rainy'){
                    this.weather='rainy';
                }
                else if(input == 'moderate'){
                    this.weather='moderate';
                }
                else if(input == 'cloudy'){
                    this.weather = 'cloudy';
                }
                else{
                    this.weather='unkown';
                }
            }
        }
    };

</script>


<style scoped>
.weather-card {
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