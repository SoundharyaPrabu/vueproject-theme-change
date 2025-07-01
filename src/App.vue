

<!-- <template>
  <div id="App">
    <h1>v-slot example</h1>

    <SlotCard>
      <template v-slot:customerContent="SlotProps">
        <p>Received from Child:{{ SlotProps.info }}</p> 
      </template>
    </SlotCard>
  </div>
</template>

<script>
  import SlotCard from './components/slot/SlotCard.vue';
  export default{
    name:'App',
    Components:{
      SlotCard
    }
  }
</script> -->




<!-- <template>
    <SunnyRainy/>
    <ProjectStatus/>
    <LoginLogout/>
    <StudentDetail/>

</template>

<script>
import ProjectStatus from './components/watcher/ProjectStatus.vue';
import SunnyRainy from './components/watcher/SunnyRainy.vue';
import LoginLogout from './components/watcher/LoginLogout.vue';
import StudentDetail from './components/watcher/StudentDetail.vue';
  
  export default{
    name:'App',
    components:{
      SunnyRainy,
      ProjectStatus,
      LoginLogout,
      StudentDetail
    }
  }
</script> -->


<!-- <template>
  <div>
    <CardWrapper>
      <template v-slot:left>
        <p>👈 This is content for the LEFT side</p>
      </template>

      <template v-slot:right>
        <p>👉 This is content for the RIGHT side</p>
      </template>
    </CardWrapper>
  </div>
</template>

<script>
import CardWrapper from './components/CardWrapper.vue';

export default {
  name: 'App',
  components: {
    CardWrapper
  }
};
</script> -->

<!-- <template>
  <LayoutWrapper>
    <template v-slot:header>
      <h1>My Vue Project</h1>
    </template>

    <template v-slot:top>
      <p>Lets Learn Something New Today!!</p>
    </template>

    <template v-slot:left>
      <ul>
        <h3>extension type</h3>
        <li>v-if</li>
        <li>v-for</li>
        <li> v-model</li>
         <li>v-on</li>
         <li>v-bind</li>
      </ul>
    </template>

    <template v-slot:default>
      <CardWrapper>
        <template v-slot:left>
          <ul>
            <li>Vue.js is a progressive JavaScript framework.</li>
            <li>It is used to build user interfaces and single-page applications.</li>
          </ul>
        </template>

        <template v-slot:right>
          <ul>
            <li>Uses HTML templates, JavaScript logic, and CSS styling inside .vue files</li>
            <li>Supports Options API and Composition API for organizing code</li>
          </ul>
        </template>
      </CardWrapper>
    </template>

    <template v-slot:right>
      <ul>
        <h2>Course</h2>
        <li>vue.js</li>
        <li>c++</li>
        <li>C#</li>
        <li>Java</li>
        <li>HTML</li>
        <li>JavaScript</li>
      </ul>
    </template>

    <template v-slot:footer>
      <p>Sound.riya.com</p>
      <p>923456789876</p>
    </template>
  </LayoutWrapper>
</template>

<script>
import LayoutWrapper from './components/slot/LayoutWrapper.vue';

export default {
  name: 'App',
  components: {
    LayoutWrapper
  }
};
</script> -->


<!--COMPUTED-->

<!-- <template>
  <CelsiusTofahrenheit/>
  <EvenOrodd/>
  <StringReverse/>
  <WordCount/>
</template>

<script>
  import CelsiusTofahrenheit from './components/compute/CelsiusTofahrenheit.vue';
  import EvenOrodd from './components/compute/EvenOrodd.vue';
  import StringReverse from './components/compute/StringReverse.vue';
  import WordCount from './components/compute/WordCount.vue';

  export default{
    name:'app',
    components:{
      CelsiusTofahrenheit,
      EvenOrodd,
      StringReverse,
      WordCount
    }
  }
</script> -->

                                                    <!-- Props-->

