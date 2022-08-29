<script setup lang="ts">
    import Header from "../components/header.vue";
    import HelloWorld from "./components/HelloWorld.vue";
    import CommandPalette from "command-palette-vue3";
    import "command-palette-vue3/dist/style.css";
    import router from "../router";
    import { ref, computed, onMounted } from "vue";
    defineProps<{ msg: string }>();
    const count = ref(0);
    // Optional can disable display by group by adding return false to the isDisplayByGroup
    const isDisplayByGroup = computed(() => {
      return true;
    });
    // Optional delete if donot want to using default light and dark theme
    const themeMode = ref({
      dark: true,
      light: false,
    });
    const show = ref({
      show: false,
    });
    /*
          Optional delete if donot want to using changeTheme function can assign theme directly
          by adding class="light" or class="dark" to <CommandPalette>
          */
    const changeTheme = () => {
      themeMode.value.dark = !themeMode.value.dark;
      themeMode.value.light = !themeMode.value.light;
      if (themeMode.value.dark === true) {
        document.getElementById("body")?.classList.add("darkMode");
        document.getElementById("body")?.classList.remove("lightMode");
      } else {
        document.getElementById("body")?.classList.add("lightMode");
        document.getElementById("body")?.classList.remove("darkMode");
      }
      saveTheme();
    };
    const plusOne = () => {
      return count.value++;
    };
    const minusOne = () => {
      return count.value--;
    };
    const saveTheme = () => {
      if(themeMode.value.dark===true){
        window.sessionStorage.setItem("darkMode", "true");
      }
      else{
        window.sessionStorage.setItem("darkMode", "false");
      }
    };
    const customerGroups = computed(() => {
      return [
        {
          groupName: "Default",
          commands: [
            {
              commandName: "Switch Light/Dark Theme",
              commandKey: "Control+m",
              commandAction: () => {
                changeTheme();
              },
            },
            {
              commandName: "Count Plus 1",
              commandKey: "Control+Shift+c",
              commandAction: () => {
                plusOne();
              },
            },
            {
              commandName: "Count Minus 1",
              commandKey: "Control+Shift+v",
              commandAction: () => {
                minusOne();
              },
            },
            {
              commandName: "Go to Documentation",
              commandKey: "Control+Y",
              commandAction: () => {
                router.push("/documentation");
              },
            },
            {
              commandName: "Go to Demo",
              commandKey: "Control+Y",
              commandAction: () => {
                router.push("/demo");
              },
            },
          ],
        },
      ];
    });
    
    onMounted(()=>{
      console.log(window.sessionStorage.getItem("darkMode"));
      if(window.sessionStorage.getItem("darkMode")==="false"){
        themeMode.value.dark = false;
        themeMode.value.light = true;
        document.getElementById("body")?.classList.add("lightMode");
        document.getElementById("body")?.classList.remove("darkMode");
      }
      console.log(themeMode.value);
    });
    </script>
    <template>
      <Header></Header>
      <div v-bind:class="themeMode.light ? 'lightMode' : ''">
        <h1 style="margin-bottom: 200px">
          Activate the Command Palette using Ctrl + K
        </h1>
        <CommandPalette
          class="cmp"
          :themeMode="themeMode"
          :customerGroups="customerGroups"
          :isDisplayByGroup="isDisplayByGroup"
        />
      </div>
      <section class="demo-section">
        <div class="demo-text">
          <h3>Make Your Web Application much faster</h3>
          <h3>Using <button>Command Palette Ctrl K</button></h3>
        </div>
        <div class="demo-result">
          <div class="count">{{ count }}</div>
          <div>
            <button @click="count++">Plus One</button>
            <button @click="count--">Minus One</button>
          </div>
          <p class="descr">
            Try Press <kbd class="keyboard">Ctrl</kbd> <kbd class="keyboard">K</kbd>
          </p>
        </div>
      </section>
    </template>
    