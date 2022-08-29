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
  <div style="height:100vh;display: flex;flex-direction: column;">
    <Header></Header>
  <div v-bind:class="themeMode.light ? 'lightMode' : ''">
    <CommandPalette
      class="cmp"
      :themeMode="themeMode"
      :customerGroups="customerGroups"
      :isDisplayByGroup="isDisplayByGroup"
    />
  </div>
  <main>
    <section class="main-section">
      <main class="sologan" style="display:block">
        <h3><span>Make Your Web Application Faster Using </span> <br>
       <span> Command Palette</span></h3>
      </main>
      <aside>
        <div class="gwraper">
          <figure>
            <img src="https://solid-command-palette.vercel.app/images/command-palette-examples/tailwind.png" alt="demo1"/>
          </figure>
          <figcaption><span>Figure 1: Test 1</span></figcaption>
          <figure>
            <img src="https://solid-command-palette.vercel.app/images/command-palette-examples/tailwind.png" alt="demo1"/>
          </figure>
          <figcaption><span>Figure 1: Test 1</span></figcaption>
          <figure>
            <img src="https://solid-command-palette.vercel.app/images/command-palette-examples/tailwind.png" alt="demo1"/>
          </figure>
          <figcaption><span>Figure 1: Test 1</span></figcaption>
        </div>
      </aside>
  </section>
  </main>
  <footer>
    Make By&nbsp;<span class="highlight">Team F4</span>&nbsp;and<span class="highlight">Holistics</span>
  </footer>
  </div>
</template>
<style scoped>
.main-section{
  display: flex;
  align-items: center;
  flex: 1;
  gap: 10px;
}
.sologan{
  font-size: 3rem;
  font-weight: 300;
  color: #42b883;
  line-height: 1.5;
  margin: 0;
  padding:0;
  border: none;
}
img{
  width: 100%;
  height: auto;
  border-radius: 12px;
  box-shadow: 0 1px 2px #0000000d;
}
aside{
  flex: 1;
  padding-top: 50px;
  display: block;
}
.gwraper{
  display: flex;
    flex-direction: column;
    overflow-y: scroll;
    height: 50vh;
    padding: 0 10px;
    scroll-snap-type: block mandatory;
    overscroll-behavior: contain;
}
figure{
  display: flex;
    flex-direction: column;
    gap: 20px;
    align-items: center;
    scroll-snap-align: start;
}
figcaption{
  text-align: center;
}
</style>