<!-- <template>
  <div>
    <HelloUser username="Soundriya"/>
    <AddTwonum :num1='a' :num2='b'/>
    <StudentDetailss name="Soundharya" :age='age' department="BME" :rollno='roll'/>
    <ArithmeticOperation :num1="a" :num2="b"/>
  </div>
</template>

<script>
  import AddTwonum from './components/Probs/AddTwonum.vue';
  import ArithmeticOperation from './components/Probs/ArithmeticOperation.vue';
  import HelloUser from './components/Probs/HelloUser.vue';
  import StudentDetailss from './components/Probs/StudentDetailss.vue';
  export default{
    name:'App',
    components:{
      HelloUser,
      AddTwonum,
      StudentDetailss,
      ArithmeticOperation
    },
    data(){
      return{
        a:10,
        b:20,
        age:20,
        roll:22103049
      };
    }

  };
</script> -->

<!-- <template>
  <IncrementDecrement/>
</template>
<script>
  import IncrementDecrement from './components/IncrementDecrement.vue';

  export default{
    components:{
      IncrementDecrement
    }
  }
</script> -->


<!-- 
<template>
  <div>
    <h2>Arithmetic Operation</h2>
    <ArithmeticEmit :num1="10" :num2="5" @result="showResult"/>
    <p>Result:{{ result }}</p>
  </div>
</template>

<script>
  import ArithmeticEmit from './components/Emit/ArithmeticEmit.vue';
  export default{
    components:{ArithmeticEmit},
    data() {
      return{
        result:''
      };
    },
    methods:{
      showResult(value){
        this.result = value;
      }
    }
  };
</script> -->


<!-- <template>
  <div>
    <FormSubmission @formSubmission="handleFormSubmit" />
    <p>Name of the Student : {{ receivedName }}</p>
    <p>Age of the Student : {{ receivedAge }}</p>
    <p>Department of the Student : {{ receivedDepartment }}</p>
  </div>
</template>

<script>
import FormSubmission from './components/Emit/FormSubmission.vue';

export default {
  components: { FormSubmission },
  data() {
    return {
      receivedName: '',
      receivedAge: '',
      receivedDepartment: ''
    };
  },
  methods: {
    handleFormSubmit({ name, age, department }) {
      this.receivedName = name;
      this.receivedAge = age;
      this.receivedDepartment = department;
    }
  }
}
</script> -->


<!-- <template>
  <div>
    <button @click="showModal = true">Open Modal</button>

    <ModelCom v-if="showModal" @close="handleClose">
      <p>This is modal content.</p>
    </ModelCom>
  </div>
</template>

<script>
import ModelCom from './components/Emit/ModelCom.vue';

export default {
  components: { ModelCom },
  data() {
    return {
      showModal: false
    };
  },
  methods: {
    handleClose() {
      this.showModal = false;
    }
  }
}
</script> -->




<!-- vueeeeeeeeeeeeeeeexxxxxxxxxxx -->



<!-- <template>
  <div>
    <AddItem />
  </div>
</template>

<script>
import AddItem from './components/vuex/AddItem.vue';

export default {
  components: {
    AddItem
  }
};
</script>  -->






<template>
  <div :class="theme" class="app">
    <button @click="toggleTheme">
      Switch to {{ theme === 'light' ? 'Dark' : 'Light' }} Theme
    </button>
    <h1>Hello, Theme!</h1>
  </div>
</template>

<script>
export default {
  data() {
    return {
      theme: 'light' 
    };
  },
  methods: {
    toggleTheme() {
      this.theme = this.theme === 'light' ? 'dark' : 'light';
    }
  }
};
</script>

<style scoped>

.app {
  height: 85vh;
  padding: 2rem;
  text-align: center;
  transition: background-color 0.5s, color 0.5s;
}

.light {
  background-color: #ffffff;
  color: #000000;
}

.dark {
  background-color: #121212;
  color: #ffffff;
}

button {
  padding: 10px 20px;
  margin-bottom: 1rem;
  cursor: pointer;
}
</style>
